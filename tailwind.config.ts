import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			xs: "200px", // Define xs screen (adjust as needed)
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			"dark-400": "#1f1f1f", // Define your dark-400 color
			"light-900": "#ffffff", // Define your light-900 color
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
			"auth-dark" : 'url("/images/auth-dark.png")',
			"auth-light": 'url("/images/auth-light.png")'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
