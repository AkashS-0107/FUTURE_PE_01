import React, { useState, useMemo } from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Tabs } from '../../components/ui/Tabs';
import { Modal } from '../../components/ui/Modal';
import { InteriorImageFrame } from '../../components/shared/InteriorImageFrame';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { INTERIOR_IMAGES } from '../../data/interiorImages';
import {
  ArchitecturalRoomGallery,
  DEFAULT_GALLERY_ITEMS,
  type GalleryItem,
} from '../../components/ui/ArchitecturalRoomGallery';
import { Sun, Layers, Compass } from 'lucide-react';

export interface InspirationShowcaseProps {
  onOpenEnquiry: () => void;
}

export const InspirationShowcase: React.FC<InspirationShowcaseProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const { ref, revealClasses } = useScrollReveal();

  const tabs = [
    { id: 'all', label: 'All Directions', count: 4 },
    { id: 'living', label: 'Living & Lounge', count: 4 },
    { id: 'kitchen', label: 'Kitchen & Culinary', count: 4 },
    { id: 'suite', label: 'Sanctuary Suite', count: 4 },
    { id: 'dining', label: 'Dining Atrium', count: 4 },
  ];

  // Curated 4-image sequence per category tab, preserving exact interior dataset references
  const currentGalleryItems = useMemo<GalleryItem[]>(() => {
    switch (activeTab) {
      case 'living':
        return [
          {
            id: 'img-1',
            number: '01',
            title: 'WARM ARCHITECTURAL SANCTUARY',
            categoryLabel: 'Living Environment',
            tag: 'Monolithic Hearth & Plaster',
            image: INTERIOR_IMAGES.img1.src,
            alt: INTERIOR_IMAGES.img1.title,
            description: INTERIOR_IMAGES.img1.semanticRelationship,
            details: {
              lighting: 'Central hearth ambient glow & plaster alcove spots',
              materials: 'Handcrafted plaster, dark leather, warm architectural timber',
              spatialFlow: 'Proportional double-height living volume centered on stone hearth',
            },
          },
          {
            id: 'img-3',
            number: '02',
            title: 'DOUBLE-HEIGHT SALON',
            categoryLabel: 'Living & Lounge',
            tag: 'Glazed Volume & Veined Stone',
            image: INTERIOR_IMAGES.img3.src,
            alt: INTERIOR_IMAGES.img3.title,
            description: INTERIOR_IMAGES.img3.semanticRelationship,
            details: {
              lighting: 'Floor-to-ceiling window aperture daylighting & cove lighting',
              materials: 'Bookmatched marble wall, terracotta curved sofa, floating glass',
              spatialFlow: 'Expansive double-height atrium connecting lounge and upper level',
            },
          },
          {
            id: 'img-2',
            number: '03',
            title: 'MODERN BRIGHT LOUNGE',
            categoryLabel: 'Living & Lounge',
            tag: 'Marble Panel & Vertical Timber',
            image: INTERIOR_IMAGES.img2.src,
            alt: INTERIOR_IMAGES.img2.title,
            description: INTERIOR_IMAGES.img2.semanticRelationship,
            details: {
              lighting: 'Recessed warm spot illumination & cove wash LED',
              materials: 'Floating Calacatta marble panel, slatted walnut, beige wool',
              spatialFlow: 'Conversational seating zone aligned with natural light windows',
            },
          },
          {
            id: 'img-16',
            number: '04',
            title: 'SCULPTURAL LIVING STUDY',
            categoryLabel: 'Executive Lounge',
            tag: 'Curved Backlit Joinery',
            image: INTERIOR_IMAGES.img16.src,
            alt: INTERIOR_IMAGES.img16.title,
            description: INTERIOR_IMAGES.img16.semanticRelationship,
            details: {
              lighting: 'Integrated warm shelf LEDs & overhead spotlights',
              materials: 'Dark wood shelving, executive leather seating, dark marble desk',
              spatialFlow: 'Dedicated focus zone framed by panoramic garden aperture',
            },
          },
        ];

      case 'kitchen':
        return [
          {
            id: 'img-9',
            number: '01',
            title: 'MATTE GREY & CALACATTA WORKSPACE',
            categoryLabel: 'Kitchen & Culinary',
            tag: 'Precision Joinery & Marble',
            image: INTERIOR_IMAGES.img9.src,
            alt: INTERIOR_IMAGES.img9.title,
            description: INTERIOR_IMAGES.img9.semanticRelationship,
            details: {
              lighting: 'Under-cabinet LED strip & integrated overhead spots',
              materials: 'Matte grey lacquer cabinetry, Calacatta marble slab, dark quartz',
              spatialFlow: 'Ergonomic L-corner workflow with integrated appliance housing',
            },
          },
          {
            id: 'img-7',
            number: '02',
            title: 'DEEP TEAL TRANSITIONAL KITCHEN',
            categoryLabel: 'Kitchen & Culinary',
            tag: 'European Craft & Tilework',
            image: INTERIOR_IMAGES.img7.src,
            alt: INTERIOR_IMAGES.img7.title,
            description: INTERIOR_IMAGES.img7.semanticRelationship,
            details: {
              lighting: 'Pendant drop illumination & reflective subway tile backsplash',
              materials: 'Deep teal shaker joinery, patinated brass hardware, encaustic tile',
              spatialFlow: 'Dual-counter prep zone maximizing window daylight exposure',
            },
          },
          {
            id: 'img-8',
            number: '03',
            title: 'DARK GLOSS MINIMALIST KITCHEN',
            categoryLabel: 'Architectural Minimalist',
            tag: 'Reflective Surface & Monolithic Stone',
            image: INTERIOR_IMAGES.img8.src,
            alt: INTERIOR_IMAGES.img8.title,
            description: INTERIOR_IMAGES.img8.semanticRelationship,
            details: {
              lighting: 'Directional Venetian blind daylighting & edge strip LEDs',
              materials: 'High-gloss black lacquer, dark marble counter, polished floor',
              spatialFlow: 'Linear minimalist galley optimizing spatial depth',
            },
          },
          {
            id: 'img-2',
            number: '04',
            title: 'CULINARY LOUNGE SYNTHESIS',
            categoryLabel: 'Living & Culinary',
            tag: 'Open-Plan Timber & Stone',
            image: INTERIOR_IMAGES.img2.src,
            alt: INTERIOR_IMAGES.img2.title,
            description: INTERIOR_IMAGES.img2.semanticRelationship,
            details: {
              lighting: 'Dual-zone ambient ceiling cove & focal accent lighting',
              materials: 'Walnut wall slats, honed marble island, plush seating',
              spatialFlow: 'Seamless open-plan transition between culinary prep and seating',
            },
          },
        ];

      case 'suite':
        return [
          {
            id: 'img-4',
            number: '01',
            title: 'CONTEMPORARY MULTI-FUNCTIONAL SUITE',
            categoryLabel: 'Private Sanctuary',
            tag: 'Tailored Storage & Ring Halo',
            image: INTERIOR_IMAGES.img4.src,
            alt: INTERIOR_IMAGES.img4.title,
            description: INTERIOR_IMAGES.img4.semanticRelationship,
            details: {
              lighting: 'Tiered brass ring chandelier & soft bedside shelf LEDs',
              materials: 'Smoked oak joinery, mustard velvet textiles, patterned floor tile',
              spatialFlow: 'Multi-zone sleeping sanctuary with integrated storage and desk',
            },
          },
          {
            id: 'img-13',
            number: '02',
            title: 'LUXURY BRASS & MARBLE SPA SUITE',
            categoryLabel: 'Sanctuary Bath',
            tag: 'Illuminated Oval Mirrors & Brass',
            image: INTERIOR_IMAGES.img13.src,
            alt: INTERIOR_IMAGES.img13.title,
            description: INTERIOR_IMAGES.img13.semanticRelationship,
            details: {
              lighting: 'Twin backlit oval mirror halos & warm ceiling cove glow',
              materials: 'Custom fluted dark wood vanity, brass soaking tub, floating marble',
              spatialFlow: 'Intimate spatial layering designed for restorative bath rituals',
            },
          },
          {
            id: 'img-10',
            number: '03',
            title: 'ORGANIC MODERN SPA BATH',
            categoryLabel: 'Sanctuary Bath',
            tag: 'Teak Vanity & Freestanding Tub',
            image: INTERIOR_IMAGES.img10.src,
            alt: INTERIOR_IMAGES.img10.title,
            description: INTERIOR_IMAGES.img10.semanticRelationship,
            details: {
              lighting: 'Window daylighting & warm vanity sconce illumination',
              materials: 'Teak wood, ceramic vessel basin, slate floor tiles, pothos flora',
              spatialFlow: 'Dual vanity and wet zone layout framed by lush biophilic greenery',
            },
          },
          {
            id: 'img-15',
            number: '04',
            title: 'MASTER SANCTUARY SUITE',
            categoryLabel: 'Master Suite',
            tag: 'Upholstered Wall & Drop Lighting',
            image: INTERIOR_IMAGES.img15.src,
            alt: INTERIOR_IMAGES.img15.title,
            description: INTERIOR_IMAGES.img15.semanticRelationship,
            details: {
              lighting: 'Pendant drop lamps & indirect ceiling cove wash',
              materials: 'Upholstered geometric headboard paneling, soft woven linen',
              spatialFlow: 'Serene master sleeping chamber designed around acoustic comfort',
            },
          },
        ];

      case 'dining':
        return [
          {
            id: 'img-5',
            number: '01',
            title: 'MINIMALIST TIMBER SKYLIGHT ATRIUM',
            categoryLabel: 'Dining Atrium',
            tag: 'Vertical Slats & Daylight Beam',
            image: INTERIOR_IMAGES.img5.src,
            alt: INTERIOR_IMAGES.img5.title,
            description: INTERIOR_IMAGES.img5.semanticRelationship,
            details: {
              lighting: 'Diagonal skylight daylight beam & hidden soffit lighting',
              materials: 'Vertical timber slat canopy, honed marble table, limewash plaster',
              spatialFlow: 'Centrally anchored dining volume with direct skylight exposure',
            },
          },
          {
            id: 'img-17',
            number: '02',
            title: 'JAPANESE WABI-SABI TEA SANCTUARY',
            categoryLabel: 'Zen Dining & Tea',
            tag: 'Tatami Platform & Charred Cedar',
            image: INTERIOR_IMAGES.img17.src,
            alt: INTERIOR_IMAGES.img17.title,
            description: INTERIOR_IMAGES.img17.semanticRelationship,
            details: {
              lighting: 'Soft paper lantern glow & natural ambient window light',
              materials: 'Low tatami seating platform, Shou Sugi Ban charred cedar, water stone',
              spatialFlow: 'Ground-level tea sanctuary encouraging quiet contemplation',
            },
          },
          {
            id: 'img-3',
            number: '03',
            title: 'DOUBLE-HEIGHT GLAZED SALON',
            categoryLabel: 'Dining & Atrium',
            tag: 'Panels & Daylight Corridor',
            image: INTERIOR_IMAGES.img3.src,
            alt: INTERIOR_IMAGES.img3.title,
            description: INTERIOR_IMAGES.img3.semanticRelationship,
            details: {
              lighting: 'Floor-to-ceiling glass wall daylighting & cove wash',
              materials: 'Bookmatched stone, polished glass, terracotta seating',
              spatialFlow: 'Glazed double-height atrium connecting interior dining to landscape',
            },
          },
          {
            id: 'img-6',
            number: '04',
            title: 'WARM ORGANIC LIVING & DINING',
            categoryLabel: 'Organic Lounge',
            tag: 'Radial Ceiling Motif & Slate',
            image: INTERIOR_IMAGES.img6.src,
            alt: INTERIOR_IMAGES.img6.title,
            description: INTERIOR_IMAGES.img6.semanticRelationship,
            details: {
              lighting: 'Integrated circular ceiling LED cove & warm wall accents',
              materials: 'Circular ceiling slat feature, terracotta velvet, dark slate wall',
              spatialFlow: 'Radial conversational dining & living hub for intimate gatherings',
            },
          },
        ];

      case 'all':
      default:
        return DEFAULT_GALLERY_ITEMS;
    }
  }, [activeTab]);

  return (
    <section
      id="inspiration"
      className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative scroll-section-offset"
    >
      <Container className="space-y-12 sm:space-y-16">
        {/* Editorial Section Header */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 ${revealClasses}`}
        >
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#c5a059] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              ARCHITECTURAL ROOM SHOWCASE
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight leading-tight">
              Spaces shaped around atmosphere, material, light and everyday living.
            </h2>

            <p className="text-base text-[#a8a69e] leading-relaxed font-sans-architectural">
              A curated selection of interiors exploring different approaches to spatial identity, light orientation, and architectural proportion.
            </p>
          </div>

          {/* Category Filter Navigation */}
          <div className="shrink-0 w-full lg:w-auto max-w-full overflow-x-auto">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>
        </div>

        {/* Asymmetric Architectural Gallery Spread */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <ArchitecturalRoomGallery
            items={currentGalleryItems}
            onSelectRoom={(item) => setSelectedGalleryItem(item)}
          />
        </div>
      </Container>

      {/* Rationale Lightbox Modal */}
      {selectedGalleryItem && (
        <Modal
          isOpen={Boolean(selectedGalleryItem)}
          onClose={() => setSelectedGalleryItem(null)}
          title={selectedGalleryItem.title}
          subtitle={`${selectedGalleryItem.categoryLabel || 'Spatial Study'} \u2022 ${selectedGalleryItem.tag || selectedGalleryItem.number}`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            {/* Full-width photography frame */}
            <div className="relative overflow-hidden rounded-none border border-white/[0.08]">
              <InteriorImageFrame
                src={selectedGalleryItem.image}
                aspectRatio="wide"
                title={selectedGalleryItem.title}
                className="rounded-none border-none w-full"
              />
            </div>

            {/* Architectural rationale narrative */}
            {selectedGalleryItem.description && (
              <p className="text-sm text-[#a8a69e] leading-relaxed font-sans-architectural">
                {selectedGalleryItem.description}
              </p>
            )}

            {/* Architectural Rationale Breakdown */}
            {selectedGalleryItem.details && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="space-y-1.5 p-3.5 bg-[#141412] border border-white/[0.08] rounded-none">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c5a059] font-semibold uppercase tracking-wider">
                    <Sun className="w-3.5 h-3.5" />
                    <span>Lighting Strategy</span>
                  </div>
                  <p className="text-xs text-[#a8a69e] font-sans-architectural leading-relaxed">
                    {selectedGalleryItem.details.lighting}
                  </p>
                </div>

                <div className="space-y-1.5 p-3.5 bg-[#141412] border border-white/[0.08] rounded-none">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c5a059] font-semibold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Material Palette</span>
                  </div>
                  <p className="text-xs text-[#a8a69e] font-sans-architectural leading-relaxed">
                    {selectedGalleryItem.details.materials}
                  </p>
                </div>

                <div className="space-y-1.5 p-3.5 bg-[#141412] border border-white/[0.08] rounded-none">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#c5a059] font-semibold uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Spatial Flow</span>
                  </div>
                  <p className="text-xs text-[#a8a69e] font-sans-architectural leading-relaxed">
                    {selectedGalleryItem.details.spatialFlow}
                  </p>
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="pt-4 flex items-center justify-between border-t border-white/[0.08]">
              <span className="text-[11px] font-mono text-[#737168] uppercase tracking-wider">
                Inspiration-first spatial concept reference
              </span>
              <Button
                variant="accent"
                size="md"
                onClick={() => {
                  setSelectedGalleryItem(null);
                  onOpenEnquiry();
                }}
              >
                Inquire About This Direction
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default InspirationShowcase;
