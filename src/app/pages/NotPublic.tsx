import { Link, useLocation, useNavigate } from "react-router";
import { Lock, Loader2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";

/**
 * Shown to anonymous visitors who hit a gated route (e.g. /blog) or any unknown
 * path. Presents a "not public yet" 404 plus a discreet owner login that, on
 * success, returns to the originally requested location.
 */
export default function NotPublic() {
  const { t } = useLanguage();
  const { login, loggingIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogin() {
    const ok = await login();
    if (ok) {
      // Re-render the originally requested route now that auth has flipped.
      navigate(location.pathname + location.search, { replace: true });
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-black dark:border-neutral-100 mb-6">
          <Lock className="w-7 h-7" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4">404</h1>
        <p className="text-base sm:text-lg uppercase tracking-wider mb-2">
          {t("该部分尚未公开", "This section is not public yet")}
        </p>
        <p className="text-sm opacity-60 mb-8">
          {t(
            "你访问的内容目前仅对站点所有者开放。",
            "The content you requested is currently available to the site owner only.",
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center border-2 border-black dark:border-neutral-100 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wider text-xs font-bold w-full sm:w-auto"
          >
            {t("返回导航", "Back to Home")}
          </Link>
          <button
            onClick={handleLogin}
            disabled={loggingIn}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity disabled:opacity-30 w-full sm:w-auto"
          >
            {loggingIn && <Loader2 className="w-4 h-4 animate-spin" />}
            {t("所有者登录", "Owner login")}
          </button>
        </div>
      </div>
    </div>
  );
}
