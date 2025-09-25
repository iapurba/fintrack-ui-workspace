import { createBrowserHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes/routeTree";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent", // hover-based prefetching
  history: createBrowserHistory(),
});

// Register router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
