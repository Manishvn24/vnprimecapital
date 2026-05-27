"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "Cr+",
    prefix: "₹",
    label: "Total Disbursements",
    description: "Across all loan categories",
  },
  {
    value: 98,
    suffix: "%",
    prefix: "",
    label: "Approval Rate",
    description: "Industry-leading success rate",
  },
  {
    value: 48,
    suffix: " Hrs",
    prefix: "",
    label: "Avg. Disbursement Time",
    description: "From application to disbursal",
  },
  {
    value: 10,
    suffix: "+",
    prefix: "",
    label: "Bank Partners",
    description: "Top financial institutions",
  },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, index, started }) {
  const count = useCountUp(stat.value, 2200, started);

  return (
    <div
      className="group relative flex flex-col items-center px-6 py-10 text-center"
      style={{
        animation: started ? `slideUp 0.7s ${index * 0.15}s ease both` : "none",
      }}
    >
      {/* Vertical Divider */}
      {index < stats.length - 1 && (
        <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
      )}

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Number */}
      <div className="relative mb-4 font-black leading-none tracking-tight">
        <span className="mr-1 align-top text-3xl text-muted-foreground sm:text-4xl lg:text-5xl">
          {stat.prefix}
        </span>

        <span
          className="tabular-nums text-5xl text-primary sm:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            textShadow: "0 0 40px rgb(from var(--primary) r g b / 0.35)",
          }}
        >
          {count}
        </span>

        <span className="align-top text-3xl text-primary sm:text-4xl lg:text-5xl">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="mb-1 text-lg font-bold text-foreground">{stat.label}</h3>

      {/* Description */}
      <p className="max-w-[220px] text-sm leading-relaxed text-muted-foreground">
        {stat.description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-5 h-0.5 w-14 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Top Divider */}
      <div className="mx-8 mb-14 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl">
          <div className="grid grid-cols-1 divide-y divide-border/40 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                stat={stat}
                index={index}
                started={started}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mx-8 mt-14 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
