"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type React from "react";
import { useState } from "react";

export function HeroSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative h-[300px] md:h-[400px] w-full">
      <div className="absolute inset-0">
        <img
          src="/heroimage.jpg"
          alt="Hero background"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-6">
          Book Your Game, Own the Field!
        </h1>
        <form
          onSubmit={handleSearch}
          className="w-full max-w-md flex flex-col sm:flex-row"
        >
          <Input
            placeholder="Search your favorite sport..."
            className="border-0 focus-visible:ring-0 rounded-b-none sm:rounded-r-none sm:rounded-l-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded-t-none sm:rounded-l-none sm:rounded-r-md mt-2 sm:mt-0"
            disabled={!searchQuery.trim()}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
