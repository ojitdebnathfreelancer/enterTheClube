/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      fontFamily: {
         trash: ["trash"],
         redunReg: ["redunRegular"],
         redunBold: ["redunBold"],
         sfReg: ["sfRequler"],
         sfMed: ["sfMedium"],
         sfBold: ["sfBold"],
      },
      fontSize: {
         normal: "20px",
         heading: "55px",
         bannerTextLg: "250px",
         bannerTextMd: "220px",
         bannerTextSm: "110px",
      },
      extend: {
         colors: {
            gray: "#E2E8F0",
            teal: "#56FFFF",
            gray1: "rgba(255, 255, 255, 0.25)",
            gray2: "rgba(255, 255, 255, 0.50)",
            loaderColor: "#c0ffff",
         },
         lineHeight: {
            bannerLineHeightLg: "240px",
            bannerLineHeightMd: "210px",
         },
      },
   },
   plugins: [],
};
