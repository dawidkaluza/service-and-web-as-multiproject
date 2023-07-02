import React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world! Go to <Link to={`/first`}>first</Link> to see how react router works.</div>,
  },
  {
    path: "/first",
    element: <div>This is /first page. <Link to={'/second'}>Go to /second page.</Link></div>
  },
  {
    path: "/second",
    element: <div>This is /second page. <Link to={'/second'}>Go to /first page.</Link></div>
  }
]);

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);