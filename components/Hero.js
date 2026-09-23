import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="container-shell mt-12 overflow-hidden bg-panel">
      <div className="grid min-h-[448px] items-center gap-10 px-8 py-14 md:grid-cols-[1fr_0.9fr] md:px-14 lg:px-14">
        <div className="max-w-[570px]">
          <p className="text-[11px] font-bold tracking-[0.22em] text-acid">WORKOUT LIBRARY</p>
          <h1 className="mt-5 font-display text-[clamp(2.7rem,6vw,3.75rem)] font-bold uppercase leading-[1.15] tracking-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="mt-6 max-w-[550px] text-sm leading-7 text-muted sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a href="#library" className="mt-8 inline-flex h-12 items-center gap-3 bg-acid px-6 text-xs font-bold text-[#0c0d10] transition hover:bg-[#c2f800]">
            <ArrowDown size={16} strokeWidth={2.5} /> BROWSE WORKOUTS
          </a>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[334px]">
          <Image src="/banner.png" alt="Athlete training with dumbbells" fill sizes="(max-width: 768px) 80vw, 334px" className="object-contain" priority />
        </div>
      </div>
    </section>
  );
}
