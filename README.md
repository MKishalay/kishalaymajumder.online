# M. Kishalay — Personal Website

Placeholder landing page for Kishalay Majumder while the full site is under development.

## Structure

```
kishalay-website/
├── index.html          Main HTML file (markup only)
├── css/
│   └── style.css       Styling
├── js/
│   └── script.js       Copyright year auto-update
├── assets/
│   ├── favicon.svg     Favicon 
│   └── background.mp4  Background video
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

## Usage

Open `index.html` in a browser, or serve it locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization

| Change                   | File                    |
|---------------------------|--------------------------|
| Content / links           | `index.html`            |
| Styling / overlay darkness | `css/style.css`        |
| Behavior                  | `js/script.js`          |
| Favicon                   | `assets/favicon.svg`    |
| Background video          | `assets/background.mp4` |

## License

No license specified. Contact the author before reusing content or assets.

## Author

Kishalay Majumder
GitHub: [MKishalay](https://github.com/MKishalay)
LinkedIn: [kishalay-majumder](https://www.linkedin.com/in/kishalay-majumder-91a511395/)
Email: kishalay.maj@gmail.com
