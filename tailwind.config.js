/** @type {import('tailwindcss').Config} */

const colors = require('./src/app/config/color')
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-pattern-desktop" :"url('/icons/bg-desktop.svg')",
        "hero-pattern-mobile" :"url('/icons/bg-mobile.svg')",
        "hero-pattern-tablet" :"url('/icons/bg-tablet.svg')",
      },
      colors: colors,
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addComponents({
        '.heading-lg' : {
          fontSize: "80px",
          fontWeight: "600",
          lineHeight: "100%",
        },
        '.heading-md' : {
          fontSize: "56px",
          fontWeight: "600",
          lineHeight: "64px",
        },
        '.heading-m' : {
          fontSize: "48px",
          fontWeight: "600",
          lineHeight: "56px",
        },
        '.heading-sm' : {
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "125%",
        },
        '.heading-ss' : {
          fontSize: "28px",
          fontWeight: "600",
          lineHeight: "100%",
          
        },
        '.heading-xs' : {
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "100%",
          
        },
        ".text-main" : {
            fontSize : "18px",
            lineHeight : "32px",
            fontWeight : "400"
        },
        ".custome-path" : {
          clipPath : "ellipse(170% 100% at 50% 0%)",
        },
        ".hero-before" : {
          clipPath : "ellipse(170% 100% at 50% 0%)",
          content : "''",
          position : "absolute",
          top : "0",
          left : "0",
          width : "100%",
          height : "100%",
          background : theme("colors.dark-purple"),
          zIndex : "-1",
        },
        ".hero-background" : {
          background : "url('/icons/bg-pattern-1.svg') no-repeat -130px 50%, url('/icons/bg-pattern-2.svg') no-repeat right -50px top 75%",
        },
        ".hero-background-tablet" : {
          background : "url('/icons/bg-pattern-1.svg') no-repeat -230px 50%, url('/icons/bg-pattern-2.svg') no-repeat right -85px top 75%",
        }
      })
  })
  ],
}
