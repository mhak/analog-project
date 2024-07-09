// vite.config.ts
import { defineConfig } from "file:///C:/repo/mhak/analog-project/node_modules/vite/dist/node/index.js";
import analog from "file:///C:/repo/mhak/analog-project/node_modules/@analogjs/platform/src/index.js";
var vite_config_default = defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"]
  },
  resolve: {
    mainFields: ["module"]
    // alias: {
    //   'node-fetch': 'cross-fetch',
    // },
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"]
    // deps: {
    //   interopDefault: true,
    // },
  },
  define: {
    "import.meta.vitest": mode !== "production",
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {}
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxyZXBvXFxcXG1oYWtcXFxcYW5hbG9nLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHJlcG9cXFxcbWhha1xcXFxhbmFsb2ctcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcmVwby9taGFrL2FuYWxvZy1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBhbmFsb2cgZnJvbSAnQGFuYWxvZ2pzL3BsYXRmb3JtJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogWydlczIwMjAnXSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIG1haW5GaWVsZHM6IFsnbW9kdWxlJ10sXHJcbiAgICAvLyBhbGlhczoge1xyXG4gICAgLy8gICAnbm9kZS1mZXRjaCc6ICdjcm9zcy1mZXRjaCcsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW2FuYWxvZygpXSxcclxuICB0ZXN0OiB7XHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICBzZXR1cEZpbGVzOiBbJ3NyYy90ZXN0LXNldHVwLnRzJ10sXHJcbiAgICBpbmNsdWRlOiBbJyoqLyouc3BlYy50cyddLFxyXG4gICAgcmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcclxuICAgIC8vIGRlcHM6IHtcclxuICAgIC8vICAgaW50ZXJvcERlZmF1bHQ6IHRydWUsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICAnaW1wb3J0Lm1ldGEudml0ZXN0JzogbW9kZSAhPT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgLy8gQnkgZGVmYXVsdCwgVml0ZSBkb2Vzbid0IGluY2x1ZGUgc2hpbXMgZm9yIE5vZGVKUy9cclxuICAgIC8vIG5lY2Vzc2FyeSBmb3Igc2VnbWVudCBhbmFseXRpY3MgbGliIHRvIHdvcmtcclxuICAgIGdsb2JhbDoge30sXHJcbiAgfSxcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsT0FBTztBQUFBLElBQ0wsUUFBUSxDQUFDLFFBQVE7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUl2QjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUFBLEVBQ2xCLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxtQkFBbUI7QUFBQSxJQUNoQyxTQUFTLENBQUMsY0FBYztBQUFBLElBQ3hCLFdBQVcsQ0FBQyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJdkI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLHNCQUFzQixTQUFTO0FBQUE7QUFBQTtBQUFBLElBRy9CLFFBQVEsQ0FBQztBQUFBLEVBQ1g7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
