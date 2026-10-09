# MindPilot Design System (DESIGN_SYSTEM.md)

**Product:** MindPilot  
**Team:** Zyrex  
**Document Status:** Approved Baseline  
**Last Updated:** 2026-10-09  

---

## 1. Design Philosophy & Principles

MindPilot avoids generic "vibe-coded" AI aesthetics. Instead of cliché purple gradients, neon glowing orbs, and dark glassmorphic cards, MindPilot embodies an **editorial, academic, and modern tactile instrument** tailored for engineering students.

### Core Principles
1. **White-First Architectural Canvas:** Clean, high-clarity white surfaces serve as the foundation, ensuring long study sessions without visual fatigue.
2. **Editorial High-Contrast Typography:** Large, authoritative, bold black headlines paired with razor-sharp technical hierarchy.
3. **Warm Tactile Accents:** Selective cream and beige tones provide warmth, structure, and physical notebook-like grounding.
4. **Deliberate Purposeful Motion:** Micro-interactions communicate system state, progress, and hierarchy rather than visual decoration.
5. **Radical State Completeness:** Initial, hover, active, focused, loading, streaming, empty, and error states are first-class design deliverables.

---

## 2. Color Palette & Surface Tokens

### 2.1 The Approved Palette
Every visual element must strictly derive from these documented tokens. Do not introduce unauthorized accent colors (e.g., arbitrary blues, neon purples, or harsh primary greens).

| Token Name | Hex Code | Role & Usage |
|---|---|---|
| **White** | `#FFFFFF` | Primary background canvas, base viewports, contrast surfaces |
| **Rich Black** | `#111111` | Primary headings, prominent CTA backgrounds, high-emphasis text |
| **Near-Black** | `#171613` | Deep secondary text, code blocks, dark card borders |
| **Cream** | `#F7F3EB` | Secondary surface cards, sidebar panels, subtle section fills |
| **Pale Cream** | `#F0E9DD` | Hover states on cream surfaces, subtle badge fills, muted containers |
| **Beige** | `#E9DFD0` | Structural accents, active tab fills, header borders, elevated cards |
| **Beige Borders** | `#D8CEBE` | Architectural divider lines, input borders, structural card outlines |

### 2.2 Surface Distribution Ratio
To maintain visual equilibrium:
- **70% – 80%:** Crisp White (`#FFFFFF`) — Viewport canvas, document reader backgrounds, primary chat container.
- **20% – 30%:** Combined Cream & Beige (`#F7F3EB`, `#F0E9DD`, `#E9DFD0`) — Card surfaces, navigation sidebars, stat tiles, callout containers.
- **Accents & Text:** Rich Black (`#111111`) & Near-Black (`#171613`) for high-contrast legibility.

---

## 3. Typography Direction

The typographic hierarchy prioritizes technical legibility, mathematical equations, and editorial confidence.

### 3.1 Type Families
- **Display & Headings:** Premium, clean geometric/humanist Sans-Serif (e.g., Plus Jakarta Sans, Outfit, or Inter with tight tracking `-0.02em` and heavy font weights `700`–`800`).
- **Body & Interface:** Crisp, neutral Sans-Serif with balanced x-height for comfortable reading of technical documentation (weight `400`–`500`, line-height `1.5`–`1.6`).
- **Technical & Code:** High-legibility Monospace (e.g., JetBrains Mono, Fira Code, IBM Plex Mono) for algorithms, terminal inputs, data metrics, and LaTeX formulas.

### 3.2 Scale & Hierarchy
- **Display 1 (Hero/Major Title):** `3.5rem` – `4.5rem` (`56px`–`72px`), Bold `800`, Rich Black (`#111111`), tight tracking.
- **Heading 1 (Page Title):** `2.25rem` – `2.75rem` (`36px`–`44px`), Bold `700`.
- **Heading 2 (Section Title):** `1.5rem` – `1.875rem` (`24px`–`30px`), Bold `700`.
- **Heading 3 (Card Title):** `1.125rem` – `1.25rem` (`18px`–`20px`), Semi-bold `600`.
- **Body Large:** `1.125rem` (`18px`), Regular `400`, line-height `1.6`.
- **Body Default:** `1.0rem` (`16px`), Regular `400`, line-height `1.5`.
- **Caption / Meta:** `0.8125rem` (`13px`), Medium `500`, Near-Black with muted opacity.

---

## 4. Spacing, Grid & Elevation

### 4.1 Spacing Scale
Based on an 8-point harmonic grid:
- `4px` (`0.25rem`) — Micro spacing (tag padding, tight icons)
- `8px` (`0.5rem`) — Element internal gaps
- `16px` (`1.0rem`) — Standard component padding
- `24px` (`1.5rem`) — Card internal padding, grid column gaps
- `32px` (`2.0rem`) — Section intra-spacing
- `48px` (`3.0rem`) — Viewport margin, major section dividers
- `64px` (`4.0rem`+) — Page header vertical rhythm

### 4.2 Radii & Border Styling
- **Card & Modal Radius:** `1.0rem` to `1.5rem` (`16px`–`24px`). Generous, soft architectural curves without cartoonish bubbles.
- **Button & Input Radius:** `0.625rem` to `0.75rem` (`10px`–`12px`).
- **Borders:** Consistent `1px solid #D8CEBE` (`Beige Borders`). No heavy drop shadows; depth is achieved through beige/cream contrast and precise borders.

---

## 5. Component Guidelines & Interaction States

### 5.1 Buttons & Interactive Controls
- **Primary Action:** Solid Rich Black (`#111111`) fill, White (`#FFFFFF`) text, semi-bold `600`. Subtle hover elevation (`translateY(-1px)`).
- **Secondary Action:** Cream (`#F7F3EB`) surface, `1px solid #D8CEBE`, Rich Black text. Hover shifts to Pale Cream (`#F0E9DD`).
- **Subtle / Ghost Action:** Transparent surface, Near-Black text, hover adds pale cream fill.

### 5.2 Form Inputs & Search Fields
- Crisp White or Cream surface, `1px solid #D8CEBE`.
- Focus state: `1px solid #111111` ring with subtle offset, no glowing neon borders.
- Dedicated validation error styling: Deep crimson text indicator, distinct border, accompanied by an explicit descriptive error message.

### 5.3 Learning Cards & Content Modules
- Surface: Cream (`#F7F3EB`) with `1px solid #D8CEBE`.
- Clean hierarchy: Monospace category badge, bold black title, concise descriptor, and progress status indicator.

### 5.4 Mandatory Interaction States
Every interactive component must explicitly handle:
1. **Initial / Idle:** Default restful presentation.
2. **Hover:** Subtle tactile feedback (background tint or `-1px` transform).
3. **Active / Pressed:** Visual compression (`scale(0.98)`).
4. **Focused:** High-contrast keyboard focus indicator.
5. **Loading / Processing:** Crisp skeleton loader or subtle mechanical progress indicator (no spinning rainbow wheels).
6. **Empty State:** Helpful instructional copy, icon, and direct call-to-action.
7. **Error State:** Clear recovery action, explicit human-readable failure reason.

---

## 6. Responsive Design Rules

- **Mobile First Adaptation:**
  - Viewports `< 768px`: Navigation collapses into a structured slide-over or floating bottom sheet.
  - Multi-column dashboards collapse into a single stacked column with sticky section tabs.
  - Typography gracefully scales down: Hero titles from `48px` to `32px`.
  - Touch targets maintain a minimum dimension of `44px x 44px`.
- **Desktop Viewports (`≥ 1024px`):**
  - Persistent left-hand contextual sidebar for navigation and active roadmaps.
  - Centered reading and chat container bounded to `840px` for optimal typographic line-length (60–75 characters per line).

---

## 7. Accessibility (A11y) Baseline

- **Color Contrast:** All body and header text against White, Cream, or Beige must pass WCAG AA (minimum contrast ratio `4.5:1` for regular text, `3:1` for large text).
- **Non-Color Reliance:** Status indicators (In Progress, Done, Needs Review) must pair color with unambiguous text labels or distinct geometric icons.
- **Keyboard Navigation:** Full tab-order navigation across all interactive elements with visible focus rings.
- **Screen Reader Support:** Semantic HTML tags (`<main>`, `<nav>`, `<article>`, `<header>`), descriptive `aria-label` attributes on icon-only controls.

---

## 8. Anti-"AI Slop" Review Checklist

Before any view or component is approved, it must be verified against the following anti-slop rules:
- [x] No harsh purple-to-blue or rainbow gradient backgrounds.
- [x] No glowing radial neon orbs or liquid glass effects.
- [x] No floating emojis used as functional icons or section markers.
- [x] No untouched, generic component library defaults.
- [x] No arbitrary 3-box feature cards with decorative icons lacking student utility.
- [x] No fake social proof, fake review quotes, or fabricated student metrics.
- [x] Consistent spacing tokens enforced throughout the layout.
- [x] All copy is grounded, professional, and directly relevant to BTech engineering education.
