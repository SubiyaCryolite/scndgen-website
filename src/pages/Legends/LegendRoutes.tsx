import { RouteProps } from "react-router-dom";
import { Faq, Info, Requirements, Features, Screenshots } from "./tabs";

export const LegendRoutes: RouteProps[] = [
  { id: "l1", path: "requirements", element: <Requirements /> },
  { id: "l2", path: "screenshots", element: <Screenshots /> },
  { id: "l3", path: "features", element: <Features /> },
  { id: "l4", path: "faq", element: <Faq /> },
  { id: "l5", index: true, element: <Info /> },
];
