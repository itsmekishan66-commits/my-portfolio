"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function NavbarLogo() {
  const [imageError, setImageError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="View profile photo"
        onClick={() => {
          if (!imageError) setLightboxOpen(true);
        }}
        className="flex items-center transition-opacity hover:opacity-80"
      >
        {imageError ? (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card font-mono text-xs font-medium tracking-tight text-foreground">
            KS
          </span>
        ) : (
          <Image
            src="/kishan shah.png"
            alt="Kishan Shah"
            width={60}
            height={60}
            priority
            onError={() => setImageError(true)}
            className="h-9 w-9 rounded-full border border-border object-cover"
          />
        )}
      </button>

      <ImageLightbox
        src="/kishan shah.png"
        alt="Kishan Shah"
        width={1086}
        height={1449}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
