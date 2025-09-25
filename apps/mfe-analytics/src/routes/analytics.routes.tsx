import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__localRoot";

export const analyticsRoutes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/reports",
    component: () => <>Dummy Reports Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/insights",
    component: () => <>Dummy Insights Page</>,
  }),
];
