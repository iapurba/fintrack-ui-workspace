import { rootRoute } from "./__localRoot";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

export const routeTree = rootRoute.addChildren([...authRoutes, ...userRoutes]);
