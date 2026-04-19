# Rapid Receptionist

AI-powered receptionist service built exclusively for **46 UK construction trades**. Answers calls, messages, and enquiries across 8 communication channels — 24/7/365.

**Live site:** [rapidreceptionist.co.uk](https://rapidreceptionist.co.uk)

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static site generation)
- **Styling:** Vanilla CSS with custom properties (no Tailwind)
- **Fonts:** Inter (Google Fonts)
- **Hosting:** Vercel (auto-deploy from `main` branch)
- **Sitemap:** Auto-generated via `@astrojs/sitemap` (428 URLs)
- **SEO:** robots.txt, sitemap.xml, JSON-LD schema (FAQ, Service, BreadcrumbList)

## Project Structure

```
src/
├── layouts/
│   ├── BaseLayout.astro            — HTML shell, head, global styles
│   ├── TradeHubLayout.astro        — Template for trade hub pages (46 pages)
│   ├── ChannelTradeLayout.astro    — Template for channel × trade pages (~370 pages)
│   └── ChannelServiceLayout.astro  — Template for channel service overview pages (8 pages)
├── components/
│   ├── Header.astro                — Global header + mobile nav
│   ├── Footer.astro                — Global footer
│   ├── HeroSection.astro           — Hero with AI avatar, CTAs, trust row
│   ├── FloatingWidget.astro        — Persistent bottom-right AI widget
│   ├── StepsGrid.astro             — "3 Simple Steps" cards
│   ├── FeatureGrid.astro           — Channel feature cards
│   ├── FAQAccordion.astro          — Expandable FAQ section
│   ├── CTASection.astro            — Conversion section
│   ├── CTAButton.astro             — Primary CTA button
│   ├── PricingCard.astro           — Pricing display
│   ├── StatisticsSection.astro     — Speed-to-lead stats
│   ├── CookieConsent.astro         — GDPR cookie banner
│   ├── ConstructionSpecialisms.astro — Trade specialisms grid
│   └── ClientTypes.astro           — Client type cards
├── data/
│   ├── trades.json                 — 46 trades: names, slugs, categories, keywords
│   ├── pricing.json                — Centralised pricing (SINGLE SOURCE OF TRUTH)
│   ├── statistics.json             — Speed-to-lead statistics
│   └── channels.json               — 8 communication channel definitions
├── styles/
│   └── global.css                  — Design tokens, utilities, global styles
└── pages/
    ├── index.astro                 — Homepage
    ├── pricing.astro               — Pricing page
    ├── about.astro                 — About page
    ├── get-started.astro           — Lead capture / signup
    ├── contact.astro               — Contact form
    ├── terms.astro                 — Terms of service
    ├── privacy.astro               — Privacy policy
    ├── construction-trades/        — Channel hub pages (8 pages)
    └── [46 trade directories]/     — Trade hub + channel pages (9 pages each)
```

## Key Files

| File | Purpose |
|---|---|
| `AGENT_INSTRUCTIONS.md` | Master instructions for AI agents building/editing the site |
| `.agent/workflows/content-rules.md` | Mandatory content creation rules for every page |
| `src/data/pricing.json` | **Single source of truth for all pricing** — never hardcode prices |
| `src/data/trades.json` | 46 trades with slugs, categories, keywords |
| `public/robots.txt` | Search engine crawl directives |
| `public/llms.txt` | AI/LLM-readable site summary |
| `public/llms-full.txt` | Extended AI/LLM-readable site details |

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site (428 pages) |
| `npm run preview` | Preview production build locally |

## Page Count

- 5 core pages (home, pricing, about, get-started, contact)
- 2 legal pages (terms, privacy)
- 1 construction trades hub
- 8 channel service overview pages
- 46 trade hub pages
- ~368 channel × trade pages
- **Total: 428 pages**

## Deployment

Push to `main` branch → Vercel auto-deploys.

```bash
npm run build          # Verify build succeeds (428 pages, 0 errors)
git add -A
git commit -m "description"
git push               # Triggers Vercel deployment
```
