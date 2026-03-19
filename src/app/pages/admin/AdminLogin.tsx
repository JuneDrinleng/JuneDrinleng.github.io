import { useState } from 'react';
import { useNavigate } from 'react-router';
import { PenLine, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { githubGetUser } from './lib/github';
import { setToken } from './lib/auth';

export default function AdminLogin() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = value.trim();
    if (!token) return;
    setLoading(true);
    setError('');
    try {
      await githubGetUser(token);
      setToken(token);
      navigate('/dashboard');
    } catch {
      setError('Token 无效，请检查权限后重试。');
    } finally {
      setLoading(false);
    }
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
              输入 GitHub Personal Access Token 以继续
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="token">Personal Access Token</Label>
                <Input
                  id="token"
                  type="password"
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  autoComplete="off"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  需要勾选{' '}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">repo</code>{' '}
                  权限范围
                </p>
              </div>
              <Button type="submit" className="w-full" disabled={loading || !value.trim()}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    验证中…
                  </>
                ) : (
                  '进入管理后台'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          <a
            href="https://github.com/settings/tokens/new?scopes=repo&description=LUNE+Admin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            在 GitHub 创建 Token →
          </a>
        </p>
      </div>
    </div>
  );
}
