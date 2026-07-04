# WENG Hard Techno DJ/Producer Website — Product Requirements Document

**Artist Website — v1.0**
Prepared for: Design
Owner: WENG
Date: June 2026

---

## 1. Overview

### The problem
Hard techno and underground electronic artists overwhelmingly rely on Instagram as their only online presence. This works well for fan engagement but does nothing for the moments that matter most for career growth: a promoter vetting an artist before a booking, a label considering a release, a journalist researching a feature. In those moments, an Instagram profile reads as a fan-facing feed, not a professional credential.

### The opportunity
A personal website does not compete with Instagram for attention. It serves a different audience at a different moment — people who are already paying attention and are deciding whether to act (book, sign, feature, collaborate). Almost no one in the hard techno scene has built this. A well-made site is therefore a low-cost, high-signal differentiator.

### What this document covers
This PRD defines the goals, audience, structure, page-by-page requirements, and design direction for the first version of weng.com. It is written for a product designer to translate into wireframes and high-fidelity design. It does not cover backend/CMS architecture or marketing distribution — those are addressed separately.

---

## 2. Goals

### Primary goal
Give gatekeepers — promoters, bookers, labels, press — a single, professional, on-brand destination that answers "who is WENG and is she worth booking/featuring" in under 30 seconds.

### Secondary goals
- Give new fans discovering WENG through a collab, feature, or shared post a deeper, longer-form version of her story than any social caption allows.
- Function as the canonical link distributed in DMs, booking emails, press kits, and the Instagram bio — replacing scattered links across Spotify, SoundCloud, and YouTube.
- Begin compounding long-term SEO value as a stable, indexable home base that other sites (festival lineups, label pages, press features) can link back to.

### Non-goals (v1)
- This is not a fan community hub, a merch store, or a blog. No comments, no e-commerce, no CMS-driven news feed in v1.
- This does not replace Instagram as the primary engagement channel. It is a complementary, lower-frequency asset.

---

## 3. Audience

### Primary audience — the decision-makers
People who are about to make a decision about WENG: promoters and bookers, label A&Rs, fellow artists considering a collaboration, journalists and curators. They are not casual browsers. They arrive with intent, usually from a DM, a submission form, or a shared link — and they are scanning for credibility signals, not entertainment.

### Secondary audience — the newly curious
People who just encountered WENG for the first time — through a shared post, a b2b set, a friend's recommendation, a tech/AI-world crossover post — and want more context than a 15-second Reel can give. This group is drawn in by the contrast (AI by day, hard techno by night) and converts into a real fan through depth: the story, the music, the person.

### What both groups need, ranked
1. Proof of the music — actually hear it, immediately, without hunting for a link.
2. Proof of the story — enough context to understand why this artist is interesting, not just attractive.
3. A clear next action — book her, follow her, or go deeper (Instagram, Spotify, SoundCloud).

---

## 4. Brand & Design Direction

### The core tension to design for
WENG's brand is built on contrast: an elegant, feminine presence paired with brutal, industrial, high-BPM music. Classical training paired with underground aggression. A corporate AI product career paired with a night life most colleagues never see. The website's visual language should hold the same tension the brand already holds — it should not default to typical "aggressive techno" visual tropes (all-black, distressed type, neon red/green), because that's what every other artist in the genre already does, and it would erase the elegance half of the contrast.

The reference images provided define the visual world precisely: a textured, off-white xuan zhi paper background; a black ink-wash portrait that is elegant but slightly volatile at the edges (the ink "bleeds," it doesn't stay contained); and the 翁 calligraphy mark paired with clean, minimal sans-serif wordmark typography. This combination — soft material, sharp mark — is the entire design language. The designer should treat these three images as the literal mood board, not just loose inspiration.

**Reference 1** — primary lockup: calligraphy mark + wordmark on textured paper. Use as the canonical logo lockup across the site.

**Reference 2** — portrait treatment: ink-wash, monochrome, texture bleeding at the edges of the frame. This treatment (or one consistent with it) should be used for the hero/about imagery — not a standard photographic portrait.

**Reference 3** — wide-format variant of the primary lockup. Use as a model for the site's wide hero crop and any banner-style placements.

### Design principles
- Cold, minimal, editorial layout — generous whitespace, restrained type, closer to a design portfolio than a typical artist site. The calm of the layout is what makes the music feel more jarring when it plays.
- Monochrome first. Black ink on off-white/textured paper is the base palette. Resist adding color — the contrast comes from the tension between visual stillness and sonic intensity, not from a color accent.
- Texture is allowed, gradients are not. The paper grain and ink-bleed texture from the reference images can recur subtly as background texture, but avoid glossy gradients, drop shadows, or anything that reads as a generic "music template."
- Typography: one clean, confident sans-serif for all wordmark and UI text (matching the reference's WENG lockup type), paired with the calligraphy mark as the only "decorative" element on the page. No second display font.
- Motion, if used at all, should be slow and deliberate — a slow fade, a subtle ink-bleed animation on load — never bouncy, never "fun." The brand is dry and confident, not playful.

### What to avoid
- Generic dark-mode techno-site tropes: all-black backgrounds, neon red/purple gradients, glitch effects, distressed grunge type.
- Anything that reads as a Linktree, EPK template, or stock WordPress musician theme.
- Overt sexualization of the portrait imagery — the elegance is the hook, not the angle.

---

## 5. Site Map & Information Architecture

Single-page scroll for v1, not a multi-page site. Gatekeepers and new fans both want the full picture fast — a single scroll with clear sections lets them get the complete story without navigation decisions. A sticky minimal nav (or just a fixed corner mark) lets returning visitors jump to a section if needed.

| Section | Purpose |
|---|---|
| 01 — Hero | Deliver the contrast in one glance: mark, name, one line of positioning, ambient looping visual or audio cue. Icon hyperlinks to social media platforms. |
| 02 — Listen | Embedded players (Spotify) and a featured DJ set (YouTube). The proof of the music, front and center. |
| 03 — About | The longer-form bio. The five-layer identity. This is the section Instagram has no room for. |
| 04 — Live / Press | Curated live photos, past bookings/festivals, any press mentions (grows over time). |
| 05 — Booking / Contact | Single clear contact path. No clutter. |
| 06 — Footer | Standard website footer for professional DJ/Producer portfolio |

---

## 6. Section-by-Section Requirements

### 6.1 — Hero

**Purpose:** Communicate the contrast and the brand world in under 3 seconds, before any scrolling or reading happens.

**Requirements:**
- Full-viewport-height section on load.
- Background: textured paper treatment consistent with Reference 1/2 (subtly animated ink bleed is a nice-to-have, not required for v1).
- Centerpiece: the 翁 / WENG calligraphy lockup (Reference 1), sized prominently but not overwhelming the whole screen.
- One line of positioning copy beneath the mark — short, dry, confident. Example direction (copy to be finalized separately): "AI by day. Hard techno by night." This is a placeholder for the content workstream, not final copy.
- Icon-only hyperlinks to priority social/media platforms, visually quiet but immediately available. These should not read as a Linktree-style link stack.
- A single scroll-cue (subtle down-arrow or "listen" prompt) — no navigation clutter above the fold.
- Nice-to-have: a few seconds of ambient audio from a set, muted by default with an explicit unmute control — never autoplay sound.

### 6.2 — Listen

**Purpose:** Let a visitor hear WENG within one click, with zero friction. This is the single highest-priority functional requirement on the entire site.

**Requirements:**
- Embedded Spotify player (latest release or an artist playlist) — inline, not a link-out.
- One featured YouTube DJ set embed, prioritized above older sets.
- Optional secondary embed/link for additional mixes if needed, but Spotify and YouTube are the required v1 proof points.
- Clear visual hierarchy: one "featured" piece (most recent release or best set) should be larger/first; everything else can be a smaller secondary row.
- All embeds must work without requiring the visitor to leave the page or log into anything.

### 6.3 — About

**Purpose:** Tell the full story that no social caption has room for — the five-layer identity, the classical training, the AI career, the cultural identity — in a way that feels intentional, not like a résumé.

**Requirements:**
- Portrait imagery consistent with Reference 2 (ink-wash treatment) paired with body text — image and text side-by-side on desktop, stacked on mobile.
- Two to three short paragraphs, not a long-form essay — depth without density. Final copy is a separate workstream, but the section should be scoped for roughly 120–180 words.
- The calligraphy mark (翁) can appear again here as a quiet signature element near the bio — not explained, not captioned.
- Avoid resume-style bullet lists of achievements here — keep it narrative, consistent with brand voice (dry, confident, not tryhard).

### 6.4 — Live / Press

**Purpose:** Provide social proof that WENG performs in real venues, for real crowds, and (over time) has been covered by real outlets. This section is the most important one for the gatekeeper audience specifically.

**Requirements:**
- A curated grid of live photos (not a dump — 6 to 10 strong images max for v1). Quality and consistency of treatment over quantity.
- A simple, clean list or logo row of past bookings/festivals once there are 3+ to show. Until then, this can be a smaller or omitted module — do not pad with weak placeholders.
- A press/features module designed to scale — starts empty or minimal, designed so a new feature can be added as a single card without redesigning the section.

### 6.5 — Booking / Contact

**Purpose:** Give the gatekeeper audience the one clear next action after they've been convinced.

**Requirements:**
- One clear heading (e.g. "Booking") and one method of contact — a direct email link is simplest for v1; a lightweight form is acceptable if preferred, but should not require more than name, contact info, and message.
- No social-media DM prompt here — this section should feel like a professional channel, distinct from the Instagram-DM relationship-building flow used elsewhere.
- Keep this section short. It should never feel like the visitor has to do work to reach her.

### 6.6 — Footer

**Purpose:** Close the page with a restrained, professional DJ/producer portfolio footer that reinforces brand consistency without adding new decision paths.

**Requirements:**
- Social links, Instagram listed first/most prominent, consistent with it being the primary platform.
- Closing use of the calligraphy mark as a signature, echoing the hero.
- Minimal legal line (e.g. © year, WENG) — nothing heavier.

---

## 7. Functional & Technical Requirements

| Requirement | Detail |
|---|---|
| Platform | Single scroll page, fully responsive. Mobile is the more likely first-touch device for fans; desktop is more likely for gatekeepers reviewing before a booking decision — both must be fully considered, not mobile-first-only. |
| Performance | Page should load and show the hero within 2 seconds on a typical mobile connection. Embedded players should lazy-load (not block initial paint). |
| No autoplay audio | Any audio must require explicit user action to play. Autoplay-with-sound is a hard rule, not a preference. |
| Updatability | Press/features and live-photo sections should be structured so new entries can be added without a full redesign (even if not a full CMS in v1). |
| Analytics | Basic visit and click tracking (e.g. link clicks to booking email, Spotify, Instagram) for the team's own visibility into how the site is being used. |
| SEO basics | Proper page title, meta description, and structured data (artist name, genre) — foundational only; the bulk of SEO value accrues externally over time, not from on-site tricks. |

<!-- ---

## 8. Open Questions for Design

- Should the hero include a muted ambient audio/video loop in v1, or is a static treatment sufficient until there's bandwidth to produce that asset?
- Is a sticky/minimal nav needed, or does a single uninterrupted scroll serve the audience better given the page is short?
- Do we need a dedicated mobile-only "quick links" bar (Spotify / Instagram / Booking) pinned to the bottom of the viewport, given many fans will land here from a phone?
- Should the Live/Press section be hidden or minimized entirely until there are at least 2–3 real entries, to avoid looking sparse at launch? -->
