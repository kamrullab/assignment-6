"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkouts } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount, hydrated } = useWorkouts();
  const isPlan = pathname.startsWith("/my-plan");

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1f26] bg-[#0c0d10]/95 backdrop-blur">
      <div className="container-shell grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-3">
        <Link href="/" className="flex items-center gap-2" aria-label="FitLog home">
          <Image src="/logo.png" width={28} height={28} alt="" priority />
          <span className="font-display text-xl font-bold tracking-wide">FITLOG</span>
        </Link>

        <nav className="hidden justify-self-center sm:flex sm:items-center sm:gap-2" aria-label="Primary navigation">
          <Link href="/#library" className={`px-4 py-2 text-xs font-semibold transition-colors ${!isPlan ? "bg-[#1a2312] text-acid" : "text-muted hover:text-white"}`}>Workouts</Link>
          <Link href="/my-plan" className={`px-4 py-2 text-xs font-semibold transition-colors ${isPlan ? "bg-[#1a2312] text-acid" : "text-muted hover:text-white"}`}>My Plan</Link>
        </nav>

        <Link href="/my-plan" className="flex items-center gap-2 justify-self-end" aria-label={`Plan ${planCount}, Saved ${savedCount}`}>
          <span className="flex h-6 items-center gap-1.5 rounded-full bg-acid px-2.5 text-[11px] font-bold text-[#0c0d10]">
            Plan <b>{hydrated ? planCount : 0}</b>
          </span>
          <span className="flex h-6 items-center gap-1.5 rounded-full border border-[#374151] px-2.5 text-[11px] font-medium text-gray-200">
            Saved <b>{hydrated ? savedCount : 0}</b>
          </span>
        </Link>
      </div>
      <nav className="container-shell flex border-t border-[#1c1f26] sm:hidden" aria-label="Mobile navigation">
        <Link href="/#library" className={`flex-1 py-2.5 text-center text-xs font-semibold ${!isPlan ? "text-acid" : "text-muted"}`}>Workouts</Link>
        <Link href="/my-plan" className={`flex-1 py-2.5 text-center text-xs font-semibold ${isPlan ? "text-acid" : "text-muted"}`}>My Plan</Link>
      </nav>
    </header>
  );
}
