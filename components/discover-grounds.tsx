"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { ReminderDialog } from "./reminder-dialog";
import { useState } from "react";

const GROUNDS = [
  {
    name: "Local Stadium",
    location: "City Center",
    image: "/discover_local.jpg",
  },
  {
    name: "Sports Complex",
    location: "Downtown",
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80",
  },
  {
    name: "Community Field",
    location: "Suburb Area",
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80",
  },
];

export function DiscoverGrounds() {
  const [reminderOpen, setReminderOpen] = useState(false);
  const [activeGround, setActiveGround] = useState<string | null>(null);
  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Discover Grounds</h2>
        <Button variant="link" className="text-blue-600">
          View all
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GROUNDS.map((ground) => (
          <Card key={ground.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src={ground.image || "/placeholder.svg"}
                  alt={ground.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{ground.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{ground.location}</p>
                <div className="flex items-center gap-2">
                  <Button className="flex-1 bg-[#0047BB] hover:bg-blue-800">
                    Book Now
                  </Button>
                  <div
                    className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => {
                      setActiveGround(ground.name);
                      setReminderOpen(true);
                    }}
                  >
                    <Clock className="h-5 w-5 text-[#0047BB]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ReminderDialog open={reminderOpen} onOpenChange={setReminderOpen} />
    </section>
  );
}
