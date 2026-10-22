"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = { src: string; alt: string; width: number; height: number };

export default function PersonalGallery({ images }: { images: readonly GalleryImage[] }) {
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

  return (
    <section className="personal-gallery" aria-label="Personal works gallery">
      <div className="personal-gallery-grid">
        {images.map((image) => (
          <button
            className="personal-gallery-item"
            key={image.src}
            type="button"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
            aria-label={`Open ${image.alt} full screen`}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.alt} fill unoptimized sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          </button>
        ))}
      </div>
      {selectedImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Personal work full screen preview" onClick={() => setSelectedImage(null)}>
          <button className="image-lightbox-close" type="button" aria-label="Close full screen preview" onClick={() => setSelectedImage(null)}>×</button>
          <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage.src} alt={selectedImage.alt} fill unoptimized sizes="100vw" />
          </div>
        </div>
      )}
    </section>
  );
}
