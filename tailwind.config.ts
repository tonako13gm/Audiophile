import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: "var(--lightColor)",
        darkColor: "var(--darkColor)",
        primaryDark: "var(--primaryDark)",
        primaryLight: "var(--primaryLight)",
        seondaryDark: "var(--seondaryDark)",
        secondaryLight: "var(--secondaryLight)"
      },
    },
  },
  plugins: [],
} satisfies Config;
