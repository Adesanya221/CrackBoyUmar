"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Artwork = {
  id: number;
  title: string;
  image: string;
  inspiration: string;
  span: string;
};

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Vinyl Soul",
    image: "/artworks/vinyl-soul.jpg",
    inspiration:
      "A love letter to the golden age of music. The turntable sits like an altar, surrounded by stacked vinyl and warm speakers. It captures the ritual of pressing play, the crackle before the first note, and the sacred space where sound becomes feeling.",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Looking Up",
    image: "/artworks/looking-up.jpg",
    inspiration:
      "Silhouettes gathered at the mouth of something vast, gazing upward at a sliver of open sky. It speaks to the idea of breaking free, finding light in confined spaces, and the courage it takes to look up when everything around you feels like walls.",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "The Gathering",
    image: "/artworks/the-gathering.jpg",
    inspiration:
      "Rooted in tradition and community. Figures in white garments and green and gold caps sit together in quiet reverence. One face turns to meet the viewer, a reminder that culture lives in the people who carry it, not just the stories told about them.",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "The Race",
    image: "/artworks/the-race.jpg",
    inspiration:
      "Raw determination on canvas. A man charges forward under a stormy sky while a crowd watches from the sidelines. This piece is about the hunger to prove yourself, running not from something, but toward everything you were told you could never reach.",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    title: "Two Worlds",
    image: "/artworks/two-worlds.jpg",
    inspiration:
      "A diptych of two faces, one blue and one warm, both wide eyed and watching. It reflects the duality of everyday life: the quiet side and the loud side, the boy and the girl, the home and the street. Two stories painted side by side, connected but different.",
    span: "col-span-2 sm:col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Still Night",
    image: "/artworks/still-night.jpg",
    inspiration:
      "Deep blue drowns the frame as a figure rests beneath a white pillow, hands heavy at their sides. It is about the exhaustion behind the hustle, the nights where you crash hard, dreaming of what comes next. Peace and pressure living in the same breath.",
    span: "col-span-1 row-span-1",
  },
];

export default function ArtworkGallery() {
  const [selected, setSelected] = useState<Artwork | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[260px] gap-3 sm:gap-4">
        {artworks.map((art) => (
          <button
            key={art.id}
            onClick={() => setSelected(art)}
            className={`group relative rounded-xl overflow-hidden bg-card border border-card-border cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200 ${art.span}`}
          >
            <img
              src={art.image}
              alt={art.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 sm:p-4">
              <span className="text-white text-sm sm:text-base font-semibold drop-shadow-lg">
                {art.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-card-border p-5 sm:p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-card transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>

              {/* Artwork image */}
              <div className="w-full rounded-xl overflow-hidden bg-card border border-card-border mb-5">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {selected.title}
              </h3>
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-purple-500 dark:text-purple-400">
                  The Story Behind It
                </p>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {selected.inspiration}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
