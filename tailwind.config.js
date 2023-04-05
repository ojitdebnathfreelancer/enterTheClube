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
      },
      extend: {
         colors: {
            gray: "#E2E8F0",
            teal: "#56FFFF",
            gray1: "rgba(255, 255, 255, 0.25)",
         },
      },
   },
   plugins: [],
};
