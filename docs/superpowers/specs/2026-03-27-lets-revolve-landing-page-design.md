# Lets Revolve — Landing Page Design Spec

## Overview

Single-page landing page for Lets Revolve, a Dutch accounting/advisory firm. Modern & minimal aesthetic, white-first with sky blue accents.

## Tech Stack

- **Vite** + **TypeScript**
- **Tailwind CSS v4**
- Single `index.html` entry with `src/main.ts`
- Google Fonts: DM Sans

## Brandbook

Reference: `docs/brandbook.html`

### Colors

| Token            | Hex       | Usage                            |
| ---------------- | --------- | -------------------------------- |
| Primary          | `#0EA5E9` | Buttons, links, accents, wordmark "Lets" |
| Primary Dark     | `#0284C7` | Hover states, gradient endpoint  |
| Primary Light    | `#38BDF8` | Highlights on dark backgrounds   |
| Slate Dark       | `#0F172A` | Hero gradient start, footer, headings |
| Cloud Grey       | `#F8FAFC` | Alternating section backgrounds  |
| White            | `#FFFFFF` | Main background, cards           |
| Text Heading     | `#0F172A` | Headings                         |
| Text Body        | `#334155` | Body text                        |
| Text Muted       | `#64748B` | Secondary/muted text             |

### Typography

- **Font:** DM Sans (Google Fonts) — sole typeface
- **Hero heading:** 48–56px, Bold (700), line-height 1.1
- **Section heading:** 32–36px, Semibold (600), line-height 1.2
- **Body:** 16–18px, Regular (400), line-height 1.7
- **Labels:** 12–14px, Medium (500), uppercase, letter-spacing 3px

### Wordmark

- Text-based: "Lets Revolve" in DM Sans Bold
- "Lets" in sky blue (`#0EA5E9`), "Revolve" in dark (`#0F172A`) on light backgrounds
- Inverted on dark: "Lets" in `#38BDF8`, "Revolve" in white

### Brand Gradient

```
linear-gradient(135deg, #0F172A 0%, #0284C7 80%, #0EA5E9 100%)
```

### Spacing

- Section padding: 80–120px vertical
- Content max-width: 1200px
- Text column max-width: 700px
- Card gap: 24–32px

## Page Structure

### 1. Navbar

- Fixed top, transparent on hero, white with shadow on scroll
- Left: wordmark ("Lets Revolve" two-tone)
- Right: nav links — "Wie zijn wij", "Dienstverlening"
- Smooth scroll to sections on click

### 2. Hero Section

- Full-width, brand gradient background
- Centered layout
- Top: "LETS REVOLVE" label (uppercase, letter-spaced, `#38BDF8`)
- Main heading: "Met passie voor ons vak" (white, 48–56px bold)
- Subtitle: the intro paragraph text (white/70% opacity)
- Subtle scroll-down indicator at bottom

### 3. Wie zijn wij (About)

- White background
- Centered section label ("WIE ZIJN WIJ" in sky blue, uppercase)
- Section heading: "Wie zijn wij?"
- Body text in a 700px max-width column — the "Onze waarden" paragraph from the content
- Sky blue divider accent (48px wide, 3px tall)

### 4. Dienstverlening (Services)

- Light grey (`#F8FAFC`) background
- Centered section label and heading
- 2×2 grid of service cards on white with subtle border (`#e2e8f0`)
- Each card: icon placeholder (gradient light blue circle), service name, hover lift effect with blue shadow
- Services:
  1. Boekhouding en administratie
  2. Salarisadministratie
  3. Financiële administratie
  4. Facturatie en debiteurenbeheer

### 5. Footer

- Dark background (`#0F172A`)
- Centered wordmark (two-tone, inverted for dark)
- Copyright: "© 2026 Lets Revolve"

## Interactions

- **Navbar scroll effect:** transparent → white background + subtle shadow when scrolling past hero
- **Smooth scroll:** nav links scroll smoothly to their target sections
- **Service card hover:** translateY(-2px) lift + blue box-shadow
- **Scroll indicator:** subtle pulsing opacity animation in hero

## Responsive Behavior

- Mobile: single-column layout, services stack to 1 column
- Navbar: hamburger menu on mobile (simple toggle)
- Hero heading scales down (36–40px on mobile)
- Section padding reduces to 48–64px on mobile

## File Structure

```
lets_resolve/
├── index.html
├── src/
│   ├── main.ts          # Navbar scroll effect, smooth scroll, mobile menu
│   └── style.css        # Tailwind directives + custom font import
├── public/
│   └── (empty for now)
├── docs/
│   └── brandbook.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts   # (if needed — Tailwind v4 may use CSS config)
```

## Out of Scope

- Contact form
- Blog / news section
- Team member profiles
- CMS integration
- Analytics
- Multi-page routing
