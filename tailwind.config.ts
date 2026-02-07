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
                            pink: {
                                        50: "#fdf2f8",
                                        100: "#fce7f3",
                                        200: "#fbcfe8",
                                        300: "#f9a8d4",
                                        400: "#f472b6",
                                        500: "#ec4899",
                            },
                            purple: {
                                        50: "#faf5ff",
                                        100: "#f3e8ff",
                                        200: "#e9d5ff",
                                        300: "#d8b4fe",
                                        400: "#c084fc",
                                        500: "#a855f7",
                            },
                            sky: {
                                        50: "#f0f9ff",
                                        100: "#e0f2fe",
                                        200: "#bae6fd",
                                        300: "#7dd3fc",
                                        400: "#38bdf8",
                                        500: "#0ea5e9",
                            },
                  },
          },
    },
    plugins: [],
};

export default config;
