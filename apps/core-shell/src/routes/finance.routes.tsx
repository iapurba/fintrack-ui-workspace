import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const financeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "finance/*",
  component: () => <>Dummy Finance Route</>,
});
