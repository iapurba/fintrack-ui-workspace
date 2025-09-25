import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__localRoot";

export const userRoutes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "profile",
    component: () => <>Dummy Profile Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "settings",
    component: () => <>Dummy Settings Page</>,
  }),
];
