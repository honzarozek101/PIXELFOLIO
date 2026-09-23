# Portfolio – pixel particles

A single-page portfolio where every image (the intro and each project)
dissolves into WebGL particles when it's shown. Side arrows step through
the projects; right-click (or long-press on touch) opens the current
project's URL.

## Folder structure

```
index.html                 – the whole page and engine (normally you don't touch it)
config.js                  – main settings: project URLs, captions, fallback values
src/
  Intro.png                – the intro image
  Intro_config.js          – (optional) particle settings just for Intro
  Intro_background.png     – (optional) background just for Intro
  projekt_01.png           – project 1
  projekt_01_config.js     – (optional) particle settings just for projekt_01
  projekt_01_background.png – (optional) background just for projekt_01
  projekt_02.png, projekt_03.png, ...
  background.png           – (optional) shared background for images with none of their own
```

## Running it

The page reads PNG pixels via JavaScript, which browsers only allow over
`http(s)://`, not by double-clicking the file (`file://`). Locally, just
run a simple server in this folder, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`. For production, upload it to any
static hosting — no build step, no dependencies.

If opened over `file://`, the page detects it and shows the images
statically instead of as particles, with a warning toast.

## Adding / editing a project

1. Drop the PNG into `src/` as `projekt_04.png` (next number in sequence).
2. In `config.js`, add `{ url: '...', title: '...' }` to the `projects` array.
3. Optionally add `src/projekt_04_config.js` (particle settings just for
   that image) and/or `src/projekt_04_background.png` (background just for
   that image). If you skip either, the `projectSettings` fallback and
   `background.png` from the main config / src folder are used instead.

The exact lookup order for settings and backgrounds, and what each value
does, is documented directly in the comments inside `config.js`.

## On-page controls

- **Side arrows** – step between the intro and the projects.
- **Left click** – a small burst of particles under the cursor.
- **Right-click** (long-press on touch) – opens the current project's
  `url` from `config.js`.
- **Hamburger menu, top-left** – a live panel for tuning the pixelation
  and physics of whichever image is currently shown (particle size,
  collisions, gravity, colors, mouse behavior...). The **"Copy settings
  for this image"** button copies the current values as ready-to-paste
  code for that image's `src/<image>_config.js`, so tweaks from the panel
  can be saved permanently.

## Main settings in config.js

- `srcFolder`, `loop`, `openInNewTab`, `longPressMs`, `transitionOutMs`, `hint`
  – general page behavior.
- `intro` – Intro's file, URL and caption.
- `projects` – the list of projects (URL, caption, optionally a different file name).
- `projectSettings` – fallback particle settings for projects without their
  own `_config.js` file.
