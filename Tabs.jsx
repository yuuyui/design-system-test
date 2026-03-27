import React, { useState } from 'react';
import './Tabs.css';

/**
 * Tabs Component
 * Segmented control with pill-shaped active indicator
 */
export const Tabs = ({ tabs = [], defaultTab = 0, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultTab);
  
  const handleTabChange = (index) => {
    setActiveIndex(index);
    onChange?.(index, tabs[index].value);
  };
  
  return (
    <div className="tabs">
      <div className="tabs-header" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            className={`tabs-button ${activeIndex === index ? 'tabs-button--active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tabs-content">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
