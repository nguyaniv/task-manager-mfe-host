module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{html,js}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightPurple: "#21213E",
        darkPurple: "#121231",
        lightGold: "#F6C927",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
