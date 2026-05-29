"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setDur = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setDur);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setDur);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    audioRef.current.currentTime = ratio * duration;
  };

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-4 mt-6">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0 hover:bg-gold-light transition-colors shadow-md"
        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-navy" />
        ) : (
          <Play className="w-5 h-5 text-navy ml-0.5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className="text-white font-manrope text-sm font-semibold mb-2 truncate">{title}</p>
        <div
          className="w-full bg-white/20 rounded-full h-1.5 cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="bg-gold h-1.5 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-white/50 font-manrope text-xs mt-1.5">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <Volume2 className="w-4 h-4 text-white/40 flex-shrink-0" />
    </div>
  );
}
