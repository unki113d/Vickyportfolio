"use client";

import Image from "next/image";
import { useRef } from "react";

type GalleryImage = { src: string; alt: string };

export default function ProjectCarousel({
  title,
  images,
}: {
  title: string;
  images: readonly GalleryImage[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth * direction, behavior: "smooth" });
  };

  return (
    <section className="project-carousel" role="region" aria-roledescription="carousel" aria-label={`${title} gallery`}>
      <div
        className="project-carousel-track"
        ref={trackRef}
        tabIndex={0}
        aria-label={`Artwork for ${title}. Use the left and right arrow keys to browse.`}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        {images.map((image) => (
          <div className="project-carousel-slide" key={image.src}>
            <Image src={image.src} alt={image.alt} fill unoptimized sizes="(max-width: 850px) 92vw, 58vw" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="project-carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${title} image`}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${title} image`}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </section>
  );
}
