module.exports = {
  darkMode: "media",
  content: [
    "./node_modules/flowbite/**/*.js",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("flowbite/plugin"),
  ]
}
