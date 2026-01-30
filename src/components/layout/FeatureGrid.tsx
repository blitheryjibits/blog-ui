// design a grid layout with a large card on left and two smaller stacked cards on the right
import FeatureBlogCard from "../ui/featureBlogCard";
import SmallBlogCard from "../ui/smallBlogCard";
import type { Post } from "@/api/types";

interface FeatureGridProps {
    blog1: Post
    blog2: Post
    blog3: Post
    featureBlog: 1 | 2 | 3   // flag to indicate which blog is the main feature
}

export default function FeatureGrid({ blog1, blog2, blog3, featureBlog }: FeatureGridProps) {
  // Put blogs into an array for easier manipulation
  const blogs = [blog1, blog2, blog3]

  // Pick the feature blog based on the flag
  const feature = blogs[featureBlog - 1] || blogs[0]

  // The rest are small blogs
  const smallBlogs = blogs.filter((_, idx) => idx !== featureBlog - 1)

  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-0 md:gap-x-4 min-w-[200px]">
      {/* Left: Feature blog card */}
      <div className="col-span-1 row-span-2">
        <FeatureBlogCard
          id={feature.id}
          title={feature.title}
          excerpt={feature.excerpt}
          imgUrl={feature.imgUrl}
          imgAlt={feature.imgAlt || "Feature blog image"}
        />
      </div>

      {/* Right: Two stacked small blog cards */}
      <div className="grid grid-rows-2 col-span-1 gap-4">
        {smallBlogs.map((blog) => (
          <SmallBlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            imgUrl={blog.imgUrl}
            imgAlt={blog.imgAlt || "Small blog image"}
          />
        ))}
      </div>
    </div>
  )
}
