module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bodyGrey: "#fafafa",
      },
      width: {
        post: "614px",
        "fit-content": "fit-content",
      },
      maxWidth: {
        workspace: "1300px",
        post: "614px",
      },
      height: {
        "screen-8": "80vh",
        post: "614px",
        90: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
