/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Georgia", "serif"]
    }
  },
  variants: { extend: { typography: ["dark"] } },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#4f46e5",

  //         secondary: "#9333ea",

  //         accent: "#f59e0b",

  //         neutral: "#252738",

  //         "base-100": "#07081F",

  //         info: "#55B0EC",

  //         success: "#21A668",

  //         warning: "#F8A649",

  //         error: "#F63155"
  //       }
  //     }
  //   ]
  // },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    // require("daisyui"),
    require("rippleui")
  ]
}
