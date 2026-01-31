import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FeatureGrid from "@/components/layout/FeatureGrid";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import { BlogPostCarousel } from "@/components/ui/blogPostCarousel";
import BlockGrid from "@/components/layout/BlockGrid";
import { apiFetch } from "@/api/client";
import type { Post } from "@/api/types";
import { useEffect, useState } from "react";
import Spinner from "@/components/ui/spinner";

export default function Landing() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await apiFetch<Post[]>('/api/posts/');
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      } 
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    posts?.map(post => {
      post.imgUrl = "/images/technology.jpeg" // temporary placeholder
      post.excerpt = post.content?.substring(0, 100) + "..." || "No excerpt available.";
      return post;
    })
  if (posts !== null) {
    console.log("Fetched posts:", posts);
  }
}, [posts]);
 

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <Hero />
        
        {loading ? (
          <Spinner />
        ) : ( 
        // Featured Posts
        <div>
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
          { posts && <FeatureGrid
            blog1={posts[0]}
            blog2={posts[1]}
            blog3={posts[2]}
            featureBlog={1}
            /> 
          }
        </section>

        <section className="py-12 px-4 max-w-6xl mx-auto">
          {/* Carousel */}
          {posts && <BlogPostCarousel posts={posts} />}
        </section>

        <section className="py-12 px-4 max-w-6xl mx-auto">
          {posts && <BlockGrid posts={posts} /> }
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest posts.
            </p>
            <div className="flex gap-2 justify-center">
              <Input placeholder="Your email" className="max-w-sm" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
        </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


// const blogPosts = {
//   blog1: {
//     id: '1',
//     title: "Blog Post 1",
//     excerpt: "This is a short excerpt from blog post 1.",
//     imgUrl: "/images/technology.jpeg",
//     imgAlt: "Blog Post 1 Image",
//   },
//   blog2: {
//     id: '2',
//     title: "Blog Post 2",
//     excerpt: "This is a short excerpt from blog post 2.",
//     imgUrl: "/images/technology.jpeg",
//     imgAlt: "Blog Post 2 Image",
//   },
//   blog3: {
//     id: '3',
//     title: "Blog Post 3",
//     excerpt: "This is a short excerpt from blog post 3.",
//     imgUrl: "/images/technology.jpeg",
//     imgAlt: "Blog Post 3 Image",
//   },
// }