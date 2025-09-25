import { rootRoute } from "./__localRoot";
import { analyticsRoutes } from "./analytics.routes";

export const routeTree = rootRoute.addChildren([...analyticsRoutes]);
