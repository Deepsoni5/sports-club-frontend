"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const STREAMS = [
  {
    title: "World Cup Final",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    viewers: "1.2M",
  },
  {
    title: "Football Championship",
    image: "https://images.unsplash.com/photo-1628891890467-b79de82c7e44?auto=format&fit=crop&q=80",
    viewers: "15.3K",
  },
  {
    title: "Basketball League Finals",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80",
    viewers: "12.7K",
  },
  {
    title: "Tennis Grand Slam",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80",
    viewers: "10.1K",
  },
  {
    title: "Cricket World Cup",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80",
    viewers: "18.5K",
  },
]

export function LiveStreams() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="container py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6">View live streams</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {STREAMS.map((stream, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={stream.image || "/placeholder.svg"}
                        alt={stream.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-white text-center">
                          <h4 className="text-lg md:text-xl font-semibold mb-2">{stream.title}</h4>
                          <p className="text-sm md:text-base">Viewers: {stream.viewers}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

