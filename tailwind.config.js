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
        iconBkg: "rgba(146, 146, 212, 0.25)",
        navbarBkg: "rgba(223, 223, 255, 0.05)",
        borderColor: "rgba(223, 223, 255, 0.10)",
        background: "#020226",
      },
      backgroundImage: {
        "overlay-pattern": "url('../assets/black-orchid.png')",
        "gradient-radial":
          "radial-gradient(circle at top, hsl(287, 80%, 15%) 20%, hsl(287, 30%, 0%))",
      },
    },
  },
  plugins: [],
};
