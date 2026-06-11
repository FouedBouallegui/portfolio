# Foued Bouallegui — Developer Portfolio

> Last synced: June 2026 | Skills logo wall & Essid real-image added.

A premium, responsive, multilingual portfolio for a Full-Stack JavaScript Developer.
Built as a fast, dependency-free static site — deployable directly to **GitHub Pages**.

## ✨ Features

- **Dark / Light theme** — toggle, system-preference detection, `localStorage` persistence, smooth transitions
- **Internationalization (EN / FR)** — language switcher, instant switching, persisted preference, easy to extend
- **Certifications section** — certificate cards with modal preview, org, issue date, credential ID
- **Case-study projects** — spacious, modern layout with clear hierarchy
- **Scroll-reveal animations** & micro-interactions (respects `prefers-reduced-motion`)
- **Fully responsive** — mobile, tablet, laptop, desktop, ultra-wide
- **Accessible** — semantic HTML, ARIA, keyboard navigation, skip link, focus styles
- **SEO ready** — meta tags, Open Graph, JSON-LD structured data

## 📁 Structure

```
docs/
├── index.html
├── css/
│   ├── themes.css        # design tokens (dark & light)
│   ├── style.css         # layout & components
│   └── responsive.css    # breakpoints
├── js/
│   ├── i18n.js           # translation dictionaries
│   ├── theme.js          # theme system
│   ├── language.js       # language switching
│   └── main.js           # nav, reveal, modal
├── assets/
│   ├── images/           # project images
│   └── certificates/     # certificate images
└── README.md
```

## 🚀 Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch `main` and folder **`/docs`**, then **Save**.
5. Your site goes live at `https://<username>.github.io/<repo>/`.

> Prefer serving from the repo root instead of `/docs`? Move the contents of
> `docs/` to the repository root and select the root folder in step 4.

## 🌍 Add a new language

1. Add a dictionary to `translations` in `js/i18n.js` (e.g. `es: { ... }`).
2. Add a button in the navbar: `<button data-lang="es" class="lang-btn">ES</button>`.

## 🛠 Local preview

It's plain HTML/CSS/JS — just open `index.html`, or run any static server:

```bash
npx serve docs
```
