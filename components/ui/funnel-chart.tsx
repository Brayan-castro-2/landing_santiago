"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FunnelStage {
  label: string;
  value: number;
  displayValue: string;
  subLabel?: string;
  color?: string;
}

export interface FunnelChartProps {
  data: FunnelStage[];
  color?: string;
  layers?: number;
  grid?: boolean;
  className?: string;
}

export function FunnelChart({
  data,
  color = "#10B981",
  grid = true,
  className,
}: FunnelChartProps) {
  const maxValue = data[0]?.value || 1;

  return (
    <div className={cn("w-full py-8 relative", className)}>
      <div className="flex flex-col gap-3.5 max-w-2xl mx-auto">
        {data.map((stage, index) => {
          const widthPercent = Math.max(28, (stage.value / maxValue) * 100);
          const dropOff = index > 0 
            ? Math.round((stage.value / (data[index - 1].value || 1)) * 100)
            : 100;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scaleX: 0.85 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex items-center justify-between gap-4"
            >
              {/* Left Label */}
              <div className="w-32 text-right">
                <span className="text-xs sm:text-sm font-bold text-zinc-900 block leading-tight">
                  {stage.label}
                </span>
                {stage.subLabel && (
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {stage.subLabel}
                  </span>
                )}
              </div>

              {/* Center Funnel Bar */}
              <div className="flex-1 flex justify-center">
                <div
                  style={{ width: `${widthPercent}%` }}
                  className="h-12 sm:h-14 rounded-2xl relative overflow-hidden flex items-center justify-between px-4 text-white shadow-md transition-all duration-500 hover:scale-[1.02]"
                >
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      background: `linear-gradient(135deg, ${color}, #047857)`,
                    }}
                  />
                  
                  {/* Shimmer Light */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60 pointer-events-none" />

                  <span className="relative z-10 text-xs sm:text-sm font-semibold tracking-wide">
                    Paso {index + 1}
                  </span>

                  <span className="relative z-10 font-extrabold text-sm sm:text-base font-mono">
                    {stage.displayValue}
                  </span>
                </div>
              </div>

              {/* Right Conversion Rate */}
              <div className="w-16 text-left">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100/90 px-2 py-0.5 rounded-full inline-block">
                  {dropOff}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default FunnelChart;
