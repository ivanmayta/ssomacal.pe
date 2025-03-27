/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations"

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
        extend: {
            keyframes: {
                "linear-infinite": {
                    from: {
                        transform: "translateX(0%)",
                    },
                    to: {
                        transform: "translateX(calc(250px*7))",
                    },
                },
            },
            animation: {
                "linear-infinite": "linear-infinite 40s linear infinite",
            },
        },
    },

    plugins: [animations],
}
