"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroVideoProps {
  onVideoEnd: () => void;
}

export function IntroVideo({ onVideoEnd }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Controls video visibility

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    setIsPlaying(false); // Triggers fade-out
    setTimeout(onVideoEnd, 300); // Ensures smooth transition to main page
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          className="fixed inset-0 bg-blue-700 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            playsInline
            muted
            autoPlay
            preload="auto"
          >
            <source src="/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
