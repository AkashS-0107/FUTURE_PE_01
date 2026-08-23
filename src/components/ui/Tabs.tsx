import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center gap-1.5 p-1.5 bg-[#141412] border border-white/[0.08] rounded-full overflow-x-auto no-scrollbar max-w-fit ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 rounded-full cursor-pointer whitespace-nowrap ${
              isActive
                ? 'bg-[#c5a059] text-[#0c0c0b] font-semibold shadow-md shadow-[#c5a059]/20'
                : 'text-[#a8a69e] hover:text-[#f7f6f2] hover:bg-white/[0.04]'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`ml-2 px-1.5 py-0.5 text-[10px] rounded-full transition-colors ${
                  isActive
                    ? 'bg-[#0c0c0b]/20 text-[#0c0c0b] font-bold'
                    : 'bg-white/10 text-[#a8a69e]'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
