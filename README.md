# M. Kishalay — Personal Website

Placeholder landing page for Kishalay Majumder while the full site is under development.

Live: [kishalaymajumder.online](https://kishalaymajumder.online/)

## Structure

```
kishalay-website/
├── index.html                        Main HTML file (markup only)
├── 404.html                          Custom 404 page
├── CNAME                             Custom domain config (GitHub Pages)
├── robots.txt                        Crawler rules
├── sitemap.xml                       Sitemap
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
│   ├── poster.jpg                    Video poster
│   ├── resume.pdf                    Resume
│   └── background.mp4                Background video
└── README.md
```

## Background video

The homepage uses a self-hosted, muted, looping video as a full-screen
background, with a dark overlay layered on top for text readability.

- Video file lives at `assets/background.mp4`, compressed with HandBrake
  (~6 MB) for fast load on mobile.
- The loop transition is baked into the video file itself (fade in/out at
  each end), so the loop plays back smoothly with no extra JavaScript.
- The overlay darkness is controlled in `css/style.css` under `.bg-overlay`.
- `assets/poster.jpg` is shown while the video loads, avoiding a flash of
  black on first paint. To regenerate it from the video itself:
  ```bash
  ffmpeg -i assets/background.mp4 -ss 00:00:01 -vframes 1 assets/poster.jpg
  ```

## 404 page

`404.html` at the repo root reuses the same background video and styling
as the homepage. GitHub Pages serves it automatically for any missing path.
All asset paths in this file are root-relative (e.g. `/css/style.css`) —
this is required, since GitHub Pages resolves relative paths against the
requested URL, not the file's actual location, which breaks styling if the
404 is triggered from a nested path.

## SEO

`robots.txt` and `sitemap.xml` live at the repo root and must stay there —
crawlers expect them at `/robots.txt` and `/sitemap.xml`.

## Custom domain

`CNAME` at the repo root points GitHub Pages to `kishalaymajumder.online`.
Must stay committed — deleting it resets the site to the default
`*.github.io` URL.

## Social preview

`og-image.png` is shown when the link is shared on platforms like LinkedIn,
WhatsApp, or Twitter/X (controlled via the Open Graph / Twitter Card meta
tags in `index.html`).

## Resume

`assets/resume.pdf` is linked via the "Resume" button — styled as a
bordered pill, right-aligned in the same row as the social links, distinct
from them at a glance.

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
| 404 page                  | `404.html`                |
| Styling / overlay darkness | `css/style.css`         |
| Behavior                  | `js/script.js`           |
| Crawler rules              | `robots.txt`             |
| Sitemap                   | `sitemap.xml`             |
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