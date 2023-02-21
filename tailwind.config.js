/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

//tailwind.config.js
//FreeBSD-licensed CSS animation by Animista
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ["'Noto-sans',sans-serif"],
      },
      colors: {
        "jade-green": "#38b48b",
        "jade-comp": "#b53862",
        "jade-dark": "#20664f",
        "jade-pale": "#91b5a9",
      },
      animation: {
        "text-pop-up-top":
          "text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "text-pop-up-top": {
          "0%": {
            transform: "translateY(0)",
            "transform-origin": "50% 50%",
            "text-shadow": "none",
          },
          to: {
            transform: "translateY(-50px)",
            "transform-origin": "50% 50%",
            "text-shadow":
              "0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 30px rgba(0, 0, 0, .3)",
          },
        },
      },
    },
  },
};
