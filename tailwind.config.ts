import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#090F16",
      "sec-text": "#111B22",
      bg: "#F5F8FA",
      primary: "#34495E",
      secondary: "#89BBEE",
      accent: "#EE47D1",
      input: "#E9ECEE",
      "sec-bg": "#EAF2F9",
      "high-sec-bg": "#E0ECF8",
      danger: "#7a0012",
    },
    screens: {
      laptop: { max: "1281px" },
      "laptop-md": { max: "1125px" },
      "laptop-sm": { max: "1024px" },
      tablet: { max: "768px" },
      "tablet-sm": { max: "640px" },
      mobile: { max: "510px" },
      "mobile-lg": { max: "425px" },
      "mobile-md": { max: "375px" },
      "mobile-sm": { max: "325px" },
    },
    extend: {
      spacing: {
        "page-margin-x": "var(--page-margin-x)",
        "section-pad-y": "65px",
      },
      fontSize: {
        "logo-font": "var(--logo-font)",
        "cta-btn-font": "var(--cta-btn-font)",
        "hero-title-font": "var(--hero-title-font)",
        "hero-subtitle-font": "var(--hero-subtitle-font)",
        "hero-email-input-font": "var(--hero-email-input-font)",
        "section-badge-font": "var(--section-badge-font)",
        "section-title-font": "var(--section-title-font)",
        "section-subtitle-font": "var(--section-subtitle-font)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
