import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/theredswarm.github.io/",
	plugins: [sveltekit()],
});
