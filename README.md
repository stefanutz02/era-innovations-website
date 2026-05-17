<div align="center">

# ERA Innovations — Website

**Official corporate website of ERA Innovations / MONKEYLAB ART S.R.L.**
Software custom · Web & mobile development · Digital platforms · Piatra-Neamț, România

[**erainnovations.ro**](https://erainnovations.ro)

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)](LICENSE)

</div>

---

## Overview

This is the source code for the **ERA Innovations** corporate website at [erainnovations.ro](https://erainnovations.ro) — a Romanian software-development studio building custom web, mobile, and SaaS products for businesses.

The site is a bilingual (Romanian / English) marketing and lead-generation property: it presents the studio's services, portfolio of work, internal innovation projects ("Inovații"), long-form blog, and a contact channel. It runs as a Vite-built static React app on the front, with a companion Node.js API at [`email-api.erainnovations.ro`](https://github.com/stefanutz02/era-innovations-api) handling email submissions and blog content.

> **License notice.** This is proprietary closed-source software. See [LICENSE](LICENSE). Do not fork, copy, deploy, or reuse without written permission.

## Live site

> **[erainnovations.ro](https://erainnovations.ro)**

## Architecture

```
            ┌────────────────────────────┐
            │  erainnovations.ro         │
            │  (static React / Vite)     │
            │  hosted on DirectAdmin     │
            └────────────┬───────────────┘
                         │  fetch /contact, /blog
                         ▼
            ┌────────────────────────────┐
            │  email-api.erainnovations  │
            │  .ro                       │
            │  (Node.js + Express)       │
            │  hosted on DirectAdmin     │
            └────────────┬───────────────┘
                         │
            ┌────────────┴────────────┐
            ▼                         ▼
        SMTP (Nodemailer)         posts/ folder
        hello@erainnovations.ro   (markdown files)
```

The contact form posts to the API, which sends an email via SMTP. The blog page fetches from the API, which reads markdown files from disk. **No database, no rebuild needed to publish a new post.**

## Features

- **Bilingual (RO / EN)** via a custom React context (`useT`), persisted across pages
- **Pages**: Home, Services, Work (portfolio), Innovations (sub-pages per product), Blog, Blog post detail, About, Contact, plus 404 + legal pages
- **Dynamic blog** — markdown posts fetched at runtime from the API; new posts go live without rebuilding
- **Working contact form** — client-side validation, submits to the API, shows loading / success / error states
- **SEO baseline** — per-page title/description/canonical/OG via an `updateSEO()` helper; sitemap and robots
- **Hand-rolled glass + liquid-text aesthetic** via custom Tailwind utilities and CSS variables
- **Reveal-on-scroll** animations using `IntersectionObserver` (`<Reveal />`)
- **Lightweight analytics shim** in `lib/analytics.ts` — no third-party trackers

## Tech stack

| Layer            | Choice                                          |
| ---------------- | ----------------------------------------------- |
| Framework        | **React 19** + **Vite 8**                        |
| Language         | **TypeScript 6**                                 |
| Routing          | **react-router-dom 7**                           |
| Styling          | **Tailwind CSS 3.4** + custom CSS variables     |
| Icons            | **lucide-react**                                 |
| Utilities        | **clsx**, **tailwind-merge** (via `cn()`)        |
| Backend          | Separate Express service ([`era-innovations-api`](https://github.com/stefanutz02/era-innovations-api)) |
| Hosting          | DirectAdmin (static for front, Node.js for API) |

## Project structure

```
.
├── public/
│   ├── assets/              # logos, images, OG cards
│   ├── favicon.svg
│   ├── icons.svg            # symbol sprite
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
├── src/
│   ├── main.tsx             # entry
│   ├── App.tsx              # router + layout
│   ├── components/          # SiteHeader, SiteFooter, Reveal, Logo, etc.
│   ├── hooks/               # use-mobile, etc.
│   ├── lib/
│   │   ├── api.ts           # API base URL + sendContactMessage()
│   │   ├── blog.ts          # loadBlogPosts() + loadBlogPost()
│   │   ├── i18n.tsx         # bilingual context (RO/EN)
│   │   ├── seo.ts           # updateSEO() — head tag manager
│   │   ├── analytics.ts
│   │   └── utils.ts         # cn() helper
│   └── pages/
│       ├── Home.tsx
│       ├── Services.tsx
│       ├── Work.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Blog.tsx
│       ├── BlogPost.tsx
│       ├── NotFound.tsx
│       ├── inovatii/        # per-product Coming-Soon pages
│       └── legal/           # Terms, Privacy, Cookies
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── LICENSE                  # Proprietary — All Rights Reserved
└── README.md
```

## Environment variables

Create `.env.local` in the project root for local development:

```bash
# Override the API URL when developing against a local backend.
# Defaults to https://email-api.erainnovations.ro when unset.
VITE_API_URL=http://localhost:3000
```

Production builds use the default API URL baked into the bundle.

## Development

### Prerequisites

- Node.js 18.17+
- npm

### Install & run

```bash
npm install
npm run dev          # http://localhost:5173
```

### Build

```bash
npm run build        # type-check + vite build → dist/
npm run preview      # serve the built site locally
```

### Lint

```bash
npm run lint
```

## Deploying

The site builds to a static `dist/` directory served from DirectAdmin:

1. Run `npm run build` locally (or in CI).
2. Upload the contents of `dist/` to `public_html/` for `erainnovations.ro`.
3. Make sure the API at `email-api.erainnovations.ro` is running — see the [API repository](https://github.com/stefanutz02/era-innovations-api).

A clean `index.html` fallback rule in DirectAdmin handles SPA routing — `react-router` routes are client-side, so deep links need to fall through to `index.html`.

## Adding a blog post

Posts live on the **API server**, not in this repo. To publish:

1. SSH/SFTP into the DirectAdmin host running `email-api.erainnovations.ro`.
2. Drop a new file `posts/your-slug.md` into the API's `POSTS_DIR`.
3. Filename must match `[a-z0-9-]+` (lowercase, digits, hyphens).
4. Required frontmatter at the top:

```markdown
---
title: "Titlul în română"
title_en: "Title in English"
date: "2026-05-17"
category: "Engineering"
excerpt: "Un rezumat scurt..."
excerpt_en: "Short summary..."
slug: "your-slug"
---

# Titlu

Conținutul articolului în Markdown.
```

5. Done. The site fetches from the API on every blog page load (60-second cache), so new posts appear within ~1 minute.

## Brand identity

The visual language — *chrome gradients, liquid text, glass surfaces, the muted neutral palette, and the "ERA" wordmark itself* — is proprietary to ERA Innovations. It must not be reproduced, imitated, or used to identify any product or service other than those operated by ERA Innovations / MONKEYLAB ART S.R.L.

## Companion repositories

| Repo                  | Role                                         |
| --------------------- | -------------------------------------------- |
| **era-innovations-website** | This repo — the frontend.                    |
| **era-innovations-api**     | Backend service (`email-api.erainnovations.ro`). |

## Contact

- **Website** — [erainnovations.ro](https://erainnovations.ro)
- **Email** — [hello@erainnovations.ro](mailto:hello@erainnovations.ro)
- **Studio** — Piatra-Neamț, România

## License

**Proprietary — All Rights Reserved.** See [LICENSE](LICENSE).

This is closed-source commercial software. No license is granted to use, copy, modify, or distribute it. The ERA Innovations name, brand identity, visual language, copy, and assets are likewise reserved. For partnership or licensing inquiries: `office@erainnovations.ro`.
