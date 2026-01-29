// src/api/tokenStore.ts
let inMemoryToken: string | null = null;
const STORAGE_KEY = 'blog_access_token';

export function setToken(token: string, persist = false) {
  inMemoryToken = token;
  if (persist) localStorage.setItem(STORAGE_KEY, token);
}

export function getToken(): string | null {
  if (inMemoryToken) return inMemoryToken;
  const t = localStorage.getItem(STORAGE_KEY);
  if (t) inMemoryToken = t;
  return inMemoryToken;
}

export function clearToken() {
  inMemoryToken = null;
  localStorage.removeItem(STORAGE_KEY);
}
