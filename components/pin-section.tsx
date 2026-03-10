"use client";
import { PinContainer } from "@/components/ui/3d-pin";

export default function PinSection() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-950 py-20 hidden md:flex">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Based in Singapore</h2>
        <p className="mx-auto mb-20 max-w-2xl text-neutral-400">Currently open to opportunities worldwide</p>
      </div>

      <div className="flex h-[40rem] w-full items-center justify-center">
        <PinContainer
          title="View on Google Maps"
          href="https://www.google.com/maps/place/Singapore/@1.3141703,103.7618492,12z"
        >
          <div className="flex h-[30rem] w-[30rem] basis-full flex-col p-6 tracking-tight text-slate-100/50">
            <h3 className="!m-0 max-w-xs !pb-2 text-xl font-bold text-slate-100">Singapore</h3>
            <div className="!m-0 !p-0 text-base font-normal">
              <span className="text-slate-500">The Lion City - Where innovation meets tradition</span>
            </div>
            <div className="mt-4 flex w-full flex-1 overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <img
                  src="/images/singapore-skyline.jpg"
                  alt="Singapore Skyline"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
                    <span className="text-sm text-white">1.3521° N, 103.8198° E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PinContainer>
      </div>
    </section>
  );
}
