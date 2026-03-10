"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <div className="relative z-20 flex flex-col items-center gap-4 px-4">
        <h1
          className={cn(
            "bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl lg:text-7xl"
          )}
        >
          Kenrick Loh
        </h1>
        <p className="max-w-lg text-center text-lg text-neutral-300 md:text-xl">
          Business & Data Analyst Driving Strategic Insights
        </p>
        <p className="text-sm text-neutral-500">Based in Singapore</p>
      </div>
    </div>
  );
}
