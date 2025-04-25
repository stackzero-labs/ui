"use client";

import React, { useState, useEffect } from "react";

function Banner_06() {
  // Initial countdown time (12 hours in seconds)
  const initialTime = 12 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Format time to HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = formatTime(timeLeft);

  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-900 p-6 shadow-lg">
      {/* Urgency indicators */}
      <div className="absolute top-0 left-0 h-1 w-full bg-white/20">
        <div
          className="h-full bg-white transition-all duration-1000"
          style={{ width: `${(timeLeft / initialTime) * 100}%` }}
        ></div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between">
        {/* Message */}
        <div className="mb-6 md:mr-6 md:mb-0 md:w-3/5">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
            HURRY UP
          </span>
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            It&apos;s Almost Gone!
          </h2>
          <p className="max-w-md text-white/80">
            Our special offer is about to expire. Get 30% off on all premium
            products before the countdown ends.
          </p>

          <button className="mt-4 rounded-md bg-white px-6 py-2 font-medium text-red-700 transition-colors hover:bg-red-50">
            Claim Offer Now
          </button>
        </div>

        {/* Digital Clock */}
        <div className="w-full md:w-auto">
          <div className="mb-1 text-center text-sm font-medium text-white/70">
            OFFER EXPIRES IN
          </div>
          <div className="flex items-center justify-center gap-2">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="w-20 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                <div className="text-center font-mono text-4xl font-bold text-white tabular-nums">
                  {time.hours}
                </div>
              </div>
              <div className="mt-1 text-xs text-white/80">HOURS</div>
            </div>

            <div className="text-4xl font-bold text-white">:</div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="w-20 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                <div className="text-center font-mono text-4xl font-bold text-white tabular-nums">
                  {time.minutes}
                </div>
              </div>
              <div className="mt-1 text-xs text-white/80">MINUTES</div>
            </div>

            <div className="text-4xl font-bold text-white">:</div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="w-20 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                <div className="text-center font-mono text-4xl font-bold text-white tabular-nums">
                  {time.seconds}
                </div>
              </div>
              <div className="mt-1 text-xs text-white/80">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner_06;
