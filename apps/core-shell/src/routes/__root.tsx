import { createRootRoute, Outlet } from "@tanstack/react-router";

// The root route is the top-level layout of the shell application.
// We export it so child routes in other files can reference it.
export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
