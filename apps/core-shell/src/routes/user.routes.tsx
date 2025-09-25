import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "user/*",
  component: () => <>Dummy User Route</>,
});
