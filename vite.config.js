// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Check if the file is an image (png, jpg, jpeg, svg, gif)
          if (/\.(png|jpe?g|svg|gif)$/.test(assetInfo.name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          // For other assets like CSS
          if (/\.css$/.test(assetInfo.name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          // Default behavior for other assets
          return 'assets/[name]-[hash][extname]';
        },
        // main js file to root folder
        entryFileNames: '[name].js',
      },
    },
  },
});
