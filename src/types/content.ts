export type HeroCandidateId = 'candidate-a' | 'candidate-b' | 'candidate-c';

export interface CTAConfig {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
}

export interface HeroCandidate {
  id: HeroCandidateId;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: CTAConfig;
  secondaryCta: CTAConfig;
  imageTag: string;
  accentQuote?: string;
}

export interface HeroContentConfig {
  activeCandidateId: HeroCandidateId;
  candidates: Record<HeroCandidateId, HeroCandidate>;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Sparkles' | 'Layers' | 'Compass';
}

export interface InspirationItem {
  id: string;
  title: string;
  category: 'living' | 'dining' | 'kitchen' | 'suite';
  categoryLabel: string;
  tag: string;
  description: string;
  image?: string;
  details: {
    lighting: string;
    materials: string;
    spatialFlow: string;
  };
}

export interface StyleMoodCategory {
  id: string;
  name: string;
  tagline: string;
  attributes: string[];
  keyMaterials: string[];
  colorPalette: string[];
  description: string;
  image?: string;
}

export interface PropertyScenario {
  id: 'refresh' | 'renovation' | 'construction' | 'vision';
  title: string;
  audienceTag: string;
  userContext: string;
  challenge: string;
  solutionApproach: string;
  keyBenefits: string[];
  image?: string;
  imageTitle?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  clientRole: string;
  designHavenRole: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HomeContent {
  hero: HeroContentConfig;
  philosophyPillars: PhilosophyPillar[];
  inspirationShowcase: InspirationItem[];
  styleMoods: StyleMoodCategory[];
  transformationScenarios: PropertyScenario[];
  processSteps: ProcessStep[];
  faqs: FAQItem[];
}
