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

1. Hero — "Strategy and execution. No mulligans." with at-a-glance stats
2. Intro — golf-as-integrity values strip
3. Services — MarTech (POS, Loyalty, Ordering, Mobile, CRM, CDP, 3rd-party, AI) and Operations & Franchise Development
4. Approach — Start with the P&L → Choose partners → Negotiate → Implement
5. Success — four real case studies (400-unit pizza $2.7M; 100-unit smoothie POS; 25-unit breakfast DoorDash; 50-unit casual ghost kitchens)
6. Team — Jeremy Theisen and Kim DeCarolis, with bios and contacts
7. About — golf-inspired positioning
8. Contact — Chicago / Detroit phone numbers, both founder emails, Instagram, and a contact form

## Editing content

All copy lives directly in `index.html`. The contact form currently uses `mailto:` as a fallback (sending to both Jeremy@ and Kim@). Wire it to a real form handler (Jetpack Forms, Formspree, Netlify Forms, HubSpot, etc.) before going live.

Founder photos use initial-style avatars for now; swap them for real headshots when ready (drop image files into the project and replace the `.team-avatar` block in `index.html`).

## Brand notes

- Primary palette: deep forest (`#0b1f17`) on warm cream (`#faf7f2`)
- Accent: copper (`#b8753a`)
- Display type: Fraunces (serif)
- Body type: Inter (sans-serif)
