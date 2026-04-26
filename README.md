# Restaurant Caddies — New Website

A redesigned, professional marketing site for Restaurant Caddies, an independent advisory firm helping restaurant brands with technology strategy, procurement negotiation, and franchise development.

## Stack

Plain static site — no build step required.

- `index.html` — single-page site with anchored sections
- `styles.css` — design system, layout, responsive rules
- `script.js` — header scroll state, mobile nav, scroll reveal

Fonts are loaded from Google Fonts (Fraunces + Inter). The site can be hosted on any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

## Local preview

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Sections

1. Hero — value proposition + CTA + at-a-glance stats
2. Trust strip — segments served
3. Services — six core offerings (tech stack, loyalty, ordering, CDP/CRM, AI, procurement)
4. Approach — four-step engagement model
5. Franchise development — services + readiness assessment CTA
6. Results — outcome stats + client quote
7. About — company positioning and values
8. Contact — form + email fallback

## Editing content

Most copy lives directly in `index.html`. The result stats, service bullets, and quote are placeholders that should be reviewed and replaced with specific, attributed examples before launch.

The contact form currently uses `mailto:` as a fallback. Wire it to a real form handler (Formspree, Netlify Forms, HubSpot, etc.) before going live.

## Brand notes

- Primary palette: deep forest (`#0b1f17`) on warm cream (`#faf7f2`)
- Accent: copper (`#b8753a`)
- Display type: Fraunces (serif)
- Body type: Inter (sans-serif)
