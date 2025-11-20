/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",           // Scans App.tsx and index.tsx in the root
    "./pages/**/*.{js,ts,jsx,tsx}",  // Scans your pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Scans your components folder
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Apple Garamond', 'EB Garamond', 'serif'],
      },
      colors: {
        brand: {
          dark: '#0B192C',
          orange: '#FF6500',
          medium: '#1B395A',
          light: '#E0E5E9',
          white: '#FFFFFF',
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        pulseSlow: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [],
}