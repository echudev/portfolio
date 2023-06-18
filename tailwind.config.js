/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Coalmine: "#25052e", // purple
        MangoTango: "#ff8448", // orange
        PeachVelour: "#ffb388", // orange light gray
        SugarGlaze: "#ffefe0", // orange white
        Archeology: "#6e665f", // orange gray
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, hsl(287, 80%, 10%) 20%, hsl(287, 30%, 0%))",
      },
    },
  },
  plugins: [],
};
