import { INTERIOR_IMAGES } from './interiorImages';

export interface SpatialDirection {
  id: string;
  narrativeNumber: string;
  title: string;
  spatialFocus: string;
  description: string;
  imageSrc: string;
  altText: string;
  atmosphere: string;
}

export const SPATIAL_DIRECTIONS: SpatialDirection[] = [
  {
    id: 'spatial-01',
    narrativeNumber: '01',
    title: 'Warm Architectural Sanctuary',
    spatialFocus: 'Spatial Volume & Central Hearth',
    description: 'A central hearth framed by monolithic stone and tactile plaster, balancing raw material gravity with intimate warmth.',
    imageSrc: INTERIOR_IMAGES.img1.src,
    altText: 'Warm brutalist living sanctuary with central hearth and curved leather seating',
    atmosphere: 'Monolithic warmth • Handcrafted plaster',
  },
  {
    id: 'spatial-02',
    narrativeNumber: '02',
    title: 'Expansive Spatial Volume',
    spatialFocus: 'Double-Height Daylight Corridor',
    description: 'Double-height glazed apertures casting changing daylight across sweeping vertical volumes and sculptural stone seating.',
    imageSrc: INTERIOR_IMAGES.img3.src,
    altText: 'Double-height architectural salon with curved terracotta sofa and floor-to-ceiling windows',
    atmosphere: 'Glazed aperture • Architectural volume',
  },
  {
    id: 'spatial-03',
    narrativeNumber: '03',
    title: 'Material & Natural Light',
    spatialFocus: 'Timber Slat Skylight Atrium',
    description: 'A rhythmic slatted timber ceiling filtering diagonal beams of daylight onto honed mineral surfaces and limewash walls.',
    imageSrc: INTERIOR_IMAGES.img5.src,
    altText: 'Minimalist timber skylight atrium with natural light beam and honed marble table',
    atmosphere: 'Filtered daylight • Honed mineral stone',
  },
  {
    id: 'spatial-04',
    narrativeNumber: '04',
    title: 'Private Luxury Retreat',
    spatialFocus: 'Illuminated Spa Sanctuary',
    description: 'Backlit oval mirrors and custom fluted joinery forming an intimate sanctuary designed for evening restoration.',
    imageSrc: INTERIOR_IMAGES.img13.src,
    altText: 'Luxury spa suite featuring fluted dark wood vanity and backlit oval mirrors',
    atmosphere: 'Ambient glow • Fluted timber joinery',
  },
  {
    id: 'spatial-05',
    narrativeNumber: '05',
    title: 'Sculptural Contemporary Living',
    spatialFocus: 'Curved Architectural Study',
    description: 'Illuminated curved display shelving and precision executive joinery framing a focused, contemplative study.',
    imageSrc: INTERIOR_IMAGES.img16.src,
    altText: 'Curved backlit study with marble desk and panoramic garden window view',
    atmosphere: 'Precision joinery • Garden aperture',
  },
  {
    id: 'spatial-06',
    narrativeNumber: '06',
    title: 'Architectural Openness',
    spatialFocus: 'Modular Living & Spatial Flow',
    description: 'Floating modular wall cabinetry and terrazzo floor slabs establishing seamless visual openness across living zones.',
    imageSrc: INTERIOR_IMAGES.img18.src,
    altText: 'Contemporary living lounge with floating blue modular cabinetry and terrazzo floor',
    atmosphere: 'Modular clarity • Terrazzo spatial continuity',
  },
];
