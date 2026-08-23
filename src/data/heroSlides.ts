import { INTERIOR_IMAGES } from './interiorImages';

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  accent: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: '01',
    image: INTERIOR_IMAGES.img1.src,
    title: 'Warm Architectural Sanctuary',
    category: 'Spatial Volume',
    description: 'A central hearth framed by monolithic stone and tactile plaster, balancing raw material expression with everyday warmth.',
    accent: 'rgba(197, 160, 89, 0.18)',
  },
  {
    id: '02',
    image: INTERIOR_IMAGES.img3.src,
    title: 'Double-Height Architectural Salon',
    category: 'Vertical Volume',
    description: 'A dramatic spatial composition where height, light, and proportion create a sense of calm architectural openness.',
    accent: 'rgba(184, 122, 85, 0.18)',
  },
  {
    id: '03',
    image: INTERIOR_IMAGES.img5.src,
    title: 'Minimal Timber Skylight Atrium',
    category: 'Natural Light',
    description: 'Warm timber, filtered daylight, and a restrained material palette create an atmosphere that evolves throughout the day.',
    accent: 'rgba(142, 155, 136, 0.18)',
  },
  {
    id: '04',
    image: INTERIOR_IMAGES.img13.src,
    title: 'Brass & Marble Sanctuary',
    category: 'Material Expression',
    description: 'Rich mineral surfaces and controlled illumination create a refined balance between intimacy and architectural presence.',
    accent: 'rgba(197, 160, 89, 0.18)',
  },
  {
    id: '05',
    image: INTERIOR_IMAGES.img16.src,
    title: 'Curved Monolithic Penthouse',
    category: 'Sculptural Living',
    description: 'Continuous forms and quiet material transitions shape a living environment with a strong sculptural identity.',
    accent: 'rgba(168, 166, 158, 0.18)',
  },
  {
    id: '06',
    image: INTERIOR_IMAGES.img18.src,
    title: 'Panoramic Courtyard Residence',
    category: 'Indoor–Outdoor Continuity',
    description: 'Architecture opens toward light, landscape, and circulation, allowing interior and exterior space to function as one experience.',
    accent: 'rgba(120, 140, 130, 0.18)',
  },
];
