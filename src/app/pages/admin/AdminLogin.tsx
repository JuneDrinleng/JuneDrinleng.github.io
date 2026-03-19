import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { PenLine, AlertCircle, Loader2, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { setToken } from './lib/auth';

const OAUTH_BASE = 'https://junedrinlengblog.zhuzilan520.workers.dev';
const TRUSTED_ORIGIN = 'https://junedrinlengblog.zhuzilan520.workers.dev';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const popupRef = useRef<Window | null>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== TRUSTED_ORIGIN) return;
      if (typeof e.data !== 'string') return;

      // Handshake: Worker sends "authorizing:github", we must reply to unblock it
      if (e.data === 'authorizing:github') {
        (e.source as Window)?.postMessage(e.data, e.origin);
        return;
      }

      // Token message: "authorization:github:success:{"token":"...","provider":"github"}"
      const match = e.data.match(/^authorization:github:(success|error):(.+)$/);
      if (!match) return;
      const [, status, payload] = match;
      popupRef.current?.close();
      popupRef.current = null;
      if (status === 'success') {
        try {
          const { token } = JSON.parse(payload);
          setToken(token);
          navigate('/dashboard');
        } catch {
          setError('解析授权响应失败，请重试。');
          setLoading(false);
        }
      } else {
        setError('GitHub 授权失败，请重试。');
        setLoading(false);
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  function handleLogin() {
    setLoading(true);
    setError('');
    const url = `${OAUTH_BASE}/auth?provider=github&scope=public_repo&site_id=${location.hostname}`;
    const popup = window.open(url, 'github-oauth', 'width=600,height=700,left=400,top=200');
    if (!popup) {
      setError('弹窗被阻止，请允许此页面打开弹窗后重试。');
      setLoading(false);
      return;
    }
    popupRef.current = popup;
    // 检测弹窗在未完成授权时被手动关闭
    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        popupRef.current = null;
        setLoading(false);
      }
    }, 500);
  }

  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <PenLine className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">LUNE Admin</h1>
          <p className="text-sm text-muted-foreground">博客内容管理系统</p>
        </div>

        <Card>
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-base">登录</CardTitle>
            <CardDescription className="text-sm">
              通过 GitHub 授权访问博客管理后台
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button className="w-full" onClick={handleLogin} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    等待授权…
                  </>
                ) : (
                  <>
                    <Github className="w-4 h-4 mr-2" />
                    使用 GitHub 登录
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
