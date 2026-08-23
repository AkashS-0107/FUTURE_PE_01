import React from 'react';
import { HeaderNavigation } from './HeaderNavigation';
import { Footer } from './Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
  onOpenEnquiry: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  onOpenEnquiry,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0b] text-[#f7f6f2] font-sans-architectural antialiased">
      <HeaderNavigation onOpenEnquiry={onOpenEnquiry} />
      <main className="flex-1 w-full">{children}</main>
      <Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};

export default MainLayout;
