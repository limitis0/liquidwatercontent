import React from "react";
import Info from "../pages/info";
import CV from "../pages/cv";
import Publications from "../pages/publications";

const routes = [
  {
    name: "info",
    displayName: "Info",
    path: "/",
    component: <Info />,
  },
  {
    name: "cv",
    displayName: "CV",
    path: "/cv",
    component: <CV />,
  },
  {
    name: "publications",
    displayName: "Publications",
    path: "/publications",
    component: <Publications />,
  },
];

export default routes;
