"use client";
import { Navbar } from "@/components/navbar";
import { HeroSearch } from "@/components/hero-search";
import { QuickAccess } from "@/components/quick-access";
import { DiscoverGrounds } from "@/components/discover-grounds";
import { LiveTournaments } from "@/components/live-tournaments";
import { LiveStreams } from "@/components/live-streams";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { BookingInterface } from "@/components/booking-interface";
import { useEffect, useState } from "react";
import { IntroVideo } from "@/components/intro-video";
import { ContinuousVideo } from "@/components/continuos-video";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!showIntro) {
      // Add a small delay before removing the intro component entirely
      const timer = setTimeout(() => setFadeOut(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };
  return (
    <div className="flex min-h-screen flex-col">
      {!fadeOut && (
        <div
          className={`transition-opacity duration-1000 ${
            showIntro ? "opacity-100" : "opacity-0"
          }`}
        >
          <IntroVideo onVideoEnd={handleVideoEnd} />
        </div>
      )}
      <div
        className={`transition-opacity duration-1000 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <HeroSearch />
          {/* <BookingInterface/> */}
          <QuickAccess />
          <DiscoverGrounds />
          <ContinuousVideo />
          <LiveTournaments />
          <LiveStreams />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  );
}
