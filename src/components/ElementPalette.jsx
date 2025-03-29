import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableElement from './DraggableElement';
import { ELEMENT_TYPES } from '../utils/elementTypes.js';

const ElementPalette = ({ onElementAdd }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-72 bg-white shadow-builder-light p-4 border-r border-gray-200">
        <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-builder-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
          <h2 className="text-xl font-bold text-builder-text">Website Builder</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {Object.values(ELEMENT_TYPES).map(type => (
            <DraggableElement 
              key={type} 
              type={type} 
              onElementAdd={onElementAdd} 
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ElementPalette;