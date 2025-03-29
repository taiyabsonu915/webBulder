// src/components/Canvas.jsx
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import ElementConfig from './ElementConfig.jsx';
import { ELEMENT_TYPES } from '../utils/elementTypes.js';

const Canvas = ({ initialElements = [], templateAreas = ['content'], gridTemplate = 'grid-cols-1' }) => {
  const [elements, setElements] = useState(initialElements);
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeArea, setActiveArea] = useState('content');

  useEffect(() => {
    setElements(initialElements);
  }, [initialElements]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: () => ({ name: 'Canvas', area: activeArea }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleElementAdd = (newElement) => {
    // Assign the new element to the active area
    const elementWithArea = { ...newElement, area: activeArea };
    setElements(prev => [...prev, elementWithArea]);
    setSelectedElement(elementWithArea);
  };

  const handleElementUpdate = (updatedElement) => {
    setElements(prev => 
      prev.map(el => el.id === updatedElement.id ? updatedElement : el)
    );
  };

  const handleElementDelete = (elementId) => {
    setElements(prev => prev.filter(el => el.id !== elementId));
    setSelectedElement(null);
  };

  const renderElement = (element) => {
    switch (element.type) {
      case ELEMENT_TYPES.TEXT:
        return (
          <div 
            key={element.id} 
            className={`
              ${element.fontSize} ${element.color} ${element.fontWeight} ${element.alignment}
              p-2 m-2 border border-dashed border-gray-300 
              rounded-lg cursor-pointer hover:border-builder-primary 
              transition-all duration-300
            `}
            onClick={() => setSelectedElement(element)}
          >
            {element.content}
          </div>
        );
      case ELEMENT_TYPES.BUTTON:
        return (
          <button 
            key={element.id} 
            className={`
              ${element.color} ${element.textColor} ${element.padding} ${element.rounded} ${element.shadow} ${element.size}
              m-2 hover:shadow-builder-hover transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-builder-primary
            `}
            onClick={() => setSelectedElement(element)}
          >
            {element.text}
          </button>
        );
      case ELEMENT_TYPES.HEADING:
        return (
          <div 
            key={element.id} 
            className={`
              ${element.fontSize} ${element.color} ${element.fontWeight} ${element.alignment}
              p-2 m-2 border border-dashed border-gray-300 
              rounded-lg cursor-pointer hover:border-builder-primary 
              transition-all duration-300
            `}
            onClick={() => setSelectedElement(element)}
          >
            {element.level === 'h1' && <h1>{element.content}</h1>}
            {element.level === 'h2' && <h2>{element.content}</h2>}
            {element.level === 'h3' && <h3>{element.content}</h3>}
            {element.level === 'h4' && <h4>{element.content}</h4>}
          </div>
        );
      case ELEMENT_TYPES.IMAGE:
        return (
          <div
            key={element.id}
            className="p-2 m-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-builder-primary transition-all duration-300"
            onClick={() => setSelectedElement(element)}
          >
            <img 
              src={element.src} 
              alt={element.alt} 
              className={`${element.width} ${element.rounded} ${element.shadow}`}
            />
          </div>
        );
      case ELEMENT_TYPES.DIVIDER:
        return (
          <div
            key={element.id}
            className="p-2 m-2 cursor-pointer"
            onClick={() => setSelectedElement(element)}
          >
            <hr className={`${element.width} ${element.thickness} ${element.color}`} />
          </div>
        );
      case ELEMENT_TYPES.SPACER:
        return (
          <div
            key={element.id}
            className={`${element.height} w-full p-2 m-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-builder-primary transition-all duration-300`}
            onClick={() => setSelectedElement(element)}
          >
            <div className="w-full h-full bg-gray-100 rounded opacity-50 flex items-center justify-center">
              <span className="text-xs text-gray-500">Spacer</span>
            </div>
          </div>
        );
      case ELEMENT_TYPES.CARD:
        return (
          <div
            key={element.id}
            className={`${element.color} ${element.shadow} ${element.rounded} ${element.padding} ${element.borderColor} m-2 cursor-pointer`}
            onClick={() => setSelectedElement(element)}
          >
            <h3 className="font-medium text-gray-800 mb-2">{element.title}</h3>
            <p className="text-gray-600">{element.content}</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Group elements by area for rendering
  const getElementsByArea = (area) => {
    return elements.filter(element => element.area === area);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex-grow p-4">
        {/* Template area tabs */}
        <div className="flex mb-4 border-b border-gray-200">
          {templateAreas.map(area => (
            <button
              key={area}
              className={`px-4 py-2 font-medium capitalize transition-colors ${
                activeArea === area 
                  ? 'text-builder-primary border-b-2 border-builder-primary' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveArea(area)}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Canvas for active area */}
        <div 
          ref={drop} 
          className={`
            min-h-[400px] bg-builder-background p-6 rounded-xl 
            border-2 border-dashed transition-all duration-300
            ${isOver ? 'border-builder-primary bg-blue-50' : 'border-gray-300'}
          `}
        >
          {getElementsByArea(activeArea).length === 0 ? (
            <div className="flex flex-col items-center justify-center h-60 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <p className="text-center">
                Drag and drop elements here to build your page.<br/>
                <span className="text-sm">This is the <strong className="font-medium capitalize">{activeArea}</strong> section.</span>
              </p>
            </div>
          ) : (
            <div className={gridTemplate}>
              {getElementsByArea(activeArea).map(renderElement)}
            </div>
          )}
        </div>
        
        {/* Preview of all areas - collapsed version */}
        <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">Page Structure</h3>
          <div className="space-y-2">
            {templateAreas.map(area => (
              <div key={area} 
                className={`p-2 border border-gray-200 rounded cursor-pointer ${
                  activeArea === area ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveArea(area)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium capitalize text-gray-700">{area}</span>
                  <span className="text-xs text-gray-500">{getElementsByArea(area).length} elements</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedElement && (
        <ElementConfig 
          element={selectedElement}
          onUpdate={handleElementUpdate}
          onDelete={handleElementDelete}
        />
      )}
    </div>
  );
};

export default Canvas;