// src/api/endpoints/auth.ts
import { apiFetch } from '@/api/client';
import type { SignInDto, User, ApiError } from '@/api/types';

const ROOT = '/api/auth';

// TODO
// - check paths and create proper routes or reassign to existing
// - /api/auth/* means the auth router and controller require additional functions.

// Checks for a status property in object and returns an ApiError
function isApiError(err: unknown): err is ApiError { 
  return typeof err === "object" && err !== null && "status" in err; 
}

export const authApi = {
  // cookie-based login: server sets HttpOnly cookie(s)
  signIn: async (creds: SignInDto): Promise<User> => {
    return apiFetch<User>(`${ROOT}/login`, {
      method: 'POST',
      body: JSON.stringify(creds),
    });
  },

  signOut: async (): Promise<void> => {
    await apiFetch<void>(`${ROOT}/logout`, { method: 'POST' });
  },

  me: async (): Promise<User | null> => {
    // returns 200 + User when authenticated, 401 when not
    try {
      return await apiFetch<User>(`${ROOT}/me`);
    } catch (err) {
      // treat 401 as unauthenticated
      if (isApiError(err) && err.status === 401) return null;
      throw err;
    }
  },

  refresh: async (): Promise<User | null> => {
    // rotates refresh cookie and returns new session info
    try {
      return await apiFetch<User>(`${ROOT}/refresh`, { method: 'POST' });
    } catch (err) {
      if (isApiError(err) && err.status === 401) return null;
      throw err;
    }
  },
};
