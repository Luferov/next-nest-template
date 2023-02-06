/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	publicRuntimeConfig: {
		APP_ENV: process.env.REACT_APP_ENV,
		APP_BROWSER_URL: process.env.REACT_APP_BROWSER_URL,
		APP_URL: process.env.REACT_APP_URL,
		APP_WS: process.env.REACT_APP_WS,
	},
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: true,
}

module.exports = nextConfig
