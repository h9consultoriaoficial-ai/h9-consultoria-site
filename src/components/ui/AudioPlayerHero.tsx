"use client";

import { useState, useRef, useEffect } from "react";

export function AudioPlayerHero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((p) => !p);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const formatTime = (t: number) => {
    if (!isFinite(t) || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <style>{`
        .audio-hero-btn {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .audio-hero-btn:hover {
          opacity: 0.85;
          transform: scale(1.05);
        }
      `}</style>

      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "28px 24px",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <audio ref={audioRef} src="/audio/espera-voz-pai.mpeg" preload="metadata" />

        {/* Ícone de música */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "32px", height: "32px", color: "#C9A84C" }}
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>

        {/* Título */}
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "4px",
            fontFamily: "var(--font-manrope)",
          }}
        >
          Espera — Voz do Pai
        </p>

        {/* Subtítulo */}
        <p
          style={{
            color: "#C9A84C",
            textAlign: "center",
            fontSize: "0.85rem",
            marginBottom: "24px",
            fontFamily: "var(--font-manrope)",
          }}
        >
          Heverton Marques
        </p>

        {/* Barra de progresso */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            height: "4px",
            borderRadius: "2px",
            cursor: "pointer",
            marginBottom: "8px",
          }}
          onClick={handleSeek}
          role="slider"
          aria-label="Progresso"
          aria-valuenow={Math.round(progress)}
        >
          <div
            style={{
              background: "#C9A84C",
              height: "4px",
              borderRadius: "2px",
              width: `${progress}%`,
              transition: "width 0.1s linear",
            }}
          />
        </div>

        {/* Tempo */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.75rem",
            marginBottom: "24px",
            fontFamily: "var(--font-manrope)",
          }}
        >
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Botão play/pause */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            className="audio-hero-btn"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#C9A84C",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="white" style={{ width: "22px", height: "22px" }}>
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white" style={{ width: "22px", height: "22px", marginLeft: "3px" }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
