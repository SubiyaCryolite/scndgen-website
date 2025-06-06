import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Layout } from "@/components";
import {
  Author,
  Blog,
  ComicRoutes,
  Comics,
  Gallery,
  Legacy,
  LegendRoutes,
  Legends,
} from "@/pages";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
};
