# Floke

Independent software studio — **Glyph** offline-first intelligence.

**Site:** [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/)  
**Repo:** [github.com/FlokeStudio/Floke](https://github.com/FlokeStudio/Floke)

## Glyph 2.8 (current line on `main`)

| Component | Role | Links |
|-----------|------|-------|
| **glyph-s** | Search engine — tests, benchmark, tsconfig, vendor sync, `.d.ts`, embeddings hook | [Site](https://flokestudio.github.io/glyph-s/) · [GitHub](https://github.com/FlokeStudio/glyph-s) |
| **glyph-sO** | Obsidian full-text search — persistent index, pinned queries | [Site](https://flokestudio.github.io/glyph-sO/) · [GitHub](https://github.com/FlokeStudio/glyph-sO) |
| **glyph-mi** | Metadata core — `@floke/glyph-mi` npm prep, KNN IPC, ONNX train script | [Site](https://krwg.github.io/glyph-mi/) · [GitHub](https://github.com/krwg/glyph-mi) |
| **glyph-miO** | Obsidian MI — sidebar, frontmatter tags, vault batch, notes vendor | [Site](https://flokestudio.github.io/glyph-miO/) · [GitHub](https://github.com/FlokeStudio/glyph-miO) |

### Shipped in 2.8

- **glyph-s 2.8.0** — vitest matrix (33 tests), benchmark script, `tsconfig.json`, eslint, embeddings hook + `.d.ts`
- **glyph-sO 2.8.0** — editor highlight on open, folder grouping, hover preview, search stats, pinned queries, persistent index
- **glyph-miO 2.8.0** — right sidebar panel, YAML frontmatter tags, vault batch analyze, glyph-mi notes vendor
- **glyph-mi 2.8.0** — `@floke/glyph-mi` package layout, KNN IPC module, ONNX train/export script
- **Cultiva 2.3.5** — vendored glyph-s 2.8.0, compact Glyph/Floke banner, main-process KNN IPC scaffold

Landing: [#whats-new](https://flokestudio.github.io/Floke/#whats-new)

### Architecture

- **glyph-sO** / **glyph-miO** vendor **glyph-s** via `npm run vendor:sync` → `vendor/VERSION.json`
- **glyph-miO** prefers **glyph-mi** `notes` via `vendor/glyph-mi-notes.cjs` with local fallback

Install **glyph-sO** and **glyph-miO** from GitHub `main` into `.obsidian/plugins/`.

Pages are built from **`docs/index.html`**.

## License

[GPL-3.0](LICENSE) · **Floke Studio**
