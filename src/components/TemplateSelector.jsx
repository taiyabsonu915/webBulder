// src/components/TemplateSelector.jsx
import React from 'react';
import { TEMPLATES, TEMPLATE_LAYOUTS } from '../utils/ElementLayout.js';

const TemplateSelector = ({ onSelectTemplate }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.values(TEMPLATES).map((templateKey) => {
          const template = TEMPLATE_LAYOUTS[templateKey];
          return (
            <div 
              key={templateKey}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-builder-primary hover:shadow-lg transition-all"
              onClick={() => onSelectTemplate(templateKey)}
            >
              <div className="h-32 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
                {/* Simplified visualization of template layout */}
                <div className={`w-3/4 h-3/4 ${template.gridTemplate}`}>
                  {template.areas.map(area => (
                    <div key={area} className="border border-dashed border-gray-400 bg-white m-1 p-1 text-xs text-gray-500 flex items-center justify-center">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-medium text-gray-800">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateSelector;