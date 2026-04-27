# Restaurant Caddies — New Website

A redesigned, professional marketing site for Restaurant Caddies — an independent advisory firm helping restaurant brands with technology strategy, procurement negotiation, and franchise development.

## Stack

Plain static site — no build step required.

## Pages

- `index.html` — Home (hero, intro, service preview, success preview, team preview, CTA)
- `services.html` — MarTech and Operations & Franchise services in detail
- `success.html` — Four real case studies
- `team.html` — Founder bios (Jeremy Theisen, Kim DeCarolis)
- `about.html` — Approach, values, and the golf-as-integrity narrative
- `contact.html` — Contact details + Web3Forms-powered form

## Shared assets

- `styles.css` — design system, layout, responsive rules
- `script.js` — header scroll state, mobile nav, active-link highlight, scroll reveal, async form submit
- `assets/favicon.svg` — site icon (vector, used as `<link rel="icon">`)
- `assets/og.svg` — social preview image (1200×630, used as `og:image` and `twitter:image`)
- `assets/jeremy.jpg` and `assets/kim.jpg` — founder headshots (drop in to replace the initials fallback)
- `sitemap.xml` and `robots.txt` — for search engine indexing
- JSON-LD `ProfessionalService` schema is inlined in `index.html` for rich Google results

## Local preview

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Activating the contact form (Web3Forms)

The form on `contact.html` is wired to [Web3Forms](https://web3forms.com) — a free, no-account-required form handler.

1. Go to https://web3forms.com and submit the email you want submissions delivered to. They'll send you an access key.
2. In `contact.html`, replace `REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY` with that key.

That's it. Submissions arrive in your inbox. The form has a hidden honeypot for bot protection and shows inline success/error messages without leaving the page.

If you'd rather use a different handler (Formspree, Netlify Forms, HubSpot, Jetpack), the form fields and styles will work as-is — just change the `action` and update `script.js`.

## Notes on the OG image

`assets/og.svg` is a 1200×630 SVG used as the social-preview image. SVG works fine in many crawlers (LinkedIn, Slack, Discord render it), but a few platforms (older Facebook scrapers, some Twitter clients) prefer raster.

If you want maximum compatibility, convert it to PNG:

```bash
# with rsvg-convert
rsvg-convert -w 1200 -h 630 assets/og.svg -o assets/og.png

# or with ImageMagick / Inkscape / any online SVG-to-PNG tool
```

Then update the `og:image` and `twitter:image` URLs in each HTML `<head>` to `og.png`.

## Brand notes

- Primary palette: deep forest (`#0b1f17`) on warm cream (`#faf7f2`)
- Accent: copper (`#b8753a`)
- Display type: Fraunces (serif)
- Body type: Inter (sans-serif)
- Logo mark: a stylized golf flagstick on a green (SVG, swappable)

## Deploying

Any static host works. Recommended:

- **Netlify / Vercel** — drag-and-drop or connect the GitHub repo
- **GitHub Pages** — enable on the repo
- **Cloudflare Pages** — connect the repo
- **AWS S3 + CloudFront** — for full control

The site has no server-side dependencies.
