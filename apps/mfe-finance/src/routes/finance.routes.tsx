import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__localRoot";

export const financeRoutes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "income",
    component: () => <>Dummy Income Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "expenses",
    component: () => <>Dummy Expenses Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "investments",
    component: () => <>Dummy Investments Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "subscriptions",
    component: () => <>Dummy Subscriptions Page</>,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "cards",
    component: () => <>Dummy Cards Page</>,
  }),
];
