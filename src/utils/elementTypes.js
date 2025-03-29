// src/utils/elementTypes.js
export const ELEMENT_TYPES = {
  TEXT: 'text',
  BUTTON: 'button',
  IMAGE: 'image',
  HEADING: 'heading',
  DIVIDER: 'divider',
  SPACER: 'spacer',
  CARD: 'card'
};

export const DEFAULT_PROPS = {
  [ELEMENT_TYPES.TEXT]: {
    content: 'Sample Text',
    fontSize: 'text-base',
    color: 'text-gray-800',
    fontWeight: 'font-normal',
    alignment: 'text-left'
  },
  [ELEMENT_TYPES.BUTTON]: {
    text: 'Click Me',
    color: 'bg-blue-500',
    textColor: 'text-white',
    padding: 'px-4 py-2',
    rounded: 'rounded-md',
    shadow: 'shadow-md',
    size: 'text-base'
  },
  [ELEMENT_TYPES.IMAGE]: {
    src: '/api/placeholder/300/200',
    alt: 'Placeholder Image',
    width: 'w-full',
    rounded: 'rounded-md',
    shadow: 'shadow-none'
  },
  [ELEMENT_TYPES.HEADING]: {
    content: 'Sample Heading',
    level: 'h2',
    fontSize: 'text-2xl',
    color: 'text-gray-900',
    fontWeight: 'font-bold',
    alignment: 'text-left'
  },
  [ELEMENT_TYPES.DIVIDER]: {
    width: 'w-full',
    color: 'border-gray-300',
    thickness: 'border-t'
  },
  [ELEMENT_TYPES.SPACER]: {
    height: 'h-8'
  },
  [ELEMENT_TYPES.CARD]: {
    title: 'Card Title',
    content: 'Card Content',
    color: 'bg-white',
    shadow: 'shadow-md',
    rounded: 'rounded-lg',
    padding: 'p-4',
    borderColor: 'border border-gray-200',
  }
};