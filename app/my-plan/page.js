"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import EmptyPlan from "@/components/EmptyPlan";
import PlanMetrics from "@/components/PlanMetrics";
import PlanWorkoutRow from "@/components/PlanWorkoutRow";
import { useWorkouts } from "@/context/WorkoutContext";

const sortAccessors = {
  duration: (item) => item.duration,
  calories: (item) => item.caloriesBurned,
  rating: (item) => item.rating,
};

export default function MyPlanPage() {
  const { plan, saved, hydrated, removeWorkout, markAsDone } = useWorkouts();
  const [tab, setTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentItems = tab === "plan" ? plan : saved;
  const sortedItems = useMemo(
    () => [...currentItems].sort((a, b) => sortAccessors[sortBy](b) - sortAccessors[sortBy](a)),
    [currentItems, sortBy],
  );

  return (
    <main className="container-shell py-10">
      <header>
        <h1 className="font-display text-3xl font-bold uppercase tracking-wide">MY PLAN</h1>
        <p className="mt-2 text-sm text-muted">Cap of five lifts for today. Finish them, then load more.</p>
      </header>

      <div className="mt-6"><PlanMetrics plan={plan} /></div>

      <div className="mt-6 flex flex-col gap-4 border-b border-[#232732] pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex self-start bg-[#151921] p-1" role="tablist" aria-label="Workout lists">
          <button type="button" role="tab" aria-selected={tab === "plan"} onClick={() => setTab("plan")} className={`px-5 py-2 text-xs ${tab === "plan" ? "bg-acid font-bold text-[#0c0d10]" : "text-muted"}`}>Today&apos;s Plan</button>
          <button type="button" role="tab" aria-selected={tab === "saved"} onClick={() => setTab("saved")} className={`px-5 py-2 text-xs ${tab === "saved" ? "bg-acid font-bold text-[#0c0d10]" : "text-muted"}`}>Saved</button>
        </div>

        <label className="flex items-center gap-2 text-xs text-muted">
          Sort By
          <span className="relative">
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="h-9 appearance-none border border-[#374151] bg-[#0f1115] py-0 pl-3 pr-9 text-xs text-gray-100">
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
          </span>
        </label>
      </div>

      <div className="mt-6">
        {!hydrated ? (
          <div className="flex min-h-[300px] items-center justify-center gap-3 border border-[#232732] bg-[#111317] text-sm text-muted">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#374151] border-t-acid" />Loading workouts…
          </div>
        ) : sortedItems.length === 0 ? (
          <EmptyPlan tab={tab} />
        ) : (
          <div className="space-y-4">
            {sortedItems.map((workout) => (
              <PlanWorkoutRow
                key={workout.id}
                workout={workout}
                tab={tab}
                onDone={markAsDone}
                onRemove={(id) => removeWorkout(id, tab)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
