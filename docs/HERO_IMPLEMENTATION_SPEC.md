# Design Haven — Homepage Hero Implementation Specification

## Document Metadata
- **Project Name:** Design Haven
- **Repository:** FUTURE_PE_01
- **Document Type:** Homepage Hero Implementation Specification
- **Phase:** Phase 4 — Implementation Preparation (Asset 1: Homepage Hero)
- **Status:** Complete Technical Specification / Ready for React Implementation
- **Last Updated:** 2026-08-21
- **Source Documents:**
  - `docs/HERO_VISUAL_CONCEPTS.md`
  - `docs/HERO_CONTENT_EXPLORATION.md`
  - `docs/HERO_DECISION_PACKAGE.md`
  - `docs/HOMEPAGE_CONTENT_ARCHITECTURE.md`
  - `docs/UI_UX_DESIGN_BRIEF.md`
  - `docs/PRD.md`
  - `docs/APP_FLOW.md`
  - `docs/TRD.md`

---

# 1. Recommended Implementation Direction

Based on a comprehensive audit of the Design Haven product requirements, editorial brand identity, content flexibility, responsive feasibility, accessibility standards, and performance budgets, the following visual concept is recommended for initial React implementation:

### Recommended Concept
**Concept 1: Editorial / Architectural** (Asymmetrical dual-column grid with publication-grade typography, generous whitespace, and responsive spatial framing).

### Reason for Selection
1. **Deep Brand Alignment:** Directly fulfills the UI/UX Design Brief objective of positioning Design Haven as an editorial digital sanctuary rather than a generic SaaS or e-commerce platform.
2. **Maximum Content Flexibility:** Seamlessly accommodates Candidate A (Identity-First), Candidate B (Problem-Solving), or Candidate C (Property Context) without breaking visual rhythm or layout proportions.
3. **Lowest Technical & Performance Risk:** Relies on native CSS Grid and GPU-accelerated transforms (`opacity`, `transform`) without requiring heavy JavaScript physics libraries, ensuring ultra-fast Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).
4. **Flawless Responsive Feasibility:** Scales fluidly from an asymmetrical 12-column desktop editorial grid into a clean, single-column vertical presentation on mobile viewports.

### Strengths
- Timeless, high-trust publication authority.
- Exceptional legibility across all candidate copy options.
- Low performance overhead with high WCAG AA accessibility compliance out of the box.

### Known Tradeoffs
- Requires disciplined negative space management and high-quality spatial imagery; if imagery is omitted or poorly cropped, the layout requires proper warm surface fallbacks to maintain visual weight.

*Note: This is an implementation recommendation to enable fast-track technical execution and does not represent a permanent creative lock for the Project Owner.*

---

# 2. Hero Content Handling

To ensure the hero implementation remains completely decoupled from unfinalized copy choices, all text and action properties will be managed via a structured content abstraction contract (`HeroContentConfig`).

### Abstraction Strategy & Interface Definition
The component will accept content via props adhering to the following schema contract:

```typescript
export interface HeroCTAConfig {
  text: string;
  href: string;
  ariaLabel: string;
  target?: '_self' | '_blank';
}

export interface HeroContentConfig {
  eyebrow: string;
  headlineOptions: string[];
  selectedHeadlineIndex: number;
  supportingCopyOptions: string[];
  selectedSupportingCopyIndex: number;
  primaryCta: HeroCTAConfig;
  secondaryCta: HeroCTAConfig;
}
```

### Configurable Candidate Mapping Table
The implementation will load from a central data file (`src/data/heroContent.json` or `src/data/heroContent.ts`), allowing instant candidate switching by changing a single configuration key:

```typescript
export const HERO_CANDIDATES_CONFIG: Record<'candidateA' | 'candidateB' | 'candidateC', HeroContentConfig> = {
  candidateA: {
    eyebrow: "SPATIAL IDENTITY & PERSONAL VISION",
    headlineOptions: [
      "A Living Space Shaped by Who You Are",
      "Design Your Home Around the Life You Actually Live",
      "Spaces Reflected by Identity, Not Fleeting Trends"
    ],
    selectedHeadlineIndex: 0,
    supportingCopyOptions: [
      "We partner with creative homeowners to transform living spaces into authentic, cohesive environments through thoughtful layout planning, natural light integration, and collaborative guidance.",
      "Your home should feel like an unmistakable extension of yourself. Explore curated spatial concepts and discover a calm, pressure-free path from raw ideas to refined reality."
    ],
    selectedSupportingCopyIndex: 0,
    primaryCta: { text: "Explore Spatial Inspiration", href: "#showcase", ariaLabel: "Explore spatial inspiration showcase" },
    secondaryCta: { text: "Read Our Philosophy", href: "#philosophy", ariaLabel: "Read Design Haven philosophy" }
  },
  candidateB: {
    eyebrow: "COLLABORATIVE VISION REFINEMENT",
    headlineOptions: [
      "Transform Preliminary Ideas into a Cohesive Living Reality",
      "Turn Saved Inspiration into a Structured Design Path",
      "Your Creative Ideas, Architecturally Shaped and Refined"
    ],
    selectedHeadlineIndex: 0,
    supportingCopyOptions: [
      "Bring scattered inspiration into focus. We help you organize initial concepts, material choices, and spatial priorities into a unified design direction without overriding your personal taste.",
      "You bring the visual inspiration; we supply the spatial clarity. Work alongside expert design guidance to turn fragmented mood boards into clear, executable spatial plans."
    ],
    selectedSupportingCopyIndex: 0,
    primaryCta: { text: "Refine Your Vision", href: "#refinement", ariaLabel: "Refine your interior vision" },
    secondaryCta: { text: "Understand Our Process", href: "#process", ariaLabel: "Understand our collaborative design process" }
  },
  candidateC: {
    eyebrow: "RESIDENTIAL SPATIAL POTENTIAL",
    headlineOptions: [
      "Unlock the Unseen Potential in Your Living Environment",
      "See Beyond Existing Walls to Discover Spatial Harmony",
      "Reimagine Your Space Through Light, Layout, and Proportion"
    ],
    selectedHeadlineIndex: 0,
    supportingCopyOptions: [
      "Whether modernizing an older property, optimizing an existing layout, or planning a new build, discover how intelligent space planning brings warmth, balance, and flow to your home.",
      "Great residential design begins by understanding spatial volume and natural illumination. Explore conceptual approaches that reveal what your living environment can truly become."
    ],
    selectedSupportingCopyIndex: 0,
    primaryCta: { text: "View Transformation Scenarios", href: "#scenarios", ariaLabel: "View residential transformation scenarios" },
    secondaryCta: { text: "Find Your Home Context", href: "#context", ariaLabel: "Find your home transformation context" }
  }
};
```

---

# 3. Visual Architecture

The Homepage Hero will be constructed as a modular, single-responsibility component hierarchy:

```
HeroSection (Container: <section id="hero" aria-label="Introduction">)
├── HeroBackgroundSurface (Layer: Warm-neutral surface / subtle noise texture)
├── HeroGridContainer (12-Column Responsive Grid Container)
│   ├── HeroHeaderColumn (Layout: Col 1-7 Desktop / Col 1-12 Mobile)
│   │   ├── HeroEyebrowBadge (Component: Category label / context pill)
│   │   ├── HeroHeadlineDisplay (Component: Semantic <h1> display heading)
│   │   ├── HeroSupportingText (Component: Paragraph body text)
│   │   └── HeroActionGroup (Layout: Flex container for CTAs)
│   │       ├── PrimaryCTAButton (Component: Interactive action pill)
│   │       └── SecondaryCTALink (Component: Editorial text link with arrow icon)
│   └── HeroMediaColumn (Layout: Col 8-12 Desktop / Col 1-12 Mobile)
│       ├── HeroMediaContainer (Aspect-ratio protected frame)
│       │   ├── HeroImageOverlay (Subtle gradient contrast scrim)
│       │   └── HeroImageDisplay (Responsive <img> element)
│       └── HeroMediaCaption (Optional architectural context tag)
└── HeroScrollPrompt (Component: Low-profile scroll guidance indicator)
```

---

# 4. Media Strategy

- **Primary Media Role:** Visually anchor the hero experience by demonstrating architectural volume, natural light integration, and authentic material depth (wood, stone, limewash).
- **Fallback Behavior:** If image assets are loading or fail to load, `HeroMediaContainer` displays a warm-neutral textured background with an abstract geometric SVG architectural line pattern.
- **Overlay Requirements:** A subtle CSS gradient overlay (`linear-gradient(to right, rgba(0,0,0,0.15), transparent)`) guarantees minimum text-to-background contrast if imagery extends behind text elements on smaller screens.
- **Image Readability Requirements:** Strict visual separation between text columns and primary visual focal points on desktop; minimum WCAG contrast ratio enforced at all times.
- **Responsive Cropping Considerations:** Media container utilizes CSS `aspect-ratio` (4:3 on desktop, 16:9 on tablet, 3:2 on mobile) with `object-fit: cover` and `object-position: center 35%`.
- **Loading Strategy:**
  - `loading="eager"` (Hero media is primary LCP content).
  - `fetchpriority="high"`.
  - Modern image formats via `<picture>` tag: AVIF → WebP → fallback JPEG.
- **Accessibility Requirements:** Descriptive non-generic `alt` text (`alt="Architectural residential living room showing warm natural light and organic wood finishes"`). Decorative background overlays marked `aria-hidden="true"`.

---

# 5. Interaction Strategy

### Recommended Intensity
**Subtle Interaction Intensity** (Focusing on tactile feedback, smooth reveals, and zero performance distraction).

### Interaction Behaviors
- **Entry Animation:** Staggered opacity and subtle Y-axis translation (`opacity: 0` → `1`, `translateY(12px)` → `0`) over `0.6s` with custom easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **CTA Feedback:** Micro-scaling (`scale(1.02)`), subtle border-color shift (`0.2s ease`), hover background highlight.
- **Hover Behavior:** `HeroMediaContainer` applies subtle image zoom (`scale(1.015)` over `0.4s ease-out`); secondary CTA expands text underline from center (`0.25s`).
- **Scroll Behavior:** Native smooth document scroll; hero content softly fades (`opacity: 0.95` → `0`) as user transitions into Block 2.
- **Reduced Motion Behavior:** When `@media (prefers-reduced-motion: reduce)` is detected, all CSS transforms and keyframe transitions are disabled; elements render immediately at 100% opacity.

---

# 6. Component Strategy

The hero component will leverage pure, lightweight CSS and standard React patterns without forcing third-party package dependencies:

| Requirement | Recommended Source | Reason | Dependency Needed? | Fallback |
|---|---|---|---|---|
| **Fluid Typography & Spacing** | Custom CSS (`clamp()`, CSS Variables) | Lightweight, exact brand control, zero bundle overhead | No | CSS media query breakpoints |
| **Micro Hover Transitions** | Amicro Patterns / Custom CSS | Subtle tactile feedback for buttons and links | No (Pure CSS) | Standard `:hover` state |
| **Staggered Reveal Animation** | Custom Motion / CSS Keyframes | Hardware-accelerated entry animation | No (Pure CSS) | Immediate display |
| **Editorial 12-Column Grid** | KokonutUI Patterns / Custom CSS | Asymmetrical responsive grid container | No (CSS Grid) | Flexbox stack |
| **Ambient Light Overlay** | React Bits Patterns / Custom CSS | Subtle scrim and depth highlights | No (Pure CSS) | Solid background color |

---

# 7. Responsive Strategy

### Desktop (> 1024px)
- Asymmetrical 12-column dual-column grid (Columns 1–7: Text Header; Columns 8–12: Spatial Photography Frame).
- Side-by-side CTA group layout.
- Full cursor hover micro-interactions enabled.

### Tablet (768px – 1024px)
- 12-column adaptive layout (Columns 1–8: Text Header; Columns 9–12: Compact Spatial Media Frame).
- Fluid font scaling using CSS `clamp()`.
- Minimum 44px × 44px touch targets.

### Mobile (< 768px)
- Single-column vertical stack (100% container width).
- Layout order: Eyebrow → Display Headline → Spatial Media Frame → Supporting Copy → Stacked CTAs.
- Full-width CTAs with minimum 48px × 48px touch targets for optimal mobile ergonomics.

---

# 8. Accessibility Requirements

- **Semantic Heading Structure:** Single `<h1>` for the primary display headline; section wrapped in `<section id="hero" aria-label="Hero Introduction">`.
- **CTA Accessibility:** Valid `href` anchors with descriptive `aria-label` attributes explaining destination intent.
- **Keyboard Navigation:** Logical DOM tab ordering (`tabindex="0"` on interactive triggers); high-contrast focus rings (`outline: 2px solid var(--color-focus)`).
- **Contrast Ratios:** Text-to-background contrast exceeding WCAG AA standards (7:1 for headline display, 4.5:1 for body copy).
- **Image Accessibility:** Meaningful, contextual `alt` attributes on media elements.
- **Reduced-Motion Support:** Full compliance with `prefers-reduced-motion: reduce`.
- **Touch Targets:** All mobile touch targets sized to minimum 48px × 48px with adequate padding.

---

# 9. Performance Requirements

- **LCP Target:** Largest Contentful Paint under 1.2s on standard 4G connections.
- **CLS Target:** Cumulative Layout Shift = 0 (explicit width/height and `aspect-ratio` on all media containers).
- **GPU Acceleration:** Animations restricted to `transform` and `opacity` to prevent layout repaints.
- **Asset Optimization:** Eager loading for primary hero image; preloaded via `<link rel="preload">` tag in production.
- **Bundle Footprint:** Zero external runtime JS library dependencies required.

---

# 10. Build Checklist

- [x] Project scaffold verified (`FUTURE_PE_01`)
- [x] Technical requirements and architecture mapped (`TRD.md`)
- [x] Hero content abstraction schema prepared (`HeroContentConfig`)
- [x] Candidate A, B, C configuration mapping established
- [x] Media placeholder and fallback strategy defined
- [x] Conceptual component tree defined (`HeroSection`)
- [x] Responsive layout strategy specified (Desktop / Tablet / Mobile)
- [x] Accessibility requirements audited (WCAG AA)
- [x] Motion and interaction parameters calibrated
- [x] Performance budgets and LCP targets established
- [ ] Ready for actual React component code implementation

---

# 11. Implementation Boundary

> [!IMPORTANT]
> **Implementation Boundary Rule:** The frontend React implementation must preserve strict content configurability and visual modularity because final hero copy selection (Candidate A, B, or C) and final visual direction approval remain under Project Owner authority. Code implementation will decouple component logic from text configuration files.
