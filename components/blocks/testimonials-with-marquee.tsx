import React from "react";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialItem {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  rating?: number;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  testimonials: TestimonialItem[];
  className?: string;
}

export function TestimonialsSection({
  title = "Lo que dicen mis clientes",
  subtitle = "Casos de Éxito Validados",
  description = "Marcas que multiplicaron su alcance y ventas con estrategias de contenido y performance.",
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("py-24 overflow-hidden bg-[#F2F0EC]/60 relative", className)}>
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        {subtitle && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 px-3.5 py-1 rounded-full mb-3">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 py-4 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[380px] shrink-0 p-6 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {"★".repeat(t.rating || 5)}
              </div>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6 whitespace-normal italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.author.avatar}
                  alt={t.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/20"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-zinc-900 leading-tight">
                    {t.author.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium">
                    {t.author.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
