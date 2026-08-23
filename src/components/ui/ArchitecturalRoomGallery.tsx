import * as React from "react";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Eye, ArrowUpRight } from "lucide-react";
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

// Default 4-image sequence as requested in core prompt:
// img1 -> Warm Architectural Sanctuary
// img3 -> Double-Height Architectural Salon
// img5 -> Natural Light / Skylight Study
// img16 -> Sculptural Contemporary Living
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

// Restrained blur & translate reveal variants
const galleryVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 24,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

// Reusable motion wrapper container
export const GalleryStagger: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Reusable motion child wrapper
export const GalleryAnimated: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <motion.div variants={galleryVariants} className={className}>
    {children}
  </motion.div>
);

// Individual Gallery Cell Component with Sharp Edges (border-radius: 0)
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

export const ArchitecturalGalleryCell: React.FC<ArchitecturalGalleryCellProps> = ({
  item,
  index,
  gridClass,
  isHovered,
  isAnyHovered,
  isSelected,
  onHover,
  onClick,
}) => {
  // Editorial brightness: full/boosted when hovered, slightly muted (0.88) when another item in group is hovered
  const brightnessClass = isHovered
    ? "brightness-[1.04] scale-[1.03]"
    : isAnyHovered
    ? "brightness-[0.88] scale-[1.0]"
    : "brightness-100 scale-100";

  return (
    <GalleryAnimated className={gridClass}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => onClick(item)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick(item);
          }
        }}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(index)}
        onBlur={() => onHover(null)}
        className={`relative w-full h-full overflow-hidden bg-[#141412] group cursor-pointer transition-all duration-500 border rounded-none ${
          isSelected || isHovered
            ? "border-[#c5a059]/60 shadow-lg z-20"
            : "border-white/[0.06] hover:border-white/20 z-10"
        }`}
      >
        {/* Sharp Edge Architectural Frame & Image */}
        <div className="relative w-full h-full overflow-hidden rounded-none">
          <img
            src={item.image}
            alt={item.alt || item.title}
            className={`w-full h-full object-cover rounded-none transition-all duration-700 ease-out transform ${brightnessClass}`}
            loading="lazy"
          />

          {/* Subtle gradient vignette at bottom for editorial legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/90 via-[#0c0c0b]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

          {/* Top Editorial Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-2">
            <span className="font-mono text-[11px] text-[#c5a059] bg-[#0c0c0b]/85 border border-white/10 px-2.5 py-0.5 tracking-widest uppercase rounded-none backdrop-blur-xs font-semibold">
              {item.number}
            </span>
            {item.categoryLabel && (
              <span className="hidden sm:inline-block font-mono text-[10px] text-[#a8a69e] bg-[#0c0c0b]/70 border border-white/[0.06] px-2 py-0.5 tracking-wider uppercase rounded-none backdrop-blur-xs">
                {item.categoryLabel}
              </span>
            )}
          </div>

          {/* Top Right Action Icon */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 p-2 bg-[#0c0c0b]/80 border border-white/10 text-[#f7f6f2] group-hover:text-[#c5a059] group-hover:border-[#c5a059]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-none transform translate-y-1 group-hover:translate-y-0">
            <Eye className="w-3.5 h-3.5" />
          </div>

          {/* Bottom Editorial Caption Layer */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#c5a059] block mb-0.5">
                  {item.tag || `STUDY ${item.number}`}
                </span>
                <h4 className="text-sm sm:text-base font-serif-editorial font-bold text-[#f7f6f2] tracking-tight group-hover:text-[#c5a059] transition-colors line-clamp-1">
                  {item.title}
                </h4>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#737168] group-hover:text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </GalleryAnimated>
  );
};

// Main Architectural Room Gallery Component
export const ArchitecturalRoomGallery: React.FC<ArchitecturalRoomGalleryProps> = ({
  items = DEFAULT_GALLERY_ITEMS,
  activeRoomId,
  onSelectRoom,
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Layout area classes enforcing exact responsive asymmetry:
  // Mobile (default): 4 visible images (Row 1 full, Row 2 split, Row 3 full)
  // Tablet (md:): 12-col 3-row grid (dominant left, 2 stacked right, full bottom)
  // Desktop (lg:): 2-col 5-row staggered asymmetric grid with negative space
  const areaClasses = [
    // Room 01 (Dominant Anchor)
    "col-span-2 h-[260px] sm:h-[320px] md:col-span-8 md:row-span-2 md:h-auto lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-auto",
    // Room 02
    "col-span-1 h-[180px] sm:h-[220px] md:col-span-4 md:row-span-1 md:h-auto lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 lg:h-auto",
    // Room 03
    "col-span-1 h-[180px] sm:h-[220px] md:col-span-4 md:row-span-1 md:h-auto lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-6 lg:h-auto",
    // Room 04
    "col-span-2 h-[200px] sm:h-[260px] md:col-span-12 md:row-span-1 md:h-auto lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5 lg:h-auto",
  ];

  const handleCellClick = (item: GalleryItem) => {
    if (onSelectRoom) {
      onSelectRoom(item);
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Asymmetric Gallery Grid */}
      <GalleryStagger className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-2 lg:grid-rows-5 gap-4 sm:gap-6 min-h-[480px] md:min-h-[540px] lg:min-h-[clamp(520px,45vw,720px)] w-full">
        {items.slice(0, 4).map((item, idx) => (
          <ArchitecturalGalleryCell
            key={item.id}
            item={item}
            index={idx}
            gridClass={areaClasses[idx] || "col-span-1"}
            isHovered={hoveredIndex === idx}
            isAnyHovered={hoveredIndex !== null}
            isSelected={activeRoomId === item.id}
            onHover={setHoveredIndex}
            onClick={handleCellClick}
          />
        ))}
      </GalleryStagger>

      {/* Room Metadata Information Layer (Prompt Section 9) */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#737168] font-semibold">
            SELECTED SPATIAL STUDIES
          </span>

          {/* Minimal Editorial List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {items.slice(0, 4).map((item, idx) => {
              const isFeatured = hoveredIndex === idx || activeRoomId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleCellClick(item)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="text-left group cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isFeatured ? "text-[#c5a059] font-bold" : "text-[#737168]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.16em] truncate transition-colors ${
                        isFeatured ? "text-[#c5a059] font-semibold" : "text-[#a8a69e] group-hover:text-[#f7f6f2]"
                      }`}
                    >
                      {item.title}
                    </span>
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
