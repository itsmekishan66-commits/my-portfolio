"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  open: boolean;
  onClose: () => void;
};

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  open,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={onClose}
            className="absolute inset-0 cursor-zoom-out bg-background/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10"
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority
              className="max-h-[85vh] w-auto rounded-2xl border border-border object-contain shadow-2xl"
            />
          </motion.div>

          <button
            type="button"
            aria-label="Close image"
            onClick={onClose}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors hover:bg-card"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
