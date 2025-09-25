import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <div>
      <h1>Core Shell Dashboard</h1>
      <p>High-level overview, stats, etc.</p>
    </div>
  ),
});
