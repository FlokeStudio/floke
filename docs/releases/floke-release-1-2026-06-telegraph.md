# FLOKE Release #1 · June 2026 (EN)

**Title (Telegraph):** FLOKE Release #1 — Senza Legato · Cultiva Cypress  
**Author:** Floke Studio · https://github.com/FlokeStudio

---

*Senza and Cultiva in one frame — Flow or player + Cypress garden.*

---

## FLOKE · June 2026  
### Release #1

**Senza 1.1.0 Legato** · **Cultiva 1.1.0 Cypress**

---

**Floke Studio** is a lineup of apps that **live on your computer**. Music, habits, metadata — later, local agents. No mandatory cloud. No account just to open the app. We’re not anti-internet — MusicBrainz and search in Flint will stay optional. But the core is always offline-first: your files, your library, your garden.

**Release #1** is the first month **Senza** and **Cultiva** ship **together** — one post, one rhythm. Before, each product had its own date. Going forward, we want a **monthly** update you can expect and a **yearly** big version. No magic promises — just a calendar that makes sense.

June codenames: **Legato** — music that doesn’t snap between tracks. **Cypress** — a calm, “forest” Cultiva release. Below — what changed and why.

---

## Senza feels alive


Senza used to **store** and **play** music. That’s not enough if you listen to **albums**, not random files from search. There was silence between tracks — small, but noticeable every time. In **1.1.0 Legato** we closed the gap between a **library manager** and a **real player**.

**Crossfade** — tracks **flow** into each other instead of hard cuts. Zero to eight seconds: some want a barely visible seam, some want a long handoff like a live set. **Shuffle** and **repeat** (playlist or one track) — hard to live without on a big library. **Hotkeys** — Space, arrows, M, L — and **media keys** on your keyboard: play/pause on a laptop without the mouse. Everything you expect from a player, finally here, next to Flow and Vault.

Why this matters for Floke: Senza isn’t “another streaming clone.” It’s **your** collection on disk. The player should respect it the way streaming respects its queue — minus subscription and minus sending plays to a server.


**Lyrics** from a sidecar **`.lrc`** file (next to the track) show **in the player**, line by line, in sync. No separate lyrics site — all local.

**Favorites** — a **heart** on the track and a **dedicated sidebar** view. Flow’s **“Favorites”** mode follows those marks: your choice, not “we think you’ll like this.” **Recently played** — its own list: back to yesterday’s album in two clicks.



**Glyph** — our metadata layer inside Senza — now writes tags not only to **MP3** but **FLAC, OGG, M4A, AAC, WAV**. Import lossless — you’re not stuck with empty fields. On add, **BPM** is computed: helps the player and genre hints in **Glyph 2.2-O**. Version **2.2-O** shows in **Flow, Vault, and Settings** — you always know which “brain” is inside.

**Smart playlists** build themselves from **simple rules**: *not played lately*, *recently added*, *favorites only*. Not an engagement algorithm — honest filters on **your** history on **your** disk.

A **watched folder** — drop a file there (or download into it) — Senza **picks it up** and adds it to the library. Handy when music lives in Downloads or a shared “Incoming” folder. Moving PCs — **`senza-library.zip`**: export and import the whole structure in settings, without hand-copying thousands of paths.

Search forgives typos. The sidebar can be **reordered and trimmed**. **Accent color** — not only Floke gold: pick yours if the player should feel visually **yours**.



**Flow** — a personal wave of ~32 tracks without repeats per session: discovery, rare stuff, favorites. **Vault** — tag scan, duplicates, batch fill with a **diff before apply**: see what will change, then Apply. You can **turn Glyph off** and keep a plain editor — we don’t force “smart” where you only want music.



Senza was Windows-only for a long time. In **1.1.0** we added **macOS** and **Linux** builds — on GitHub Releases, next to installer and portable. One codebase, one idea: **your machine, your library**.

**Download Senza →** https://github.com/FlokeStudio/Senza/releases/latest

---

## Cultiva is yours



**Cultiva** is a habit tracker that grows **visually**: seed, sprout, tree. No streak anxiety, no “you lost 47 days — start over.” A calm rhythm beats a red banner.

**1.1.0 Cypress** is about **mood**. New **Cypress** theme: deep evergreen, not acid gamification. Three **ambient backgrounds** — **Cypress Drift**, **Morning Dew**, **Canopy Sunbeam** — move slowly behind the UI, like weather outside the window. **Accent color** and background **intensity** adjust separately: keep the atmosphere, make it barely visible.

Why this matters for Floke: habits are daily. The UI shouldn’t shout. It should **invite you to open the garden** in the morning, not shame you at night.



When habits pile up, you need **search** — **Ctrl+F** in the garden, no scrolling through screens. **Hotkeys**: new habit, mark done, settings, dismiss — so your hands don’t live on the mouse every ten seconds.

**ZIP export** — habits and settings in **one archive**. Backup before an update, move to another PC, or “put on disk and forget.” Cultiva data **doesn’t go to our server** — there is no server. Only you.

**Cultiva is now officially part of Floke Studio** — shared About, GitHub links, the same monthly rhythm as Senza. One brand, one idea: **tools you can trust because they don’t ask for extra**.

**Download Cultiva →** https://github.com/FlokeStudio/Cultiva/releases/latest

---

## Why Floke exists

We build software for people who want to **own their data** — music, habits, files, later — talks with local agents. Not because “cloud is evil,” but because **by default** everything should work **at home**: fast, no login, no monthly fee to open what you already downloaded.

**Release #1** isn’t the end — it’s the **start of a calendar**. Senza and Cultiva are ready for daily use today. Next — monthly patches, **Flint** in **Q3 2026**, news on [flokestudio.github.io/Floke](https://flokestudio.github.io/Floke/). If it clicks, you stay with an ecosystem that doesn’t inflate for investor slides.

---

## Ahead — Flint



The next big step — **Flint**. Not another **AI chat** in a browser, but a **desktop with local agents** on your computer.

You state a task. The agent proposes **file edits**, searches the web, writes code. **Every step on screen.** Every disk or URL action — only after your **yes** or **no**. No cloud by default. No subscription “for the model.”

Agent modes: **FliCode** — code and architecture. **FliWriter** — text. **FliWeb** — search and browser. **FliDocs** — files. **FliSlides** — presentations. **FliAgent** — general mode on your PC.

Under the hood — **Mnemo**, local inference. Not a ChatGPT proxy — **a model on your hardware**. When an agent wants to **touch a file**, it stops and **waits for permission**. Same as Floke with music and habits: **your “okay” first**.

**Q3 2026.** Goal — **on your machine from first launch**. Details in upcoming Releases.

---

## Links

**Floke landing →** https://flokestudio.github.io/Floke/  
**GitHub →** https://github.com/FlokeStudio  
**Telegram →** https://t.me/flokestudio  

Full GitHub changelog — in Releases and `floke-release-1-2026-06-github.md`.

---

*Release #1 · June 2026 · Floke Studio*
