import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Main pages
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        work: resolve(__dirname, "work.html"),
        project: resolve(__dirname, "project.html"),
        contact: resolve(__dirname, "contact.html"),
        pricing: resolve(__dirname, "pricing.html"),
        ai: resolve(__dirname, "ai.html"),
        // Feature pages
        policyAdmin: resolve(__dirname, "features/policy-admin.html"),
        claims: resolve(__dirname, "features/claims.html"),
        billing: resolve(__dirname, "features/billing.html"),
        analytics: resolve(__dirname, "features/analytics.html"),
        reinsurance: resolve(__dirname, "features/reinsurance.html"),
        ifrs17: resolve(__dirname, "features/ifrs17.html"),
        portals: resolve(__dirname, "features/portals.html"),
        reserves: resolve(__dirname, "features/reserves.html"),
        // Guide pages (Pillar Content)
        insuranceGuide: resolve(__dirname, "guides/insurance-management-guide.html"),
      },
      output: {
        // Optimize chunk splitting
        manualChunks: {
          vendor: ['gsap', 'lenis'],
          lottie: ['lottie-web'],
        },
      },
    },
    // Performance optimizations - use esbuild (default)
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for debugging (can be disabled in production)
    sourcemap: false,
    // Asset optimization
    assetsInlineLimit: 4096,
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
      "**/*.webp",
      "**/*.json",
      "**/*.mp4",
    ],
    copyPublicDir: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },
  // Server optimizations for development
  server: {
    hmr: true,
    cors: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['gsap', 'lenis', 'lottie-web'],
  },
});
