import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./components/Layout.jsx";
import {
  Author,
  Gallery,
  Landing,
  Legacy,
  Legends,
  Blog,
  Comics,
} from "./pages";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="legacy" element={<Legacy />} />
        <Route path="legends" element={<Legends />} />
        <Route path="blog" element={<Blog />} />
        <Route path="comics" element={<Comics />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="author" element={<Author />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
