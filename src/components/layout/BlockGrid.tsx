import FeatureBlogCard from "../ui/featureBlogCard";
import type { Post } from "@/api/types";

export default function BlockGrid({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-y-0 md:gap-x-4 min-w-[200px]">
            {posts.map(((post) => {
                return (<FeatureBlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    imgUrl={post.imgUrl}
                    imgAlt={post.imgAlt || "Feature blog image"}
                />
            )}))}
        </div>
    )
}