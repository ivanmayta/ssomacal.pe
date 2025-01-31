/** @type {import('tailwindcss').Config} */

export default {
    theme: {
        content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
        container: {
            center: true,
            screens: {
                lg: "765px",
                xl: "1024px",
                "2xl": "1424px",
            },
        },
    },
}
