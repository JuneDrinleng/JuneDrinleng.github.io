import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import TitleBar from "./components/TitleBar";
import BackToTop from "./components/BackToTop";
import { useAuth } from "./contexts/AuthContext";

type RouteAnim =
  | "anim-route-forward"
  | "anim-route-back"
  | "anim-route-unlock"
  | "anim-route-lock";

export default function Layout() {
  const location = useLocation();
  const { status, isOwner } = useAuth();
  const prevPathRef = useRef(location.pathname);
  const prevOwnerRef = useRef<boolean | null>(null);
  const [animClass, setAnimClass] = useState<RouteAnim>("anim-route-unlock");
  const [animKey, setAnimKey] = useState(0);
  const [sweepKey, setSweepKey] = useState(0);

  useEffect(() => {
    if (status === "checking") return;

    const prevOwner = prevOwnerRef.current;
    const prevPath = prevPathRef.current;

    if (prevOwner === null) {
      prevOwnerRef.current = isOwner;
      prevPathRef.current = location.pathname;
      return;
    }

    if (prevOwner !== isOwner) {
      setAnimClass(isOwner ? "anim-route-unlock" : "anim-route-lock");
      setAnimKey((k) => k + 1);
      setSweepKey((k) => k + 1);
      prevOwnerRef.current = isOwner;
      prevPathRef.current = location.pathname;
      return;
    }

    if (prevPath !== location.pathname) {
      const pathDepth = (p: string) => p.split("/").filter(Boolean).length;
      const nextDepth = pathDepth(location.pathname);
      const prevDepth = pathDepth(prevPath);
      setAnimClass(
        nextDepth > prevDepth
          ? "anim-route-forward"
          : nextDepth < prevDepth
            ? "anim-route-back"
            : nextDepth > 0
              ? "anim-route-forward"
              : "anim-route-unlock",
      );
      setAnimKey((k) => k + 1);
      setSweepKey((k) => k + 1);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname, isOwner, status]);

  return (
    <>
      <TitleBar sweepKey={sweepKey} />
      <div key={animKey} className={animClass}>
        <Outlet />
      </div>
      <BackToTop />
    </>
  );
}
