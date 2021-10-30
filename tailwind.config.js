module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        headerColor: "#0D0D2B",
        buttonColor: "#3671E9",
        bitCoin: "#2B076E",
        letterColor: '#3671E9',
        footerColor: "#0D0D2B"
      },
      backgroundImage: {
        'hero_modal': "/assets/modal.png",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
