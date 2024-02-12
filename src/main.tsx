import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./routes/Home";
import { Resume } from "./routes/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/global.css";

const getBaseName = () => { 
 const e = process.env.NODE_ENV;
 if (e == undefined) return "/"
 if (e == "development") return "/"
 return "/" 
}
const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/work", element: <Resume /> },
  ],
  { basename: getBaseName() }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
