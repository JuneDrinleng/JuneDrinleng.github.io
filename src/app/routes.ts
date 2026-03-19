import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import VisualSPT from "./pages/VisualSPT";
import FocusTimer from "./pages/FocusTimer";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";

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
    path: "/dashboard/login",
    Component: AdminLogin,
  },
  {
    path: "/dashboard",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "posts", Component: AdminPosts },
      { path: "posts/new", Component: AdminPostEditor },
      { path: "posts/:lang/:slug/edit", Component: AdminPostEditor },
    ],
  },
], { basename: import.meta.env.BASE_URL });