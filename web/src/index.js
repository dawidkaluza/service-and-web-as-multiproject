import React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {FirstPage} from "./FirstPage";
import {SecondPage} from "./SecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world! Go to /first or /second to se how react router works.</div>,
  },
  {
    path: "first",
    element: <FirstPage />
  },
  {
    path: "second",
    element: <SecondPage />
  }
]);

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);