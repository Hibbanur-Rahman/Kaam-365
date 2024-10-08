const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
       },
       color:{
        primaryBlue:'#2A3980'
       }
    },
  },
  plugins: [],
});