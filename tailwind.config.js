module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRed: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',

      },
      backgroundImage:{
        'hero-lg':"url('../images/bg-pattern-intro-desktop.svg')",
        'hero-sm':"url('../images/bg-pattern-intro-mobile.svg')",
        'illustration-lg':"url('../images/illustration-editor-desktop.svg')",
        'illustration-lg':"url('../images/illustration-editor-mobile.svg')",
        'laptop-lg':"url('../images/illustration-laptop-desktop.svg')",
        'laptop-sm':"url('../images/illustration-laptop-mobile.svg')",
        'circle':"url('../images/bg-pattern-circles.svg')",
      }
    },
  },
  plugins: [],
}
