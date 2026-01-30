  "use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import CarouselCard from "@/components/ui/carouselCard"
import { mapPostToCarouselCard } from "@/assets/carouselCardMapper"
import type { Post } from "@/api/types";

interface BlogPostCarouselProps { posts: Post[]; }

export function BlogPostCarousel( { posts }: BlogPostCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const mappedPosts = posts.map(mapPostToCarouselCard);

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel 
        setApi={setApi} 
        opts={{ align: "center", loop: true }}
        className="max-w-2xl mx-auto px-4">
      <CarouselContent>
        {mappedPosts.map((item, index) => {
          // distance from center
          const distance = Math.abs(current - index)
          return (
            <CarouselItem key={index} className={`basis-1/3 flex justify-center`}>
              < CarouselCard {...item} isActive={distance === 0} isAdjacent={distance === 1} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
