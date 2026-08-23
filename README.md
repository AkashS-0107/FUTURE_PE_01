# Design Haven

A modern, image-led interior design concept platform built to explore spatial identity, architectural atmosphere, and personal design direction.

Design Haven moves away from the typical template-heavy portfolio experience. The interface is structured as an editorial journey where interior imagery, typography, motion, and interaction guide visitors from inspiration to a project enquiry.

## Overview

The project focuses on a calm, architectural visual language built around:

- Image-first storytelling
- Editorial typography and generous spacing
- Curated interior design directions
- Interactive spatial exploration
- Responsive layouts across desktop, tablet, and mobile
- Accessible navigation and controls
- A guided multi-step project enquiry experience

The application uses a curated collection of interior images across the hero, galleries, style exploration, transformation scenarios, and architectural showcase sections.

## Features

### Cinematic Hero Experience

A visual hero designed around curated architectural imagery with:

- Multiple interior slides
- Previous and next navigation
- Side-image interaction
- Mouse drag and mobile swipe support
- Keyboard navigation
- Dynamic slide metadata
- Smooth transitions with reduced-motion support
- Contextual calls to action

### Curated Spatial Directions

An interactive visual exploration section that helps users move through different architectural atmospheres and spatial directions.

### Architectural Room Showcase

An editorial gallery composition using asymmetric image layouts rather than repetitive card grids. The section presents multiple interior directions with supporting visual hierarchy and staggered motion.

### Inspiration Showcase

A curated collection of interior spaces organised around different room and design contexts, including living spaces, kitchens, dining areas, bathrooms, and residential environments.

### Style Explorer

An interactive section for exploring aesthetic directions through:

- Tactile and warm environments
- Sculptural and clean compositions
- Architectural and raw spaces
- Wabi-sabi inspired atmospheres

Each direction is paired with relevant interior imagery and material-focused visual storytelling.

### Transformation Context

A narrative exploration of different project situations:

- Existing home refresh
- Renovation
- New construction
- Concept refinement

The interface presents the design situation, challenge, and opportunity without turning the website into another dashboard pretending to be architecture.

### Collaborative Process

A four-stage design journey:

1. Inspiration
2. Concept
3. Refinement
4. Realization

### Philosophy, Trust and FAQs

A typography-led trust section with:

- Design philosophy
- Collaborative principles
- Editorial bento composition
- Interactive FAQ accordion

### Guided Project Enquiry

A multi-step enquiry flow covering:

1. Contact details
2. Property context and project stage
3. Vision and project scope

The flow includes validation, loading states, submission feedback, generated enquiry references, timestamps, and local persistence.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion-based UI animations
- Lucide icons
- Browser localStorage for the current enquiry persistence layer

## Project Structure

```text
src/
├── components/
│   ├── enquiry/
│   ├── hero/
│   ├── layout/
│   ├── shared/
│   └── ui/
├── data/
│   ├── heroSlides.ts
│   ├── homeContent.ts
│   ├── interiorImages.ts
│   └── spatialDirections.ts
├── hooks/
├── lib/
├── sections/
│   └── home/
├── services/
├── types/
├── App.tsx
├── index.css
└── main.tsx

public/
└── images/
```

## Design Direction

The visual system uses:

- A dark, warm architectural palette
- Editorial serif typography for display content
- Monospace accents for labels and navigation metadata
- Warm gold and copper accents
- High-impact interior photography
- Asymmetric grids and editorial compositions
- Minimal overlay UI
- No unnecessary badges, metric cards, or decorative dashboard clutter

The intention is simple: the spaces should remain the main character.

## Accessibility and Interaction

The application includes:

- Semantic layout landmarks
- Keyboard-accessible navigation
- Accessible buttons and carousel controls
- Focus states
- Reduced-motion support
- Responsive layouts
- Touch and pointer interactions
- Scroll offset handling for fixed navigation

## Running Locally

### Prerequisites

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone <repository-url>
cd FUTURE_PE_01
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## Quality Checks

### TypeScript

```bash
npx tsc --noEmit
```

### Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Current Enquiry Architecture

The current enquiry service is implemented as a frontend-oriented service layer with validation, sanitization, generated identifiers, timestamps, status assignment, and local persistence.

For a production deployment, this layer should be connected to a real backend and database.

Recommended production upgrades include:

- Server-side enquiry API
- Database persistence
- Email notifications
- Admin enquiry management
- Rate limiting and abuse protection
- Environment-based configuration
- Analytics
- SEO metadata and structured data
- Sitemap and robots configuration

## Development Approach

Design Haven was developed through iterative UI and UX refinement.

The project evolved through:

- Technical foundation and component architecture
- Homepage narrative development
- Real interior image integration
- Interaction and motion refinement
- Editorial composition restructuring
- Header and footer simplification
- Responsive regression fixes
- Hero redesign
- Gallery and showcase improvements

The emphasis was placed on inspecting the rendered interface and refining composition, spacing, image hierarchy, and interaction behavior rather than assuming that a component is good merely because TypeScript has stopped complaining.

## Status

**Current status:** Frontend concept and interactive experience complete.

The application is ready for further production hardening, backend integration, deployment configuration, and final content or branding adaptation.

## Author

**Akash Suresh**

Computer Science & Engineering  
Artificial Intelligence & Machine Learning
linkedin : linkedin.com/in/akash-suresh-53850a326/
github : github.com/AkashS-0107

## License

This project is intended as a portfolio and design concept implementation.

The source code, branding, visual assets, and interior imagery should only be reused or redistributed with appropriate permission from their respective owners.
