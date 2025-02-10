import { Navbar } from "@/components/navbar"
import { SearchResults } from "@/components/search-results"
import { Footer } from "@/components/footer"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <SearchResults searchQuery={searchParams.q} />
      </main>
      <Footer />
    </div>
  )
}

