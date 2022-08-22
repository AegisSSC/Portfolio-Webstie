/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark_theme: {
          
          "primary": "#416788", 
          "secondary": "#e11d48",
          "accent": "#FCA311",
          "neutral": "#E5E5E5",
          "base-100": "#252422",
          "info": "#252422",
          "success": "#36D399",
          "warning": "#F9DC5C",
          "error": "#EB5160",
        },

        light_theme: {

        "primary": "#416788",
        "secondary": "#e11d48",
        "accent": "#FCA311",
        "neutral": "#E5E5E5",
        "base-100": "#E5E5E5",
        "info": "#252422",
        "success": "#36D399",
        "warning": "#F9DC5C",
        "error": "#EB5160",
        },
      },
    ],
  },
  
  
  
  
  
  
  // !TODO DARKMODE IMPLEMENTATION AND RESEARCH
  darkMode : 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
   
    extend: { 
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        
        // Theme 1
        'pure-white': '#ffffff',
        'off-white': '#e5e5e5',
        'maize': '#fca311',
        'royal-blue': '#14213d',
        'pure-black': '#000000',
        
        // Theme 2
        'winter-white': '#fffcf2',
        'snowy-mountain': '#ccc5b9',
        'slate': '#403d39',
        'obsidian': '#252422',
        'volcano': '#eb5e28',
              

        // Other Colors
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
