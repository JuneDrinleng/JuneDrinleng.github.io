import { Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import NotPublic from "../pages/NotPublic";

/**
 * Gate for the blog area: owners see the nested routes, everyone else (and the
 * brief auth-checking window) sees the "not public" page. This only controls
 * what renders — actual post content is fetched from an authenticated API, so
 * the gate is a UX boundary, not the security boundary.
 */
export default function RequireBlogAuth() {
  const { status, isOwner } = useAuth();
  if (status === "checking") {
    return <div className="min-h-screen bg-white dark:bg-neutral-900" />;
  }
  return isOwner ? <Outlet /> : <NotPublic />;
}
