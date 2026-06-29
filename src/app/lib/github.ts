const GITHUB_API = 'https://api.github.com';

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
}

/** Fetch the authenticated user for the given OAuth token. */
export async function githubGetUser(token: string): Promise<GitHubUser> {
  const r = await fetch(`${GITHUB_API}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!r.ok) throw new Error('Token 无效或无权限');
  return r.json();
}
