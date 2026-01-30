// src/api/endpoints/posts.ts
import { apiFetch } from '@/api/client';
import type { Post, CreatePostDto } from '@/api/types';

const ROOT = '/api/posts';

export const postsApi = {
  getAll: async (): Promise<Post[]> => {
    return apiFetch<Post[]>(`${ROOT}`);
  },

  getById: async (id: string): Promise<Post> => {
    return apiFetch<Post>(`${ROOT}/${encodeURIComponent(id)}`);
  },

  create: async (payload: CreatePostDto): Promise<Post> => {
    return apiFetch<Post>(`${ROOT}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  update: async (id: string, payload: Partial<CreatePostDto>): Promise<Post> => {
    return apiFetch<Post>(`${ROOT}/${encodeURIComponent(id)}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  remove: async (id: string): Promise<void> => {
    await apiFetch<void>(`${ROOT}/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },
};
