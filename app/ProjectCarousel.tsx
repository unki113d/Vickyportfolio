"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string };

export default function ProjectCarousel({
  title,
  images,
}: {
  title: string;
  images: readonly GalleryImage[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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
          <div
            className="project-carousel-slide"
            key={image.src}
            role="button"
            tabIndex={0}
            aria-label={`Open ${image.alt} full screen`}
            onClick={() => setSelectedImage(image)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedImage(image);
              }
            }}
          >
            <Image src={image.src} alt={image.alt} fill unoptimized sizes="(max-width: 850px) 92vw, 58vw" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="project-carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${title} image`}>
            <span aria-hidden="true">←︎</span>
          </button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${title} image`}>
            <span aria-hidden="true">→︎</span>
          </button>
        </div>
      )}
      {selectedImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${title} full screen preview`} onClick={() => setSelectedImage(null)}>
          <button className="image-lightbox-close" type="button" aria-label="Close full screen preview" onClick={() => setSelectedImage(null)}>×</button>
          <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage.src} alt={selectedImage.alt} fill unoptimized sizes="100vw" />
          </div>
        </div>
      )}
    </section>
  );
}
