const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: { fontFamily: { mono: [...defaultTheme.fontFamily.mono] } },
    plugins: [],
    corePlugins: {
        // preflight: false,
    },
};
