"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface ReminderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const REMINDER_OPTIONS = [
  "Prior to half n hour of booked slot Booking this ground in 30 min",
  "Prior to half n hour of booked slot Booking this ground in 30 min",
  "Prior to half n hour of booked slot Booking this ground in 30 min",
  "Prior to half n hour of booked slot Booking this ground in 30 min",
] as const;

export function ReminderDialog({ open, onOpenChange }: ReminderDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Questions</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            {REMINDER_OPTIONS.map((option, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm text-left">
                  {option}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 space-y-4">
                    <p className="text-sm text-gray-600">
                      Additional details or settings for this reminder option
                      can go here.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-6 flex justify-center">
          <Button className="bg-[#0047BB] hover:bg-blue-800 px-8">
            Set reminder
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
