'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

export interface StickyScrollProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  images?: {
    leftColumn?: string[];
    centerSticky?: string[];
    rightColumn?: string[];
  };
}

const defaultImages = {
  leftColumn: [
    'https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=600&auto=format&fit=crop&q=80',
  ],
  centerSticky: [
    'https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1476180814856-a36609db0493?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=600&auto=format&fit=crop&q=80',
  ],
  rightColumn: [
    'https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=600&auto=format&fit=crop&q=80',
  ],
};

const StickyScrollGallery = forwardRef<HTMLElement, StickyScrollProps>(
  ({ title, subtitle, images = defaultImages, className, ...props }, ref) => {
    const leftImages = images?.leftColumn || defaultImages.leftColumn;
    const centerImages = images?.centerSticky || defaultImages.centerSticky;
    const rightImages = images?.rightColumn || defaultImages.rightColumn;

    return (
      <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
        <main
          className={`bg-slate-950 text-white min-h-screen relative w-full ${className || ''}`}
          ref={ref}
          {...props}
        >
          {/* Header Sticky Intro Section */}
          <div className="w-full">
            <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 z-0">
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 px-6 max-w-5xl mx-auto text-center space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Interactive Gallery
                </span>
                <h1 className="2xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-bold tracking-tight leading-[115%]">
                  {title || (
                    <>
                      Create Gallery In a Better Way
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                        Using CSS Sticky Properties
                      </span>
                    </>
                  )}
                </h1>
                <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                  {subtitle || 'Scroll down to explore the multi-column gallery interaction with sticky focal showcase.'}
                </p>
              </div>
            </section>
          </div>

          {/* 3-Column Sticky Grid Gallery */}
          <section className="text-white w-full bg-slate-950 relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Left Column (Continuous Flow) */}
              <div className="grid gap-4 col-span-1 md:col-span-4">
                {leftImages.map((src, idx) => (
                  <figure key={`left-${idx}`} className="w-full overflow-hidden rounded-xl group border border-slate-800 bg-slate-900">
                    <img
                      src={src}
                      alt={`Gallery showcase item ${idx + 1}`}
                      loading="lazy"
                      className="transition-transform duration-500 ease-out group-hover:scale-105 w-full h-80 sm:h-96 align-bottom object-cover rounded-xl"
                    />
                  </figure>
                ))}
              </div>

              {/* Center Column (Sticky Focal Stack) */}
              <div className="md:sticky md:top-6 h-auto md:h-screen w-full col-span-1 md:col-span-4 gap-4 grid grid-cols-1 md:grid-rows-3 my-4 md:my-0">
                {centerImages.map((src, idx) => (
                  <figure key={`center-${idx}`} className="w-full h-80 sm:h-full overflow-hidden rounded-xl group border border-emerald-500/30 bg-slate-900 shadow-lg shadow-emerald-500/5">
                    <img
                      src={src}
                      alt={`Featured focal project ${idx + 1}`}
                      loading="lazy"
                      className="transition-transform duration-500 ease-out group-hover:scale-105 h-full w-full align-bottom object-cover rounded-xl"
                    />
                  </figure>
                ))}
              </div>

              {/* Right Column (Continuous Flow) */}
              <div className="grid gap-4 col-span-1 md:col-span-4">
                {rightImages.map((src, idx) => (
                  <figure key={`right-${idx}`} className="w-full overflow-hidden rounded-xl group border border-slate-800 bg-slate-900">
                    <img
                      src={src}
                      alt={`Gallery showcase item ${idx + 6}`}
                      loading="lazy"
                      className="transition-transform duration-500 ease-out group-hover:scale-105 w-full h-80 sm:h-96 align-bottom object-cover rounded-xl"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Section Footer */}
          <footer className="group bg-slate-950 relative overflow-hidden py-16 text-center border-t border-slate-900">
            <h2 className="text-[12vw] leading-[100%] uppercase font-extrabold text-center bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700 bg-clip-text text-transparent select-none">
              Audiovisual
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 h-24 max-w-md mx-auto mt-6 relative z-10 flex items-center justify-center text-sm font-medium text-slate-400 rounded-full backdrop-blur-md">
              End of Gallery Showcase
            </div>
          </footer>
        </main>
      </ReactLenis>
    );
  }
);

StickyScrollGallery.displayName = 'StickyScrollGallery';

export default StickyScrollGallery;
