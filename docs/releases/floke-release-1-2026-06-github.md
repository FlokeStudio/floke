# FLOKE Release #1 · June 2026 — GitHub layer

Part 2 — for GitHub Releases and readers who want the full list.  
Human-facing story: `floke-release-1-2026-06-telegraph.md`.

---

## Senza 1.1.0 · Legato

### Audio & Playback

- Crossfade 0–8s (Settings → Playback)
- Shuffle / Repeat (off · all · one) in player panel
- ReplayGain from file tags
- Hotkeys: Space, ←/→, Shift+←/→, M, L
- Media Session API (system media keys)
- Lyrics — sidecar `.lrc` sync

### Library & UX

- Watched folder — auto-import on file change
- Favourites (♥) + sidebar view; Flow "Favorites" mode honours ♥
- Recently played in sidebar
- Smart playlists: unplayed / favourites / recently added
- Fuzzy search
- Customisable sidebar sections (checkboxes + reorder ↑↓)
- Accent colour (Settings → Appearance)

### Tag support

- node-taglib-sharp: MP3, FLAC, OGG, M4A, AAC, WAV
- BPM on import: librosa (if installed) → fallback music-tempo
- Library export/import: senza-library.zip (Settings → Library)

### Glyph 2.2-O

- ONNX genre model auto-loads when glyph-log hits 500 rows
- ML heuristic: genre with BPM/mood + source (librosa / music-tempo)
- Version shown in: Flow, Vault, Settings

### Quality

- Vitest: 8 tests (search, flow, smart-playlists)
- electron-builder: macOS (dmg/zip) + Linux (AppImage/deb)

**Download Senza →** https://github.com/FlokeStudio/Senza/releases/latest

---

## Cultiva 1.1.0 · Cypress

### New

- Theme: Cypress (evergreen palette)
- Ambient backgrounds: Cypress Drift, Morning Dew, Canopy Sunbeam
- Accent colour + ambient intensity in Settings → Appearance
- Habit search in garden header (Ctrl/Cmd+F)
- Hotkeys: new habit, settings, search focus, complete/log, Escape
- Export ZIP — habits + settings archive (Electron)
- Vitest: habits + timezone

### Changed

- Versioning via cultiva.release.json
- Branding → Floke Studio / FlokeStudio/Cultiva
- About section aligned with Senza style
- Shortcuts in Settings — active, not "coming soon"
- Release CI: tests, no builder-debug.yml, notes from docs

### Fixed

- Lint/dead code in habits module
- Footer cleanup

**Download Cultiva →** https://github.com/FlokeStudio/Cultiva/releases/latest

---

## Flint · preview

- Agent modes: FliCode, FliWriter, FliWeb, FliDocs, FliSlides, FliAgent
- Engine: Mnemo 1.2-O — local inference, permission-gated file & URL actions
- Mnemo 2.0-O target: multi-step toolchains, workspace-scale memory, optional Floke bridges
- ETA: Q3 2026. Windows, on-device from first launch

---

## Links

- Landing → https://flokestudio.github.io/Floke/
- GitHub → https://github.com/FlokeStudio
- Telegram → https://t.me/flokestudio
