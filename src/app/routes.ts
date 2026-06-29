import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import VisualSPT from "./pages/VisualSPT";
import FocusTimer from "./pages/FocusTimer";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotPublic from "./pages/NotPublic";
import RequireBlogAuth from "./components/RequireBlogAuth";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/visualspt",
        Component: VisualSPT,
      },
      {
        path: "/focus-timer",
        Component: FocusTimer,
      },
      {
        Component: RequireBlogAuth,
        children: [
          {
            path: "/blog",
            Component: Blog,
          },
          {
            path: "/blog/:slug",
            Component: BlogPost,
          },
        ],
      },
      {
        path: "*",
        Component: NotPublic,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });