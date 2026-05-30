# Floke site assets

GitHub Pages serves from **`docs/`**. Media paths in `docs/index.html` are relative to that folder.

## Layout

```
docs/
├── index.html
└── assets/
    ├── floke-icons.js      # inline SVG icons for Cultiva, BLIP, Senza
    ├── media/
    │   ├── cultiva/preview.mp4
    │   ├── blip/preview.mp4
    │   └── senza/preview.mp4
    └── screenshots/
        ├── cultiva/01.jpg … 10.jpg   (optional — add captures)
        ├── blip/01.jpg … 10.jpg      (optional)
        └── senza/01.png … 10.png     (shipped)
```

Product card icons use **`floke-icons.js`** (stroke SVG, no emoji). Screenshots use **`.png` for Senza** and **`.jpg` for Cultiva/BLIP** when you add them.

## Sync from apps

| Product | Source in dev repo | Target |
|---------|-------------------|--------|
| Senza screenshots | `Senza Dev` captures | `docs/assets/screenshots/senza/` |
| Cultiva | `Cultiva Dev` | `docs/assets/screenshots/cultiva/` |
| BLIP | `BLIP Dev` | `docs/assets/screenshots/blip/` |

Site: [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/) · repo [FlokeStudio/Floke](https://github.com/FlokeStudio/Floke)
