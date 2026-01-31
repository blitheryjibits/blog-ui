 import { Card, CardHeader, CardContent } from "@/components/ui/card";
 import type { Post } from "@/api/types";

 export default function FeatureBlogCard({ id, title, excerpt, imgUrl, imgAlt = "Blog post image" }: Post) {
     return (
         <Card className="h-full"
            key={id}>
             <CardHeader className="font-bold">{title}</CardHeader>
             <CardContent>
                 <img
                     src={imgUrl}
                     alt={imgAlt || "Blog post image"}
                     className="rounded-md w-full h-40 object-cover"
                 />
                 <p className="mt-2 text-sm text-muted-foreground">
                     {excerpt}
                 </p>
             </CardContent>
         </Card>
     );
}