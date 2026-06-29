// Token is kept in memory only — never written to localStorage/sessionStorage,
// so it cannot be stolen by XSS. The trade-off is that the user must re-login
// after a page refresh.
let _token: string | null = null;

export const getToken = (): string | null => _token;
export const setToken = (t: string): void => { _token = t; };
export const clearToken = (): void => { _token = null; };
