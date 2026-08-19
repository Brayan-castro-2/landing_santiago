"use client";

import ScrollMorphHero from "./scroll-morph-hero";

export default function Demo() {
    return (
        <div className="w-full h-[800px] border border-slate-200 rounded-2xl overflow-hidden relative shadow-sm">
            <ScrollMorphHero />
        </div>
    );
}

export { Demo as ScrollMorphHeroDemo };
