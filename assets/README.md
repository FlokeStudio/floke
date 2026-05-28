# Floke landing — media assets

Each product page on [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/) uses **app icons**, **1 preview video**, and **10 screenshots** in one carousel (video first).

## App icons (copied from product repos)

| App | Source | Landing path |
|-----|--------|----------------|
| Cultiva | `Cultiva Dev/icons/mainicon.svg` | `assets/icons/cultiva.svg` |
| BLIP | `Blip Dev/icon-main.svg` | `assets/icons/blip.svg` |
| Senza | `Senza Dev/icon.svg` | `assets/icons/senza.svg` |

## Layout

```
assets/
├── media/
│   ├── cultiva/preview.mp4
│   ├── blip/preview.mp4
│   └── senza/preview.mp4
└── screenshots/
    ├── cultiva/01.jpg … 10.jpg
    ├── blip/01.jpg … 10.jpg
    └── senza/01.jpg … 10.jpg
```

## Specs

| Asset | Format | Suggested |
|-------|--------|-----------|
| Video | MP4 (H.264) | 16:9, 30–90 s, ≤ 25 MB |
| Screenshots | JPG or WebP | 16:10 or 16:9, 1920×1200 or 1280×800 |

First screenshot (`01.jpg`) is used as the video poster until you set a dedicated poster.

## Senza (0.1.0 Coda)

Shipped on [GitHub Releases](https://github.com/FlokeStudio/Senza/releases). Add real captures from the desktop app into `screenshots/senza/` and a short demo into `media/senza/preview.mp4`.

---

by Floke · krwg
