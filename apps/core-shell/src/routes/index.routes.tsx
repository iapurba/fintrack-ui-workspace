import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./__root";

const dummyAuth = () => {
  return true;
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: async () => {
    const isAuthenticated = dummyAuth();
    if (isAuthenticated) {
      throw redirect({ to: "/dashboard" });
    } else {
      throw redirect({ to: "/user/*" });
    }
  },
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*", // catch-all
  component: () => <div>404 - Page Not Found</div>,
});
