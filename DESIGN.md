# Focofirm — Design Strategy Document

---

## 1. Brand Overview

**Brand Name:** Focofirm  
**Tagline:** *Cultivating a Greener Future Through Sustainable Agriculture*  
**Industry:** AgriTech / Sustainable Farming  
**Audience:** Farmers, agribusiness investors, agricultural organizations, eco-conscious consumers

---

## 2. Design Philosophy

> **"Earth-rooted, tech-forward."**

Focofirm lives at the intersection of nature and innovation. The design language should feel like walking through a well-tended field — grounded, purposeful, and alive — while communicating cutting-edge precision and trust. Every visual decision reinforces the dual promise: *organic integrity + technological intelligence.*

**Core Aesthetic Direction:** **Organic Modernism**  
Warm earth tones balanced with crisp structure. Photography-led storytelling. Typography that feels both authoritative and approachable. Not cold SaaS. Not rustic farmhouse. A premium blend of both.

---

## 3. Visual Identity

### 3.1 Color Palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| **Primary** | Deep Forest Green | `#1A3C2E` | Headers, CTAs, nav background |
| **Secondary** | Harvest Gold | `#C8A84B` | Accents, highlights, hover states |
| **Accent** | Lime Growth | `#6ABF4B` | Icons, badges, active states |
| **Surface** | Parchment White | `#F7F4EE` | Section backgrounds, cards |
| **Dark Surface** | Charcoal Earth | `#1E2420` | Dark section backgrounds |
| **Text Primary** | Deep Bark | `#1A1A1A` | Body copy, headings |
| **Text Muted** | Sage Gray | `#6B7B6E` | Subtext, captions |

**Color Behavior Rules:**
- Alternate sections between `#F7F4EE` (light) and `#1A3C2E` (dark) for visual rhythm
- Gold `#C8A84B` used sparingly — reserved for key moments (stats, badges, award markers)
- Never use purple, electric blue, or synthetic gradients — this brand lives in nature

---

### 3.2 Typography

**Display / Hero Headlines:**  
`Playfair Display` — Serif with editorial elegance. Conveys heritage, trust, and authority.  
*Weight:* 700–900 | *Style:* Italic for emphasis words ("Cultivating", "Future", "Impact")

**Section Headings:**  
`DM Serif Display` — Warm, contemporary serif. Bridges traditional farming trust with modern clarity.  
*Weight:* 400–700

**Body / UI Text:**  
`Jost` — Geometric humanist sans-serif. Clean and readable without being cold.  
*Weight:* 300 (body), 500 (labels), 600 (CTAs)

**Numeric / Stats:**  
`Bebas Neue` — Bold, condensed, impactful. Used exclusively for impact numbers (220, 420M, 2500).

**Typography Rules:**
- Headline size scale: 72px → 56px → 40px → 28px → 20px
- Line height: 1.15 for display, 1.6 for body
- Italic serif words paired with upright sans in the same headline line (mixed-style headlines)
- Letter spacing: `-0.02em` for large display, `0.08em` for labels/eyebrows

---

### 3.3 Iconography & Illustration

- **Style:** Thin-line icons with a single accent fill (Lime Green `#6ABF4B`)
- **Source:** Phosphor Icons or custom SVG line art
- **Badges:** Circular green dot markers for awards/certifications (seen in Awards section)
- **Decorative elements:** Subtle leaf/grain SVG motifs in section dividers and backgrounds
- **No flat cartoon illustrations** — photography and icon hybrids only

---

## 4. Layout & Grid

### 4.1 Grid System
- **Desktop:** 12-column grid, 1280px max-width container, 24px gutters
- **Tablet:** 8-column, 32px margins
- **Mobile:** 4-column, 20px margins

### 4.2 Spacing Scale (8px base unit)
```
4px   — micro (icon padding)
8px   — xs
16px  — sm
24px  — md
40px  — lg
64px  — xl
96px  — 2xl (section padding)
128px — 3xl (hero elements)
```

### 4.3 Layout Principles
- **Asymmetric two-column splits** for feature sections (text left / image right, alternating)
- **Full-bleed photography** for hero and CTA sections — image as atmosphere, not decoration
- **Diagonal section breaks** or subtle wave dividers instead of hard horizontal lines
- **Overlap elements** across section boundaries to create visual continuity
- **Stats row:** Horizontal strip, dark background, bold numbers — creates a dramatic pause

---

## 5. Component Design System

### 5.1 Navigation
- Sticky header with transparent-to-solid scroll behavior
- Logo left | Nav links center | CTA button right
- Dark green background on scroll, transparent on hero
- Hamburger on mobile → full-screen overlay menu

### 5.2 Buttons

| Variant | Style |
|---|---|
| **Primary** | Dark green fill, white text, 6px radius, 16px 32px padding |
| **Secondary** | Outlined green border, green text, same sizing |
| **Text Link** | Underline grows on hover (animated border-bottom) |
| **Hover State** | Gold `#C8A84B` border or fill shift + slight upward `translateY(-2px)` |

### 5.3 Cards
- Soft box shadow: `0 4px 24px rgba(0,0,0,0.08)`
- 12px border radius
- Parchment background
- Left-accent bar (4px Lime Green) for service/feature cards
- Image-top layout for blog cards

### 5.4 Service Tabs (Interactive)
- Vertical list with numbered prefix (01, 02, 03, 04)
- Active state: full-width highlight bar in dark green, white text
- Right panel: contextual image + description that swaps on selection
- Smooth crossfade transition (300ms ease)

### 5.5 Stats Counter Strip
- Dark green background full-bleed
- 4-column layout with large Bebas Neue numbers
- Subtle counter animation on scroll-enter
- Thin gold dividers between stat columns

### 5.6 Awards List
- Clean table-like layout: Award name left, year right
- Green dot badge per award
- Hover: row highlights with gold left border reveal
- Source organization shown as muted subtext

---

## 6. Motion & Interaction Design

### 6.1 Principles
- **Purposeful:** Every animation communicates something (progress, importance, state)
- **Organic easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — mimics natural growth
- **Never flashy:** No spinning, bouncing, or excessive parallax

### 6.2 Animation Inventory

| Element | Animation | Duration |
|---|---|---|
| Hero headline | Word-by-word fade up | 800ms staggered |
| Section reveal | Fade up + slight Y translate | 600ms on scroll |
| Stats numbers | Count-up from 0 on scroll enter | 1200ms |
| Service tab switch | Crossfade image + slide text | 300ms |
| Nav CTA button | Background fill sweep on hover | 250ms |
| Card hover | Shadow deepen + Y lift -4px | 200ms |
| Image gallery | Scale 1.02 on hover (subtle zoom) | 300ms |

### 6.3 Scroll Behavior
- Lazy-load images with blur-to-sharp transition
- Sticky nav solidifies at 80px scroll
- Parallax depth on hero image at 0.3x scroll rate (subtle)

---

## 7. Photography & Media Strategy

### 7.1 Image Style
- **Hero images:** Aerial or wide-angle farm landscapes, golden hour lighting
- **Team/human shots:** Candid, action-oriented (hands in soil, field work), not staged portraits
- **Product/tech shots:** Smart devices in natural settings — tech embedded in nature
- **Color grade:** Warm, slightly desaturated — earthy not oversaturated

### 7.2 Video (Blog/CTA Section)
- Autoplay muted loop for background hero video (optional)
- Play button for feature video: circular green button, centered over landscape still
- 16:9 aspect ratio with rounded corners (16px)

### 7.3 Image Overlay Treatment
- Dark gradient overlay on full-bleed images: `linear-gradient(to top, rgba(26,60,46,0.85), transparent)`
- Never place text directly on unstyled photography

---

## 8. Section-by-Section Design Breakdown

### Hero Section
- Full viewport height
- Animated headline: mixed italic serif + upright sans
- Subtext: 3 feature tiles (floating cards) bottom-left
- Background: full-bleed aerial farm photography with dark overlay
- CTA: Primary button "Explore Services" + text link "Our Story"

### About / Mission Strip
- Parchment background
- Centered editorial paragraph with inline emoji-style leaf icons
- Italic serif for brand voice keywords
- Thin green horizontal rule above and below

### Services Section
- Left column: numbered list (01–04) with click interaction
- Right column: contextual image + 2-sentence description
- Active service: gold left-border highlight
- Section header: "Take a Look at Our *Cutting-Edge* Services"

### Impact Stats
- Full-bleed dark green strip
- 4 stats: Years of Experience, Fields in Progress, Trees Planted, Farmers Consulted
- Gold separators, Bebas Neue numbers
- Counter animation on viewport entry

### Awards & Recognitions
- White section, left-aligned
- 5 awards in a clean stacked list
- Year aligned right in gold/muted tone
- On hover: entire row gets a thin left accent bar in lime green

### Agriculture Benefits
- Two-column: left (dark green card with copy + icon grid), right (farmer photography)
- Icons: thin-line style in lime green
- Benefit tags: Food Security, Economic Growth, Sustainability, Innovation

### Investors Logos
- Light section, centered
- Grayscale logos that colorize to original on hover
- Slow horizontal scroll on mobile (marquee)

### Video / CTA Section
- Full-bleed landscape image
- Centered play button
- Heading: "Sustainable *AGRICULTURE*" in large display type
- Dark overlay

### Blog Section
- 3-column card grid
- Image top, category tag, headline, "LEARN MORE →" link
- Cards animate in with stagger on scroll
- Section header with dot pagination control

### Contact / Footer CTA
- Dark green background
- Bold headline, short form or direct CTA button
- Focofirm logo bottom left
- Nav links | Social icons | Copyright right

---

## 9. Responsive Design

### Breakpoints
```
xs:  < 480px   (mobile portrait)
sm:  480–767px (mobile landscape)
md:  768–1023px (tablet)
lg:  1024–1279px (small desktop)
xl:  1280px+   (full desktop)
```

### Mobile Adaptations
- Hero: Stack text top, image behind at reduced opacity
- Services: Vertical accordion instead of side-by-side tabs
- Stats: 2×2 grid
- Awards: Compact list, year below award name
- Blog: Single-column scroll
- Nav: Hamburger → full overlay

---

## 10. Accessibility

- **Contrast ratio:** Minimum 4.5:1 for all text (WCAG AA)
- **Focus states:** Visible gold outline on all interactive elements
- **Alt text:** Descriptive for all farm photography
- **Animations:** Respect `prefers-reduced-motion` — disable all transitions if set
- **Font size minimum:** 16px body, 14px captions
- **Semantic HTML:** `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` used correctly

---

## 11. Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --color-primary:       #1A3C2E;
  --color-primary-light: #2D5C47;
  --color-gold:          #C8A84B;
  --color-lime:          #6ABF4B;
  --color-surface:       #F7F4EE;
  --color-dark:          #1E2420;
  --color-text:          #1A1A1A;
  --color-muted:         #6B7B6E;

  /* Typography */
  --font-display:   'Playfair Display', Georgia, serif;
  --font-heading:   'DM Serif Display', Georgia, serif;
  --font-body:      'Jost', sans-serif;
  --font-stat:      'Bebas Neue', sans-serif;

  /* Spacing */
  --space-xs:   8px;
  --space-sm:   16px;
  --space-md:   24px;
  --space-lg:   40px;
  --space-xl:   64px;
  --space-2xl:  96px;
  --space-3xl:  128px;

  /* Radius */
  --radius-sm:  6px;
  --radius-md:  12px;
  --radius-lg:  20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card:   0 4px 24px rgba(0,0,0,0.08);
  --shadow-hover:  0 12px 40px rgba(0,0,0,0.16);
  --shadow-gold:   0 0 0 3px rgba(200,168,75,0.4);

  /* Transitions */
  --ease-organic:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 600ms;
}
```

---

## 12. What Makes Focofirm Unforgettable

1. **Mixed-type headlines** — italic serif meets upright sans in a single line, creating editorial sophistication
2. **Counter animations** on the impact strip — data that feels alive
3. **Interactive service selector** — the side-by-side tab system is more engaging than a static list
4. **Photography-first philosophy** — every dark section bleeds into real farm imagery
5. **Award section micro-interaction** — hover reveals that reward exploration
6. **Gold as a rare accent** — used with discipline so it always commands attention

---

*Document version 1.0 — Focofirm Brand & Design System*  
*Prepared for: Frontend Development Handoff*
