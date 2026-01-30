import type { Post, CarouselCardProps } from "@/api/types";

export function mapPostToCarouselCard(post: Post): CarouselCardProps {
  return {
    title: post.title,
    excerpt: post.excerpt ?? "",
    imgUrl: post.imgUrl,
    imgAlt: post.imgAlt ?? "Blog post image",
  };
}
