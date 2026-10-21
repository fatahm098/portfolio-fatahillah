# Portfolio — Fatahillah Muhammad

Situs portofolio statis: Next.js 15 (App Router), TypeScript strict, Tailwind CSS 4.
Tanpa database, tanpa tracker pihak ketiga, siap deploy ke Vercel.

Desain mengikuti ekspor Stitch di `docs/design-notes.md` (token warna, tipografi,
grid, dan komponen). Ringkasan perbedaan dari desain ada di bagian akhir dokumen ini.

## Menjalankan

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi (sekaligus lint + typecheck) |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Mengubah konten

Semua teks ada di **satu file**: `src/content/site.ts`. Komponen hanya membaca
dari sana, jadi tidak perlu menyentuh JSX untuk mengubah kalimat, tautan, atau
daftar proyek.

```ts
contact: {
  email: "mfatahillah995@gmail.com",
  emailHref: "mailto:mfatahillah995@gmail.com", // dipakai tombol & footer
  githubHandle: "github.com/fatahm098",
  githubUrl: "https://github.com/fatahm098",
}
```

- **Proyek** — tambah/hapus objek di `projects`. `featured: true` memakai kartu
  besar (dua kartu pertama), `false` memakai kartu ringkas.
- **Tombol repository** muncul hanya jika `repoUrl` diisi. **Tombol “Live demo”**
  muncul hanya jika `demoUrl` diisi — saat ini semua `demoUrl` kosong, jadi tidak
  ada tombol demo yang dirender.
- **Tangkapan layar** — selama belum ada gambar asli, tiap kartu memakai bingkai
  browser dengan label “Preview pending”. Setelah screenshot tersedia, ganti isi
  `src/components/browser-frame.tsx` dengan `next/image` dan isi `previewAlt`
  sebagai alt text.
- **Stack** — `stackGroups` adalah ringkasan teknologi dari proyek; ubah bila
  daftar teknologi proyek berubah.
- **Navigasi** — `nav` mengatur tautan header (desktop dan mobile).
- **Teks antarmuka** — label tombol, aria-label, dan pesan status ada di
  `actions`, jadi bisa diterjemahkan tanpa mengubah komponen.
- **Tahun footer** — `year`.

## Tema

Tema gelap adalah default (sesuai desain). Tombol di header berganti ke tema
terang, pilihan disimpan di `localStorage`, dan tema diterapkan sebelum paint
oleh skrip kecil di `src/app/layout.tsx` supaya tidak ada kedipan.

Token warna ada di `src/app/globals.css`:

- `:root` — nilai tema terang
- `.dark` — nilai tema gelap (dari ekspor Stitch)
- `@theme inline` — memetakan token ke utility Tailwind (`bg-surface-low`,
  `text-heading`, `border-line`, `text-accent`, …)

Skala tipografi (`text-display-xl`, `text-body-md`, `text-label-sm`, dst.) dan
radius (`rounded-btn`, `rounded-card`, `rounded-frame`) juga didefinisikan di
file yang sama.

## Struktur

```
src/
  app/
    layout.tsx           # font, metadata, skrip tema
    page.tsx             # urutan bagian
    globals.css          # token desain + base style
    icon.svg             # favicon
    opengraph-image.tsx  # OG image (digenerate saat build)
    robots.ts, sitemap.ts
  components/
    sections/            # hero, projects, stack, experience, contact
    browser-frame.tsx    # bingkai browser + placeholder
    project-card.tsx
    site-header.tsx      # navigasi + menu mobile (client)
    theme-toggle.tsx     # (client)
    copy-email-button.tsx# (client)
    icons.tsx            # ikon SVG inline, tanpa dependensi ikon
  content/site.ts        # SEMUA teks
  lib/
docs/design-notes.md     # analisis sumber desain Stitch
```

## SEO

- `title`, `meta description`, canonical, Open Graph, dan Twitter card diatur di
  `src/app/layout.tsx`.
- `robots.txt` dan `sitemap.xml` digenerate dari `src/app/robots.ts` dan
  `src/app/sitemap.ts`.
- OG image 1200×630 digenerate dari `src/app/opengraph-image.tsx`.
- URL absolut memakai `NEXT_PUBLIC_SITE_URL`. Setel variabel ini saat deploy
  (lihat `.env.example`); tanpa itu dipakai `https://fatahillah-muhammad.vercel.app`.

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Di Vercel: **Add New → Project**, lalu import repo-nya.
3. Framework preset terdeteksi otomatis sebagai **Next.js**; biarkan build command
   `next build` dan output default.
4. Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` = domain produksi
   (mis. `https://fatahillah-muhammad.vercel.app`), untuk Preview dan Production.
5. Deploy. Setelah domain final diketahui, perbarui variabel lalu redeploy agar
   canonical, sitemap, dan OG image memakai URL yang benar.

Tidak ada server, database, atau cron yang perlu disiapkan — seluruh halaman
dirender statis saat build.

## Aksesibilitas dan performa

Hasil audit terakhir (build produksi, Lighthouse 12.8.2):

| Kategori | Mobile | Desktop |
| --- | --- | --- |
| Performance | 87 | 98 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

- axe-core (WCAG 2.1 A/AA + best practice): 0 pelanggaran pada tema gelap,
  tema terang, dan mobile dengan menu terbuka.
- Kontras teks memenuhi 4.5:1; fokus keyboard memakai outline 2px; ada skip link;
  `prefers-reduced-motion` mematikan animasi.
- Tanpa gambar raster di halaman, sehingga CLS 0 dan tidak ada layout shift dari
  media.

## Perbedaan dari desain Stitch

Rincian lengkap ada di `docs/design-notes.md`. Ringkasnya:

1. Ekspor “light mode” dari Stitch ternyata tetap gelap; tema terang dibangun
   dari palet terang di `technical_blueprint/DESIGN.md`.
2. Bagian “How I Work” dihapus karena isinya bukan konten yang diizinkan, dan
   diganti bagian **Stack** yang hanya merangkum teknologi dari keempat proyek.
3. Semua angka/metrik palsu di mockup (`14 ORDERS`, `+38.4m³`, `88.4%`,
   `LATENCY: 18ms`) dihapus; kartu memakai placeholder bingkai browser.
4. Form kontak diganti kartu email + GitHub (mailto), sesuai brief.
5. Ikon Material Symbols diganti SVG inline, dan logo raster diganti monogram
   tipografis `FM` agar tidak ada permintaan ke pihak ketiga.
6. Penomoran bagian menjadi 01–04 mengikuti bagian yang tersisa.
