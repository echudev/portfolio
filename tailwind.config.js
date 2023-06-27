/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "var(--font-ubuntu)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, hsl(287, 80%, 10%) 20%, hsl(287, 30%, 0%))",
      },
      boxShadow: {
        "3d": "-6px 6px 0px 0px #b863d7,-5px 5px 0px 0px #b863d7, -4px 4px 0px 0px #b863d7, -3px 3px 0px 0px #b863d7, -2px 2px 0px 0px #b863d7, -1px 1px 0px 0px #b863d7",
        "3dgreen":
          "-3px 3px 0px 0px #45d360, -2px 2px 0px 0px #45d360, -1px 1px 0px 0px #45d360",
      },
    },
  },
  plugins: [],
};
