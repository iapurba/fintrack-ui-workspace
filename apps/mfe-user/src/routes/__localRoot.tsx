import { createRootRoute, Outlet } from "@tanstack/react-router";

// The root route is the top-level layout of the mfe-user application.
export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <h1>MFE-User (Standalone)</h1>
      <Outlet />
    </div>
  ),
});
