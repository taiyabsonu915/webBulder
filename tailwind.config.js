import daisyui from "daisyui";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'builder-primary': '#3B82F6',
        'builder-secondary': '#10B981',
        'builder-background': '#F3F4F6',
        'builder-accent': '#8B5CF6',
        'builder-text': '#1F2937',
      },
      boxShadow: {
        'builder-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'builder-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'builder': '0.75rem',
      },
    },
  },
  plugins: [],
}