/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#0F0E17",
        "primary-color": "#FF8906",
        "secondary-color": "#BA3B56",
        "paragraph-color": "#A7A9BE",
      },
      boxShadow: {
        "inner-card": "inset 0px 0px 16px #3A365B;",
      },
      borderColor: {
        "border-color-personal-card":
          "linear-gradient(90deg, #FF9183 0%, #D94A69 100%);",
      },
      fontFamily: {
        primary: "Open Sans, sans-serif",
        secondary: "JetBrains Mono, monospace;",
      },
    },
  },
  plugins: [],
};
