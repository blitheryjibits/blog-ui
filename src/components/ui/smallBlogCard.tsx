 import { Card, CardHeader, CardContent } from "@/components/ui/card";
 import type { Post } from "@/api/types";

 export default function SmallBlogCard({ id, title, excerpt, imgUrl, imgAlt = "Blog post image" }: Post) {
     return (
         <Card className="h-full"
            key={id}>
             <CardContent className="flex gap-4">
                <img
                    src={imgUrl}
                    alt={imgAlt || "Blog post image"}
                    className="rounded-md border w-32 h-32 object-cover"
                />
                <div className="flex flex-col">
                    <CardHeader className="p-0 font-semibold text-lg">
                        {title}
                    </CardHeader>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {excerpt}
                    </p>
                </div>
             </CardContent>
         </Card>
     );
}