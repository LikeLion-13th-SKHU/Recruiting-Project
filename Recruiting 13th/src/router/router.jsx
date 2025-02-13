import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Project from "../pages/project/Project";
import Curriculum from "../pages/curriculum/Curriculum";
import Apply from "../pages/apply/Apply";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project", element: <Project /> },
      { path: "/curriculum", element: <Curriculum /> },
      { path: "/apply", element: <Apply /> },
    ],
  },
]);
