/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
  {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        screens: {
          'z5': '344px',  // Galaxy Z Fold 5
          's8': '360px',  // Galaxy S8+
          'se': '375px',  // iPhone SE
          'xs': '390px',  // iPhone 12 Pro
          'du': '540px',  // Surface Duo
        },
        width: {
          'landingContentWidth': 'calc(100vw - 2px)', // Adjust this value as needed
          "shss-item": 'calc(100vw - 3rem)',
          'search-item': 'calc(100vw - 5rem)',
          'types-bar': 'calc(100vw - 6rem)',
  
          //header
          'hearder-small': 'calc(100vw - 48px)',
          'hearder-medium': 'calc(100vw - 120px)'
        },
        maxWidth: {
          "iPhone-head": 'calc(100vw - 4rem)',
        },
        boxShadow: {
          "search-box-input": "inset 0 3.11px 3.11px rgba(61, 61, 61, 0.2)",
          "search-box-input-MD": "inset 0 5.51px 5.51px rgba(61, 61, 61, 0.2)",
          'search-box-btn': '0 1.37px 2.74px rgba(0, 0, 0, 0.1)',
          'search-box-btn-MD': '0 2px 4px rgba(0, 0, 0, 0.1)',
          'div-default': '0 2px 4px rgba(0, 0, 0, 0.1)',
          'account-change-shadow': '0px 1.56px 3.12px 0px #0000001A',
          'coming-soon': '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
          'floorplan-dropdown': '0px 1.39px 33.46px -1.39px rgba(0, 0, 0, 0.18)',
        },
        height: {
          'landing-content-width-height': 'calc(100vh - 2px)', // Adjust this value as needed
          "mobile-iPhone-height": "calc(100vh - 18rem)",
          "mobile-search-height": "calc(100vh - 15rem)",
          "mobile-compare-height": "calc(100vh - 11rem)",
          "mobile-units": "calc(100vh - 40rem)",
          "compare-card": "calc(100vh - 25rem)",
        },
        backgroundImage: {
          "search-btn-gradient": 'linear-gradient(to bottom right, rgba(255,255,255,1) 0%, rgba(32, 215, 149, 1) 15%, rgba(20, 87, 101, 1) 100%)',
          'search-caption-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,1) 0%, rgba(32, 215, 149, 1) 30%, rgba(20, 87, 101, 1) 120%)',
          "slogan-green-gradient": 'linear-gradient(to right, rgba(32, 215, 149, 1), rgba(17, 79, 106, 1) 100%)',
          ///Images
          'mobile-back': "url('/imgs/landing/1.png')",
          //MobileUnitsList
          'bottom-div-back': 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(27,27,27,.8) 20%, rgba(23,23,23,0.8))',
          //UnitsCategoryBtn
          "category-hover": 'linear-gradient(to bottom, rgba(128, 128, 128, 0.3), rgba(0,0,0,0) 30% )',
          // "personal-account-back": "url('/imgs/personal-account-back.png')",
          "coming-soon-saved-back": "url('/imgs/commingsoon/coming_soon_saved.png')",
          "coming-soon-settings-back": "url('/imgs/commingsoon/coming_soon_settings.png')",
          "coming-soon-support-back": "url('/imgs/commingsoon/coming_soon_support.png')",
          'custom-linear': 'linear-gradient(90.17deg, #20D795 0.75%, #114F6A 99.85%)',
        },
        spacing: {
          'building': '8rem', // Example default value
        },
        backdropBlur: {
          'account-change-blur': '39px',
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          "auto-scroll-btn": 'rgba(180,180,180,1)', // Replace with your desired color code
          primary: {
            light: 'rgba(128, 128, 128, 0.3)',
            medium: 'rgba(100,100,100,1)',
            default: 'rgba(39, 39, 39, 0.3)',
            dark: 'rgba(21,21,21,1)',
          },
          secondary: {
            default: 'rgba(32, 215, 149, 1)',
            light: 'rgba(65, 65, 65, 1)',
            medium: 'rgba(255, 255, 255, 0.4)',
          }
        },
        fontFamily: {
          sans: ['Euclid Galactic', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
          carousel: ['Nothing You Could Do'],
          montserrat: ['montserrat']
        },
        margin: {
          "sm-total": "-85%",
          "xs-total": "-78%",
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeOut: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          bounceIn: {
            '0%': { transform: 'scale(0.5)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
        },
        animation: {
          fadeIn: 'fadeIn 2s forwards',
          fadeOut: 'fadeOut 2s forwards',
          bounceIn: 'bounceIn 0.5s ease-in-out',
        }
      },
    },
    plugins: [
      require('tailwindcss-filters'),
      function ({ addUtilities }) {
        addUtilities(
          {
            '.search-caption-text': {
              'background-clip': 'text',
              '-webkit-background-clip': 'text',
            },
            '.rounded-except-bottom-left': {
              'border-bottom-left-radius': '0 !important',
            },
            '.rounded-except-bottom-right': {
              'border-bottom-right-radius': '0 !important',
            },
            '.rounded-except-top-left': {
              'border-top-left-radius': '0 !important',
            },
            '.rounded-except-top-right': {
              'border-top-right-radius': '0 !important',
            },
            '.rounded-only-bottom-left': {
              'border-top-left-radius': '0 !important',
              'border-top-right-radius': '0 !important',
              'border-bottom-right-radius': '0 !important',
            },
          },
          ['responsive', 'hover']
        );
      },
    ],
  }
);