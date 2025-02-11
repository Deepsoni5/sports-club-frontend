"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Youtube,
  Instagram,
  Twitch,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const STREAMS = [
  {
    title: "World Cup Final",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    viewers: "1.2M",
    platform: "youtube",
  },
  {
    title: "Football Championship",
    image:
      "https://images.unsplash.com/photo-1628891890467-b79de82c7e44?auto=format&fit=crop&q=80",
    viewers: "15.3K",
    platform: "instagram",
  },
  {
    title: "Basketball League Finals",
    image:
      "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80",
    viewers: "12.7K",
    platform: "twitch",
  },
  {
    title: "Tennis Grand Slam",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80",
    viewers: "10.1K",
    platform: "youtube",
  },
  {
    title: "Cricket World Cup",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80",
    viewers: "18.5K",
    platform: "instagram",
  },
] as const;

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "youtube":
      return <Youtube className="h-16 w-16 md:h-20 md:w-20 text-[#FF0000]" />;
    case "instagram":
      return (
        <div className="relative">
          <Instagram
            className="h-16 w-16 md:h-20 md:w-20 text-white"
            style={{
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
              borderRadius: "20%",
            }}
          />
        </div>
      );
    case "twitch":
      return <Twitch className="h-16 w-16 md:h-20 md:w-20 text-[#6441A5]" />;
    default:
      return null;
  }
};

export function LiveStreams() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const autoplay = useCallback(() => {
    if (emblaApi) {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(autoplay, 5000);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);

  return (
    <section className="container py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6">View live streams</h2>
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <Button
          size="icon"
          variant="outline"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="flex-shrink-0 bg-white hover:bg-gray-100 z-10 h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
        <div
          className="relative max-w-3xl w-full overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {STREAMS.map((stream, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 px-4 relative"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/10] sm:aspect-video">
                      <Image
                        src={stream.image || "/placeholder.svg"}
                        alt={stream.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <PlatformIcon platform={stream.platform} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <div className="text-white">
                          <h4 className="text-base md:text-xl font-semibold mb-2">
                            {stream.title}
                          </h4>
                          <p className="text-sm md:text-base">
                            Viewers: {stream.viewers}
                          </p>
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
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="flex-shrink-0 bg-white hover:bg-gray-100 z-10 h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </div>
    </section>
  );
}
