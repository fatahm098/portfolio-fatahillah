# Verification log

Semua perintah dijalankan di Windows 11, Node v22.20.0, npm 10.9.3, dari akar repo.
Build produksi disajikan dengan `next start -p 3123` sebelum audit.

## 1. Typecheck

```console
$ npm run typecheck
> tsc --noEmit
(exit 0, tanpa keluaran)
```

## 2. Lint

```console
$ npm run lint
> eslint .
(exit 0, tanpa keluaran)
```

## 3. Build

```console
$ npx next build
 ✓ Compiled successfully
 ✓ Generating static pages (8/8)

Route (app)                                 Size  First Load JS
┌ ○ /                                    2.22 kB         105 kB
├ ○ /_not-found                            993 B         104 kB
├ ○ /icon.svg                                0 B            0 B
├ ○ /opengraph-image                       131 B         103 kB
├ ○ /robots.txt                            131 B         103 kB
└ ○ /sitemap.xml                           131 B         103 kB
+ First Load JS shared by all             103 kB
```

## 4. Aksesibilitas (axe-core 4.x, WCAG 2.1 A/AA + best-practice)

```console
=== desktop dark — 0 violations ===
=== desktop light — 0 violations ===
=== mobile dark (menu open) — 0 violations ===
focusable elements: 26, unnamed: 0
```

Temuan yang diperbaiki selama audit: teks status `#0d9488` di atas `#eaeef2`
pada tema terang hanya 3.21:1 → diganti `#0f766e` (4.8:1).

## 5. Lighthouse 12.8.2

Dijalankan dengan Chromium headless terhadap build produksi.

| Kategori | Mobile (run 1) | Mobile (run 2) | Desktop |
| --- | --- | --- | --- |
| Performance | **78** | 81 | **99** |
| Accessibility | 100 | 100 | 100 |
| Best Practices | 100 | 100 | 100 |
| SEO | 100 | 100 | 100 |

Metrik mobile: FCP 1.4–1.5 s · LCP 3.0–3.2 s · TBT 480–540 ms · CLS 0.027–0.048 ·
total 247 KiB. Desktop: FCP 0.4 s · LCP 0.7 s · TBT 70 ms · CLS 0.

LCP mobile adalah paragraf hero yang menunggu unduhan font Geist (29 KB) pada
throttling 4G; `next/font` tidak mengeluarkan `<link rel=preload as=font>` pada
build ini sehingga font baru selesai sekitar 3 s. Percobaan `display: optional`
dan mematikan preload font mono tidak memperbaiki skor (diukur ulang, hasil lebih
rendah), jadi `display: swap` dipertahankan demi ketepatan tipografi.

Sisa peluang yang tidak diperbaiki (bawaan framework, bukan markup):
`unused-javascript` 22 KiB dan `legacy-javascript` 11 KiB berasal dari runtime
React/Next yang diperlukan untuk tiga pulau klien kecil (menu, tema, tombol
salin). TBT mobile adalah biaya hidrasi React pada throttling 4× CPU; halaman
sudah statis penuh.

## 6. Pemeriksaan manual (Playwright)

```console
dark before: true | after toggle: { dark: false, stored: 'light', scheme: 'light' } | persisted dark: false
copy status: "Copied" clipboard: mfatahillah995@gmail.com
menu expanded: true | after link: { hidden: true, hash: '#projects', expanded: 'false' }
overflow @320: 0   @390: 0   @768: 0   @1024: 0   @1440: 0
console errors: []
```

## 7. Endpoint SEO

```console
$ curl -s http://localhost:3123/robots.txt
User-Agent: *
Allow: /

Host: https://fatahillah-muhammad.vercel.app
Sitemap: https://fatahillah-muhammad.vercel.app/sitemap.xml

$ curl -s -o /dev/null -w "%{http_code} %{content_type} %{size_download}"
200 image/png 40403
```

## 8. Screenshot proyek

Diambil dari aplikasi asli yang dijalankan lokal, bukan mockup. Semua pada
viewport 1440×900, disimpan sebagai PNG di `public/projects/`.

| Proyek | Cara mengambil | Berkas |
| --- | --- | --- |
| RobloxOps | `apps/web` (monorepo) dijalankan dengan env Supabase dikosongkan → mode demo, halaman `/today` | `robloxops.png` |
| Construction Change Intelligence | backend FastAPI (`.venv`) + frontend Next di port 3000 (origin CORS), halaman `/change-intel` dengan run analisis proyek 1 | `construction-change-intelligence.png` |
| Sate Taichan SSJ | Next + SQLite lokal, login seed `admin`, halaman `/admin` | `sate-taichan-ssj.png` |
| Facial Expression Classification | — | masih placeholder |

Catatan:
- RobloxOps di `Projects/robloxops/app` tidak bisa dirender: `dashboard/page.tsx`
  baris 613 berisi teks `(<4,000 max)` yang merusak parsing JSX (error 500).
  Versi monorepo di `Documents/robloxops` dipakai karena bisa dijalankan.
- Facial Expression hanya ada sebagai skrip training Colab (`fer_deit_fixed.py`)
  dan bobot `best_emotion_model.pth`; tidak ada antarmuka web di laptop ini.
