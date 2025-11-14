import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FeatureGrid from "@/components/layout/FeatureGrid";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import { BlogPostCarousel } from "@/components/ui/blogPostCarousel";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <Hero />
        

        {/* Featured Posts */}
        
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
          <FeatureGrid
        // Placeholder blog data
          blog1={blogPosts.blog1}
          blog2={blogPosts.blog2}
          blog3={blogPosts.blog3}
          featureBlog={1}
          // End placeholder data
        />
        </section>

        <section className="py-12 px-4 max-w-6xl mx-auto">
          {/* Carousel */}
          <BlogPostCarousel posts={[blogPosts.blog1, blogPosts.blog2, blogPosts.blog3, blogPosts.blog1, blogPosts.blog2, blogPosts.blog3]} />
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
      </main>

      <Footer />
    </div>
  );
}


const blogPosts = {
  blog1: {
    title: "Blog Post 1",
    excerpt: "This is a short excerpt from blog post 1.",
    imageUrl: "/images/technology.jpeg",
    imageAlt: "Blog Post 1 Image",
  },
  blog2: {
    title: "Blog Post 2",
    excerpt: "This is a short excerpt from blog post 2.",
    imageUrl: "/images/technology.jpeg",
    imageAlt: "Blog Post 2 Image",
  },
  blog3: {
    title: "Blog Post 3",
    excerpt: "This is a short excerpt from blog post 3.",
    imageUrl: "/images/technology.jpeg",
    imageAlt: "Blog Post 3 Image",
  },
}