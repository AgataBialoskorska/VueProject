import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        console.log(config)
      return {
        target: 'http://localhost:5173/#/'
      }
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
    },
  },
});
