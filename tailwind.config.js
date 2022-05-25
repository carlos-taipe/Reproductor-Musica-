module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
     extend: {
        colors: {
          red: {
            light: '#EB5757',
            DEFAULT: '#E86060',
            dark: '#662323',
          },
        }
     },
   },
   variants: {
   },
   plugins: [],
 }

//  module.exports = {
//   content: ["./src/**/*.{html,js}"],
  
//   theme: {
//     fontFamily: 'Quicksand',
//     container: {
//       center:true
//     },
//     extend: {
//       colors: {
//         red: {
//           light: '#EB5757',
//           DEFAULT: '#E86060',
//           dark: '#662323',
//         },
//       }
//     },
//   },
//   plugins: [],
// }