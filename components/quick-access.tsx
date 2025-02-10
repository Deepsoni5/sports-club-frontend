"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const SPORTS = [
  {
    name: "Football",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80",
  },
  {
    name: "Cricket",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80",
  },
  {
    name: "Basketball",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80",
  },
  {
    name: "Tennis",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80",
  },
  {
    name: "Hockey",
    image:
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&q=80",
  },
  {
    name: "Baseball",
    image:
      "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80",
  },
] as const;

export function QuickAccess() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    const scroll = () => {
      if (!scrollContainer) return;
      if (scrollContainer.scrollLeft >= scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="container py-8">
      <div className="flex items-center gap-8">
        <div className="hidden lg:block min-w-[200px]">
          <h2 className="text-2xl font-bold">Play your favorite sport</h2>
        </div>
        <div className="relative flex-1 overflow-hidden" ref={scrollRef}>
          <div className="flex gap-4 w-[200%]">
            {[...SPORTS, ...SPORTS].map((sport, index) => (
              <div
                key={`${sport.name}-${index}`}
                className="flex-[0_0_200px] min-w-0 transition-opacity duration-200 hover:opacity-80"
              >
                <Card className="overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative h-32">
                      <Image
                        src={sport.image || "/placeholder.svg"}
                        alt={sport.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="p-2 text-sm font-medium text-center">
                      {sport.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
