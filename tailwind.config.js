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
        Coalmine: "#25052e",
        ElegantPurple: "#4e1861",
        MangoTango: "#ff8448",
        PeachVelour: "#ffb388",
        Doctor: "#f8f8f8", // texto principal
        Silver: "#bfbfbf", // texto secundario
        Argent: "#888888", //
        Excalibur: "#666666",
        Onyx: "#444444", //
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, hsl(287, 80%, 10%) 20%, hsl(287, 30%, 0%))",
      },
    },
  },
  plugins: [],
};
