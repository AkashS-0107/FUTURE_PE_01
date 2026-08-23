# Design Haven

Design Haven is an inspiration-first interior space digital sanctuary crafted for creative homeowners, individuals renovating older properties, and homeowners planning new architectural builds. The web application acts as a conceptual and visual bridge—helping visitors explore interior design directions, articulate fragmented ideas, and naturally progress toward a structured project enquiry without feeling pressured by aggressive sales tactics.

---

## Problem Statement

Homeowners seeking professional interior design guidance online face four primary obstacles:

1. **Articulation Difficulty:** Homeowners frequently possess initial creative ideas or mood preferences, but struggle to shape them into a cohesive, architecturally feasible visual vision.
2. **Aggressive Lead Capture Friction:** Traditional interior design platforms push intrusive pop-ups, immediate sales forms, or catalog carts before establishing brand trust or helping users understand their requirements.
3. **Choice Overwhelm & Abandonment:** Confusing navigation, dense technical jargon, and cluttered style options create decision fatigue, causing visitors to abandon their search.
4. **Superficial Decor Orientation:** Existing market solutions prioritize quick cosmetic fixes over holistic, lifestyle-driven spatial transformations.

---

## Solution

Design Haven solves these friction points through an inspiration-led conversion experience:

* **Inspiration-First Philosophy:** Displays curated spatial directions, material tactility, and architectural lighting concepts prior to requesting commitment.
* **Interactive Style & Vision Workbench:** Features a live vision explorer allowing visitors to select aesthetic directions and interactively calibrate color warmth and sunlight diffusion parameters.
* **Property Context Matrix:** Tailors spatial transformation rationale across four property stages (Refresh, Renovation, New Construction, Vision).
* **Guided Project Enquiry Gateway:** Replaces aggressive sales forms with a transparent, 3-step questionnaire that guides users through personal details, property context, and vision notes.

---

## Key Features

* **Asymmetric Hero Experience:** Display headline narrative, perspective focus switcher (Spatial Volume, Light Corridor, Material Tactility), and interactive spatial hotspots with context tooltips.
* **Curated Inspiration Showcase:** Filterable Bento Grid showcase categorizing concepts by room type (Living, Kitchen, Dining, Sanctuary Suite) with detailed architectural rationale lightboxes.
* **Interactive Style & Vision Workbench:** Real-time visual spec viewport with live SVG lighting calculation reacting dynamically to temperature warmth and diffusion depth range sliders.
* **Residential Transformation Matrix:** Property-stage selector highlighting typical challenges, Design Haven solutions, and key transformation outcomes.
* **4-Phase Process Roadmap:** Transparent timeline demystifying how ideas evolve from initial vision to final execution with explicit client and designer role breakdowns.
* **Philosophy & Anti-Friction FAQs:** High-contrast editorial accordion addressing common hesitations regarding budget control, process transparency, and consultation expectations.
* **3-Step Guided Enquiry Gateway:** Multi-step modal questionnaire with client-side field validation, character counter, and instant reference ID confirmation screen.

---

## User Experience

Design Haven is structured around a 6-stage progressive visitor mindset model:

$$\text{Curiosity} \longrightarrow \text{Inspiration} \longrightarrow \text{Exploration} \longrightarrow \text{Possibility} \longrightarrow \text{Confidence} \longrightarrow \text{Action}$$

1. **Curiosity:** Captures visitor interest with an atmospheric hero layout and core design principles.
2. **Inspiration:** Engages visitors through visual direction galleries and architectural case rationale.
3. **Exploration:** Enables interactive style calibration via warmth and diffusion sliders.
4. **Possibility:** Builds personal relevance across property transformation stages (Refresh, Renovation, Construction).
5. **Confidence:** Instills trust through transparent 4-phase process roadmaps and anti-pressure FAQs.
6. **Action:** Guides high-intent visitors into a multi-step project enquiry dialogue.

---

## Technology Stack

* **Core Framework:** [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
* **Build Tool & Dev Server:** [Vite 8](https://vitejs.dev/)
* **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) with Vanilla CSS custom design tokens (`index.css`)
* **Icon Library:** [Lucide React](https://lucide.dev/)
* **Static Code Analysis:** [OxLint](https://oxc.rs/docs/guide/usage/linter.html) & TypeScript Compiler (`tsc`)
* **Typography:** Playfair Display (Serif Editorial) & Inter (Sans Architectural) via Google Fonts

---

## Project Structure

```text
FUTURE_PE_01/
├── docs/                        # Complete project documentation suite
│   ├── PRD.md                   # Product Requirements Document
│   ├── TRD.md                   # Technical Requirements Document
│   ├── APP_FLOW.md              # Application Flow Specification
│   ├── UI_UX_DESIGN_BRIEF.md    # UI/UX & Editorial Design Specification
│   ├── BACKEND_SCHEMA.md        # Backend Schema & API Contract Specification
│   └── IMPLEMENTATION_PLAN.md   # Phased Implementation Roadmap
├── prompts/                     # Prompt engineering workflow & copy evaluation logs
├── public/                      # Public static assets & favicon
├── src/
│   ├── assets/                  # Project media resources
│   ├── components/
│   │   ├── enquiry/             # Guided Enquiry Form & Modal components
│   │   ├── layout/              # Header, Mobile Drawer, Footer, Main Layout
│   │   ├── shared/              # Brand Logo & SVG Interior Image Frame Renders
│   │   └── ui/                  # Primitive UI design system (Button, Input, Select, Modal, Tabs, etc.)
│   ├── data/                    # Decoupled content store (homeContent.ts)
│   ├── hooks/                   # Custom hooks (useScrollReveal, useReducedMotion)
│   ├── services/                # Frontend API abstraction layer (enquiryService.ts)
│   ├── types/                   # TypeScript interface definitions (content.ts, enquiry.ts)
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Core design system tokens & utility classes
│   └── main.tsx                 # React DOM entry point
├── index.html                   # HTML5 entry template
├── package.json                 # Dependency manifest & scripts
├── tsconfig.json                # TypeScript project configuration
└── vite.config.ts               # Vite bundler configuration
```

---

## Getting Started

### Prerequisites

Ensure [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` are installed.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd e:/career/GYM
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Build

To compile the production-ready distribution bundle:

```bash
npm run build
```

The output artifacts will be created in the `dist/` directory:
* `dist/index.html`
* `dist/assets/index-[hash].css`
* `dist/assets/index-[hash].js`

To preview the production build locally:

```bash
npm run preview
```

To run static type checking and linting:

```bash
# Type check
npx tsc --noEmit

# Lint check
npm run lint
```

---

## Enquiry Flow

### Current Implementation

The project enquiry system is implemented as a client-side service abstraction layer ([enquiryService.ts](file:///e:/career/GYM/src/services/enquiryService.ts)):

1. **Client-Side Validation:** Form inputs are validated in real-time across 3 steps (`fullName`, `email`, `phone`, `propertyType`, `projectStage`, and optional `vision` notes).
2. **Input Sanitization:** User text strings are sanitized to prevent script injection.
3. **Simulated Latency:** Submitting an enquiry triggers a `700ms` asynchronous delay to model realistic network roundtrip feedback.
4. **Client Persistence:** Validated enquiries generate a unique reference ID (e.g., `enq_1724410000000_abc123`) and persist to browser `localStorage` under `design_haven_enquiries`.
5. **Confirmation UI:** Renders an explicit confirmation screen with the reference ID, property parameters, and expected follow-up steps.

### Future Backend Integration

When connecting to a live backend service:
* The `submitProjectEnquiry` service method in `enquiryService.ts` will be updated to transmit HTTP POST requests to `POST /api/enquiries`.
* The payload schema strictly satisfies the contract specified in [docs/BACKEND_SCHEMA.md](docs/BACKEND_SCHEMA.md).
* Server-side database persistence (SQL/NoSQL) and CRM/email dispatch webhooks can be wired without modifying any UI component markup.

---

## Accessibility

Design Haven is built to meet **WCAG 2.1 Level AA** standards:

* **Semantic Landmarks:** Uses HTML5 `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements.
* **Keyboard Navigation:** Operable via `Tab`, `Shift+Tab`, `Space`, and `Enter`. Multi-step form switches focus logically.
* **Modal Accessibility:** Modals implement `role="dialog"`, `aria-modal="true"`, Escape key listeners, and backdrop click handlers.
* **Visible Focus Rings:** Enforces a prominent `2px solid #c5a059` focus ring with a 3px offset (`*:focus-visible`) for all focusable elements.
* **Form Field Associations:** Labels are linked to inputs via explicit `htmlFor` / `id` pairs, accompanied by `aria-invalid` and `aria-describedby` error bindings.
* **Prefers-Reduced-Motion:** Automatically respects user system preferences by disabling CSS animations and transform shifts (`useReducedMotion.ts`).

---

## Responsive Design

The application enforces a fluid responsive layout tested across multiple viewport tiers:

* **Desktop (1440px+ & 1280px):** Multi-column asymmetric grids, expanded navigation links, side-by-side visual spec viewports.
* **Tablet (1024px & 768px):** Adaptive 2-column bento grids, inward-opening hotspot tooltips, compressed header bar.
* **Mobile (430px, 390px, 360px):** Single-column stacked layouts, mobile slide-over navigation drawer, horizontal touch-scrolling tab filters, full-width touch targets (minimum 44px height).

---

## Future Enhancements

The following expansion capabilities represent logical future enhancements:

1. **Live REST API Endpoint:** Replace client `localStorage` simulation with a live Node.js/Go/Python backend API supporting PostgreSQL database storage.
2. **CRM & Email Notification Integration:** Wire incoming enquiry submissions directly to CRM webhooks (e.g., HubSpot) and automated email notifications (e.g., Resend, SendGrid).
3. **Headless CMS Content Management:** Transition the static content store (`homeContent.ts`) to a Headless CMS (e.g., Sanity, Strapi) for real-time editorial updates.
4. **Client Consultation Dashboard:** Build an authenticated administrative portal for Design Haven staff to review incoming enquiries, update submission statuses, and schedule consultation calls.
