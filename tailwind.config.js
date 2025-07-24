module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {},
    },
  },
  safelist: [
    {
      pattern: /bg-\[.*\]/,
    },
    {
      pattern: /text-\[.*\]/,
    },
  ],
};
