import { Button } from "@/components/ui/button"
import { VenueCard } from "./venue-card"
import { SlidersHorizontal } from "lucide-react"

const VENUES = [
  {
    name: "Eden Gardens",
    image: "/placeholder.svg?height=300&width=400",
    organizer: "BCCI",
  },
  {
    name: "Eden Gardens",
    image: "/placeholder.svg?height=300&width=400",
    organizer: "BCCI",
  },
  {
    name: "Eden Gardens",
    image: "/placeholder.svg?height=300&width=400",
    organizer: "BCCI",
  },
  {
    name: "Eden Gardens",
    image: "/placeholder.svg?height=300&width=400",
    organizer: "BCCI",
  },
  {
    name: "Eden Gardens",
    image: "/placeholder.svg?height=300&width=400",
    organizer: "BCCI",
  },
  {
    name: "Eden Gardens",
    image: "/placeholder.svg?height=300&width=400",
    organizer: "BCCI",
  },
] as const

interface SearchResultsProps {
  searchQuery?: string
}

export function SearchResults({ searchQuery }: SearchResultsProps) {
  return (
    <section className="container px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Your search results</h1>
          {searchQuery && <p className="text-muted-foreground mt-1">Showing results for "{searchQuery}"</p>}
        </div>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Edit Filter
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VENUES.map((venue, index) => (
          <VenueCard key={index} name={venue.name} image={venue.image} organizer={venue.organizer} />
        ))}
      </div>
    </section>
  )
}

