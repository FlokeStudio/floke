# Floke

Independent software studio — **Glyph** offline-first intelligence.

**Site:** [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/)  
**Repo:** [github.com/FlokeStudio/Floke](https://github.com/FlokeStudio/Floke)

## Glyph 2.8 (current line on `main`)

| Component | Role | Links |
|-----------|------|-------|
| **glyph-s** | Search engine — tests, benchmark, tsconfig, vendor sync | [Site](https://flokestudio.github.io/glyph-s/) · [GitHub](https://github.com/FlokeStudio/glyph-s) · [Roadmap](https://github.com/FlokeStudio/glyph-s/blob/main/ROADMAP.md) |
| **glyph-sO** | Obsidian full-text search + persistent index | [Site](https://flokestudio.github.io/glyph-sO/) · [GitHub](https://github.com/FlokeStudio/glyph-sO) · [Roadmap](https://github.com/FlokeStudio/glyph-sO/blob/main/ROADMAP.md) |
| **glyph-mi** | Metadata core — `@floke/glyph-mi` npm prep, KNN IPC | [Site](https://krwg.github.io/glyph-mi/) · [GitHub](https://github.com/krwg/glyph-mi) · [Roadmap](https://github.com/krwg/glyph-mi/blob/main/ROADMAP.md) |
| **glyph-miO** | Obsidian MI — sidebar, frontmatter tags, vault batch | [Site](https://flokestudio.github.io/glyph-miO/) · [GitHub](https://github.com/FlokeStudio/glyph-miO) · [Roadmap](https://github.com/FlokeStudio/glyph-miO/blob/main/ROADMAP.md) |

### Shipped in 2.8

- **glyph-s 2.8.0** — vitest matrix (33 tests), benchmark script, `tsconfig.json`, eslint, embeddings stub, comment-free lib
- **glyph-sO 2.8.0** — editor highlight on open, folder grouping, hover preview, search stats, persistent index
- **glyph-miO 2.8.0** — right sidebar panel, YAML frontmatter tags, vault batch analyze, summary history/rollback, vault cache
- **glyph-mi 2.8.0** — `@floke/glyph-mi` package layout, KNN IPC module, expanded tests

Landing: [#roadmap](https://flokestudio.github.io/Floke/#roadmap) · [#whats-new](https://flokestudio.github.io/Floke/#whats-new)

### Architecture

- **glyph-sO** / **glyph-miO** vendor **glyph-s** via `npm run vendor:sync` → `vendor/VERSION.json`
- **glyph-miO** local `services/*` + optional path toward **glyph-mi** `notes` contract

Install **glyph-sO** and **glyph-miO** from GitHub `main` into `.obsidian/plugins/`.

Pages are built from **`docs/index.html`**.

## License

[GPL-3.0](LICENSE) · **Floke Studio**
