import React, { useState, useEffect } from 'react';
import { ELEMENT_TYPES } from '../utils/elementTypes.js';

const ElementConfig = ({ element, onUpdate, onDelete }) => {
  const [config, setConfig] = useState(element);

  useEffect(() => {
    setConfig(element);
  }, [element]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle complex nested property changes
  const handleNestedChange = (category, property, value) => {
    setConfig(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [property]: value
      }
    }));
  };

  const renderFormFields = () => {
    switch (element.type) {
      case ELEMENT_TYPES.TEXT:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                name="content"
                value={config.content}
                onChange={handleChange}
                className="w-full p-2 border text-black  rounded focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Font Size
                </label>
                <select
                  name="fontSize"
                  value={config.fontSize}
                  onChange={handleChange}
                  className="w-full p-2 border text-black rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="text-xs">Extra Small</option>
                  <option value="text-sm">Small</option>
                  <option value="text-base">Medium</option>
                  <option value="text-lg">Large</option>
                  <option value="text-xl">Extra Large</option>
                  <option value="text-2xl">2XL</option>
                  <option value="text-3xl">3XL</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <select
                  name="color"
                  value={config.color}
                  onChange={handleChange}
                  className="w-full p-2 border text-black rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="text-gray-900">Black</option>
                  <option value="text-gray-600">Gray</option>
                  <option value="text-blue-600">Blue</option>
                  <option value="text-green-600">Green</option>
                  <option value="text-red-600">Red</option>
                  <option value="text-purple-600">Purple</option>
                </select>
              </div>
            </div>
          </>
        );
      case ELEMENT_TYPES.BUTTON:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Text
              </label>
              <input
                type="text"
                name="text"
                value={config.text}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Background Color
                </label>
                <select
                  name="color"
                  value={config.color}
                  onChange={handleChange}
                  className="w-full p-2 border text-black rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="bg-blue-500">Blue</option>
                  <option value="bg-green-500">Green</option>
                  <option value="bg-red-500">Red</option>
                  <option value="bg-purple-500">Purple</option>
                  <option value="bg-yellow-500">Yellow</option>
                  <option value="bg-gray-800">Black</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Size
                </label>
                <select
                  name="size"
                  value={config.size}
                  onChange={handleChange}
                  className="w-full p-2 border text-black rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="px-2 py-1 text-sm">Small</option>
                  <option value="px-4 py-2">Medium</option>
                  <option value="px-6 py-3 text-lg">Large</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Border Radius
              </label>
              <select
                name="rounded"
                value={config.rounded}
                onChange={handleChange}
                className="w-full p-2 border bg-black rounded"
              >
                <option value="rounded-none">None</option>
                <option value="rounded">Small</option>
                <option value="rounded-md">Medium</option>
                <option value="rounded-lg">Large</option>
                <option value="rounded-full">Full</option>
              </select>
            </div>
          </>
        );
      case ELEMENT_TYPES.IMAGE:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="src"
                value={config.src}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alt Text
              </label>
              <input
                type="text"
                name="alt"
                value={config.alt}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Width
                </label>
                <select
                  name="width"
                  value={config.width}
                  onChange={handleChange}
                  className="w-full p-2 text-black border rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="w-full">Full</option>
                  <option value="w-1/2">Half</option>
                  <option value="w-1/3">Third</option>
                  <option value="w-1/4">Quarter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Border Radius
                </label>
                <select
                  name="rounded"
                  value={config.rounded}
                  onChange={handleChange}
                  className="w-full p-2 text-black border rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="rounded-none">None</option>
                  <option value="rounded">Small</option>
                  <option value="rounded-lg">Large</option>
                  <option value="rounded-full">Circle</option>
                </select>
              </div>
            </div>
          </>
        );
      case ELEMENT_TYPES.CONTAINER:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Background Color
              </label>
              <select
                name="bgColor"
                value={config.bgColor}
                onChange={handleChange}
                className="w-full p-2 text-black border rounded focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="bg-white">White</option>
                <option value="bg-gray-100">Light Gray</option>
                <option value="bg-gray-200">Gray</option>
                <option value="bg-blue-100">Light Blue</option>
                <option value="bg-green-100">Light Green</option>
                <option value="bg-red-100">Light Red</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Padding
                </label>
                <select
                  name="padding"
                  value={config.padding}
                  onChange={handleChange}
                  className="w-full p-2 text-black border rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="p-0">None</option>
                  <option value="p-2">Small</option>
                  <option value="p-4">Medium</option>
                  <option value="p-6">Large</option>
                  <option value="p-8">Extra Large</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Border Radius
                </label>
                <select
                  name="rounded"
                  value={config.rounded}
                  onChange={handleChange}
                  className="w-full p-2 text-black border rounded focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="rounded-none">None</option>
                  <option value="rounded">Small</option>
                  <option value="rounded-lg">Large</option>
                  <option value="rounded-xl">Extra Large</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Border
              </label>
              <select
                name="border"
                value={config.border}
                onChange={handleChange}
                className="w-full p-2 text-black border rounded focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="border-0">None</option>
                <option value="border">Thin</option>
                <option value="border-2">Medium</option>
                <option value="border-4">Thick</option>
              </select>
            </div>
          </>
        );
      default:
        return <p>No configuration options available for this element.</p>;
    }
  };

  const handleSave = () => {
    onUpdate(config);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          Edit {element.type} Element
        </h3>
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
          title="Delete element"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      
      {renderFormFields()}
      
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ElementConfig;