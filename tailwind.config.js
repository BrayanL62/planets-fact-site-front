/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xl": "1440px"
      },
      spacing: {
        "mobile-mercury":   "calc(290px / 2.6)",
        "tablet-mercury":   "calc(290px / 1.6)",
        "desktop-mercury":   "290px",
        "mobile-venus":     "calc(400px / 2.6)",
        "tablet-venus":     "calc(400px / 1.6)",
        "desktop-venus":     "400px",
        "mobile-earth":     "calc(450px / 2.6)",
        "tablet-earth":     "calc(450px / 1.6)",
        "desktop-earth":     "450px",
        "mobile-mars":      "calc(336px / 2.6)",
        "tablet-mars":      "calc(336px / 1.6)",
        "desktop-mars":      "336px",
        "mobile-jupiter":   "calc(582px / 2.6)",
        "tablet-jupiter":   "calc(582px / 1.6)",
        "desktop-jupiter":   "582px",
        "mobile-saturn":    "calc(666px / 2.6)",
        "tablet-saturn":    "calc(666px / 1.6)",
        "desktop-saturn":    "666px",
        "mobile-uranus":    "calc(458px / 2.6)",
        "tablet-uranus":    "calc(458px / 1.6)",
        "desktop-uranus":    "458px",
        "mobile-neptune":   "calc(450px / 2.6)",
        "tablet-neptune":   "calc(450px / 1.6)",
        "desktop-neptune":   "450px",
      },
      fontFamily: {
        "antonio-regular":    ["Antonio-Regular"],
        // "spartan-bold":       ["League-Spartan-Bold"],
        // "spartan-regular":    ["League-Spartan-Regular"],
      }
    },
    colors: {
      "mercury-icon":       "#DEF4FC",
      "mercury-menu":       "#419EBB",
      "venus":              "#F7CC7F",
      "earth":              "#545BFE",
      "mars":               "#FF6A45",
      "jupiter":            "#ECAD7A",
      "saturn":             "#FCCB6B",
      "uranus":             "#65F0D5",
      "neptune":            "#497EFA",
      "white":              "#FFFFFF",
      "transparent":        "transparent",
      "grey":               "#D8D8D8"
    }
  },
  plugins: [],
}
