import React, { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { HeroSection } from './sections/home/HeroSection';
import { CuratedSpatialDirection } from './sections/home/CuratedSpatialDirection';
import { InspirationShowcase } from './sections/home/InspirationShowcase';
import { StyleExplorer } from './sections/home/StyleExplorer';
import { TransformationContext } from './sections/home/TransformationContext';
import { ProcessRoadmap } from './sections/home/ProcessRoadmap';
import { TrustTransparency } from './sections/home/TrustTransparency';
import { EnquiryGateway } from './sections/home/EnquiryGateway';
import { GuidedEnquiryModal } from './components/enquiry/GuidedEnquiryModal';
import { homeContent } from './data/homeContent';
import type { HeroCandidateId } from './types/content';

export const App: React.FC = () => {
  // Active candidate maintained internally in the data layer
  const [activeCandidateId] = useState<HeroCandidateId>(
    homeContent.hero.activeCandidateId
  );
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);

  const activeCandidate =
    homeContent.hero.candidates[activeCandidateId] || homeContent.hero.candidates['candidate-a'];

  const handleOpenEnquiry = () => {
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <MainLayout onOpenEnquiry={handleOpenEnquiry}>
      {/* Block 1 & 2: Hero Experience Section */}
      <HeroSection
        content={activeCandidate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Block 3: Curated Spatial Directions Coverflow Section */}
      <CuratedSpatialDirection onOpenEnquiry={handleOpenEnquiry} />

      {/* Block 4: Inspiration & Discovery Showcase */}
      <InspirationShowcase onOpenEnquiry={handleOpenEnquiry} />

      {/* Block 4: Style & Vision Explorer Teaser */}
      <StyleExplorer onOpenEnquiry={handleOpenEnquiry} />

      {/* Block 5: Residential Transformation Context Matrix */}
      <TransformationContext onOpenEnquiry={handleOpenEnquiry} />

      {/* Block 6: Collaborative Process Roadmap */}
      <ProcessRoadmap onOpenEnquiry={handleOpenEnquiry} />

      {/* Block 7: Trust, Transparency & Anti-Friction FAQs */}
      <TrustTransparency onOpenEnquiry={handleOpenEnquiry} />

      {/* Block 8: Guided Project Enquiry Gateway */}
      <EnquiryGateway onOpenEnquiry={handleOpenEnquiry} />

      {/* Guided Project Enquiry Modal */}
      <GuidedEnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />
    </MainLayout>
  );
};

export default App;
