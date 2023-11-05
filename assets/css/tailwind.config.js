module.exports = {
  darkMode: "media",
  content: [
    "./node_modules/flowbite/**/*.js",
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
