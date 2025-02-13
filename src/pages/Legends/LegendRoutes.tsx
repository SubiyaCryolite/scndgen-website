import { RouteProps } from "react-router";

import { Faq, Features, Info, Requirements, Screenshots } from "./tabs";

export const LegendRoutes: RouteProps[] = [
  { id: "l1", path: "requirements", element: <Requirements /> },
  { id: "l2", path: "screenshots", element: <Screenshots /> },
  { id: "l3", path: "features", element: <Features /> },
  { id: "l4", path: "faq", element: <Faq /> },
  { id: "l5", index: true, element: <Info /> },
];
