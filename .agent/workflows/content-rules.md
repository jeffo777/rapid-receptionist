---
description: Mandatory content creation rules — MUST be followed for every page, component, and text element on this site
---

# Content Creation Rules — Rapid Receptionist

## ABSOLUTE RULE: No Programmatic Content Generation

Every single piece of written content on this website **MUST be unique, custom-written text**. This is non-negotiable.

### What This Means

1. **Every page gets its own hand-written content.** Headlines, subheads, body copy, FAQ answers, scenario blocks, CTA text — all must be individually authored for that specific page.

2. **No content spinning.** You must never take a sentence and swap words to create "new" versions. Each page's content must be genuinely original — written fresh from scratch.

3. **No programmatic generation from data files.** Data files (trades.json, channels.json, etc.) exist for structural/navigation purposes only (e.g., generating nav links, listing trade names). They must **never** be used to programmatically generate page body content, FAQs, headlines, or descriptions via loops, templates, or string interpolation patterns.

4. **No template sentences with variable insertion.** Do not write content like `"AI Receptionist for {tradeName} — answers your {tradeName} calls"`. Every sentence must read as if a human copywriter wrote it specifically for that page.

5. **Layouts are structural, not content.** `TradeHubLayout.astro` and `ChannelTradeLayout.astro` define which *sections* appear on a page and in what *order*. All actual written content (headlines, subheads, body copy, FAQs, scenarios) must be passed as props from the individual page file, written uniquely for that page.

### What IS Acceptable

- **Structural reuse:** Using the same layout component across multiple pages (e.g., TradeHubLayout) to maintain consistent section order and design.
- **Navigation/link generation:** Using trades.json to auto-generate nav dropdowns, footer links, or breadcrumbs.
- **Component reuse:** Using the same FAQ accordion component on every page — but the actual FAQ questions and answers must be unique per page.
- **Brand-consistent phrases:** Using recurring brand phrases like "Built by tradesmen, for tradesmen" or "£99/month" where contextually appropriate — these are brand elements, not spun content.

### Content Quality Standards

- Write in the brand voice: direct, no-nonsense, trade-authentic UK English
- Use trade-specific terminology appropriate to the page's trade
- Reference real-world scenarios that tradesmen in that specific trade would recognise
- Use GBP (£) pricing, UK spelling, and UK-specific references
- Every FAQ answer should be substantive (3-5 sentences minimum), not one-line fillers
- Avoid generic marketing fluff — write like you're explaining to a mate in the pub

### Verification Checklist (Before Creating Any Page)

- [ ] Is every headline unique to this page?
- [ ] Is every FAQ written specifically for this trade/channel/context?
- [ ] Is the scenario block a unique, detailed, realistic story?
- [ ] Does the subhead add context specific to this page's audience?
- [ ] Would a reader notice if two pages' content was swapped? (They should — if not, the content isn't unique enough)
