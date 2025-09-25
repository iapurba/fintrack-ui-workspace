import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__localRoot";

export const authRoutes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: () => <>Dummy Login Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/signup",
    component: () => <>Dummy Sign Up Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/logout",
    component: () => <>Dummy Logout Page</>,
  }),
];
