import { defineConfig } from "vite";
import vitePluginString from "vite-plugin-string";

export default defineConfig ({
  plugins: [vitePluginString.default()],
  base:'/vite-react-example-454/'
});
