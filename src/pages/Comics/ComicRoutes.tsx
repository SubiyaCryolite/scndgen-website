import { RouteProps } from "react-router";

import { Landing, Page } from "./Pages";

export const ComicRoutes: RouteProps[] = [
  { id: "ci", index: true, element: <Landing /> },
  { id: "c0", path: ":pageId", element: <Page /> },
];
