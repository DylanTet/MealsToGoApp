/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js, jsx}", "./src/**/**/**/*.{js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ["Oswald_400Regular"],
        'heading': ["Lato_400Regular"],
        'monospace': ["Oswald_400Regular"],
      },
      fontSize: {
        caption: "12px",
        button: "14px",
        body: "16px",
        title: "20px",
        h5: "24px",
        h4: "34px",
        h3: "45px",
        h2: "56px",
        h1: "112px"
      }
    },
  },
  plugins: [],
}
