/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "admin-profile": "url('../src/images/tappi.jpg')",
        "admin-banner":
          "url(https://media.istockphoto.com/id/1201227330/photo/two-heads-are-better-than-one.jpg?s=612x612&w=0&k=20&c=j56P1EHXTUkpAq7JkMy2TAn0ArQLYl1yTtD0CgkSSvY=)",
      },
    },
  },
  plugins: [],
};
