"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const SPORTS = ["Football", "Cricket", "Hockey", "Hockey", "Hockey"] as const

const TIME_SLOTS = ["9AM - 12PM", "12PM - 3PM", "3PM - 6PM", "6PM - 9PM"] as const

const PRICE_RANGES = ["₹ 500 - 1000", "₹ 1000 - 1500", "₹ 1500 - 2000", "₹ 2000 - 2500"] as const

export function BookingInterface() {
  const [selectedSport, setSelectedSport] = useState<string>("Football")
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)

  return (
    <div className="container px-4 py-6 md:py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Sport</h2>

        {/* Sports Filter */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
          {SPORTS.map((sport) => (
            <Badge
              key={sport}
              variant="outline"
              className={cn(
                "px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-medium rounded-full cursor-pointer hover:bg-blue-50",
                selectedSport === sport && "bg-blue-600 text-white hover:bg-blue-700",
              )}
              onClick={() => setSelectedSport(sport)}
            >
              {sport}
              {selectedSport === sport && (
                <X
                  className="ml-1.5 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedSport("")
                  }}
                />
              )}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Calendar */}
          <div className="bg-white rounded-lg border p-2 md:p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="rounded-md"
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              classNames={{
                head_cell: "text-muted-foreground font-normal",
                cell: cn(
                  "h-8 w-8 md:h-9 md:w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-blue-600 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                ),
                day: cn("h-8 w-8 md:h-9 md:w-9 p-0 font-normal aria-selected:opacity-100"),
                day_selected:
                  "bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white",
                day_today: "bg-accent text-accent-foreground",
              }}
            />
          </div>

          {/* Time and Price Selection */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">
                {selectedDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h3>

              <h4 className="text-sm md:text-base font-medium mb-2">Timings</h4>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {TIME_SLOTS.map((time) => (
                  <Badge
                    key={time}
                    variant="outline"
                    className={cn(
                      "px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-medium rounded-full cursor-pointer hover:bg-blue-50",
                      selectedTime === time && "bg-blue-600 text-white hover:bg-blue-700",
                    )}
                    onClick={() => setSelectedTime(time === selectedTime ? null : time)}
                  >
                    {time}
                    {selectedTime === time && (
                      <X
                        className="ml-1.5 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedTime(null)
                        }}
                      />
                    )}
                  </Badge>
                ))}
              </div>

              <h4 className="text-sm md:text-base font-medium mb-2">Price</h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {PRICE_RANGES.map((price) => (
                  <Badge
                    key={price}
                    variant="outline"
                    className={cn(
                      "px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-medium rounded-full cursor-pointer hover:bg-blue-50",
                      selectedPrice === price && "bg-blue-600 text-white hover:bg-blue-700",
                    )}
                    onClick={() => setSelectedPrice(price === selectedPrice ? null : price)}
                  >
                    {price}
                    {selectedPrice === price && (
                      <X
                        className="ml-1.5 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedPrice(null)
                        }}
                      />
                    )}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 flex justify-end">
          <Button
            size="lg"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-base md:text-lg px-6 md:px-8"
          >
            Apply Filter
          </Button>
        </div>
      </div>
    </div>
  )
}

