/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(75, 94%, 57%)",
                white: "hsl(0, 0%, 100%)",
                background: "#141414",
                card: "#1f1f1f",
                button: "#333333",
            },
            fontSize:{
                sm: "14px",
                base: "16px"
            }
        },
    },
    plugins: [],
};
