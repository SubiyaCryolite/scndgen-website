import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./components";
import { Author, Gallery, Legacy, Legends, Blog, Comics, Page } from "./pages";

import { Faq, Info, Requirements, Features, Screenshots } from "./pages";

export const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Legacy />} />
        <Route path="legends" element={<Legends />}>
          <Route path="requirements" element={<Requirements />} />
          <Route path="screenshots" element={<Screenshots />} />
          <Route path="features" element={<Features />} />
          <Route path="faq" element={<Faq />} />
          <Route index element={<Info />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="comics" element={<Comics />}>
          <Route path=":page" element={<Page />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="author" element={<Author />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
