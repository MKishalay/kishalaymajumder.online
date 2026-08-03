# M. Kishalay — Personal Website

Placeholder landing page for Kishalay Majumder while the full site is under development.

## Structure

```
kishalay-website/
├── index.html                        Main HTML file (markup only)
├── css/
│   └── style.css                     Styling
├── js/
│   └── script.js                     Copyright year auto-update
├── assets/
│   ├── favicons/
│   │   ├── favicon.ico                   Favicon (16px + 32px, .ico)
│   │   ├── favicon-16x16.png             Favicon (16px)
│   │   ├── favicon-32x32.png             Favicon (32px)
│   │   ├── apple-touch-icon.png          iOS home-screen icon
│   │   ├── android-chrome-192x192.png    Android home-screen icon
│   │   ├── android-chrome-512x512.png    Android home-screen icon (large)
│   │   └── site.webmanifest              PWA/home-screen manifest
│   ├── og-image.png                  Social share preview image
│   ├── poster.jpg                    Video poster (placeholder — replace, see below)
│   ├── resume.pdf                    Resume (add your file here)
│   └── background.mp4                Background video (add your file here)
└── README.md
```

## Background video

The homepage uses a self-hosted, muted, looping video as a full-screen
background, with a dark overlay layered on top for text readability.

- Place your video file at `assets/background.mp4` (or update the
  `<source>` path in `index.html` if you use a different name).
- The loop transition is baked into the video file itself (fade in/out at
  each end), so the loop plays back smoothly with no extra JavaScript.
- The overlay darkness is controlled in `css/style.css` under `.bg-overlay`.
- `assets/poster.jpg` is shown while the video loads. It's currently a
  **generated placeholder starfield**, not an actual frame from your video —
  replace it with a real frame for a seamless transition once the video
  starts playing. To extract one with `ffmpeg`:
  ```bash
  ffmpeg -i assets/background.mp4 -ss 00:00:01 -vframes 1 assets/poster.jpg
  ```

## Social preview

`og-image.png` is shown when the link is shared on platforms like LinkedIn,
WhatsApp, or Twitter/X (controlled via the Open Graph / Twitter Card meta
tags in `index.html`). It's a generated placeholder — regenerate or replace
it with your own design if you want a different look.

## Resume

Add your resume as `assets/resume.pdf` — the "Resume" link in the page
already points there.

## Usage

Open `index.html` in a browser, or serve it locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization

| Change                   | File                     |
|---------------------------|---------------------------|
| Content / links           | `index.html`             |
| Styling / overlay darkness | `css/style.css`         |
| Behavior                  | `js/script.js`           |
| Favicon                   | `assets/favicons/favicon.ico` (+ PNG sizes) |
| Social preview image      | `assets/og-image.png`    |
| Video poster              | `assets/poster.jpg`      |
| Resume                    | `assets/resume.pdf`      |
| Background video          | `assets/background.mp4` |

## License

No license specified. Contact the author before reusing content or assets.

## Author

Kishalay Majumder
GitHub: [MKishalay](https://github.com/MKishalay)
LinkedIn: [kishalay-majumder](https://www.linkedin.com/in/kishalay-majumder-91a511395/)
Email: kishalay.maj@gmail.com
