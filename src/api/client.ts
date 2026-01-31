// src/api/client.ts
// Configured fetch wrapper for cookie-based auth (credentials: 'include')

const API_URL = import.meta.env.VITE_API_URL || 'https://blog-api-ddfj.onrender.com'; 
import { getToken } from './tokenStore';


export class ApiError extends Error {
  readonly status?: number;
  readonly body?: unknown;

  constructor(message: string, status?: number, body?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

function isErrorBody(x: unknown): x is { message?: unknown } {
return typeof x === 'object' && x !== null && 'message' in x;
}

function parseJsonSafe(res: Response) {
  return res.text().then((t) => {
    try {
      return t ? JSON.parse(t) : null;
    } catch {
      return null;
    }
  });
}

export async function apiFetch<T = unknown>(path: string, opts: RequestInit = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(opts.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  console.log('API Fetch Headers:', headers);

  const res = await fetch(`${API_URL}${path}`, {
    credentials: 'omit', // omit cookies when using header flow
    headers,
    ...opts,
  });



    if (!res.ok) {
    const body = await parseJsonSafe(res); // body: unknown | null
    const message =
        isErrorBody(body) && typeof body.message === 'string'
        ? body.message
        : res.statusText || 'Request failed';
    throw new ApiError(message, res.status, body);
    }

  // attempt to parse JSON, return null if no body
  const payload = await parseJsonSafe(res);
  return payload as T;
}
