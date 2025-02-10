import { useEffect, useRef } from "react";

export function ContinuousVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.error("Autoplay failed:", err));
    }
  }, []);

  return (
    <section className="w-full bg-gray-100">
      <div className="relative w-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-auto" // Full width, auto height based on aspect ratio
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
