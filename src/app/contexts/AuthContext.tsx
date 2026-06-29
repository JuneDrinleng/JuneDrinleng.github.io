import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { getToken, setToken, clearToken } from "../lib/auth";
import { githubGetUser, type GitHubUser } from "../lib/github";
import { clearPostsCache } from "../utils/posts";

const OAUTH_BASE = "https://junedrinlengblog.zhuzilan520.workers.dev";
const TRUSTED_ORIGIN = "https://junedrinlengblog.zhuzilan520.workers.dev";
const OWNER = "JuneDrinleng";

type AuthStatus = "checking" | "anonymous" | "authenticated";

interface AuthContextType {
  status: AuthStatus;
  user: GitHubUser | null;
  isOwner: boolean;
  token: string | null;
  /** Opens the GitHub OAuth popup. Resolves true once an owner token is set. */
  login: () => Promise<boolean>;
  loggingIn: boolean;
  logout: () => void;
  /** Re-validate the in-memory token against GitHub. */
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  status: "checking",
  user: null,
  isOwner: false,
  token: null,
  login: async () => false,
  loggingIn: false,
  logout: () => {},
  refreshAuth: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const popupRef = useRef<Window | null>(null);

  const refreshAuth = useCallback(async () => {
    const token = getToken();
    if (!token) {
      setUser(null);
      setStatus("anonymous");
      return;
    }
    try {
      const u = await githubGetUser(token);
      if (u.login === OWNER) {
        setUser(u);
        setStatus("authenticated");
      } else {
        clearToken();
        setUser(null);
        setStatus("anonymous");
      }
    } catch {
      clearToken();
      setUser(null);
      setStatus("anonymous");
    }
  }, []);

  // Validate any token already in memory on mount. (Token is memory-only, so
  // after a refresh this is usually anonymous until the user logs in again.)
  useEffect(() => {
    void refreshAuth();
  }, [refreshAuth]);

  const logout = useCallback(() => {
    clearToken();
    clearPostsCache();
    setUser(null);
    setStatus("anonymous");
  }, []);

  const login = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      setLoggingIn(true);

      const cleanup = () => {
        window.removeEventListener("message", handleMessage);
        clearInterval(checkClosed);
        setLoggingIn(false);
      };

      async function handleMessage(e: MessageEvent) {
        if (e.origin !== TRUSTED_ORIGIN) return;
        if (typeof e.data !== "string") return;

        // Handshake: reply to unblock the Worker popup.
        if (e.data === "authorizing:github") {
          (e.source as Window)?.postMessage(e.data, e.origin);
          return;
        }

        const match = e.data.match(/^authorization:github:(success|error):(.+)$/);
        if (!match) return;
        const [, result, payload] = match;
        popupRef.current?.close();
        popupRef.current = null;
        cleanup();

        if (result !== "success") {
          resolve(false);
          return;
        }
        try {
          const { token } = JSON.parse(payload);
          setToken(token);
          await refreshAuth();
          // refreshAuth flips status; report success only if owner verified.
          resolve(getToken() !== null);
        } catch {
          resolve(false);
        }
      }

      window.addEventListener("message", handleMessage);

      const url = `${OAUTH_BASE}/auth?provider=github&scope=public_repo&site_id=${location.hostname}`;
      const popup = window.open(url, "github-oauth", "width=600,height=700,left=400,top=200");
      if (!popup) {
        cleanup();
        resolve(false);
        return;
      }
      popupRef.current = popup;

      const checkClosed = setInterval(() => {
        if (popup.closed) {
          popupRef.current = null;
          cleanup();
          resolve(false);
        }
      }, 500);
    });
  }, [refreshAuth]);

  return (
    <AuthContext.Provider
      value={{
        status,
        user,
        isOwner: status === "authenticated",
        token: status === "authenticated" ? getToken() : null,
        login,
        loggingIn,
        logout,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
