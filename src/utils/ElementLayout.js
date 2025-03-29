// src/utils/templateLayouts.js
export const TEMPLATES = {
  BLANK: 'blank',
  ONE_COLUMN: 'one-column',
  TWO_COLUMN: 'two-column',
  HEADER_CONTENT: 'header-content',
  LANDING_PAGE: 'landing-page',
};

export const TEMPLATE_LAYOUTS = {
  [TEMPLATES.BLANK]: {
    name: 'Blank Canvas',
    description: 'Start with a clean slate',
    areas: ['content'],
    gridTemplate: 'grid-cols-1',
    initialElements: []
  },
  [TEMPLATES.ONE_COLUMN]: {
    name: 'One Column',
    description: 'Simple single column layout',
    areas: ['header', 'content', 'footer'],
    gridTemplate: 'grid-cols-1',
    initialElements: [
      {
        id: 'header-1',
        type: 'heading',
        content: 'Welcome to My Page',
        fontSize: 'text-3xl',
        color: 'text-gray-900',
        area: 'header'
      },
      {
        id: 'content-1',
        type: 'text',
        content: 'This is a simple one-column layout. Add your content here.',
        fontSize: 'text-base',
        color: 'text-gray-800',
        area: 'content'
      }
    ]
  },
  [TEMPLATES.TWO_COLUMN]: {
    name: 'Two Column',
    description: 'Content with sidebar',
    areas: ['header', 'main', 'sidebar', 'footer'],
    gridTemplate: 'grid-cols-3',
    initialElements: [
      {
        id: 'header-1',
        type: 'heading',
        content: 'Two Column Layout',
        fontSize: 'text-3xl',
        color: 'text-gray-900',
        area: 'header',
        colSpan: 'col-span-3'
      },
      {
        id: 'main-1',
        type: 'text',
        content: 'This is the main content area. Add your primary content here.',
        fontSize: 'text-base',
        color: 'text-gray-800',
        area: 'main',
        colSpan: 'col-span-2'
      },
      {
        id: 'sidebar-1',
        type: 'text',
        content: 'This is the sidebar. Add secondary information here.',
        fontSize: 'text-sm',
        color: 'text-gray-600',
        area: 'sidebar',
        colSpan: 'col-span-1'
      }
    ]
  },
  [TEMPLATES.HEADER_CONTENT]: {
    name: 'Header & Content',
    description: 'Simple layout with header and content',
    areas: ['header', 'content'],
    gridTemplate: 'grid-cols-1',
    initialElements: [
      {
        id: 'header-1',
        type: 'heading',
        content: 'Page Title',
        fontSize: 'text-4xl',
        color: 'text-gray-900',
        area: 'header'
      },
      {
        id: 'header-2',
        type: 'text',
        content: 'A simple subtitle or description for your page',
        fontSize: 'text-lg',
        color: 'text-gray-600',
        area: 'header'
      },
      {
        id: 'content-1',
        type: 'text',
        content: 'Your main content goes here. Start building your page by adding elements.',
        fontSize: 'text-base',
        color: 'text-gray-800',
        area: 'content'
      }
    ]
  },
  [TEMPLATES.LANDING_PAGE]: {
    name: 'Landing Page',
    description: 'Complete landing page structure',
    areas: ['hero', 'features', 'cta', 'footer'],
    gridTemplate: 'grid-cols-1',
    initialElements: [
      {
        id: 'hero-1',
        type: 'heading',
        content: 'Welcome to Our Amazing Product',
        fontSize: 'text-5xl',
        color: 'text-gray-900',
        area: 'hero'
      },
      {
        id: 'hero-2',
        type: 'text',
        content: 'The best solution for your needs. Try it today!',
        fontSize: 'text-xl',
        color: 'text-gray-600',
        area: 'hero'
      },
      {
        id: 'hero-3',
        type: 'button',
        text: 'Get Started',
        color: 'bg-builder-primary',
        textColor: 'text-white',
        padding: 'px-6 py-3',
        area: 'hero'
      },
      {
        id: 'features-1',
        type: 'heading',
        content: 'Features',
        fontSize: 'text-3xl',
        color: 'text-gray-900',
        area: 'features'
      },
      {
        id: 'features-2',
        type: 'text',
        content: 'List of amazing features that make our product stand out.',
        fontSize: 'text-base',
        color: 'text-gray-800',
        area: 'features'
      },
      {
        id: 'cta-1',
        type: 'button',
        text: 'Sign Up Now',
        color: 'bg-builder-secondary',
        textColor: 'text-white',
        padding: 'px-6 py-3',
        area: 'cta'
      }
    ]
  }
};