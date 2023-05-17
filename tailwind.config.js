/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#1C4E80",

        secondary: "#7C909A",

        accent: "#EA6947",

        neutral: "#23282E",

        "base-100": "#202020",

        info: "#0091D5",

        success: "#6BB187",

        warning: "#DBAE59",

        error: "#AC3E31",
      },
    },
  ],

  plugins: [require("daisyui")],
};
