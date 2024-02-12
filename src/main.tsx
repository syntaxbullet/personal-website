import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./routes/Home";
import { Resume } from "./routes/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/global.css";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/work", element: <Resume /> },
  ]
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
