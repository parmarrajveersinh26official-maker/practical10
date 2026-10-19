import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-4">

      {/* Main Container */}
      <div className="relative w-full max-w-3xl">

        {/* Blue Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-blue-500/15 blur-xl"></div>

        {/* Card */}
        <div className="relative rounded-3xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl sm:px-8 sm:py-6">

          {/* Top Header */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/60"></div>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
                Digital Clock
              </span>
            </div>

            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-600"></span>
              <span className="h-2 w-2 rounded-full bg-slate-500"></span>
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            </div>

          </div>

          {/* Heading */}
          <h1 className="mt-7 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Digital Clock
          </h1>

          {/* Clock Display */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 px-4 py-7 shadow-inner sm:px-8 sm:py-8">

            {/* Live Time Label */}
            <div className="flex justify-center">
              <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                Live Time
              </span>
            </div>

            {/* Time */}
            <p className="mt-5 text-center font-mono text-5xl font-bold tracking-wider text-white drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] sm:text-6xl md:text-7xl">
              {time.toLocaleTimeString()}
            </p>

            {/* Live Indicator */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></span>

              <span className="text-sm text-slate-400">
                Live
              </span>
            </div>

          </div>

          {/* Description */}
          <p className="mt-5 text-center text-sm text-slate-400 sm:text-base">
            The clock updates every second.
          </p>

          {/* Bottom Decoration */}
          <div className="mt-5 flex items-center justify-center">

            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

            <div className="mx-3 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></div>

            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default DigitalClock;