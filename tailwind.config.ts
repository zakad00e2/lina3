import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "green-dark": "#1f2a23",
                "green-medium": "#2a3830",
                "green-light": "#354538",
                gold: "#c9a646",
                "gold-light": "#d4b85e",
                "gold-dark": "#b89535",
                cream: "#f7f6f2",
                "cream-dark": "#eeedea",
                "text-primary": "#1f2a23",
                "text-secondary": "#5a6b5e",
                "text-light": "#8a9b8e",
                line: "rgba(31, 42, 35, 0.08)",
                "line-gold": "rgba(201, 166, 70, 0.3)",
            },
        },
    },
    plugins: [],
};
export default config;
