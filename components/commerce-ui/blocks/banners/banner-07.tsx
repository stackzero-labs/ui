"use client";
import React, { useState, useEffect } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

function Banner_07() {
  // State to track countdown time
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate expiry time (24 hours from now)
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 24);

    // Update countdown every second
    const timer = setInterval(() => {
      const now = new Date();
      const difference = expiry.getTime() - now.getTime();

      // Stop timer when countdown reaches 0
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate hours, minutes, seconds
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    // Clean up timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-900 p-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-500 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto text-center">
          <div className="inline-block rounded-lg bg-white/10 px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
            Flash Sale
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Don&apos;t miss your chance to save!
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-purple-100">
            Our biggest discount of the season on all premium items. When the
            counter reaches zero, the prices go back to normal.
          </p>

          {/* Counter section with NumberFlow */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <p className="mb-2 text-sm font-medium text-purple-200">
              OFFER EXPIRES IN
            </p>

            <NumberFlowGroup>
              <div
                style={{
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "4rem",
                  fontFamily: "monospace",
                }}
                className="~text-3xl/4xl flex items-baseline font-semibold"
              >
                <NumberFlow
                  trend={-1}
                  value={timeLeft.hours}
                  format={{ minimumIntegerDigits: 2 }}
                />
                <NumberFlow
                  prefix=":"
                  trend={-1}
                  value={timeLeft.minutes}
                  digits={{ 1: { max: 5 } }}
                  format={{ minimumIntegerDigits: 2 }}
                />
                <NumberFlow
                  prefix=":"
                  trend={-1}
                  value={timeLeft.seconds}
                  digits={{ 1: { max: 5 } }}
                  format={{ minimumIntegerDigits: 2 }}
                />
              </div>
            </NumberFlowGroup>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl sm:w-auto">
              Shop Now
            </button>
            <button className="w-full rounded-lg border border-white/30 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner_07;
