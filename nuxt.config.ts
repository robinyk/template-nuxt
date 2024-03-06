import { defineNuxtConfig } from 'nuxt/config'

const { fileURLToPath } = require('url')

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt'],
	alias: {
		images: fileURLToPath(new URL('./assets/images', import.meta.url)),
		style: fileURLToPath(new URL('./assets/style', import.meta.url))
	}
	// elementPlus: {}
})
