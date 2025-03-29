import React from 'react';
import { useDrag } from 'react-dnd';
import { ELEMENT_TYPES, DEFAULT_PROPS } from '../utils/elementTypes';

const ELEMENT_ICONS = {
  [ELEMENT_TYPES.TEXT]: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-builder-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  [ELEMENT_TYPES.BUTTON]: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-builder-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
    </svg>
  ),
  [ELEMENT_TYPES.IMAGE]: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-builder-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  [ELEMENT_TYPES.HEADING]: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-builder-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
};

const DraggableElement = ({ type, onElementAdd }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onElementAdd({
          ...DEFAULT_PROPS[type],
          id: `element-${Date.now()}`,
          type
        });
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag} 
      className={`
        p-4 bg-white border border-gray-200 rounded-lg 
        flex flex-col items-center justify-center 
        cursor-move transition-all duration-300
        hover:shadow-builder-hover hover:border-builder-primary
        ${isDragging ? 'opacity-50 scale-95' : 'opacity-100'}
      `}
    >
      {ELEMENT_ICONS[type]}
      <span className="mt-2 text-sm text-builder-text capitalize">
        {type} Element
      </span>
    </div>
  );
};

export default DraggableElement;