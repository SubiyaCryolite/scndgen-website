import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./components";
import { Author, Gallery, Legacy, Legends, Blog, Comics } from "./pages";

import { LegendRoutes } from "./pages/Legends";
import { ComicRoutes } from "./pages/Comics";

export const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Legacy />} />
        <Route path="legends" element={<Legends />}>
          {LegendRoutes.map(({ id, ...rest }) => (
            <Route key={id} {...rest} />
          ))}
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="comics" element={<Comics />}>
          {ComicRoutes.map(({ id, ...rest }) => (
            <Route key={id} {...rest} />
          ))}
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="author" element={<Author />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
