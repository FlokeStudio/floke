# Floke release posts

Drafts for **Telegraph** (human layer), **Telegram**, and **GitHub** (technical layer).

## Release #1 · June 2026

| File | Use |
|------|-----|
| `floke-release-1-2026-06-telegraph.md` | Paste into [Telegraph](https://telegra.ph/) — with screenshot slots |
| `floke-release-1-2026-06-github.md` | Senza / Cultiva / Flint — GitHub Releases & changelog bodies |
| `floke-release-1-2026-06-screenshots.md` | Shot list before publishing Telegraph |

## Workflow

1. Write the post from `floke-release-1-*-telegraph.md`.
2. Publish **one** Telegraph page (English).
3. Uncomment and fill `NEWS_TELEGRAPH` in `docs/index.html`:

```js
const NEWS_TELEGRAPH = [
  "https://telegra.ph/Floke-Release-1-June-2026",
];
```

4. Run `node scripts/sync-telegraph-news.mjs`.
5. Post the link in Telegram.
6. GitHub — `floke-release-1-2026-06-github.md`.

## Cadence (reminder)

- **Monthly** — FLOKE Release #N, 2+ shipped products, Flint = teaser only.
- **Quarterly** — longer wave post.
- **Annual** — x.0 across the lineup (except AI engines: Glyph, Mnemo).
