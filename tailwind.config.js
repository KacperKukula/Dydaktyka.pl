/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js,ejs}"],
  theme: {
    extend: {
      backgroundImage: {
        'triangle-mosaic': "url('../resources/photos/triangle-mosaic.png')"
      },
      width: {
        login: "360px"
      },
      height: {
        login: "400px"
      },
      minWidth: {
        "login-input": "260px"
      }
    },
  },
  plugins: [],
}
