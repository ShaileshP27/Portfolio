# Portfolio — Shailesh Shivaji Patil

Personal portfolio site. Static, built with [Astro](https://astro.build) and Tailwind CSS v4,
deployed to GitHub Pages.

**Live:** https://ShaileshP27.github.io/Portfolio

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321/Portfolio
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run og` | Regenerate `public/og.png` (the social share card) |

> Note the `/Portfolio` path in the dev URL — it comes from the `base` setting in
> `astro.config.mjs`. Opening plain `http://localhost:4321` will 404.

---

## Editing content

**All copy lives in one file: [`src/data/site.ts`](src/data/site.ts).**
Profile, stats, skills, experience, projects, education and passions are typed objects —
edit them there and every component updates. You should not need to touch the components
to change wording.

| What you want to change | Where |
| --- | --- |
| Name, role, tagline, email, phone, links | `profile` in `src/data/site.ts` |
| The four hero stat tiles | `stats` |
| Nav / footer links | `navLinks` |
| Tech stack groups | `skillGroups` |
| Jobs and the flagship project breakdown | `experience` |
| Project cards | `projects` |
| Degrees | `education` |
| Colours, spacing, fonts | `@theme` block in `src/styles/global.css` |

### Replacing the photo

Drop the new file at `src/assets/shailesh.jpg` (any size — Astro resizes and converts to
WebP at build time), then run `npm run og` to refresh the share card.

### A note on the CV and phone number

The site deliberately does **not** host the CV PDF or show a phone number. Contact runs
through email and LinkedIn only.

If you ever want the CV back as a download, note that anything in `public/` is served at a
public, guessable URL — so putting the PDF there also exposes whatever personal details it
contains. Prefer a redacted copy.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment**, and set
**Source** to **GitHub Actions**. Without this the workflow will fail at the deploy step.

### Moving to a custom domain

In `astro.config.mjs`:

1. Set `site` to your domain, e.g. `'https://shaileshpatil.dev'`.
2. **Delete the `base` line.**
3. Add a `public/CNAME` file containing just the domain.

The `base` value is what prefixes every asset URL, so leaving it in place on a custom
domain would break all links.

---

## Structure

```
src/
  assets/shailesh.jpg      portrait (optimised at build time)
  components/              one component per page section
  data/site.ts             ← all content lives here
  layouts/Base.astro       <head>, SEO, JSON-LD, scroll/nav scripts
  pages/index.astro        composes the sections
  pages/404.astro
  styles/global.css        design tokens + component classes
public/                    served as-is: CV, favicon, og.png
scripts/generate-og.mjs    builds the social share card
```

---

## Notes

- **Zero client framework.** Astro ships no JS runtime; the only scripts are small inline
  handlers for the theme toggle, mobile menu and scroll reveal.
- **Theme.** Dark by default. The toggle writes an explicit choice to `localStorage`, applied
  before first paint so there is no flash.
- **Accessibility.** Skip link, visible focus rings, labelled icon buttons, and all motion
  disabled under `prefers-reduced-motion`.
- **Print.** Nav and footer are hidden when printing the page.
