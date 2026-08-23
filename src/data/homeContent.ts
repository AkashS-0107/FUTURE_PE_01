import type { HomeContent, HeroCandidate, HeroCandidateId } from '../types/content';
import { INTERIOR_IMAGES } from './interiorImages';

export const homeContent: HomeContent = {
  hero: {
    activeCandidateId: 'candidate-a',
    candidates: {
      'candidate-a': {
        id: 'candidate-a',
        name: 'Candidate A: Identity-First & Philosophy-Led',
        eyebrow: 'Spatial Identity & Personal Vision',
        headline: 'A Living Space Shaped by Who You Are',
        description:
          'We partner with creative homeowners to transform living spaces into authentic, cohesive environments through thoughtful layout planning, natural light integration, and collaborative guidance.',
        primaryCta: {
          label: 'Explore Spatial Inspiration',
          href: '#inspiration',
          variant: 'accent',
        },
        secondaryCta: {
          label: 'Read Our Philosophy',
          href: '#trust',
          variant: 'outline',
        },
        imageTag: 'Warm Minimalist Living Sanctuary',
        accentQuote: 'Spaces shaped by identity, not fleeting decor trends.',
      },
      'candidate-b': {
        id: 'candidate-b',
        name: 'Candidate B: Vision Refinement & Layout Prioritization',
        eyebrow: 'Collaborative Vision Refinement',
        headline: 'Transform Preliminary Ideas into a Cohesive Living Reality',
        description:
          'Bring scattered inspiration into focus. We help you organize initial concepts, material choices, and spatial priorities into a unified design direction without overriding your personal taste.',
        primaryCta: {
          label: 'Refine Your Vision',
          href: '#style-explorer',
          variant: 'accent',
        },
        secondaryCta: {
          label: 'Understand Our Process',
          href: '#process',
          variant: 'outline',
        },
        imageTag: 'Architectural Material & Layout Blueprint',
        accentQuote: 'You supply the inspiration; we supply the spatial clarity.',
      },
      'candidate-c': {
        id: 'candidate-c',
        name: 'Candidate C: Residential Spatial Potential',
        eyebrow: 'Residential Spatial Potential',
        headline: 'Unlock the Unseen Potential in Your Living Environment',
        description:
          'Whether modernizing an older property, optimizing an existing layout, or planning a new build, discover how intelligent space planning brings warmth, balance, and flow to your home.',
        primaryCta: {
          label: 'View Transformation Scenarios',
          href: '#scenarios',
          variant: 'accent',
        },
        secondaryCta: {
          label: 'Find Your Home Context',
          href: '#scenarios',
          variant: 'outline',
        },
        imageTag: 'Historic & Modern Structural Synthesis',
        accentQuote: 'Reimagine your space through light, layout, and proportion.',
      },
    },
  },

  philosophyPillars: [
    {
      id: 'pillar-1',
      title: 'Authentic Identity',
      tagline: 'Lived Experience Over Fleeting Trends',
      description:
        'Your home should feel like an unmistakable extension of your personal lifestyle. We design around how you actually live, move, and rest, avoiding generic corporate decor formulas.',
      iconName: 'Sparkles',
    },
    {
      id: 'pillar-2',
      title: 'Collaborative Validation',
      tagline: 'Elevating Taste Without Dictation',
      description:
        'We validate and structure your raw inspirations—saved images, architectural clippings, or mood boards—providing professional architectural clarity without discarding your creative voice.',
      iconName: 'Compass',
    },
    {
      id: 'pillar-3',
      title: 'Holistic Environments',
      tagline: 'Light, Texture & Spatial Harmony',
      description:
        'True space transformation balances architectural volume, natural light orientation, tactile material selections, and intuitive room-to-room circulation.',
      iconName: 'Layers',
    },
  ],

  inspirationShowcase: [
    {
      id: 'insp-1',
      title: 'Modern Bright Living Lounge',
      category: 'living',
      categoryLabel: 'Living Environment',
      tag: 'Marble & Walnut Slats',
      image: INTERIOR_IMAGES.img2.src,
      description:
        'A light-filled living lounge featuring a floating marble TV installation, vertical timber paneling, and warm cove recessed lighting.',
      details: {
        lighting: 'Cove LED wash & recessed warm spot illumination',
        materials: 'Calacatta marble panel, slatted walnut timber, beige wool',
        spatialFlow: 'L-shaped conversational zone aligned with daylight entry',
      },
    },
    {
      id: 'insp-2',
      title: 'Curved Backlit Architectural Study',
      category: 'living',
      categoryLabel: 'Work & Study Sanctuary',
      tag: 'Executive Joinery & Lighting',
      image: INTERIOR_IMAGES.img16.src,
      description:
        'An executive home study featuring curved illuminated display shelving, precision marble desk joinery, and peaceful garden views.',
      details: {
        lighting: 'Integrated warm shelf LEDs & overhead ring spotlights',
        materials: 'Dark wood shelving, executive leather seating, honed dark marble',
        spatialFlow: 'Dedicated high-focus study zone with natural side illumination',
      },
    },
    {
      id: 'insp-3',
      title: 'Matte Grey & Calacatta Culinary Workspace',
      category: 'kitchen',
      categoryLabel: 'Kitchen & Culinary',
      tag: 'Precision Joinery & Stone',
      image: INTERIOR_IMAGES.img9.src,
      description:
        'A modern culinary workspace with handleless matte grey cabinets, bookmatched Calacatta marble backsplash, and under-cabinet illumination.',
      details: {
        lighting: 'Warm under-cabinet LED strip & integrated overhead spots',
        materials: 'Matte grey lacquer, Calacatta marble slab, dark quartz counter',
        spatialFlow: 'Ergonomic L-corner workflow with seamless appliance integration',
      },
    },
    {
      id: 'insp-4',
      title: 'Deep Teal & Patterned Tile Kitchen',
      category: 'kitchen',
      categoryLabel: 'Kitchen & Culinary',
      tag: 'European Transitional Craft',
      image: INTERIOR_IMAGES.img7.src,
      description:
        'A vibrant kitchen pairing deep teal shaker joinery with patinated brass hardware, white quartz surfaces, and geometric floor tilework.',
      details: {
        lighting: 'Pendant drop illumination & reflective subway tile backsplash',
        materials: 'Deep teal shaker wood, patinated brass pulls, encaustic tile',
        spatialFlow: 'Dual-counter prep zone maximizing daylight window exposure',
      },
    },
    {
      id: 'insp-5',
      title: 'Contemporary Multi-Functional Suite',
      category: 'suite',
      categoryLabel: 'Private Sanctuary',
      tag: 'Tailored Storage & Lighting',
      image: INTERIOR_IMAGES.img4.src,
      description:
        'A versatile sleeping sanctuary with built-in dark grey wardrobes, hidden bed platform, mustard velvet accents, and brass ring lighting.',
      details: {
        lighting: 'Tiered brass ring chandelier & soft bedside shelf LEDs',
        materials: 'Smoked oak cabinetry, mustard textiles, patterned floor tile',
        spatialFlow: 'Multi-zone bedroom and study suite with floor-to-ceiling storage',
      },
    },
    {
      id: 'insp-6',
      title: 'Organic Modern Spa Bath',
      category: 'suite',
      categoryLabel: 'Private Sanctuary',
      tag: 'Teak Vanity & Freestanding Tub',
      image: INTERIOR_IMAGES.img10.src,
      description:
        'A tranquil bathroom sanctuary featuring a freestanding ergonomic soaking tub, natural teak double vanity, and trailing botanical greenery.',
      details: {
        lighting: 'Natural window daylighting & warm vanity sconce glow',
        materials: 'Teak wood, ceramic vessel basin, slate floor tiles, pothos flora',
        spatialFlow: 'Dual vanity and wet zone orientation for restorative ritual',
      },
    },
    {
      id: 'insp-7',
      title: 'Minimalist Timber Skylight Atrium',
      category: 'dining',
      categoryLabel: 'Dining & Atrium',
      tag: 'Vertical Slats & Daylight Beam',
      image: INTERIOR_IMAGES.img5.src,
      description:
        'A serene dining atrium featuring a vertical timber slat ceiling canopy, diagonal skylight illumination beam, and honed circular marble table.',
      details: {
        lighting: 'Diagonal skylight daylight beam & hidden perimeter glow',
        materials: 'Vertical timber slats, honed marble tabletop, limewash plaster',
        spatialFlow: 'Centrally anchored dining volume with seamless garden transition',
      },
    },
    {
      id: 'insp-8',
      title: 'Contemporary Geometric Lounge',
      category: 'living',
      categoryLabel: 'Living & Ambient',
      tag: 'Geometric Accent & Lighting',
      image: INTERIOR_IMAGES.img14.src,
      description:
        'An evening lounge highlighted by back-lit diamond geometric wall mirrors, cove ceiling lighting, and low-profile velvet seating.',
      details: {
        lighting: 'Gold back-lit mirror halo & dual ceiling ring chandeliers',
        materials: 'Smoked glass mirrors, plush velvet upholstery, polished floor tile',
        spatialFlow: 'Conversational lounge centered on warm ambient wall geometry',
      },
    },
    {
      id: 'insp-9',
      title: 'Botanical Accent Living Salon',
      category: 'living',
      categoryLabel: 'Living Environment',
      tag: 'Botanical Art & Cove Lighting',
      image: INTERIOR_IMAGES.img19.src,
      description:
        'A comfortable family salon pairing soft grey sectional seating with a custom botanical wall panel and circular LED ceiling cove lighting.',
      details: {
        lighting: 'Concentric circular LED cove ceiling light & warm wall sconces',
        materials: 'Linen sectional, botanical wall mural, dark timber paneling',
        spatialFlow: 'Open sectional seating layout focused on central media console',
      },
    },
  ],

  styleMoods: [
    {
      id: 'mood-tactile',
      name: 'Tactile & Warm',
      tagline: 'Textural Depth, Earthen Tones & Biophilic Comfort',
      image: INTERIOR_IMAGES.img12.src,
      attributes: ['Sage Green Tiles', 'Biophilic Flora', 'Natural Teak', 'Organic Warmth'],
      keyMaterials: ['Sage subway tiles', 'Reclaimed teak vanity', 'Ceramic vessel sink', 'Lush trailing plants'],
      colorPalette: ['#2d3b32', '#8c7a6b', '#c5a059', '#f4f3ef'],
      description:
        'Emphasizes inviting organic textures, glazed sage ceramics, and rich natural timber that impart tactile warmth and acoustic softness.',
    },
    {
      id: 'mood-sculptural',
      name: 'Sculptural & Clean',
      tagline: 'Industrial Concrete Geometry & Precise Lines',
      image: INTERIOR_IMAGES.img11.src,
      attributes: ['Raw Concrete Walls', 'Copper Accents', 'Circular Mirror', 'Industrial Elegance'],
      keyMaterials: ['Board-formed concrete', 'Patinated copper piping', 'Wire pendant cage', 'Matte black basin'],
      colorPalette: ['#1c1c1a', '#b87a55', '#737168', '#f4f3ef'],
      description:
        'Prioritizes raw architectural texture, board-formed concrete surfaces, and copper framing elements that let pure geometric forms shine.',
    },
    {
      id: 'mood-architectural',
      name: 'Architectural & Raw',
      tagline: 'Dark Gloss Contrast, Precision Lines & Shadow Depth',
      image: INTERIOR_IMAGES.img8.src,
      attributes: ['High-Gloss Black', 'Monolithic Countertop', 'Reflective Flooring', 'Filtered Light'],
      keyMaterials: ['High-gloss black lacquer', 'Dark marble slab', 'Satin stainless steel', 'Venetian blinds'],
      colorPalette: ['#0c0c0b', '#383632', '#a8a69e', '#ffffff'],
      description:
        'Celebrates high contrast, reflective dark lacquered surfaces, and precise minimalist lines for dramatic architectural atmosphere.',
    },
    {
      id: 'mood-wabi-sabi',
      name: 'Wabi-Sabi & Zen Sanctuary',
      tagline: 'Charred Cedar, Tatami Texture & Contemplative Light',
      image: INTERIOR_IMAGES.img17.src,
      attributes: ['Charred Cedar', 'Low Tatami Platform', 'Paper Lantern', 'Natural Stone'],
      keyMaterials: ['Shou sugi ban cedar', 'Natural woven tatami', 'Washi paper light', 'Honed river stone'],
      colorPalette: ['#141412', '#4a4843', '#9e8c76', '#e8e6df'],
      description:
        'Embraces organic impermanence, charred cedar timber, low-profile tatami seating, and soft lantern glow for deep tranquil rest.',
    },
  ],

  transformationScenarios: [
    {
      id: 'refresh',
      title: 'Existing Home Refresh',
      audienceTag: 'Creative Homeowners',
      userContext: 'Living in an existing residence seeking an elevated, cohesive aesthetic.',
      challenge:
        'Cluttered spatial flow, outdated surface materials, or mismatched furniture pieces that fail to reflect evolving lifestyle needs.',
      solutionApproach:
        'Holistic layout reconfiguration, custom joinery integration, and lighting optimization without structural demolition.',
      keyBenefits: [
        'Optimized room-to-room circulation',
        'Unified color and material palette',
        'Custom storage that reduces daily clutter',
      ],
      image: INTERIOR_IMAGES.img2.src,
      imageTitle: 'Modern Bright Living Lounge (Refresh Context)',
    },
    {
      id: 'renovation',
      title: 'Older Property Renovation',
      audienceTag: 'Renovation Seekers',
      userContext: 'Restoring or modernizing an older, character-rich property.',
      challenge:
        'Integrating modern heating, acoustic isolation, and open lighting while preserving original architectural charm.',
      solutionApproach:
        'Sensitive spatial modernizing that respects structural heritage while introducing contemporary amenities.',
      keyBenefits: [
        'Preservation of authentic architectural details',
        'Modernized electrical & lighting schemes',
        'Rebalanced room proportions for modern living',
      ],
      image: INTERIOR_IMAGES.img18.src,
      imageTitle: 'Contemporary Blue Modular Lounge (Renovation Context)',
    },
    {
      id: 'construction',
      title: 'New Build & Bare Structure',
      audienceTag: 'New Build Owners',
      userContext: 'Currently constructing a home or planning a new architectural build.',
      challenge:
        'Overwhelmed by volume of early interior choices before framing and electrical points are locked.',
      solutionApproach:
        'End-to-end space planning from bare framing to finish schedules and built-in architectural detailing.',
      keyBenefits: [
        'Early coordination with architectural builders',
        'Cohesive interior material schedules',
        'Avoidance of costly late-stage alteration fees',
      ],
      image: INTERIOR_IMAGES.img15.src,
      imageTitle: 'Contemporary Master Sanctuary Suite (New Build Context)',
    },
    {
      id: 'vision',
      title: 'Idea Refinement & Structuring',
      audienceTag: 'Concept Collaborators',
      userContext: 'Possess saved mood boards, clippings, or initial ideas but need guidance.',
      challenge:
        'Struggling to reconcile disparate style preferences into an architecturally sound design plan.',
      solutionApproach:
        'Collaborative blueprinting sessions that translate mood boards into precise spatial layouts and specifications.',
      keyBenefits: [
        'Validation of personal creative taste',
        'Clear spatial layout blueprints',
        'Structured material and lighting guidelines',
      ],
      image: INTERIOR_IMAGES.img4.src,
      imageTitle: 'Contemporary Multi-Functional Suite (Vision Refinement Context)',
    },
  ],

  processSteps: [
    {
      stepNumber: 1,
      title: 'Inspiration & Discovery',
      subtitle: 'Capturing Vision & Spatial Context',
      description:
        'We explore your home context, lifestyle habits, saved inspirations, and space priorities through a structured, unhurried dialogue.',
      clientRole: 'Share property status, mood preferences, and living goals.',
      designHavenRole: 'Review context, identify spatial potential, and define project scope boundaries.',
    },
    {
      stepNumber: 2,
      title: 'Concept Blueprinting',
      subtitle: 'Spatial Layouts & Material Palettes',
      description:
        'We translate initial ideas into 2D spatial layouts, lighting schemes, and tactile material combinations tailored to your property.',
      clientRole: 'Review spatial flow options and material samples.',
      designHavenRole: 'Develop cohesive room plans, circulation diagrams, and lighting schedules.',
    },
    {
      stepNumber: 3,
      title: 'Design Refinement',
      subtitle: 'Detail Polishing & Finishes',
      description:
        'We polish exact custom joinery drawings, fixture selections, hardware details, and architectural finish specifications.',
      clientRole: 'Confirm final finish selections and spatial details.',
      designHavenRole: 'Prepare comprehensive design documentation and architectural execution guides.',
    },
    {
      stepNumber: 4,
      title: 'Realization Guidance',
      subtitle: 'Translating Design to Reality',
      description:
        'We provide ongoing collaborative oversight and technical clarification during execution to ensure spatial fidelity.',
      clientRole: 'Work with your contractor with complete design clarity.',
      designHavenRole: 'Provide design oversight and answer contractor technical queries.',
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What if I already have saved mood boards or Pinterest collections?',
      answer:
        'We welcome your saved inspirations! Rather than imposing a rigid agency style, our collaborative approach uses your raw ideas as the foundational anchor, organizing them into a unified, architecturally sound design direction.',
      category: 'Collaboration',
    },
    {
      id: 'faq-2',
      question: 'Do I need complete architectural blueprints before starting?',
      answer:
        'Not at all. Whether you have hand sketches, bare structural plans from a builder, or simply photos of your existing living space, we adapt our spatial discovery process to your current stage.',
      category: 'Process',
    },
    {
      id: 'faq-3',
      question: 'Is Design Haven an e-commerce store or a design consultancy?',
      answer:
        'Design Haven is a holistic spatial design platform. We focus on space planning, room-by-room layout harmony, light orientation, and material curation. We do not force off-the-shelf catalog product sales.',
      category: 'Services',
    },
    {
      id: 'faq-4',
      question: 'What happens after I submit a project enquiry?',
      answer:
        'Our team conducts a thoughtful review of your property details and vision notes. We then schedule a zero-pressure preliminary conversation to discuss spatial feasibility and outline tailored next steps.',
      category: 'Inquiry',
    },
  ],
};

export function getActiveHeroCandidate(
  activeId: HeroCandidateId = homeContent.hero.activeCandidateId
): HeroCandidate {
  return homeContent.hero.candidates[activeId] || homeContent.hero.candidates['candidate-a'];
}
