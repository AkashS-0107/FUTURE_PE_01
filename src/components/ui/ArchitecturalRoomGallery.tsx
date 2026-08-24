import * as React from "react";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { INTERIOR_IMAGES } from "../../data/interiorImages";

export interface GalleryItem {
  id: string;
  number: string;
  title: string;
  categoryLabel?: string;
  tag?: string;
  image: string;
  alt: string;
  description?: string;
  details?: {
    lighting: string;
    materials: string;
    spatialFlow: string;
  };
}

export interface ArchitecturalRoomGalleryProps {
  items?: GalleryItem[];
  activeRoomId?: string;
  onSelectRoom?: (item: GalleryItem) => void;
  className?: string;
}

/* oxlint-disable-next-line react/only-export-components */
export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "img-1",
    number: "01",
    title: "WARM ARCHITECTURAL SANCTUARY",
    categoryLabel: "Living Sanctuary",
    tag: "Monolithic Hearth & Warm Timber",
    image: INTERIOR_IMAGES.img1.src,
    alt: INTERIOR_IMAGES.img1.title,
    description: INTERIOR_IMAGES.img1.semanticRelationship,
    details: {
      lighting: "Central hearth ambient glow & recessed accent lighting",
      materials: "Handcrafted plaster, dark leather, warm architectural timber",
      spatialFlow: "Proportional double-height living volume centered on stone hearth",
    },
  },
  {
    id: "img-3",
    number: "02",
    title: "DOUBLE-HEIGHT SALON",
    categoryLabel: "High-End Lounge",
    tag: "Glazed Volume & Veined Stone",
    image: INTERIOR_IMAGES.img3.src,
    alt: INTERIOR_IMAGES.img3.title,
    description: INTERIOR_IMAGES.img3.semanticRelationship,
    details: {
      lighting: "Floor-to-ceiling daylight aperture & perimeter cove wash",
      materials: "Bookmatched marble wall, terracotta velvet, floating glass",
      spatialFlow: "Expansive double-height atrium connecting lounge and upper gallery",
    },
  },
  {
    id: "img-5",
    number: "03",
    title: "NATURAL LIGHT STUDY",
    categoryLabel: "Atrium Sanctuary",
    tag: "Timber Canopy & Skylight Beam",
    image: INTERIOR_IMAGES.img5.src,
    alt: INTERIOR_IMAGES.img5.title,
    description: INTERIOR_IMAGES.img5.semanticRelationship,
    details: {
      lighting: "Diagonal skylight sunlight beam & hidden soffit lighting",
      materials: "Vertical timber slat ceiling, honed marble, limewash plaster",
      spatialFlow: "Vertical light corridor pouring natural sunlight into dining space",
    },
  },
  {
    id: "img-16",
    number: "04",
    title: "SCULPTURAL LIVING",
    categoryLabel: "Executive Study",
    tag: "Backlit Joinery & Marble",
    image: INTERIOR_IMAGES.img16.src,
    alt: INTERIOR_IMAGES.img16.title,
    description: INTERIOR_IMAGES.img16.semanticRelationship,
    details: {
      lighting: "Integrated backlit shelf LEDs & ceiling ring spots",
      materials: "Smoked oak joinery, executive leather, dark marble surfaces",
      spatialFlow: "Contemplative work sanctuary framed by garden window view",
    },
  },
];

const galleryVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export const GalleryStagger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className={className}>
    {children}
  </motion.div>
);

export const GalleryAnimated: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div variants={galleryVariants} className={className}>{children}</motion.div>
);

export interface ArchitecturalGalleryCellProps {
  item: GalleryItem;
  index: number;
  gridClass: string;
  isHovered: boolean;
  isAnyHovered: boolean;
  isSelected?: boolean;
  onHover: (index: number | null) => void;
  onClick: (item: GalleryItem) => void;
}

export const ArchitecturalGalleryCell: React.FC<ArchitecturalGalleryCellProps> = ({ item, index, gridClass, isHovered, isAnyHovered, isSelected, onHover, onClick }) => {
  const imageState = isHovered
    ? "brightness-[1.04] scale-[1.025]"
    : isAnyHovered
      ? "brightness-[0.86] scale-100"
      : "brightness-100 scale-100";

  return (
    <GalleryAnimated className={`min-w-0 min-h-0 ${gridClass}`}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => onClick(item)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick(item);
          }
        }}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(index)}
        onBlur={() => onHover(null)}
        className={`relative h-full min-h-0 w-full overflow-hidden bg-[#141412] group cursor-pointer border transition-all duration-500 ${
          isSelected || isHovered ? "border-[#c5a059]/60 shadow-lg z-10" : "border-white/[0.06] hover:border-white/20"
        }`}
      >
        <img
          src={item.image}
          alt={item.alt || item.title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${imageState}`}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0c0c0b]/90 via-[#0c0c0b]/20 to-transparent" />

        <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#c5a059] tracking-widest font-semibold">{item.number}</span>
          {item.categoryLabel && <span className="hidden sm:block font-mono text-[10px] text-white/60 uppercase tracking-[0.14em]">{item.categoryLabel}</span>}
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-[#c5a059] mb-1">{item.tag || `Study ${item.number}`}</span>
              <h4 className="truncate text-sm sm:text-base font-serif-editorial font-bold text-[#f7f6f2] tracking-tight group-hover:text-[#c5a059] transition-colors">{item.title}</h4>
            </div>
            <ArrowUpRight className="w-4 h-4 shrink-0 text-[#a8a69e] group-hover:text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        </div>
      </div>
    </GalleryAnimated>
  );
};

export const ArchitecturalRoomGallery: React.FC<ArchitecturalRoomGalleryProps> = ({
  items = DEFAULT_GALLERY_ITEMS,
  activeRoomId,
  onSelectRoom,
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Explicit grid tracks prevent secondary cells from collapsing on larger breakpoints.
  // Desktop: staggered 2-column architectural composition with fixed row tracks.
  const areaClasses = [
    "col-span-2 h-[300px] sm:h-[380px] md:col-span-8 md:row-span-2 md:h-auto lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-auto",
    "col-span-1 h-[210px] sm:h-[250px] md:col-span-4 md:row-span-1 md:h-auto lg:col-start-1 lg:row-start-2 lg:row-span-2 lg:h-auto",
    "col-span-1 h-[210px] sm:h-[250px] md:col-span-4 md:row-span-1 md:h-auto lg:col-start-1 lg:row-start-4 lg:row-span-2 lg:h-auto",
    "col-span-2 h-[240px] sm:h-[300px] md:col-span-12 md:row-span-1 md:h-auto lg:col-start-2 lg:row-start-3 lg:row-span-2 lg:h-auto",
  ];

  const handleCellClick = (item: GalleryItem) => onSelectRoom?.(item);

  return (
    <div className={`space-y-8 ${className}`}>
      <GalleryStagger className="grid w-full grid-cols-2 auto-rows-[150px] gap-4 sm:auto-rows-[190px] sm:gap-6 md:grid-cols-12 md:auto-rows-[190px] lg:grid-cols-2 lg:grid-rows-5 lg:auto-rows-[minmax(120px,1fr)] lg:h-[clamp(620px,52vw,780px)]">
        {items.slice(0, 4).map((item, index) => (
          <ArchitecturalGalleryCell
            key={item.id}
            item={item}
            index={index}
            gridClass={areaClasses[index] || "col-span-1"}
            isHovered={hoveredIndex === index}
            isAnyHovered={hoveredIndex !== null}
            isSelected={activeRoomId === item.id}
            onHover={setHoveredIndex}
            onClick={handleCellClick}
          />
        ))}
      </GalleryStagger>

      <div className="pt-4 border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#737168] font-semibold">SELECTED SPATIAL STUDIES</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {items.slice(0, 4).map((item, index) => {
              const isFeatured = hoveredIndex === index || activeRoomId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleCellClick(item)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="text-left group cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`font-mono text-xs ${isFeatured ? "text-[#c5a059] font-bold" : "text-[#737168]"}`}>{item.number}</span>
                    <span className={`font-mono text-xs uppercase tracking-[0.14em] truncate ${isFeatured ? "text-[#c5a059] font-semibold" : "text-[#a8a69e] group-hover:text-[#f7f6f2]"}`}>{item.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalRoomGallery;
