# Floke

Independent software studio — **Glyph** offline-first intelligence.

**Site:** [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/)  
**Repo:** [github.com/FlokeStudio/Floke](https://github.com/FlokeStudio/Floke)

## Glyph 2.7 (current line: 2.7.1 on `main`)

| Component | Role | Links |
|-----------|------|-------|
| **glyph-s** | Universal search engine (tests, profiles, `vendor:sync`) | [Site](https://flokestudio.github.io/glyph-s/) · [GitHub](https://github.com/FlokeStudio/glyph-s) |
| **glyph-sO** | Obsidian full-text search (Fast/Standard/Deep, diagnostics) | [Site](https://flokestudio.github.io/glyph-sO/) · [GitHub](https://github.com/FlokeStudio/glyph-sO) |
| **glyph-mi** | Metadata intelligence core (`notes` module + Senza/Cultiva) | [Site](https://krwg.github.io/glyph-mi/) · [GitHub](https://github.com/krwg/glyph-mi) |
| **glyph-miO** | Obsidian summaries & tags (explainability, Ollama UX, RU/EN) | [Site](https://flokestudio.github.io/glyph-miO/) · [GitHub](https://github.com/FlokeStudio/glyph-miO) |

### Architecture note

- **glyph-sO** vendors **glyph-s** (`vendor/engine.js` via `npm run vendor:sync` / `bundle:obsidian`) and stamps `vendor/VERSION.json`.
- **glyph-miO** still runs local `services/metadata.js` + `services/summary.js` for offline MI; **glyph-mi** now ships a real **`notes`** module so miO can converge on the shared confidence/sources contract (adapter stub in place).

### For Obsidian users

Install **glyph-sO** and **glyph-miO** from GitHub (`main` or Releases) into `.obsidian/plugins/`.

### What’s new in 2.7.1

- Search: vitest ranking coverage, extracted profiles, automated vendor sync
- sO: vendor version guard, diagnostics footer, layout-fix hint, Fast/Standard/Deep labels
- mi: `notes` module, `hints.fallbackReason`, API compatibility CHANGELOG
- miO: safer cache keys, summary `none`/`off`, Ollama timeout setting, tag scores, RU UI

Pages are built from **`docs/index.html`**.

## License

[GPL-3.0](LICENSE) · **Floke Studio** · sole author **krwg** `<shevotsukov@icloud.com>`
