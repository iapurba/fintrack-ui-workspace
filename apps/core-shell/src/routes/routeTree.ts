import { rootRoute } from "./__root";
import { dashboardRoute } from "./dashboard.routes";
import { indexRoute, notFoundRoute } from "./index.routes";
("./index.routes");
import { userRoute } from "./user.routes";

export const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  userRoute,
  // financeRoute,
  // analyticsRoute,
  notFoundRoute,
]);
