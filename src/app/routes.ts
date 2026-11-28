import { createBrowserRouter, redirect } from "react-router";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Wiki from "./pages/Wiki";
import WikiEntry from "./pages/WikiEntry";
import RequireBlogAuth from "./components/RequireBlogAuth";

export const router = createBrowserRouter(
  [
    {
      Component: Layout,
      children: [
        {
          Component: RequireBlogAuth,
          children: [
            {
              path: "/",
              Component: Blog,
            },
            {
              path: "/blog",
              loader: () => redirect("/"),
            },
            {
              path: "/blog/:slug",
              Component: BlogPost,
            },
            {
              path: "/wiki",
              Component: Wiki,
            },
            {
              path: "/wiki/:slug",
              Component: WikiEntry,
            },
            {
              path: "*",
              loader: () => redirect("/"),
            },
          ],
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
