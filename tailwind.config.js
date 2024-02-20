/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primaryBgColor)",
        "secondary": "var(--secondaryBgColor)",
        "tertiary": "var(--tertiaryBgColor)",
        "primary-text": "var(--primaryTextColor)",
        "secondary-text": "var(--secondaryTextColor)",
        "tertiary-text": "var(--tertiaryTextColor)",
      },
    },
  },
  plugins: [],
};
