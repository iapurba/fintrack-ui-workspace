import { rootRoute } from "./__localRoot";
import { financeRoutes } from "./finance.routes";

export const routeTree = rootRoute.addChildren([...financeRoutes]);
