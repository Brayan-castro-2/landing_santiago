"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  icon?: React.ReactNode;
  linkHref?: string;
  tag?: string;
}

export interface ExpandingCardsProps {
  items: CardItem[];
  defaultActiveIndex?: number;
  className?: string;
}

export function ExpandingCards({
  items,
  defaultActiveIndex = 0,
  className,
}: ExpandingCardsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className={cn("flex flex-col md:flex-row gap-4 w-full h-[520px] max-w-6xl mx-auto", className)}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            className={cn(
              "relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              isActive ? "md:flex-[3.5] flex-[3]" : "md:flex-[0.8] flex-[1] opacity-75 hover:opacity-100"
            )}
            layout
          >
            {/* Background Image */}
            <img
              src={item.imgSrc}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                isActive
                  ? "bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                  : "bg-black/60 hover:bg-black/40"
              )}
            />

            {/* Icon Top */}
            {item.icon && (
              <div className="absolute top-5 left-5 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-10 shadow-lg">
                {item.icon}
              </div>
            )}

            {/* Content Bottom */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              {item.tag && isActive && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/90 backdrop-blur-md mb-2 text-white">
                  {item.tag}
                </span>
              )}

              <h3 className={cn(
                "font-extrabold tracking-tight transition-all duration-300",
                isActive ? "text-2xl md:text-3xl mb-2" : "text-lg md:text-xl md:[writing-mode:vertical-lr] md:rotate-180 md:bottom-6 md:left-5"
              )}>
                {item.title}
              </h3>

              {isActive && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="text-sm text-zinc-200 line-clamp-2 max-w-lg leading-relaxed"
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ExpandingCards;
