// src/hooks/useAuth.tsx
import { useCallback, useEffect, useState } from 'react';
import { authApi } from '../endpoints/auth';
import type { User, SignInDto } from '../types';

export function useAuth(initial?: { user?: User | null }) {
  const [user, setUser] = useState<User | null | undefined>(initial?.user ?? undefined);
  const [loading, setLoading] = useState<boolean>(initial?.user === undefined);
  const [error, setError] = useState<Error | null>(null);

  const init = useCallback(async () => {
    setLoading(true);
    try {
      const u = await authApi.me();
      setUser(u);
    } catch (err) {
      setError(err as Error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user === undefined) {
      // first-time init
      init();
    }
  }, [init, user]);

  const signIn = useCallback(async (creds: SignInDto) => {
    setLoading(true);
    try {
      const u = await authApi.signIn(creds);
      setUser(u);
      setError(null);
      return u;
    } catch (err) {
      setError(err as Error);
      setUser(null);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      await authApi.signOut();
      setUser(null);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const u = await authApi.refresh();
      setUser(u);
      return u;
    } catch (err) {
      setError(err as Error);
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    refresh,
    init,
  };
}
