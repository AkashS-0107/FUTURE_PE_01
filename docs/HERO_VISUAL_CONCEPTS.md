# Design Haven — Homepage Hero Visual Concepts

## Document Metadata
- **Project Name:** Design Haven
- **Repository:** FUTURE_PE_01
- **Document Type:** Homepage Hero Visual Concepts & Exploration Specification
- **Phase:** Phase 4 — Visual Exploration (Asset 1: Homepage Hero)
- **Status:** Complete Exploration Package / Awaiting Project Owner Visual Selection
- **Last Updated:** 2026-08-21
- **Content Compatibility:** Fully compatible with all 3 approved candidate copy packages (Candidate A: Identity-First, Candidate B: Problem-Solving, Candidate C: Property Context).
- **Source Reference Frameworks:**
  - `docs/HERO_CONTENT_EXPLORATION.md`
  - `docs/HERO_DECISION_PACKAGE.md`
  - `docs/HOMEPAGE_CONTENT_ARCHITECTURE.md`
  - `docs/UI_UX_DESIGN_BRIEF.md`
  - `docs/PRD.md`
  - `docs/APP_FLOW.md`
  - React Bits, UI/UX Pro Max, KokonutUI, Amicro Micro-transitions

---

# Concept 1: Editorial / Architectural

## Core Visual Idea
A magazine-monograph grade visual layout inspired by high-end architectural publications (*El Croquis*, *Architectural Digest*, *Detail*). Emphasizes clean typographic hierarchy, generous whitespace, asymmetrical grid framing, structural line dividers, and high-aspect-ratio spatial photography. The aesthetic conveys structural honesty, spatial clarity, and timeless editorial authority.

## Content Compatibility
- **Candidate A (Identity-First):** Large-scale display typography paired with calm, expansive spacing complements philosophical copy regarding home as personal identity.
- **Candidate B (Problem-Solving):** The structured dual-column grid seamlessly accommodates problem-solution subcopy and collaborative process teasers without visual clutter.
- **Candidate C (Property Context):** Architectural framing and clean grid lines naturally echo renovation, new build, and structural spatial transformation contexts.

## Media Treatment
- **Interior Imagery:** High-resolution off-grid or semi-embedded hero framing demonstrating architectural volume, natural light falloff, and authentic material textures (wood, limewash, natural stone).
- **Architecture:** Geometric elevation crops, structural beam framing, window illumination projections.
- **Texture & Layering:** Subtle warm linen or paper grain overlay; crisp typography overlapping open space and image boundaries.
- **Motion & Depth:** Gentle micro-parallax on image layers; zero loud floating cards; layered text over image edges creating physical spatial depth.

## Layout Philosophy
An asymmetrical 12-column editorial grid. The display headline is positioned with a generous left-margin offset, while supporting copy and CTAs align within a secondary column. Spatial photography is positioned asymmetrically to preserve breathable warm-neutral negative space.

## Interaction Model
- **Scroll Behavior:** Text content holds position calmly while hero image sub-scenery reveals subtle depth via differential scroll movement.
- **Hover Behavior:** Subtle underline sweep or letter-spacing expansion on links/CTAs; soft warm focus highlight on image containers.
- **CTA Behavior:** Primary CTA styled as a refined outlined pill button with border-color transition; Secondary CTA styled as an editorial text link with an inline directional arrow.
- **Pointer Interaction:** Minimal cursor dot or coordinate indicator over image viewports reinforcing architectural precision.

## Motion Direction
- **Initial Reveal:** Staggered opacity reveal (`0` to `1`) with slight upward translation (`10px`). Typography fades in line-by-line; media frame reveals via smooth clip-path mask (`0.8s` ease-out).
- **Text Motion:** Fluid, non-jarring fade-ups.
- **Media Motion:** Subtle ambient scale (`1.0` to `1.03`) on scroll or arrival.
- **Scroll Transitions:** Clean cross-fade as the visitor transitions into Block 2 (Brand Philosophy).
- **Micro-Interactions:** Soft Amicro-inspired button hover state.
- **Reduced-Motion:** Automatically disables clip-path parallax and transforms; presents immediate static rendering with 100% opacity.

## Component Opportunities
- **React Bits:** Split-text animation for editorial headlines.
- **KokonutUI:** Editorial frame container layout structures.
- **Amicro:** Micro-transition hover effects for CTA links and image frames.
- **Custom Motion/CSS:** Responsive grid lines, CSS `clamp()` typography scaling, hardware-accelerated clip-path masks.

## Mobile Adaptation
Single-column vertical stack. The headline leads, followed by the hero architectural photograph, supporting copy, and stacked full-width touch-optimized CTAs (minimum target size 48px).

## Accessibility Considerations
- High contrast ratios (exceeding WCAG AA 7:1 for display, 4.5:1 for body copy).
- Strict semantic landmark elements (`<header>`, `<main>`, `<section>`).
- Full keyboard focus rings on interactive elements.
- Explicit `prefers-reduced-motion` CSS rules.

## Performance Risks
Very low performance risk. Utilizes hardware-accelerated CSS `transform` and `opacity` properties without heavy JavaScript animation engines.

## Strengths
- Timeless, publication-grade elegance establishing instant brand authority.
- Exceptional readability across all candidate copy options.
- Zero risk of visual fatigue or feeling like a commercial template.

## Risks
- May feel overly quiet or restrained if hero imagery lacks warmth or if negative space is misconstrued as empty.

---

# Concept 2: Immersive / Cinematic

## Core Visual Idea
Full-viewport landscape photography with atmospheric lighting, depth of field, and slow, ambient visual motion. The interface acts as a quiet digital curtain opening into an atmospheric living environment, utilizing dark or warm moody backgrounds to create a digital sanctuary mood.

## Content Compatibility
- **Candidate A (Identity-First):** Evocative lighting and ambient scale reinforce emotional self-reflection and personal sanctuary themes.
- **Candidate B (Problem-Solving):** Translucent glassmorphic overlay scrims ensure structured problem-solving copy remains crisp and legible against rich visual backdrops.
- **Candidate C (Property Context):** Atmospheric shifts in light and shadow highlight natural illumination in structural transformation scenarios.

## Media Treatment
- **Interior Imagery:** Edge-to-edge landscape hero photography featuring dramatic natural light (golden hour window light, morning shadows).
- **Architecture:** Wide room perspectives with spatial depth and subtle atmospheric haze.
- **Texture & Layering:** Glassmorphic translucent scrim overlays (`backdrop-filter: blur()`), subtle noise texturing to prevent gradient color banding.
- **Motion & Depth:** Slow ambient Ken Burns drift (subtle zoom/pan over 15 seconds); multi-layer depth with typography floating over background visual planes.

## Layout Philosophy
Full-width hero container (`100vw` × `100dvh`). Centered or bottom-left aligned typography floating over a subtle dark gradient vignette or glass scrim overlay, anchored by a low-profile scroll indicator.

## Interaction Model
- **Scroll Behavior:** Foreground text layers move faster than background scenery (parallax factor `0.3`), dissolving smoothly into Block 2.
- **Hover Behavior:** Hovering hero background softly enhances image clarity or shifts warm tint light source.
- **CTA Behavior:** Primary CTA formatted as a luminous glass button with light-sheen border highlight; Secondary CTA formatted as a semi-transparent pill.
- **Pointer Interaction:** Subtle warm light follow effect tracking across background scene on cursor movement.

## Motion Direction
- **Initial Reveal:** Atmospheric dark-to-light fade in (`1.2s` duration). Imagery expands smoothly from `98%` to `100%` width while text floats gently into position.
- **Text Motion:** Soft character or word fade-in with warm glow transition.
- **Media Motion:** Ultra-slow ambient background drift (`transform: scale(1.04)` over 15s).
- **Scroll Transitions:** Atmospheric background cross-fade into downstream content section color tokens.
- **Micro-Interactions:** Glowing focus ring on buttons and interactive triggers.
- **Reduced-Motion:** Halts ambient zoom/pan and light tracking; provides static crisp backdrop with immediate text overlay.

## Component Opportunities
- **React Bits:** Ambient background spotlight / glow gradient effect.
- **KokonutUI:** Glassmorphic card container structures.
- **Amicro:** Glow button hover micro-interactions.
- **Custom Motion/CSS:** CSS `backdrop-filter`, hardware-accelerated keyframe scales.

## Mobile Adaptation
Viewport height adapted for mobile browser bars (`100dvh`). Background image centered on primary spatial focal point; text positioned in lower half over protective contrast gradient overlay.

## Accessibility Considerations
- Guaranteed contrast safety via programmatic dark gradient overlay behind all text (min 4.5:1 ratio).
- High-visibility focus indicators for keyboard navigation.
- Accessible ARIA labels on all interactive triggers.

## Performance Risks
Moderate risk due to `backdrop-filter: blur()` and large image asset payloads; requires responsive `srcset` image optimization and hardware-accelerated CSS layers.

## Strengths
- Maximum visual "WOW" factor and instant emotional immersion upon arrival.
- Strong digital sanctuary atmosphere.

## Risks
- Potential performance overhead on lower-spec mobile devices if backdrop filters are unoptimized.

---

# Concept 3: Interactive / Exploratory

## Core Visual Idea
A dynamic, user-guided spatial preview hero featuring interactive image toggles, perspective sliders, or modular bento preview tiles. Designed for idea-rich visitors who want to actively explore material textures, light conditions, or room contexts directly within the hero experience.

## Content Compatibility
- **Candidate A (Identity-First):** Interactive style parameter triggers allow visitors to preview how identity translates into spatial moods.
- **Candidate B (Problem-Solving):** Ideal for displaying a raw mood board vs. refined spatial plan comparison directly inside the hero.
- **Candidate C (Property Context):** Enables property type switches (Renovation / New Build / Existing Refresh) to contextualize headlines instantly.

## Media Treatment
- **Interior Imagery:** Multi-state image sets (Before/After, Light/Shadow, Bare Frame/Finished Room, Material A/Material B).
- **Architecture:** Modular room aspect cards, interactive spatial preview panes.
- **Texture & Layering:** Interactive split-screen reveal handles, tactile material swatch overlays, layered bento cards.
- **Motion & Depth:** Smooth sliding transitions between visual states; subtle elevation shadows on interactive tiles (`box-shadow` depth shift).

## Layout Philosophy
Asymmetric bento grid hero layout. Left side (60% width) hosts candidate headline, supporting copy, CTAs, and interactive mode selector pills. Right side (40% width) hosts interactive visual preview container (e.g., dual image wipe or multi-panel hover showcase).

## Interaction Model
- **Scroll Behavior:** Interactive preview pins briefly or scrolls smoothly into Block 2 bento grid.
- **Hover Behavior:** Hovering over preview panels highlights architectural hotspots or reveals material details.
- **CTA Behavior:** Primary CTA triggers guided exploration; Secondary CTA toggles interactive preview view modes.
- **Pointer Interaction:** Interactive slider drag/wipe handle or cursor state indicator ("Drag to Explore").

## Motion Direction
- **Initial Reveal:** Bento cards stagger in with spring physics (`duration: 0.6s`, slight bounce/ease).
- **Text Motion:** Clean slide-fade from left for headlines.
- **Media Motion:** Fluid image clip-path transition when switching view modes or dragging slider.
- **Scroll Transitions:** Bento cards compress slightly and transition into downstream showcase flow.
- **Micro-Interactions:** Tactile button press feedback (`scale(0.97)` on active click).
- **Reduced-Motion:** Replaces slider drag with simple static toggle buttons; disables spring physics for linear fade.

## Component Opportunities
- **React Bits:** Bento grid layout components, image comparison slider.
- **KokonutUI:** Interactive feature cards, tabbed preview containers.
- **Amicro:** Tactile button click animations, active state toggles.
- **Custom Motion/CSS:** CSS container queries, clip-path drag positioning.

## Mobile Adaptation
Stacked bento layout. Top section displays text content and CTAs; bottom section displays a single swipeable visual card or tabbed selector buttons.

## Accessibility Considerations
- Slider controls feature full keyboard ARIA support (`role="slider"`, `aria-valuenow`, Arrow key support).
- Screen reader accessible toggle buttons for view mode switches.
- High contrast badges and interactive indicators.

## Performance Risks
Moderate performance risk if multiple high-resolution images are loaded simultaneously; requires lazy-loading secondary state images until interaction.

## Strengths
- High user engagement and immediate interactive utility.
- Visually resolves the "Articulation Gap" by demonstrating spatial transformation.

## Risks
- Higher visual complexity; must be carefully styled to avoid looking like a software dashboard or SaaS product.

---

# Concept 4: Minimal / Gallery-Focused

## Core Visual Idea
An ultra-clean, serene layout centered on a singular master hero photograph surrounded by generous warm-neutral space and understated display typography. Inspired by contemporary art galleries and Scandinavian design monographs, focusing purely on spatial calm, clarity, and unhurried browsing.

## Content Compatibility
- **Candidate A (Identity-First):** Minimalist framing allows philosophical identity statements to resonate without visual competition.
- **Candidate B (Problem-Solving):** Clean, uncluttered layout reassures overwhelmed visitors seeking calm structure.
- **Candidate C (Property Context):** High-focus single image showcases architectural spatial volume with pristine clarity.

## Media Treatment
- **Interior Imagery:** Single master spatial photograph with architectural precision, balanced composition, and natural lighting.
- **Architecture:** Clean room proportions, organic wood/stone finishes, uncluttered spatial boundaries.
- **Texture & Layering:** Flat matte surface aesthetics, ultra-fine typography rules, single floating image frame.
- **Motion & Depth:** Micro-scale shifts on hover; subtle elevation shadow; zero aggressive animations.

## Layout Philosophy
Centered or left-aligned minimalist layout with generous spatial padding (`padding: 8rem 0`). Large, breathable display headline with light font weight, followed by minimal body copy and restrained text-link CTAs. Single hero image displayed with wide aspect ratio (`21:9` or `16:9`) below or alongside text.

## Interaction Model
- **Scroll Behavior:** Smooth, natural page scroll with no forced pinning or scroll hijacking.
- **Hover Behavior:** Image subtle scale (`1.01`) with soft shadow expansion; CTA text link underline expands smoothly from center.
- **CTA Behavior:** Primary CTA styled as a clean black/monochrome outline pill button; Secondary CTA styled as a simple text link with arrow icon.
- **Pointer Interaction:** Minimal cursor default; zero distraction.

## Motion Direction
- **Initial Reveal:** Ultra-soft fade-in (`opacity` `0` to `1` over `0.8s`).
- **Text Motion:** Subtle inline opacity reveal.
- **Media Motion:** Slight image scale adjustment on scroll or viewport entry.
- **Scroll Transitions:** Natural document flow into Block 2.
- **Micro-Interactions:** Subtle color shift on CTA hover.
- **Reduced-Motion:** Native instant rendering with standard CSS transitions.

## Component Opportunities
- **React Bits:** Minimal fade-in text wrapper.
- **KokonutUI:** Minimal hero framing layout.
- **Amicro:** Micro text underline expansion.
- **Custom Motion/CSS:** Pure CSS Flexbox/Grid, CSS custom variables for spacing, semantic typography styling.

## Mobile Adaptation
Clean single-column vertical flow with generous spacing between elements. Responsive typography scaling (`font-size: clamp(...)`). Touch targets min 48px.

## Accessibility Considerations
- Outstanding accessibility rating.
- Extremely high contrast (dark text on light warm background).
- Zero cognitive overload, 100% keyboard navigable, seamless screen reader hierarchy.

## Performance Risks
Lowest performance risk. Minimal render tree footprint, ultra-fast LCP (Largest Contentful Paint), zero JS runtime overhead.

## Strengths
- Ultimate spatial calm, fastest load speed, flawless accessibility, zero visual clutter.

## Risks
- Could be viewed as too subdued or simple if the project owner desires immediate dramatic visual effects.

---

# Visual Concept Comparison

| Concept | Visual Impact | Content Flexibility | Interaction Value | Mobile Fit | Performance Risk | Complexity |
|---|---|---|---|---|---|---|
| **Concept 1: Editorial / Architectural** | High | Exceptional | Moderate | High | Low | Moderate |
| **Concept 2: Immersive / Cinematic** | Exceptional | High | Moderate | High | Moderate | Moderate |
| **Concept 3: Interactive / Exploratory** | High | Exceptional | High | Moderate | Moderate | High |
| **Concept 4: Minimal / Gallery-Focused** | Moderate to High | High | Low to Moderate | Exceptional | Very Low | Low |

---

# Project Owner Visual Decision Record

Selected Visual Direction:
[To be selected]

Preferred Media Treatment:
[To be selected]

Interaction Intensity:
[Minimal / Subtle / Moderate]

Animation Direction:
[To be selected]

Approved Component Sources:
[To be selected]

Rejected Component Patterns:
[Optional]

---

# Implementation Readiness

### What Can Be Implemented Immediately
- **Core Design System Tokens:** Spacing scales, container max-widths, responsive layout breakpoints, baseline CSS reset, accessibility focus rings, and reduced-motion media query frameworks in `src/index.css`.
- **Layout Shell & Section Architecture:** Structural hero container boilerplate and responsive grid wrappers compatible with all 4 visual directions and all 3 candidate copy packages.
- **Typography & Font Framework:** Global font stack configurations and fluid typography utility classes (`clamp()`).

### What Requires Project Owner Selection
- **Final Hero Copy Selection:** Choosing Candidate A, Candidate B, or Candidate C (Headline, Supporting Copy, Primary CTA, Secondary CTA).
- **Final Hero Visual Direction:** Choosing Concept 1 (Editorial), Concept 2 (Cinematic), Concept 3 (Interactive), or Concept 4 (Minimal).
- **Approved Component Ecosystem:** Selecting specific reference patterns from React Bits, KokonutUI, or Amicro for frontend implementation.

### Which Decisions Remain Intentionally Open
- Specific high-resolution hero image asset selections (retaining placeholder framing until visual concept approval).
- Exact animation timing curves (`cubic-bezier`) and micro-interaction parameters.
- Specific color palette mode (warm light vs. atmospheric dark mode).
