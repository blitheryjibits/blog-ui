"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { BlogCardProps } from "./smallBlogCard"
import FeatureBlogCard from "./featureBlogCard"

interface BlogCarouselProps {
    posts: BlogCardProps[];
}
export function BlogPostCarousel( { posts }: BlogCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const items = posts.map((post) => FeatureBlogCard(post as BlogCardProps))

  return (
    <Carousel 
        setApi={setApi} 
        opts={{ align: "center", loop: true }}
        className="max-w-2xl mx-auto px-4">
      <CarouselContent>
        {items.map((item, index) => {
          // distance from center
          const distance = Math.abs(current - index)

          // style and transition variables
          let scaleY = "scale-y-75"
          let opacity = "opacity-30"
          let scaleX = "scale-x-75"
          if (distance === 0) {
            scaleY = "scale-y-100"
            opacity = "opacity-100"
            scaleX = "scale-x-130"
          } else if (distance === 1) {
            scaleY = "scale-y-90"
            opacity = "opacity-50"
            scaleX = "scale-x-90"
          }
          
          return (
            <CarouselItem key={index} className={`basis-1/3 flex justify-center`}>
              <Card
                className={`transition-all duration-500 ease-in-out transform-gpu ${scaleX} ${scaleY} ${opacity}`}
              >
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">{item}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
