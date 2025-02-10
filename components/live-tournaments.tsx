import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const TOURNAMENTS = [
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80",
];

export function LiveTournaments() {
  return (
    <section className="container py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        The Best Of Live Tournaments
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {TOURNAMENTS.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-32">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Tournament ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
