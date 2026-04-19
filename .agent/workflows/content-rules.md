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
- **Pricing variables:** All pricing MUST come from `src/data/pricing.json`. Use `pricing.tiers.core.price`, `pricing.tiers.core.minutes`, `pricing.addOn.price`, etc. The surrounding sentence must be unique and hand-written per page, but numbers are injected from the JSON. NEVER hardcode `£49`, `£23`, or `£295` — always use the variable. This allows site-wide pricing changes from a single file.
- **Brand-consistent phrases:** Using recurring brand phrases like "Built by tradesmen, for tradesmen" or "From £{pricing.tiers.core.price}/month" where contextually appropriate — these are brand elements, not spun content.
- **Auto-appended FAQs:** Two FAQs are automatically appended to every page via the layout files (`TradeHubLayout.astro`, `ChannelTradeLayout.astro`, `ChannelServiceLayout.astro`): (1) a GDPR/data protection FAQ, and (2) a free business info updates FAQ. These use `${tradeName}` and `${channelName}` interpolation for contextual relevance. Do NOT duplicate these topics in page-level FAQs.
- **Trust row items:** The hero trust row (`HeroSection.astro`) displays site-wide selling points including `✓ 100% done for you`, `✓ Free business info updates`, `🇬🇧 UK-owned & trade-run`, pricing, guarantee, and contract terms. These are consistent across all pages and managed centrally.

### URL Structure Rules

- Trade pages use **flat URLs**: `/{trade-slug}/ai-receptionist/`, `/{trade-slug}/ai-phone-answering/`, etc.
- DO NOT use `/construction-trades/{trade-slug}/` — that prefix was removed.
- Channel overview pages (the generic "AI Phone Answering for all trades" pages) remain at `/construction-trades/ai-phone-answering/`.
- Import paths from trade pages to layouts: `../../layouts/` (two levels up).

### Content Quality Standards

- Write in the brand voice: direct, no-nonsense, trade-authentic UK English
- Use trade-specific terminology appropriate to the page's trade
- Reference real-world scenarios that tradesmen in that specific trade would recognise
- Use GBP (£) pricing, UK spelling, and UK-specific references
- Every FAQ answer should be substantive (3-5 sentences minimum), not one-line fillers
- Avoid generic marketing fluff — write like you're explaining to a mate in the pub

### MANDATORY: No Gendered Pronouns for the AI

The AI receptionist must **never** be referred to with gendered pronouns (she/her/he/him). Always use:
- **"it"** — "It captures the lead details", "It answers on the second ring"
- **"the AI"** — "The AI responds within seconds"
- **"Rapid Receptionist"** or **"your AI receptionist"** — "Rapid Receptionist answers 24/7"
- **"the system"** or **"the service"** — when referring to the platform

Gendered pronouns for fictional **customer** characters in scenarios (e.g. "A homeowner calls — she needs...") are acceptable — the rule applies only to the AI itself.

### MANDATORY: UK Geo-Targeting Above the Fold

The word **"UK"** MUST appear above the fold on every single page. This is non-negotiable. Specifically:

1. **Meta title (`<title>`)** — must contain "UK" (e.g. "AI Phone Answering for UK Plasterers", not "AI Phone Answering for Plasterers")
2. **Headline (`<h1>`) or subhead** — at least one must contain "UK" so visitors immediately see this is a UK-focused service
3. **New pages** — before submitting any new page, verify "UK" appears in the title AND in either the headline or subhead

This rule exists because Rapid Receptionist serves exclusively UK construction trades. Every page must make this obvious to both search engines and visitors at first glance.

### CRITICAL: Anti-Duplication Rules

Previous trade page batches developed **structural duplication** — FAQ answers starting with the same sentence, benefit descriptions interchangeable between trades, and CTA headlines reused across pages. These rules prevent that:

#### FAQ Answers
- **Every FAQ answer must open with a unique first sentence** — different from every other page on the site. Do NOT start with "All data is managed under UK GDPR" or "It greets the caller with your business name" on multiple pages.
- **Every FAQ answer must contain at least one trade-specific term or example.** A GDPR answer for a suspended ceiling installer should reference grid specifications or tile types. A pricing answer for a plasterer should mention plastering volume or job types.
- **Pricing FAQ answers must be contextualised per trade.** Not "The Core plan is £X/month" but "Most two-man ceiling teams find the Core plan at £X/month covers their call volume comfortably."
- **"Can I still answer calls" answers must include a trade-specific scenario.** Not just "The AI activates when unavailable" but "When you are in the office pricing a ceiling grid layout, calls ring through as normal."
- **Minimum 3 sentences per FAQ answer.** One-liners like "Yes. Encrypted and stored on UK servers." are not acceptable.
- **Do NOT duplicate auto-appended FAQs.** The GDPR and free business info updates FAQs are auto-appended by the layout files — do not write page-level FAQs covering these same topics.

#### Benefit/Feature Text
- **Every benefit `text` value must be unique across the entire site.** Do not reuse "Every call is summarised with the caller's name, number, location..." across multiple trades.
- **Each benefit must reference a scenario specific to the trade on that page.** Not "The AI catches calls after hours" but "Fit-out contractors call subcontractors at 6am to confirm programme slots. The AI catches every one."

#### CTA Headlines & Subheads
- **Every `ctaHeadline` must be unique across the entire site.** Check existing pages before writing a new one.
- **CTA headlines must reference the specific trade.** "Stop Losing Ceiling Contracts to Missed Calls" not generic "Stop Missing Jobs."
- **CTA subheads must include a trade-specific value hook**, not just "From £X/month."

#### Statistics & Data Points
- **Frame the same statistic differently on each page.** If one page says "78% of customers hire the first responder," the next should say "Nearly four in five customers go with whoever picks up first."

### Verification Checklist (Before Creating Any Page)

- [ ] Does the meta title contain "UK"?
- [ ] Does the headline or subhead contain "UK" (visible above the fold)?
- [ ] Is every headline unique to this page?
- [ ] Is every FAQ answer's **opening sentence** different from every other page on the site?
- [ ] Does every FAQ answer contain at least one trade-specific term or example?
- [ ] Is every benefit text block unique — not interchangeable with another trade's page?
- [ ] Is the scenario block a unique, detailed, realistic story specific to this trade?
- [ ] Does the subhead add context specific to this page's audience?
- [ ] Is the CTA headline unique across the entire site?
- [ ] Is every FAQ answer at least 3 sentences long?
- [ ] Would a reader notice if two pages' content was swapped? (They should — if not, the content isn't unique enough)
- [ ] Are all pricing values pulled from `pricing.json` variables (never hardcoded)?
