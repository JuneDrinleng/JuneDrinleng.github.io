import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import VisualSPT from "./pages/VisualSPT";
import FocusTimer from "./pages/FocusTimer";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export const router = createBrowserRouter([
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
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blog/:slug",
    Component: BlogPost,
  },
], { basename: import.meta.env.BASE_URL });