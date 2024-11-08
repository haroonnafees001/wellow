/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'Mobile': {'min': '320px', 'max': '767px'},
        'MobileLandscape': {'min': '665px', 'max': '896px'},
        'Tablet': {'min': '768px', 'max': '1023px'},
        'Ipad': {'min': '1024px', 'max': '1139px'},
        'desktop': "1108px",
      },
      container: {
        center: true,
        screens: {
          'desktop': "1108px",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Poppins-Regular": ["Poppins-Regular"],
        "Poppins-Medium": ["Poppins-Medium"],
        "Poppins-Bold": ["Poppins-Bold"],
        "Poppins-Heavy": ["Poppins-Heavy"],
      },
      fontSize: {
        "tw-40": "2.5rem",
      },
      colors: {
        "color-gray" : "#909090",
        "gray-bg" : "#EBE2E2",
        "dashboard-gray": "#fbf9f9",
        "color-purple" : "#5D17E9",
        "color-red" : "#D83E3A"
      },
      boxShadow: {
        "formInputShadow" : "0px 18px 55.5px 0px #63369C0F",
        "applyJobShadow": "0px -4px 51.2px 0px #0000000F"
},
      animation: {
        sideways: "sideways 1s linear infinite",
      },
    },
  },
  plugins: [],
};
