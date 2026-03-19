const REPO = 'JuneDrinleng/JuneDrinleng.github.io';
const BRANCH = 'main';
const API = 'https://api.github.com';

function headers(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
}

export async function githubGetUser(token: string): Promise<GitHubUser> {
  const r = await fetch(`${API}/user`, { headers: headers(token) });
  if (!r.ok) throw new Error('Token 无效或无权限');
  return r.json();
}

export interface GitHubFile {
  content: string;
  sha: string;
}

export async function githubGetFile(token: string, path: string): Promise<GitHubFile> {
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}?ref=${BRANCH}`, {
    headers: headers(token),
  });
  if (!r.ok) throw new Error(`文件不存在: ${path}`);
  const data = await r.json();
  // GitHub returns base64, decode to UTF-8
  const raw = data.content.replace(/\n/g, '');
  const decoded = decodeURIComponent(
    Array.from(atob(raw))
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''),
  );
  return { content: decoded, sha: data.sha };
}

export async function githubPutFile(
  token: string,
  path: string,
  content: string,
  message: string,
  sha?: string,
): Promise<void> {
  const encoded = btoa(
    encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16)),
    ),
  );
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: { ...headers(token), 'Content-Type': 'application/json' } as HeadersInit,
    body: JSON.stringify({ message, content: encoded, branch: BRANCH, ...(sha ? { sha } : {}) }),
  });
  if (!r.ok) {
    const err = await r.json().catch(() => ({}));
    throw new Error((err as { message?: string }).message ?? '提交失败');
  }
}

export async function githubDeleteFile(
  token: string,
  path: string,
  sha: string,
  message: string,
): Promise<void> {
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}`, {
    method: 'DELETE',
    headers: { ...headers(token), 'Content-Type': 'application/json' } as HeadersInit,
    body: JSON.stringify({ message, sha, branch: BRANCH }),
  });
  if (!r.ok) throw new Error('删除失败');
}
