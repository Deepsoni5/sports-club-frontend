"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Snowflake } from "lucide-react";
import { ReminderDialog } from "./reminder-dialog";
import { useState } from "react";
interface VenueCardProps {
  name: string;
  image: string;
  organizer: string;
}

export function VenueCard({ name, image, organizer }: VenueCardProps) {
  const [reminderOpen, setReminderOpen] = useState(false);
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 bg-white rounded-full p-1.5">
            <Snowflake className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">by {organizer}</p>
          <div className="flex items-center gap-2">
            <Button className="flex-1 bg-[#0047BB] hover:bg-blue-800">
              Book Now
            </Button>
            <div
              className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setReminderOpen(true)}
            >
              <Clock className="h-5 w-5 text-[#0047BB]" />
            </div>
          </div>
        </div>
      </CardContent>
      <ReminderDialog open={reminderOpen} onOpenChange={setReminderOpen} />
    </Card>
  );
}
