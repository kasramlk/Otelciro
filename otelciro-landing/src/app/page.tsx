"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const introTextRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Fade out intro text
    tl.to(introTextRef.current, { opacity: 0 }, 0);

    // Fade in finale sections
    const sections = document.querySelectorAll('.scene-section');
    tl.to(sections[0], { opacity: 1, duration: 1 }, "analysis_start")
      .to(sections[0], { opacity: 0, duration: 1 }, "analysis_end");

    tl.to(sections[1], { opacity: 1, duration: 1 }, "strategy_start")
      .to(sections[1], { opacity: 0, duration: 1 }, "strategy_end");

    tl.to(sections[2], { opacity: 1, duration: 1 }, "tiers_start")
      .to(sections[2], { opacity: 0, duration: 1 }, "tiers_end");

    tl.to(sections[3], { opacity: 1, duration: 1 }, "guarantee_start");
  }, []);

  return (
    <div className="page-wrapper w-full">
      <main className="w-screen h-screen bg-black text-white fixed top-0 left-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
          <Experience />
        </Canvas>
        <div
          ref={introTextRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center p-4">
            Your hotel deserves more than software.
          </h1>
          <p className="mt-8 text-lg animate-pulse">Scroll to Begin</p>
        </div>
      </main>
      {/* Add scrollable height */}
      <div className="h-[500vh]"></div>

      {/* Narrative Finale Sections */}
      <div className="scene-section absolute top-0 left-0 w-full h-screen flex items-center justify-start pointer-events-none opacity-0">
        <div className="text-left max-w-xl p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold">1. X-Ray Analysis</h2>
          <p className="mt-4 text-lg md:text-xl text-white/80">We dive deep into your past performance data, audit your current sales channels, and identify every hidden revenue opportunity.</p>
        </div>
      </div>
      <div className="scene-section absolute top-0 left-0 w-full h-screen flex items-center justify-end pointer-events-none opacity-0">
        <div className="text-left max-w-xl p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold">2. Custom Strategy</h2>
          <p className="mt-4 text-lg md:text-xl text-white/80">No generic solutions. We build a tailor-made sales and revenue plan that accounts for your hotel&apos;s unique capacity, seasonality, and goals.</p>
        </div>
      </div>
      <div className="scene-section absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none opacity-0">
        <div className="text-center max-w-4xl p-4">
          <h2 className="text-3xl md:text-6xl font-bold mb-8">Partnership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border border-white/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Revenue Starter</h3>
              <p className="text-white/80">For boutique & family hotels. Get a professional sales strategy and our free PMS to kickstart your growth.</p>
            </div>
            <div className="border-2 border-white p-6 rounded-lg relative">
              <span className="absolute -top-3 bg-white text-black px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
              <h3 className="text-2xl font-bold mb-2">Revenue Professional</h3>
              <p className="text-white/80">For mid-size hotels. The complete ecosystem, a dedicated account manager, and 24/7 support.</p>
            </div>
            <div className="border border-white/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Revenue Enterprise</h3>
              <p className="text-white/80">For large hotels & chains. A full sales department replacement with custom tools and priority support.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scene-section absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none opacity-0">
        <div className="text-center p-4">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">&quot;If we don&apos;t increase your revenue in 6 months, we work for free until we do.&quot;</h2>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-full text-md md:text-lg pointer-events-auto hover:bg-opacity-80 transition-colors">
            Start Your Revenue Partnership
          </button>
        </div>
      </div>
    </div>
  );
}