
export type Post = {
  id: string;
  title: string;
  content?: string | null;
  excerpt?: string | null;
  imgUrl: string;
  imgAlt?: string | null;
  slug?: string | null;
  body?: string | null;
  publishedAt?: string | null;
  authorId?: string | null;
  // add other fields you use from API
};

// Used for carousel cards
 export interface CarouselCardProps extends Partial<Post> {
        isActive?: boolean;
        isAdjacent?: boolean;
 }

export type CreatePostDto = {
  title: string;
  body: string;
  // other fields for creating a post
};

export type User = {
  id: string;
  email: string;
  name?: string | null;
  // other user fields returned by API
};

export type SignInDto = {
  email: string;
  password: string;
};

// Allows error type to contain status
export interface ApiError extends Error {
  status?: number;
}

