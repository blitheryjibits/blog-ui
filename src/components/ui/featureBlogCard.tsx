 import { Card, CardHeader, CardContent } from "@/components/ui/card";

 interface BlogCardProps {
        title: string;
        excerpt: string;
        imageUrl: string;
        imageAlt?: string;
 }

 export default function FeatureBlogCard({ title, excerpt, imageUrl, imageAlt = "Blog post image" }: BlogCardProps) {
     return (
         <Card className="h-full">
             <CardHeader className="font-bold">{title}</CardHeader>
             <CardContent>
                 <img
                     src={imageUrl}
                     alt={imageAlt || "Blog post image"}
                     className="rounded-md w-full h-40 object-cover"
                 />
                 <p className="mt-2 text-sm text-muted-foreground">
                     {excerpt}
                 </p>
             </CardContent>
         </Card>
     );
}