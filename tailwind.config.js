module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_400: "#bbbbbb",
        gray_500: "#a1a1a1",
        gray_401: "#c4c4c4",
        deep_purple_800: "#2719c7",
        gray_500_7e: "#9898987e",
        gray_900: "#151515",
        deep_purple_500: "#7138b8",
        bluegray_100: "#d7d7d7",
        black_900_3f: "#0000003f",
        gray_300: "#e5e5e5",
        bluegray_900: "#333333",
        pink_A100: "#fd749b",
        black_900: "#000000",
        bluegray_400: "#888888",
        black_901: "#15070b",
        black_900_19: "#00000019",
        pink_300: "#e469a0",
        white_A700: "#ffffff",
        pink_400: "#f04878",
      },
      borderRadius: {
        radius5: "5px",
        radius05: "0.5px",
        radius15: "15px",
        radius30: "30px",
        radius1804: "18.04px",
        radius2182: "21.82px",
        radius2698: "26.98px",
        radius26975: "26.975px",
      },
      backgroundImage: {
        gradient: "linear-gradient(184.49715deg ,#fd749b,#2719c7)",
        gradient1: "linear-gradient(184.5deg ,#fd749b,#2719c7)",
        gradient2: "linear-gradient(181deg ,#e469a0,#7138b8)",
      },
      fontFamily: { poppins: "Poppins", opensans: "Open Sans" },
      boxShadow: {
        bs: "0px 50px  100px 0px #0000003f",
        bs1: "0px 50px  100px 0px #00000019",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
