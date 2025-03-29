// src/App.jsx
import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ElementPalette from './components/ElementPalette.jsx';
import Canvas from './components/Canvas.jsx';
import TemplateSelector from './components/TemplateSelector.jsx';
import { TEMPLATE_LAYOUTS } from './utils/elementLayout.js';
import './index.css';

function App() {
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [showTemplateSelector, setShowTemplateSelector] = useState(true);
  const [viewportSize, setViewportSize] = useState('desktop');
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  
  const handleTemplateSelect = useCallback((templateKey) => {
    setActiveTemplate(templateKey);
    setShowTemplateSelector(false);
    setElements(TEMPLATE_LAYOUTS[templateKey]?.initialElements || []);
  }, []);
  
  const handleNewProject = useCallback(() => {
    setShowTemplateSelector(true);
    setActiveTemplate(null);
    setElements([]);
    setHistory([]);
    setRedoStack([]);
  }, []);
  
  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setRedoStack([...redoStack, elements]);
      setElements(lastState);
      setHistory(history.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[redoStack.length - 1];
      setHistory([...history, elements]);
      setElements(nextState);
      setRedoStack(redoStack.slice(0, -1));
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gray-500 border-b shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Website Builder</h1>
          <div className="flex space-x-4">
            {activeTemplate && (
              <div className="flex space-x-2 border-r pr-4">
                {['mobile', 'tablet', 'desktop'].map((size) => (
                  <button 
                    key={size} 
                    onClick={() => setViewportSize(size)}
                    className={`p-2 rounded ${viewportSize === size ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            )}
            {activeTemplate && (
              <div className="flex space-x-2">
                <button 
                  onClick={handleUndo}
                  className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400"
                  disabled={history.length === 0}
                >
                  Undo
                </button>
                <button 
                  onClick={handleRedo}
                  className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400"
                  disabled={redoStack.length === 0}
                >
                  Redo
                </button>
              </div>
            )}
            <button 
              onClick={handleNewProject}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              New Project
            </button>
          </div>
        </header>
        
        <main className="container mx-auto p-6">
          {showTemplateSelector ? (
            <TemplateSelector onSelectTemplate={handleTemplateSelect} />
          ) : (
            <div className="flex flex-col md:flex-row">
              <ElementPalette />
              <div className="flex-grow">
                <div className={`mx-auto bg-white shadow-lg border transition-all ${
                  viewportSize === 'mobile' ? 'max-w-sm' : 
                  viewportSize === 'tablet' ? 'max-w-2xl' : 
                  'w-full'
                }`}>
                  <Canvas 
                    initialElements={elements}
                    templateAreas={TEMPLATE_LAYOUTS[activeTemplate]?.areas || ['content']}
                    gridTemplate={TEMPLATE_LAYOUTS[activeTemplate]?.gridTemplate || 'grid-cols-1'}
                    setElements={(newElements) => {
                      setHistory([...history, elements]);
                      setElements(newElements);
                      setRedoStack([]);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
