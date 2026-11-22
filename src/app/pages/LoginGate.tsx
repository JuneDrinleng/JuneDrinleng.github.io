import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ExternalLink, Github, Loader2, Lock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth, type AuthErrorCode } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import SiteTransition from "../components/SiteTransition";

function getErrorMessage(
  code: AuthErrorCode,
  t: (zh: string, en: string) => string,
): string | null {
  if (code === "non_owner") {
    return t(
      "鉴权失败：当前 GitHub 账号非站点所有者（仅允许 JuneDrinleng 访问）。",
      "Access denied: GitHub account is not the site owner (JuneDrinleng only).",
    );
  }
  if (code === "popup_blocked") {
    return t(
      "登录弹窗被浏览器拦截，请允许本站弹出窗口后重试。",
      "The OAuth popup was blocked by your browser. Please allow popups and try again.",
    );
  }
  if (code === "oauth_failed") {
    return t(
      "GitHub 登录未完成或验证失败，请稍后重试。",
      "GitHub authentication failed. Please try again.",
    );
  }
  return null;
}

export default function LoginGate() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { login, loggingIn, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  const errorMessage = getErrorMessage(authError, t);
  const year = Math.max(2026, new Date().getFullYear());

  async function handleLogin() {
    const ok = await login();
    if (ok) {
      const target =
        location.pathname === "/blog"
          ? "/" + location.search
          : location.pathname + location.search;
      navigate(target, { replace: true });
    }
  }

  return (
    <>
      <div
        className="bg-swiss-dots min-h-[calc(100vh-3rem)] flex flex-col justify-between"
        style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
      >
        {/* Top architectural coordinate rail */}
        <div
          className="w-full px-4 sm:px-6 lg:px-10 pt-5 flex items-center justify-between font-mono-kb text-xs"
          style={{ color: "var(--kb-ink-faint)" }}
        >
          <span>DOMAIN // LUNE.LTD</span>
          <span className="hidden sm:inline">
            PRIVATE KNOWLEDGE BASE · GITHUB OAUTH
          </span>
        </div>

        {/* Center Swiss Gate Card */}
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          <div
            className="w-full max-w-md border-2"
            style={{
              borderColor: "var(--kb-border)",
              backgroundColor: "var(--kb-bg-surface)",
              boxShadow: "var(--kb-shadow)",
            }}
          >
            {/* Status Header */}
            <div
              className="px-5 py-3 border-b-2 flex items-center justify-between font-mono-kb text-xs"
              style={{
                borderColor: "var(--kb-border)",
                backgroundColor: "var(--kb-bg-subtle)",
              }}
            >
              <span className="font-bold tracking-wider uppercase flex items-center gap-2">
                <span
                  className="w-2 h-2 inline-block"
                  style={{ backgroundColor: "var(--kb-ink)" }}
                />
                {t("受保护空间", "RESTRICTED ACCESS")}
              </span>
              <span style={{ color: "var(--kb-ink-muted)" }}>OWNER ONLY</span>
            </div>

            {/* Body */}
            <div className="p-7 sm:p-8">
              <div
                className="inline-flex items-center justify-center w-11 h-11 border-2 mb-5"
                style={{ borderColor: "var(--kb-border)" }}
              >
                <Lock className="w-4 h-4" />
              </div>

              <h1 className="font-display text-4xl font-bold tracking-tight mb-1">
                LUNE
              </h1>
              <p
                className="font-mono-kb text-xs uppercase tracking-widest mb-5"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                {t(
                  "个人知识库 · Personal Knowledge Base",
                  "Personal Knowledge Base",
                )}
              </p>

              <p
                className="text-sm leading-relaxed mb-7"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                {t(
                  "这里是 JuneDrinleng 的私人技术笔记与科研知识库。正文存放于私有仓库，需通过 GitHub 所有者鉴权后方可进入阅读。",
                  "JuneDrinleng's private technical notes and research knowledge base. Content is proxied from a private repository after GitHub owner verification.",
                )}
              </p>

              {errorMessage && (
                <div
                  role="alert"
                  className="anim-popover mb-5 p-3 border-2 text-xs font-mono-kb leading-relaxed"
                  style={{
                    borderColor: "var(--kb-err)",
                    color: "var(--kb-err)",
                    backgroundColor: "var(--kb-bg-subtle)",
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                onClick={handleLogin}
                disabled={loggingIn}
                className="kb-btn-solid w-full py-3.5 px-5 flex items-center justify-center gap-2.5 text-sm font-bold uppercase tracking-wider cursor-pointer disabled:opacity-60"
              >
                {loggingIn ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Github className="w-4 h-4" />
                )}
                <span>
                  {loggingIn
                    ? t("正在验证 GitHub 身份…", "Verifying GitHub identity…")
                    : t("使用 GitHub 登录", "Sign in with GitHub")}
                </span>
              </button>

              <div
                className="mt-6 pt-5 border-t flex items-center justify-between text-xs gap-2"
                style={{
                  borderColor: "var(--kb-border-soft)",
                  color: "var(--kb-ink-muted)",
                }}
              >
                <span>
                  {t("寻找我的个人名片？", "Looking for my profile & CV?")}
                </span>
                <button
                  type="button"
                  onClick={() => setTransitioning(true)}
                  className="inline-flex items-center gap-1 font-mono-kb font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer shrink-0"
                  style={{ color: "var(--kb-ink)" }}
                >
                  <span>junedrinleng.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom coordinate rail */}
        <footer
          className="w-full px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono-kb"
          style={{ color: "var(--kb-ink-faint)" }}
        >
          <span>© 2023–{year} LUNE</span>
          <span>ZERO BUNDLED CONTENT · EDGE PROXY VERIFIED</span>
        </footer>
      </div>

      <SiteTransition
        targetUrl="https://junedrinleng.com"
        active={transitioning}
        theme={theme}
        onCancel={() => setTransitioning(false)}
      />
    </>
  );
}
