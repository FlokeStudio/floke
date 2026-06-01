# Floke site assets

GitHub Pages serves from **`docs/`**. Media paths in `docs/index.html` are relative to that folder.

## Layout

```
docs/
├── index.html
└── assets/
    ├── icons/
    │   ├── cultiva.svg
    │   ├── blip.svg
    │   ├── senza.svg
    │   ├── flint.svg
    │   ├── glyph.svg
    │   └── mnemo.svg
    ├── media/
    │   ├── cultiva/preview.mp4
    │   ├── blip/preview.mp4
    │   ├── senza/preview.mp4
    │   └── glyph/preview.mp4
    └── screenshots/
        ├── cultiva/01.jpg … 10.jpg   (optional — add captures)
        ├── blip/01.jpg … 10.jpg      (optional)
        ├── senza/01.png … 10.png     (shipped)
        └── glyph/01.png … 10.png     (Glyph UI — Flow, Vault, Settings)
    └── pixel_space/
        ├── menu-bg.png          (Echo menu background — primary)
        └── menu-bg.jpg          (Echo menu fallback)
    └── data/
        └── news-cache.json           (Telegraph posts — run sync script)
```

Product card icons load from **`assets/icons/<product>.svg`**.

## News (Telegraph)

Posts are listed in **`NEWS_TELEGRAPH`** inside `docs/index.html` (one URL or path per line).

After adding a Telegraph link, refresh the cache (GitHub Pages cannot call the Telegraph API from the browser):

```bash
node scripts/sync-telegraph-news.mjs
```

This writes `docs/assets/data/news-cache.json`. Commit both files. Site route: `#news` and `#news/<telegraph-path>`.

## Sync from apps

| Product | Source in dev repo | Target |
|---------|-------------------|--------|
| Senza screenshots | `Senza Dev` captures | `docs/assets/screenshots/senza/` |
| Glyph screenshots | Glyph UI in Senza (Flow, Vault, Settings) | `docs/assets/screenshots/glyph/` |
| Cultiva | `Cultiva Dev` | `docs/assets/screenshots/cultiva/` |
| BLIP | `BLIP Dev` | `docs/assets/screenshots/blip/` |

Site: [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/) · repo [FlokeStudio/Floke](https://github.com/FlokeStudio/Floke)
