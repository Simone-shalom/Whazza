import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://whazza.vercel.app/",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
