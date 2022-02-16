// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {}
//   },
//   plugins: []
// };
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "dm-sans": ["'DM Sans'", "sans-serif"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      ghost: "#9A9AA9",
      black: "#000000",
      slate: "#222222",
      gray: "#717171",
      "light-gray": "#f2f2f2",
      cloud: "#fafafb",
      lavender: "#E3CEFA",
      cyan: "#D0EFFF",
      turquoise: "#D1F5F9",
      violet: "#7D23E0",
      "light-red": "#FBE9EA",
      red: "#D32736",
      blue: "#5B93FF",
      "light-blue": "#EAF0FB",
      indigo: "#605BFF",
      "light-indigo": "#EBEAFB",
      green: "#2B9943",
      orange: "#FF8F6B",
      "light-orange": "#FDEEEE"
    },
    extend: {}
  },
  plugins: []
};
