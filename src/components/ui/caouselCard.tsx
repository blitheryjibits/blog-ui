 import { Card, CardHeader, CardContent } from "@/components/ui/card";

 export interface BlogCardProps {
        title: string;
        excerpt: string;
        imageUrl: string;
        imageAlt?: string;
        isActive?: boolean;
        isAdjacent?: boolean;
 }

 export default function CarouselCard({ title, excerpt, imageUrl, imageAlt = "Blog post image", isActive = false, isAdjacent = false }: BlogCardProps) {
     return (
         <Card className="h-full">
             <CardHeader className={` font-bold transition-transform duration-500 ease-in-out transform-gpu
                        ${isActive ? "opacity-0" : ""} : ${isAdjacent ? "opacity-60" : "opacity-80"}`}>{title}</CardHeader>
             <CardContent>
                 <img
                     src={imageUrl}
                     alt={imageAlt || "Blog post image"}
                     className={`rounded-md border w-full h-40 object-cover
                        transistion-transform duration-500 ease-in-out transform-gpu
                        ${isActive ? "scale-110 opacity-0" : ""} : ${isAdjacent ? "scale-90 opacity-60" : "scale-75 opacity-80"}`}
                 />
                 <p className="mt-2 text-sm text-muted-foreground">
                     {excerpt}
                 </p>
             </CardContent>
         </Card>
     );
}