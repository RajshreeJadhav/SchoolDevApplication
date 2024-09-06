module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5aa8e8',
        accent: 'rgba(108, 90, 232, 0.25)',
        skills: '#5E95E8',
        white: '#fff',
      },
      fontFamily: {

        //google fonts
        // font-just-another-hand
        //font-berkshire
        // font-fredericka
        //font-handlee
        'berkshire': ['Berkshire Swash', 'cursive'],
        'fredericka': ['Fredericka the Great', 'cursive'],
        'handlee': ['Handlee', 'cursive'],
        'just-another-hand': ['Just Another Hand', 'cursive'],
      },
    },
  },
  plugins: [],
};