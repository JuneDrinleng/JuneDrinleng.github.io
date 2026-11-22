import { Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import LoginGate from "../pages/LoginGate";

/**
 * Auth gate for the entire LUNE private knowledge base.
 * Unauthenticated visitors always land on the Swiss Login Gate regardless of
 * requested path. Actual post content is fetched from an authenticated Worker
 * API, so this is the UX gate while the Worker enforces the security boundary.
 */
export default function RequireBlogAuth() {
  const { status, isOwner } = useAuth();

  if (status === "checking") {
    return (
      <div
        className="min-h-[calc(100vh-3rem)]"
        style={{ backgroundColor: "var(--kb-bg)" }}
      />
    );
  }

  return isOwner ? <Outlet /> : <LoginGate />;
}
