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
| Performance | **87** | 83 | **98** |
| Accessibility | 100 | 100 | 100 |
| Best Practices | 100 | 100 | 100 |
| SEO | 100 | 100 | 100 |

Metrik mobile run 1: FCP 1.6 s · LCP 2.5 s · TBT 380 ms · CLS 0 · Speed Index 2.0 s ·
total 190 KiB.

Sisa peluang yang tidak diperbaiki (bawaan framework, bukan markup):
`unused-javascript` 42 KiB dan `legacy-javascript` 11 KiB berasal dari runtime
React/Next yang diperlukan untuk tiga pulau klien kecil (menu, tema, tombol
salin). TBT mobile adalah biaya hidrasi React pada throttling 4× CPU; halaman
sudah statis penuh dan tidak memuat gambar.

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
