# Design notes — Stitch source analysis

Source: `stitch_fatahillah_muhammad_developer_portfolio.zip`
Extracted read-only to `%TEMP%/stitch-design` (outside the repo). Contents:

| File | What it is |
| --- | --- |
| `portfolio_desktop_dark_mode/code.html` + `screen.png` | Primary desktop design (dark) |
| `portfolio_desktop_light_mode/code.html` + `screen.png` | Second desktop export — **also renders dark**, identical token block |
| `portfolio_mobile_dark_mode/code.html` + `screen.png` | Mobile variant with a different section order + bottom tab bar |
| `technical_blueprint/DESIGN.md` | Written design system (tokens + component specs) |

No scripts were executed from the archive; the HTML was read as data only.

## 1. Structure and order (desktop dark — the reference)

Fixed header (64px) → Hero → `01 // SELECTED PROJECTS` (2×2 grid: two "hero" cards with a
simulated UI canvas, two "standard" cards with a smaller terminal canvas) →
`02 // HOW I WORK` (3 steps) → `03 // SKILLS` (5 cards in a 3-col grid, last card spans 2) →
`04 // EXPERIENCE` + `05 // EDUCATION` (2-col row) → `06 // GET IN TOUCH` (5/7 split:
info card + form) → footer.

Sections are separated by a **1px hairline top border**, not by whitespace voids.
Container: `max-width: 1280px`, side margin 48px desktop / 20px mobile, vertical section
padding 40px (`space-xl`).

## 2. Colour tokens (actual Tailwind config in the HTML)

| Token | Dark | Role |
| --- | --- | --- |
| `background` / `surface-dim` | `#10141a` | page canvas |
| `surface-container-lowest` | `#0a0e14` | inset canvas (browser frame body) |
| `surface-container-low` | `#181c22` | cards, panels |
| `surface-container` | `#1c2026` | chips, chrome bars, inputs |
| `surface-container-high` | `#262a31` | hover fill |
| `surface-container-highest` | `#31353c` | — |
| `on-surface` | `#dfe2eb` | body text |
| `on-surface-variant` | `#b9cacb` | secondary body text |
| `outline` | `#849495` | metadata / placeholder |
| `outline-variant` | `#3b494b` | hairline strokes (used at 20–50% alpha) |
| `primary` | `#dbfcff` | headings, mono labels, links |
| `primary-container` | `#00f0ff` | primary button fill |
| `on-primary-container` | `#006970` | button label |
| `primary-fixed` | `#7df4ff` | primary button hover |
| `secondary` | `#4fdbc8` | status dots, success/live accents |
| `error` | `#ffb4ab` | destructive deltas |

Note: `DESIGN.md` quotes a `#0d1117` GitHub-style canvas and `#f0f6fc` text, but the HTML that
produced the screenshots uses the tokens above. The HTML wins; `DESIGN.md`'s light-mode palette
(`#ffffff` / `#f6f8fa` / `#eaeef2` / `#d0d7de` / `#0891b2` / `#0d9488` / `#1f2328` / `#57606a`)
is the only light palette available and is what the light theme here is built from.

## 3. Typography

- **Geist** — display / headline / body. **JetBrains Mono** — labels, chips, paths, code.
- Scale: `display-xl` 56/64 `-0.03em` 700 (mobile 36/44 `-0.02em`);
  `headline-md` 24/32 `-0.015em` 600; `headline-sm` 18/26 `-0.01em` 600;
  `body-lg` 18/28 `-0.005em`; `body-md` 15/24; `body-sm` 13/20;
  `code-block` 13/22 mono; `label-mono-md` 12/16 `+0.04em` 500;
  `label-mono-sm` 11/14 `+0.06em` 500.
- Mono labels are uppercase with wide tracking; numeric output uses tabular figures.

## 4. Spacing, radii, depth

- Spacing scale: 4 / 8 / 16 / 24 / 40 px (`space-xs … space-xl`); gutter 24px, mobile 16px.
- Radii from the HTML config: `rounded` = 2px (buttons, chips), `rounded-lg` = 4px (cards,
  browser frames), `rounded-xl` = 8px, `rounded-full` = 12px (status pill only).
  `DESIGN.md` asks for 8px cards / 4px buttons — a conflict with the rendered HTML, resolved in
  favour of the HTML (4px cards, 2px buttons).
- Depth is tonal + hairline, never a diffuse shadow: card `#181c22` + `1px rgba(59,73,75,.4)`;
  inset canvas `#0a0e14`; hover raises the border to the accent, no elevation change.
- Header: `bg-surface/85` + `backdrop-blur-md` + a soft 1px shadow.

## 5. Components observed

- **Browser frame**: 36px chrome bar (`bg-surface-container`, 3 dots 10px, monospace path),
  body `bg-surface-container-lowest`, hairline separators. Standard cards use a 32px bar and
  8px dots.
- **Project card**: frame → padded body (`p-24`) with h3 (headline-md/headline-sm), description
  (body-md/body-sm), tech chips → footer row with a top hairline and `GitHub` / `Live demo`
  mono links.
- **Chips**: `bg-surface-container`, 1px `outline-variant/40`, mono 11px, 2px 8px padding.
- **Buttons**: primary = accent fill, 600 weight, 8×24 padding, 2px radius; secondary = card
  fill + border. Both have a 150ms transition.
- **Section header**: mono label `0N // TITLE` in `primary`, then one body-md sentence in
  `on-surface-variant`.
- **Footer**: `surface-container-lowest`, mono `> sys.arch //`, name + year, right-aligned
  `RUNTIME / STATUS` mono.

## 6. Conflicts with the brief and how they are resolved

1. **Only one real theme.** Both "light" and "dark" exports are dark. → Light theme added from
   `DESIGN.md`'s light palette, mapped to the same semantic tokens.
2. **Invented content.** The design ships a bio paragraph, "How I Work" copy, skill lists,
   fake metrics (`14 ORDERS`, `+38.4m³`, `88.4%`, `LATENCY: 18ms`), an availability badge and a
   contact form. All of it is outside the allowed content, so:
   - metrics/terminal canvases → replaced by browser-frame placeholders (brief: no screenshots yet);
   - "How I Work" → replaced by a **Stack** section built only from the tech lists of the four
     projects;
   - bio → one sentence assembled from the given education + tagline;
   - availability badge → replaced by a tagline-derived label;
   - contact form → replaced by mailto/GitHub cards (brief: mailto, not a form).
3. **Section numbering** re-numbered `01–04` after the removals.
4. **Icons.** Material Symbols (Google Fonts CDN) would be a third-party request → replaced with
   inline stroke SVG icons.
5. **Logo.** The header uses a hosted raster monogram → replaced with a typographic `FM` mark.
6. **Mobile design** re-orders sections and adds a bottom tab bar. A single responsive layout is
   kept instead (same order as desktop) to avoid duplicated navigation semantics.
