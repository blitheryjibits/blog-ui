 import { Card, CardHeader, CardContent } from "@/components/ui/card";

 export interface BlogCardProps {
        title: string;
        excerpt: string;
        imageUrl: string;
        imageAlt?: string;
 }

 export default function SmallBlogCard({ title, excerpt, imageUrl, imageAlt = "Blog post image" }: BlogCardProps) {
     return (
         <Card className="h-full">
             <CardContent className="flex gap-4">
                <img
                    src={imageUrl}
                    alt={imageAlt || "Blog post image"}
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