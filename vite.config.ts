import { defineConfig } from 'vite';
import vitePluginRequire from 'vite-plugin-require';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import svgLoader from 'vite-svg-loader';
// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				app: './index.html',
			},
		},
	},
	server: {
		host: true,
		port: 3000,
	},
	plugins: [react(), sassDts(), vitePluginRequire(), svgLoader()],
});
