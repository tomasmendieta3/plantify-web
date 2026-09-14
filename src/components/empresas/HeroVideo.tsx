"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [silenciado, setSilenciado] = useState(true);

  function alternarSonido() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setSilenciado(video.muted);
  }

  return (
    <div className="relative mx-auto aspect-9/16 w-full max-w-[280px] overflow-hidden rounded-2xl shadow-xl sm:max-w-[320px]">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={alternarSonido}
        aria-label={silenciado ? "Activar sonido" : "Silenciar"}
        className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        {silenciado ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
