"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "@/components/WorkoutCard";
import LoadingGrid from "@/components/LoadingGrid";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [status, setStatus] = useState("loading");

  const loadWorkouts = async (signal) => {
    setStatus("loading");
    try {
      const response = await fetch(API_URL, { signal });
      if (!response.ok) throw new Error("Failed to load workouts");
      const data = await response.json();
      setWorkouts(Array.isArray(data) ? data : []);
      setStatus("success");
    } catch (error) {
      if (error.name !== "AbortError") setStatus("error");
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    loadWorkouts(controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <section id="library" className="container-shell scroll-mt-28 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide">THE LIBRARY</h2>
        <p className="mt-2 text-sm text-muted">Twelve lifts covering every major muscle group.</p>
      </div>

      {status === "loading" && <LoadingGrid />}
      {status === "error" && (
        <div className="border border-[#2d313b] bg-panel px-6 py-12 text-center">
          <h3 className="font-display text-xl font-bold uppercase">Unable to load workouts</h3>
          <p className="mt-2 text-sm text-muted">Check your connection and try again.</p>
          <button onClick={() => loadWorkouts()} className="mt-6 bg-acid px-5 py-3 text-xs font-bold text-[#0c0d10]">TRY AGAIN</button>
        </div>
      )}
      {status === "success" && workouts.length === 0 && (
        <p className="border border-[#2d313b] bg-panel p-8 text-center text-sm text-muted">No workouts are available right now.</p>
      )}
      {status === "success" && workouts.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
        </div>
      )}
    </section>
  );
}
