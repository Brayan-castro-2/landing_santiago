"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export interface StackedCardItem {
  image: string;
  title: string;
  description: string;
  videoUrl?: string;
  embedUrl?: string;
  views?: string;
}

export interface StackedCardsInteractionProps {
  cards: StackedCardItem[];
  className?: string;
  onCardClick?: (card: StackedCardItem, index: number) => void;
}

export function StackedCardsInteraction({
  cards,
  className,
  onCardClick,
}: StackedCardsInteractionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative w-full max-w-sm h-96 flex items-center justify-center cursor-pointer select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card, index) => {
        const offset = (index - activeIndex + cards.length) % cards.length;
        const isTop = offset === 0;

        return (
          <motion.div
            key={index}
            className={cn(
              "absolute inset-0 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900",
              isTop ? "z-30 cursor-pointer" : "z-10"
            )}
            animate={{
              scale: isTop ? 1 : isHovered ? 0.95 - offset * 0.05 : 0.92 - offset * 0.04,
              y: isTop ? 0 : isHovered ? offset * 22 : offset * 12,
              rotate: isTop ? 0 : isHovered ? (offset % 2 === 0 ? offset * 4 : -offset * 4) : 0,
              opacity: offset > 2 ? 0 : 1 - offset * 0.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={() => {
              if (isTop && onCardClick) {
                onCardClick(card, index);
              } else {
                setActiveIndex(index);
              }
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            {card.views && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold backdrop-blur-md flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-white" />
                <span>{card.views}</span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
                Video {index + 1} de {cards.length}
              </span>
              <h3 className="text-lg font-bold leading-snug">{card.title}</h3>
              <p className="text-xs text-zinc-300 line-clamp-1">{card.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default StackedCardsInteraction;
