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
        lightColor: 'var(--color-lightColor)',
        darkColor: 'var(--color-darkColor)',
        primaryDark: 'var(--color-primaryDark)',
        primaryLight: 'var(--color-primaryLight)',
        seondaryDark: 'var(--color-seondaryDark)',
        secondaryLight: 'var(--color-secondaryLight)',
      },
      fontSize: {
        body: 'var(--text-body)',
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
        h3: 'var(--text-h3)',
        overLine: 'var(--text-overLine)',
        subTitle: 'var(--text-subTitle)',
      },
      letterSpacing: {
        overLine: 'var(--tracking-overLine)',
      }
    },
  },
  plugins: [],
} satisfies Config;
