module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "League Spartan, sans-serif",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },

    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        card: "#2B3241",
        background: "#252B39",
        violetGradient: "#7B61F3",
        pinkGradient: "#FBADB3",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        hero: "url('./assets/gray.jpg')",
        services: "url('./assets/services.png')",
        tail: "url('./assets/tail.jpg')",
        bishop: "url('./assets/bishop.jpg')",
        pastel: "url('./assets/pastel.jpg')",
        blur: "url('./assets/blur.jpg')",
        gradient: "url('./assets/gradient.jpg')",
      },
    },
  },
  plugins: [],
};
