/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8dfff',
          300: '#78c6ff',
          400: '#36aeff',
          500: '#0095ff',
          600: '#0077ff',
          700: '#0059d1',
          800: '#004aaf',
          900: '#003c8c',
        },
        secondary: {
          50: '#edfff9',
          100: '#d5fff4',
          200: '#aeffea',
          300: '#70ffdc',
          400: '#2fffc8',
          500: '#00efb1',
          600: '#00c590',
          700: '#009b75',
          800: '#007a5f',
          900: '#00644f',
        },
        accent: {
          50: '#fdf2ff',
          100: '#fae5ff',
          200: '#f5ccff',
          300: '#ef9fff',
          400: '#e65cff',
          500: '#d620ff',
          600: '#b800db',
          700: '#9600b2',
          800: '#7a0091',
          900: '#660077',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 0 15px 0 rgba(255, 255, 255, 0.05)',
        'glass-hover': '0 0 20px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'glass-shine': 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}