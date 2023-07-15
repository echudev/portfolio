/** @type {import('tailwindcss').Config} */
import { violet, green } from "tailwindcss/colors";

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
        "3d": `-6px 6px 0px 0px ${violet[700]},-5px 5px 0px 0px ${violet[700]}, -4px 4px 0px 0px ${violet[700]}, -3px 3px 0px 0px ${violet[700]}, -2px 2px 0px 0px ${violet[700]}, -1px 1px 0px 0px ${violet[700]}`,
        "3dgreen": `-3px 3px 0px 0px ${green[400]}, -2px 2px 0px 0px ${green[400]}, -1px 1px 0px 0px ${green[400]}`,
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
