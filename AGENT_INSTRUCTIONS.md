# Rapid Receptionist — Master Agent Instructions

> **This document is the single source of truth for building the Rapid Receptionist website.**
> Read this ENTIRE document before writing any code or content. Every page, component, and style decision should trace back to these instructions.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand Identity](#2-brand-identity)
3. [Brand Voice & Tone](#3-brand-voice--tone)
4. [USPs — Unique Selling Points](#4-usps--unique-selling-points)
5. [Pricing & Commercial Model](#5-pricing--commercial-model)
6. [Target Market — The 13 Trades](#6-target-market--the-13-trades)
7. [Service Channels — The 9-Channel System](#7-service-channels--the-9-channel-system)
8. [Content Rules — What The AI Can & Cannot Do](#8-content-rules--what-the-ai-can--cannot-do)
9. [Human Escalation Protocol](#9-human-escalation-protocol)
10. [Speed-to-Lead — The Core USP](#10-speed-to-lead--the-core-usp)
11. [Testimonials](#11-testimonials)
12. [Website Architecture](#12-website-architecture)
13. [Page Structure Templates](#13-page-structure-templates)
14. [FAQ Strategy](#14-faq-strategy)
15. [SEO Requirements](#15-seo-requirements)
16. [Design System](#16-design-system)
17. [Technical Setup](#17-technical-setup)
18. [Content Quality Rules](#18-content-quality-rules)
19. [Reference Folder Usage](#19-reference-folder-usage)

---

# 1. Project Overview

## What Is Rapid Receptionist?

Rapid Receptionist is a standalone AI receptionist service built exclusively for UK tradesmen. It provides 24/7 AI-powered answering across 9 communication channels — phone, SMS, WhatsApp, email, website chat, Facebook Messenger, Instagram DMs, Google Business Profile messages, and missed call text-back.

## The Mission

**Stop UK tradesmen from losing jobs to missed calls and slow responses.**

Tradesmen physically cannot answer the phone while they're working — up ladders, under boilers, inside consumer units, in drainage trenches. Every unanswered call is a customer who calls a competitor instead. Rapid Receptionist answers instantly, every time, across every channel, so the tradesman never misses a lead.

## What We Are NOT

- ❌ Not a lead generation company
- ❌ Not a website building company
- ❌ Not a marketing agency
- ❌ Not a CRM platform
- ❌ Not an appointment scheduling tool

We do ONE thing: **answer enquiries instantly across 9 channels so tradesmen never lose a job to a missed call.**

---

# 2. Brand Identity

## Name & Domain

- **Brand Name:** Rapid Receptionist
- **Domain:** rapidreceptionist.co.uk
- **Tagline options:** (choose or create a better one)
  - "Never miss another job"
  - "Your AI receptionist. Always on. Always ready."
  - "9 channels. Zero missed leads."

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#0B0F19` | Main background (dark, near-black with blue undertone) |
| `--color-secondary` | `#131829` | Alternate section backgrounds |
| `--color-surface` | `#1C2235` | Cards, steps, feature boxes |
| `--color-accent` | `#2563EB` | Royal Blue — primary brand colour, CTAs, links, badges |
| `--color-accent-hover` | `#1D4ED8` | Hover state for accent elements |
| `--color-accent-subtle` | `rgba(37, 99, 235, 0.12)` | Subtle accent backgrounds |
| `--color-trust` | `#22C55E` | Green — guarantee badges, trust signals, "included" checkmarks |
| `--color-text-primary` | `#FFFFFF` | Headings, important text |
| `--color-text-secondary` | `#94A3B8` | Body text, descriptions |
| `--color-text-muted` | `#64748B` | De-emphasised text, fine print |
| `--color-border-subtle` | `#1E293B` | Card borders, dividers |
| `--color-speed` | `#F59E0B` | Amber — used sparingly for speed-to-lead stats and urgency indicators |

> **Design note:** The colour palette is dark-mode only. The blue undertone in backgrounds differentiates from DTEAI's neutral dark theme. The royal blue accent conveys trust and professionalism. The green trust colour is for guarantee and "included" signals. The amber speed colour is used sparingly for speed-to-lead statistics.

## Typography

- **Primary font:** Inter (Google Fonts) — weights: 400, 500, 600, 700, 800
- **Alternative:** Consider Outfit or DM Sans if you want to differentiate from DTEAI (which also uses Inter)
- **UK English only** — colour, recognise, licence, etc.

## Logo

- **Word logo** — "Rapid Receptionist" with a speed/motion effect on the word "Rapid"
- Keep it simple, modern, and clean
- Should work on dark backgrounds
- The word "Rapid" should visually convey speed (italics, motion lines, gradient, or similar)

---

# 3. Brand Voice & Tone

## Identity: "Built by Tradesmen, for Tradesmen"

Rapid Receptionist is NOT a tech company selling to tradesmen. It's a service **built by people who understand the trades** — people who've been up the ladder when the phone rings, who've lost jobs because they couldn't answer a call while wrist-deep in pipework.

### Voice Characteristics

| Do | Don't |
|---|---|
| Plain English, no jargon | "Leveraging AI-powered solutions" |
| Speak directly — "you", "your business" | "Businesses", "our clients" |
| Trade-authentic vocabulary | Generic corporate language |
| Confident but not arrogant | "We're the best AI company in the UK" |
| Empathetic — "we know what it's like" | Lecturing or condescending |
| Straightforward about what we do and don't do | Vague promises or overclaiming |
| Short sentences, active voice | Long, passive, academic sentences |

### Example Voice

**✅ Good:** "You're halfway through a rewire and your phone rings. You can't stop. You shouldn't stop. But that caller? They're not leaving a voicemail. They're calling the next electrician on Google. Rapid Receptionist answers for you — instantly, professionally, 24/7."

**❌ Bad:** "Our proprietary AI receptionist platform leverages advanced natural language processing to ensure optimal lead capture across multiple communication vectors, enabling tradesmen to maintain operational efficiency."

### The "Built by Tradesmen" Story

Use language like:
- "We've been where you are"
- "We know you can't answer the phone when you're on a job"
- "Built by people who understand the trades"
- "We built this because tradesmen were losing jobs they should have won"

Do NOT reference:
- Jeff (the founder) by name
- Down To Earth AI
- Any personal founder story

---

# 4. USPs — Unique Selling Points

These must be prominently featured across the website. Group and deploy them strategically:

## Money & Risk USPs (for pricing page, CTAs, hero trust rows)

| USP | Short Form | Where to Use |
|---|---|---|
| **Only £99/month** | "Only £99/mo" | Hero trust row, pricing page, CTAs |
| **30-day money-back guarantee** | "30-day money-back guarantee" | Hero trust row, guarantee badge, every CTA |
| **No contracts** | "No contracts — cancel anytime" | Pricing page, CTAs, FAQs |
| **Setup fee fully refundable** | "Setup fee included in 30-day guarantee" | Pricing page, FAQs |
| **One captured emergency call pays for a year** | "One job pays for a year of service" | Trade pages, pricing justification |

## Service USPs (for feature sections, "What's Included")

| USP | Short Form | Where to Use |
|---|---|---|
| **100% done for you** | "✓ 100% done for you" | Hero trust row, every page |
| **9-channel coverage** | "9 channels, zero missed leads" | Feature grid, hero, homepage |
| **24/7/365** | "Always on. Christmas Day, 2am, bank holidays" | Feature descriptions, hero |
| **Human escalation** | "Real human backup when you need it" | Feature section, FAQs |
| **Trade-specific AI** | "Speaks your trade's language" | Trade pages, feature descriptions |
| **Unlimited messages** | "Unlimited messages across all text channels" | Pricing, feature section |

## Trust & Identity USPs (for trust sections, about page)

| USP | Short Form | Where to Use |
|---|---|---|
| **Built by tradesmen, for tradesmen** | "Built by tradesmen, for tradesmen" | Trust section, about page, footer |
| **Speaks your trade's language** | "Knows the difference between a full rewire and a socket addition" | Trade pages, feature descriptions |
| **No voicemail, no missed leads** | "Your callers never hear voicemail again" | Hero, problem sections |

## Speed-to-Lead USPs (for hero, speed sections, trade pages)

| USP | Short Form | Where to Use |
|---|---|---|
| **78% of customers hire the first responder** | "78% hire the first to respond" | Hero, speed-to-lead sections |
| **Responds instantly, every time** | "Instant response, every channel, every time" | Hero, feature sections |
| **Stop losing £24,000+/year** | "UK tradesmen lose £24,000+/year from missed calls" | Trade pages, cost-of-inaction sections |

---

# 5. Pricing & Commercial Model

## Single-Tier Pricing

| Item | Details |
|---|---|
| **Monthly Price** | £99/month |
| **Setup Fee** | £299 (one-time, "done for you") |
| **Talk Time** | 5 hours included |
| **Messages** | Unlimited (all text-based channels) |
| **Overage** | £0.20/minute |
| **Guarantee** | 30-day full money-back (setup fee + monthly fee) |
| **Contract** | None — cancel anytime |

## What's Included — Everything

- ✅ AI Phone Answering (24/7)
- ✅ AI Website Chat
- ✅ AI WhatsApp
- ✅ AI SMS
- ✅ AI Email
- ✅ AI Facebook Messenger
- ✅ AI Instagram DMs
- ✅ AI GBP Messages
- ✅ Missed Call Text-Back
- ✅ Human Escalation (business owner + Rapid Receptionist operators)
- ✅ Trade-specific AI training
- ✅ Full "done for you" setup

## 30-Day Money-Back Guarantee — How It Works

If the tradesman doesn't see a benefit within 30 days:
1. They contact us
2. We remove everything from their system
3. They receive a **full refund of the setup fee AND the monthly fee**
4. Zero hassle, zero risk

This replaces a free trial. The guarantee is stronger because the customer gets the FULL "done for you" setup — not a self-service trial with limited features.

## Why There's a Setup Fee

The £299 setup fee:
- Filters out tyre kickers — only committed tradesmen sign up
- Covers the genuine work of configuring their AI receptionist
- Is fully refundable within 30 days — so it's zero risk
- Ensures the tradesman values the service from day one

---

# 6. Target Market — The 13 Trades

These are the 13 trades Rapid Receptionist serves. Each trade requires unique content that demonstrates genuine understanding of their work, terminology, and challenges.

| Trade | Slug | Emergency Rating | Key Vocabulary |
|---|---|---|---|
| **Plumbers** | `plumbers` | ★★★★★ | Stopcocks, PRV, cylinder, unvented, combi boiler, immersion heater, soil pipe, waste trap, ball valve, overflow, radiator bleed |
| **Electricians** | `electricians` | ★★★★★ | Consumer unit, RCDs, MCBs, EICRs, Part P, BS 7671, fuseboard, ring main, radial circuit, bonding, earthing, emergency isolation |
| **Locksmiths** | `locksmiths` | ★★★★★ | Euro cylinder, anti-snap locks, Mul-T-Lock, Ultion, thumbturn, multipoint locks, deadlock, mortice, Yale, UPVC mechanism, lockout |
| **Gas Engineers** | `gas-engineers` | ★★★★★ | Gas Safe registered, flue, condensate, LPG, CP12, landlord certificate, boiler service, gas leak, carbon monoxide, ventilation, fault codes |
| **Drainage Engineers** | `drainage-engineers` | ★★★★☆ | CCTV survey, jetting, root ingress, collapsed drain, soakaway, manhole, interceptor, back-inlet gully, rodding, patch lining |
| **Glaziers** | `glaziers` | ★★★★☆ | Double glazing, sealed unit, toughened glass, laminated, Georgian bar, lead came, secondary glazing, boarding up, FENSA |
| **Roofers** | `roofers` | ★★★★☆ | Ridge tiles, flashing, felt, batten, soffit, fascia, valley gutter, hip, verge, slate, concrete tile, GRP fibreglass, torch-on |
| **HVAC Engineers** | `hvac-engineers` | ★★★★☆ | Split system, VRF, ducted, refrigerant, R410a, R32, heat pump, air handling unit, commissioning, F-gas, pressure test |
| **Alarm & Security Installers** | `alarm-installers` | ★★★☆☆ | Intruder alarm, CCTV, PIR, door contact, bell box, key holder, monitoring, Grade 2, NSI/SSAIB, access control, intercom |
| **Pest Control** | `pest-control` | ★★★☆☆ | Treatment, survey, proofing, bait station, fumigation, BPCA, COSHH, rodenticide, insecticide, infestation, exclusion |
| **Garage Door Engineers** | `garage-door-engineers` | ★★★☆☆ | Roller, sectional, up-and-over, canopy gear, retractable, torsion spring, cable drum, motor, remote, safety edge, auto-lock |
| **Builders** | `builders` | ★★☆☆☆ | Extension, loft conversion, structural, RSJ, building regs, planning permission, foundations, brickwork, blockwork, rendering |
| **Appliance Repair Engineers** | `appliance-repair-engineers` | ★★★☆☆ | PCB, element, thermostat, bearing, drum, door seal, motor, pump, filter, error code, gas ignition, oven element |

### Content Rules Per Trade

For each trade, the content MUST:
- Use genuine, specific trade vocabulary (see table above — but research deeper)
- Reference real UK regulations, certifications, and industry bodies
- Describe realistic scenarios from that trade's daily work
- Avoid generic "if you're a tradesman" language — everything must be trade-specific
- Understand the urgency profile (★★★★★ trades have more emergency content, ★★☆☆☆ trades focus more on volume/scheduling)

---

# 7. Service Channels — The 9-Channel System

## The 3-Tier Capability Framework

Every channel operates under one of three tiers. **Never claim capabilities beyond what each tier provides.**

### Tier 1: CONVERSATIONAL — Phone + Website Chat
- Full back-and-forth conversation
- Answers with the tradesman's business name
- Captures: lead details (name, number, location), problem details, customer requirements
- Provides helpful information about the business and services
- Assesses urgency during the conversation
- If urgent → offers escalation to business owner or Rapid Receptionist human operators
- If not urgent → explains the business owner will call back when free

### Tier 2: ONE REPLY — WhatsApp, Facebook, Instagram, GBP, Email, SMS
- Captures lead details and nature of work from the customer's message
- Sends ONE professional reply acknowledging the enquiry
- Assesses urgency from message content
- If urgent → escalation path (business owner → Rapid Receptionist human operators)
- If not urgent → reply tells customer the business owner will call back when free
- **NO back-and-forth conversation** on these channels

### Tier 3: FALLBACK — Missed Call Text-Back
- Safety net only — activates ONLY if the caller hangs up before the AI answers or the call disconnects
- Sends ONE text: currently busy on a job, will be in touch when finished
- **NO conversation, NO detail capture, NO diagnosis, NO scheduling**

## Channel List

| Channel | Tier | Description for Content |
|---|---|---|
| **AI Phone Answering** | 1 | The flagship — answers calls 24/7 with the tradesman's business name, has a real conversation |
| **AI Website Chat** | 1 | Live chat widget on their website — converts visitors into leads without human monitoring |
| **AI WhatsApp** | 2 | Responds to WhatsApp messages — popular with UK customers who send photos of problems |
| **AI SMS** | 2 | Professional text message responses to enquiries |
| **AI Email** | 2 | Acknowledges email enquiries with a professional first response |
| **AI Facebook Messenger** | 2 | Handles Facebook business page messages — captures leads from social |
| **AI Instagram DMs** | 2 | Responds to Instagram direct messages — captures leads from trades showing their work |
| **AI GBP Messages** | 2 | Google Business Profile message responses |
| **AI Missed Call Text-Back** | 3 | Automatic safety net text when a call is missed |

## What The AI NEVER Does (Any Channel)

- ❌ Provides pricing or quotes
- ❌ Gives technical or trade-specific advice
- ❌ Books appointments or schedules visits
- ❌ Diagnoses faults remotely
- ❌ Discusses product specifications or recommendations
- ❌ Has extended multi-message conversations (Tier 2/3 channels)

---

# 8. Content Rules — What The AI Can & Cannot Do

This section governs ALL content on the website. **Never overclaim.** The integrity of the brand depends on accuracy.

### Core Interaction Flow (All Channels)
1. **Capture lead details** — name, contact info, location
2. **Understand the nature of the work** — what's the problem, what do they need
3. **Assess urgency** — is this urgent or routine?
4. **Route accordingly** — escalate urgent, or promise callback for routine

### What You CAN Say
- "Answers your calls 24/7"
- "Captures every lead"
- "Speaks your trade's language"
- "Triages urgent vs routine enquiries"
- "Escalates emergencies to you or our human operators"
- "Responds instantly across 9 channels"
- "Prevents missed calls and lost leads"

### What You MUST NOT Say
- "Books appointments" or anything suggesting scheduling capability
- "Provides quotes" or pricing
- "Diagnoses problems" or gives technical advice
- "Replaces a human receptionist" — say "works alongside you" or "answers when you can't"
- "Guarantees more revenue" — use "helps capture leads that would otherwise be lost"

---

# 9. Human Escalation Protocol

The AI receptionist escalates to a real human in three scenarios:

1. **Customer frustration** — The caller is getting frustrated or dissatisfied with the AI interaction
2. **Explicit request** — The caller specifically asks to speak to a human / real person
3. **Emergency situations** — The call involves a genuine emergency requiring immediate human judgement

### Escalation Priority Order
1. **The tradesman / business owner** (their direct line)
2. **A Rapid Receptionist human operator** who takes over the call/enquiry

### Urgent Triggers Include
Active leaks, safety concerns, gas smells, electrical hazards, vulnerable occupants (elderly, children, disabled), insurance compliance deadlines, business-critical breakdowns, security breaches, customer explicitly requesting a human.

### How to Write About Escalation
This is a significant competitive advantage — only 3 of 7 competitors offer human escalation, and none offer their own operator team. Emphasise:
- "When the AI reaches its limits, a real person steps in"
- "Your customers never get stuck in a loop — if they need a human, they get one"
- "Emergencies are escalated immediately to you or our human team"

---

# 10. Speed-to-Lead — The Core USP

This is Rapid Receptionist's single most powerful sales argument. **Use this data prominently throughout the website.**

## Response Time Impact on Conversion

| Statistic | Source |
|---|---|
| **78% of customers buy from the business that responds first** | LeadConnect / LeanData |
| **Leads contacted within 5 minutes are 21× more likely to convert** than after 30 minutes | MIT Lead Response Management Study |
| **Responding within 1 minute increases conversions by 391%** | Velocify |
| **Leads are 100× more likely to be reached** within 5 minutes vs 30 minutes | Forbes |
| **Leads are 60× more likely to qualify** within 1 hour vs 24 hours | Harvard Business Review |
| **82% of consumers expect a response within 10 minutes** | HubSpot |
| **66% of customers say speed is as important as price** | Forbes |
| **Over 50% of people hire the first business to respond**, even if more expensive | Forbes |

## The Missed Call Problem for UK Trades

| Statistic | Source |
|---|---|
| **62% of calls to small trade businesses go unanswered** | CallRail / JP Automations |
| **85% of callers who reach voicemail will NOT call back** | Quality Company Formations |
| **80% of callers sent to voicemail don't leave a message** | SellCell |
| **The average UK tradesperson loses ~£24,000/year** from missed calls | JP Automations |
| **Contractors lose £50,000+ per year** from missed calls | SkipCalls |
| **Missing 2-3 calls/day at £150/job = £4,500+/month lost** | ReminderPal (UK trades) |

## The Revenue Opportunity

| Claim | Validation |
|---|---|
| **Rapid response adds £50,000-£70,000/year to a trade business** | Validated — differential between 100% answer rate and 62% miss rate |
| **One captured emergency call pays for a year of service** | Validated — at £99/mo, a single emergency job (£150-500) covers months |
| **First responder wins the job 78% of the time** | Validated — multiple sources confirm 50-78% |

## Where to Use Speed-to-Lead Data

1. **Hero section** → "78% of customers hire the first business to respond. Rapid Receptionist makes sure that's you."
2. **Feature pages** → Use stats alongside each channel
3. **Trade pages** → "The average UK [trade] loses £24,000 a year from missed calls"
4. **Pricing page** → "One captured emergency call pays for a year of service"
5. **FAQs** → Weave stats into answers about "why do I need an AI receptionist?"

---

# 11. Testimonials

Use these 10 testimonials on the website. They should appear in a testimonial slider component.

### Testimonial 1
> "Out of 6 leads that came through, 4 of them got back to me — things are definitely heading the right way. Much appreciated."
> — Owner, Contracting Business

### Testimonial 2
> "Absolutely delighted with how the site turned out. I know this wasn't a standard build — it's been done to a really high standard and I'm genuinely impressed with the quality."
> — Director, UK Roofing Company

### Testimonial 3
> "It gives me real peace of mind knowing someone's got my back and leaving no stone unturned. Genuinely grateful for the effort."
> — UK Small Contractor

### Testimonial 4
> "Really impressive — all the hard work that's gone into this is showing through in the finished result. It's come together brilliantly."
> — UK Self-Employed Contractor

### Testimonial 5
> "Happy with the whole setup. The main thing is it seems to be doing its job, which is all I can ask for. Looking forward to converting the leads into actual work."
> — UK Roof Cleaning Contractor

### Testimonial 6
> "We've used other agencies before, but this was a different experience entirely. Thoughtful, collaborative, professional, and straightforward to deal with. In a short space of time, they became one of our most valued business relationships."
> — CEO, UK Services Business

### Testimonial 7
> "I spent years trying to find someone who could genuinely prospect for my business. Never managed to find the right fit — until now."
> — CEO, UK National Service Business

### Testimonial 8
> "The enthusiasm, perseverance and sheer doggedness has been exactly what you want in this line of work. Over 50 solid leads generated for us so far, including several very well-known clients."
> — Managing Director, UK Services Business

### Testimonial 9
> "We've been working together for over a year now. The outreach programme has been developed and managed to a high standard, consistently generating quality leads. Wouldn't hesitate to recommend the service."
> — CEO, UK National Service Business

### Testimonial 10
> "An invaluable part of our business growth — the leads we've received have been consistently well-targeted and high quality."
> — Managing Director, International Company

---

# 12. Website Architecture

## Page Structure

```
rapidreceptionist.co.uk/
├── index.astro                          — Homepage
├── pricing.astro                        — Single-tier pricing page
├── about.astro                          — "Built by tradesmen" story
├── get-started.astro                    — Signup / lead capture
├── contact.astro                        — Contact form
├── terms.astro                          — Terms of service
├── privacy.astro                        — Privacy policy
│
├── [13 Trade Hub Pages]
│   ├── ai-receptionist-for-plumbers.astro
│   ├── ai-receptionist-for-electricians.astro
│   ├── ai-receptionist-for-locksmiths.astro
│   ├── ai-receptionist-for-gas-engineers.astro
│   ├── ai-receptionist-for-drainage-engineers.astro
│   ├── ai-receptionist-for-glaziers.astro
│   ├── ai-receptionist-for-roofers.astro
│   ├── ai-receptionist-for-hvac-engineers.astro
│   ├── ai-receptionist-for-alarm-installers.astro
│   ├── ai-receptionist-for-pest-control.astro
│   ├── ai-receptionist-for-garage-door-engineers.astro
│   ├── ai-receptionist-for-builders.astro
│   └── ai-receptionist-for-appliance-repair-engineers.astro
│
├── [9 × 13 = 117 Channel × Trade Pages]
│   ├── ai-phone-answering-for-plumbers.astro
│   ├── ai-phone-answering-for-electricians.astro
│   ├── ... (every combination of channel × trade)
│   ├── ai-whatsapp-for-plumbers.astro
│   ├── ai-sms-for-plumbers.astro
│   ├── ai-email-for-plumbers.astro
│   ├── ai-website-chat-for-plumbers.astro
│   ├── ai-facebook-messenger-for-plumbers.astro
│   ├── ai-instagram-dm-for-plumbers.astro
│   ├── ai-missed-call-text-back-for-plumbers.astro
│   └── ai-gbp-messages-for-plumbers.astro
│
└── [Generic Channel Hub Pages (optional — if time permits)]
    ├── ai-phone-answering-for-tradesmen.astro
    ├── ai-whatsapp-for-tradesmen.astro
    └── ... (one per channel, generic/no specific trade)
```

### Total Page Count
- 7 core pages (home, pricing, about, get-started, contact, terms, privacy)
- 13 trade hub pages
- 117 channel × trade pages (9 channels × 13 trades)
- 9 generic channel hub pages (optional)
- **Total: ~146 pages**

---

# 13. Page Structure Templates

## Trade Hub Page Structure (e.g. `ai-receptionist-for-plumbers`)

Each trade hub page must contain these sections in this order:

### Section 1: Hero
- **Headline:** Trade-specific, compelling, includes the trade name
- **Subhead:** 1-2 sentences explaining what Rapid Receptionist does for this specific trade
- **Trust row:** `✓ 100% done for you` · `Only £99/month` · `🛡 30-day money-back guarantee · No Contracts`
- **AI Widget:** Interactive chat widget in hero (same concept as DTEAI's HeroJaina)

### Section 2: Speed-to-Lead Banner
- **NEW section (not in DTEAI)** — A prominent stat banner:
- Lead with a speed-to-lead statistic relevant to this trade
- Example: "78% of customers hire the first business to respond. When you're under a boiler, Rapid Receptionist makes sure that's still you."

### Section 3: Trade Scenario
- An emotionally resonant, trade-specific scenario
- Written in second person ("You're...")
- Describes a realistic moment when they can't answer the phone
- Must be genuinely different for each trade — plumber scenarios are NOT like electrician scenarios

### Section 4: How It Works (3 Steps)
- Step 1: Setup — describe the "done for you" onboarding
- Step 2: The AI takes over — describe what happens when a customer contacts them
- Step 3: Results — describe what the tradesman receives (lead notification, details, etc.)
- Each step must use trade-specific examples

### Section 5: What's Included (9 Features)
- Grid of all 9 channels included in the service
- Each feature has a name, description, and link to the channel × trade page
- Descriptions must be trade-specific, not generic

### Section 6: Trust Section — "Built by Tradesmen, for Tradesmen"
- A short trust paragraph (replaces DTEAI's "Founder's Note")
- Speaks to the shared trade experience
- Followed by the guarantee badge

### Section 7: Testimonial Slider
- Display the 10 testimonials in a slider/carousel

### Section 8: FAQs
- **10 FAQs per trade hub page**
- Each FAQ targets a specific long-tail search query
- 150-300 words per answer
- All unique to this trade — zero overlap with other trade pages

### Section 9: CTA
- "Ready To Get Started?"
- Price displayed, guarantee mentioned
- Clear call-to-action button

---

## Channel × Trade Page Structure (e.g. `ai-phone-answering-for-plumbers`)

These are leaner pages focused on one specific channel for one specific trade.

### Section 1: Hero
- **Headline:** Channel + trade specific
- **Subhead:** What this specific channel does for this specific trade
- **Trust row:** Same USP badges as trade hub

### Section 2: Trade + Channel Scenario
- A scenario specific to THIS channel and THIS trade
- Example for phone + plumber: "It's 8pm, you're in the middle of an emergency repair, and your phone starts ringing..."
- Example for WhatsApp + electrician: "A customer sends you a photo of their sparking socket on WhatsApp at 11pm..."

### Section 3: How It Works (3 Steps)
- Channel-specific steps — how THIS channel works for THIS trade
- Must be different from the trade hub's "how it works"

### Section 4: FAQs
- **8 FAQs per channel × trade page**
- Each FAQ targets a long-tail search query combining the channel AND the trade
- 150-300 words per answer
- Zero overlap with other pages

### Section 5: CTA
- Conversion point with price and guarantee

### Section 6: Trade Hub Link
- Link back to the parent trade hub page

---

# 14. FAQ Strategy

## The Dual Purpose

FAQs serve two functions simultaneously:
1. **Conversion:** Handle objections and build confidence
2. **SEO:** Target long-tail search queries that drive organic traffic

## Specifications

| Page Type | Number of FAQs | Words per Answer |
|---|---|---|
| Trade Hub Pages | **10** | 150-300 |
| Channel × Trade Pages | **8** | 150-300 |

## Rules

### CRITICAL — Content Quality

1. **Every FAQ must be written individually by AI as unique, original content**
2. **NEVER generate FAQs programmatically** — no scripts, no loops, no templates
3. **NEVER spin or paraphrase** FAQs from other pages
4. **No two FAQ answers across the entire site should be interchangeable**
5. Each answer must read as if a knowledgeable tradesman wrote it

### SEO Targeting

1. **Question format must match search queries** — write questions the way people search
2. **Include trade-specific terminology** in both questions and answers
3. **Each FAQ should target a distinct keyword/query** — don't double up
4. **Use varied UK locations** — don't over-index on any single region
5. **Include UK-specific references** — regulations, certifications, industry bodies

### Question Strategy by Page Type

**Trade Hub Page FAQs** should cover:
- What is an AI receptionist for [trade]? (main definition)
- How does it work specifically for [trade]?
- How much does it cost? / Is it worth it for [trade]?
- What happens when a customer calls my [trade] business?
- Can the AI handle [trade-specific scenario]?
- How does it handle emergencies for [trade]?
- What channels are included?
- How is this better than voicemail / a virtual receptionist?
- How quickly does it take to set up?
- What if I don't like it? (30-day guarantee)

**Channel × Trade Page FAQs** should cover:
- How does [channel] work for [trade]?
- What happens when a customer contacts via [channel]?
- Can the AI understand [trade-specific problem] via [channel]?
- Is [channel] important for [trade] businesses?
- How fast does it respond on [channel]?
- What information does it capture via [channel]?
- How does [channel] compare to voicemail / not having it?
- Can I see what was said on [channel]?

### FAQ Schema Markup

Every FAQ section MUST include JSON-LD structured data for Google FAQ rich snippets:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here"
      }
    }
  ]
}
```

---

# 15. SEO Requirements

## Meta Titles

Format: `[Primary keyword] | Rapid Receptionist`

Examples:
- `AI Receptionist for UK Plumbers — Never Miss a Job | Rapid Receptionist`
- `AI Phone Answering for UK Electricians — 24/7 Coverage | Rapid Receptionist`

Rules:
- Include "UK" before the trade name
- Keep under 60 characters where possible
- Include primary keyword
- Always end with `| Rapid Receptionist`

## Meta Descriptions

Rules:
- 150-160 characters
- Include primary keyword
- Include a USP (price, guarantee, or speed-to-lead stat)
- Include a call-to-action
- Must be unique per page

Example:
`AI receptionist for UK plumbers. Answers calls, WhatsApp, SMS & 6 more channels 24/7. Only £99/mo. 30-day money-back guarantee. Never miss a job again.`

## Schema Markup

Every page should include:
- **FAQPage schema** (for FAQ sections)
- **LocalBusiness schema** (on core pages)
- **Service schema** (on feature pages)
- **BreadcrumbList schema** (for navigation)

## Open Graph

Every page must include:
- `og:title`
- `og:description`
- `og:url`
- `og:type`
- `og:image` (when available)

---

# 16. Design System

## Visual Style

- **Theme:** Dark mode only
- **Feel:** Professional, trustworthy, modern — not flashy or gimmicky
- **Layout:** Clean, card-based sections with alternating backgrounds
- **Spacing:** Generous whitespace, never cramped
- **Animations:** Subtle and purposeful — hover effects, smooth transitions. No gratuitous animation.
- **Responsive:** Mobile-first, works perfectly on all devices

## Component List (Build These)

| Component | Purpose |
|---|---|
| **Header** | Global navigation — logo, trade dropdown, pricing link, get-started CTA |
| **Footer** | Links, copyright, "Built by tradesmen, for tradesmen" |
| **HeroSection** | Hero with headline, subhead, trust row, AI widget area |
| **SpeedBanner** | Speed-to-lead stat banner (NEW — not in DTEAI) |
| **ScenarioBlock** | Italicised trade scenario in narrow container |
| **StepsGrid** | 3-column "How It Works" with numbered circles |
| **FeatureGrid** | 2-column grid of included features with checkmarks |
| **TrustSection** | "Built by tradesmen" blockquote + guarantee badge |
| **TestimonialSlider** | Auto-rotating testimonial carousel |
| **FAQAccordion** | Expandable FAQ section with schema markup |
| **GuaranteeBadge** | 30-day money-back guarantee shield badge |
| **CTAButton** | Primary call-to-action with price display |
| **CTASection** | "Ready to get started?" conversion section |
| **PricingCard** | Single-tier pricing display |
| **CookieConsent** | GDPR cookie consent banner |

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* Backgrounds */
  --color-primary: #0B0F19;
  --color-secondary: #131829;
  --color-surface: #1C2235;

  /* Accent — Royal Blue */
  --color-accent: #2563EB;
  --color-accent-hover: #1D4ED8;
  --color-accent-subtle: rgba(37, 99, 235, 0.12);

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;

  /* Border */
  --color-border-subtle: #1E293B;

  /* Trust */
  --color-trust: #22C55E;

  /* Speed/Urgency (sparingly) */
  --color-speed: #F59E0B;

  /* Typography */
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
```

---

# 17. Technical Setup

## Framework

- **Astro** (latest stable version) — same framework as DTEAI
- Static site generation (SSG) — no server-side rendering needed
- Deploy to static hosting (Vercel, Netlify, or similar)

## Project Initialisation

```bash
npx -y create-astro@latest ./
```

## Dependencies

- `astro` — core framework
- Google Fonts (Inter) — via `<link>` tag, no npm package needed
- No Tailwind CSS — use vanilla CSS with custom properties
- No React/Vue/Svelte — pure Astro components

## File Structure

```
src/
├── layouts/
│   ├── BaseLayout.astro          — HTML shell, head, global styles
│   ├── TradeHubLayout.astro      — Template for trade hub pages
│   └── ChannelTradeLayout.astro  — Template for channel × trade pages
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── HeroSection.astro
│   ├── SpeedBanner.astro
│   ├── ScenarioBlock.astro
│   ├── StepsGrid.astro
│   ├── FeatureGrid.astro
│   ├── TrustSection.astro
│   ├── TestimonialSlider.astro
│   ├── FAQAccordion.astro
│   ├── GuaranteeBadge.astro
│   ├── CTAButton.astro
│   ├── CTASection.astro
│   ├── PricingCard.astro
│   └── CookieConsent.astro
├── styles/
│   └── global.css
├── data/
│   ├── trades.json
│   ├── channels.json
│   └── testimonials.json
├── pages/
│   ├── index.astro
│   ├── pricing.astro
│   ├── about.astro
│   ├── get-started.astro
│   ├── contact.astro
│   ├── terms.astro
│   ├── privacy.astro
│   ├── ai-receptionist-for-plumbers.astro
│   ├── ai-receptionist-for-electricians.astro
│   ├── ... (all trade hub pages)
│   ├── ai-phone-answering-for-plumbers.astro
│   ├── ai-phone-answering-for-electricians.astro
│   └── ... (all channel × trade pages)
└── assets/
    └── (images, logo, etc.)
```

## GoHighLevel Widget

The AI chat widget will be added via GoHighLevel. The owner will provide a script tag to add to the site. Prepare a placeholder in the layout:

```html
<!-- GoHighLevel AI Widget — script will be provided by owner -->
<!-- <script src="..." async></script> -->
```

---

# 18. Content Quality Rules

## ABSOLUTE REQUIREMENTS

1. **Every single page must contain 100% unique, AI-generated content**
2. **No programmatic content generation** — do not use scripts, loops, or templates to mass-produce page content
3. **No content spinning** — do not take one page's content and swap words to create variants
4. **No copy-pasting between pages** — each page's headlines, scenarios, steps, and FAQs must be written from scratch
5. **No placeholder or Lorem Ipsum text** — every word must be meaningful and final
6. **No copying from the reference folder** — the `_reference/` folder is for architectural inspiration only, not content

## Quality Bar

- Each page should read as if hand-written by a copywriter who deeply understands that specific trade
- A plumber's page should FEEL different from an electrician's page — different language, different concerns, different scenarios
- Content should be natural, conversational, and authentic — not robotic or template-feeling
- UK English throughout — colour, recognise, licence, etc.
- Prices in GBP (£)
- UK-specific references: Gas Safe, NICEIC, NAPIT, BPCA, Part P, EICRs, stopcocks, consumer units, letting agents, etc.
- **Varied UK locations** in FAQs — use a mix of regions, NOT just one area. Some FAQs should have no location at all.

## Speed-to-Lead Data Attribution

When using speed-to-lead statistics:
- You may reference the statistic without citing the source inline (the data is verified)
- Use natural language: "Research shows that 78% of customers hire the first business to respond" not "According to LeadConnect/LeanData (2023)..."
- Don't overload any single page with statistics — 2-3 per page is enough

---

# 19. Reference Folder Usage

The `_reference/` folder contains the Down To Earth AI (DTEAI) website codebase. This is included as a **quality benchmark and architectural reference only**.

## What to Reference

- **Architecture patterns** — how layouts are structured, how data files feed pages
- **Component patterns** — how the accordion, slider, hero, and CTA components work
- **Quality level** — the depth of trade-specific content, the scenario writing quality
- **Page flow** — the section order (hero → scenario → steps → features → trust → FAQs → CTA)

## What NOT to Reference

- **Do not copy any content** — no headlines, scenarios, FAQs, descriptions, or body copy
- **Do not reuse the design** — create a visually distinct site (different colours, different accent style, different card treatments)
- **Do not reference "Jeff", "Jaina", or "Down To Earth"** anywhere in Rapid Receptionist content
- **Do not copy component names** — create your own component naming convention

## The Goal

The reference shows what "good" looks like. Your job is to build something **equally good or better** that is completely distinct. A visitor should be able to look at both sites side by side and see two clearly different brands — but both at the same high quality level.

---

# Execution Priority

Build the website in this order:

1. **Setup** — Initialise Astro project, create design system (global.css), set up data files
2. **Core components** — Header, Footer, HeroSection, CTAButton, GuaranteeBadge, FAQAccordion
3. **Layouts** — BaseLayout, TradeHubLayout, ChannelTradeLayout
4. **Homepage** — The flagship page that sets the tone
5. **Pricing page** — Simple, single-tier, compelling
6. **First trade hub page** (Plumbers) — Use as the template/quality benchmark
7. **First set of channel × trade pages** (all 9 channels for Plumbers) — Validate the channel page quality
8. **Remaining trade hub pages** (12 more trades)
9. **Remaining channel × trade pages** (108 more pages)
10. **Core pages** — About, Get Started, Contact
11. **Legal pages** — Terms, Privacy
12. **Polish** — Cross-page links, final SEO review, performance optimisation
