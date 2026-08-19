'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export interface ParallaxHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  layer1Img?: string;
  layer2Img?: string;
  layer4Img?: string;
}

export function ParallaxComponent({
  title = "Santiago Cerda",
  subtitle = "Growth Marketing & Content Specialist",
  badge = "+29.5M Visualizaciones Generadas",
  layer1Img = "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp",
  layer2Img = "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp",
  layer4Img = "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp",
}: ParallaxHeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none",
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative overflow-hidden bg-black text-white" ref={parallaxRef}>
      <section className="parallax__header relative h-[120vh] w-full overflow-hidden flex items-center justify-center">
        <div className="parallax__visuals relative w-full h-full">
          <div className="parallax__black-line-overflow absolute inset-0 z-20 pointer-events-none" />
          
          <div data-parallax-layers className="parallax__layers relative w-full h-full flex items-center justify-center">
            {/* Layer 1: Sky / Deep Background */}
            <img
              src={layer1Img}
              loading="eager"
              width="1920"
              data-parallax-layer="1"
              alt="Deep background layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover will-change-transform scale-110"
            />

            {/* Layer 2: Midground Mountain / City */}
            <img
              src={layer2Img}
              loading="eager"
              width="1920"
              data-parallax-layer="2"
              alt="Midground layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover will-change-transform scale-105"
            />

            {/* Layer 3: Floating Typography & CTA */}
            <div
              data-parallax-layer="3"
              className="parallax__layer-title relative z-10 text-center px-4 max-w-4xl will-change-transform"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-6 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {badge}
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 max-w-xl mx-auto font-medium">
                {subtitle}
              </p>
            </div>

            {/* Layer 4: Foreground Overlay */}
            <img
              src={layer4Img}
              loading="eager"
              width="1920"
              data-parallax-layer="4"
              alt="Foreground layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover will-change-transform pointer-events-none"
            />
          </div>

          {/* Bottom Fade */}
          <div className="parallax__fade absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </div>
      </section>
    </div>
  );
}

export default ParallaxComponent;
