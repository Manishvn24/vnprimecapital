"use client";

import { useEffect, useRef, useState } from "react";
import { Route } from "lucide-react";

const steps = [
  {
    id: 1,
    label: "Apply",
    icon: "📋",
    desc: "Fill simple online form",
  },
  {
    id: 2,
    label: "Offer Check",
    icon: "🔍",
    desc: "We compare best offers",
  },
  {
    id: 3,
    label: "KYC",
    icon: "🪪",
    desc: "Digital verification",
  },
  {
    id: 4,
    label: "Approval",
    icon: "✅",
    desc: "Bank sanctions loan",
  },
  {
    id: 5,
    label: "Consent",
    icon: "📝",
    desc: "Sign loan agreement",
  },
  {
    id: 6,
    label: "Dispatch",
    icon: "🚀",
    desc: "Money in 24 hours",
  },
];

const positions = [
  { x: 80, y: 80 },
  { x: 300, y: 80 },
  { x: 520, y: 80 },
  { x: 520, y: 280 },
  { x: 300, y: 280 },
  { x: 80, y: 280 },
];

const snakePath = `
  M 80 80
  C 140 80, 160 80, 220 80
  C 260 80, 280 80, 300 80
  C 360 80, 380 80, 440 80
  C 480 80, 500 80, 520 80
  C 520 140, 520 160, 520 200
  C 520 240, 520 260, 520 280
  C 460 280, 440 280, 380 280
  C 340 280, 320 280, 300 280
  C 240 280, 220 280, 160 280
  C 120 280, 100 280, 80 280
`;

export default function Process() {
  const ref = useRef(null);

  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
      }, 700 + index * 500);
    });
  }, [inView]);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            <Route size={14} />
            How It Works
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Your Loan Journey,{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Simplified
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            6 seamless steps from application to money in your
            account — all within 24–48 hours.
          </p>
        </div>

        {/* Process Diagram */}
        <div
          ref={ref}
          className="relative mx-auto hidden max-w-4xl lg:block"
        >
          <div
            className="relative w-full"
            style={{
              paddingBottom: "65%",
            }}
          >
            <svg
              viewBox="0 50 600 280"
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Definitions */}
              <defs>
                
                {/* Glow */}
                <filter id="glow">
                  <feGaussianBlur
                    stdDeviation="4"
                    result="coloredBlur"
                  />

                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Gradient */}
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                  />

                  <stop
                    offset="50%"
                    stopColor="hsl(var(--accent))"
                  />

                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                  />
                </linearGradient>
              </defs>

              {/* Background Path */}
              <path
                d={snakePath}
                fill="none"
                stroke="hsl(var(--border))"
                strokeOpacity="0.25"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Animated Path */}
              <path
                d={snakePath}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                style={{
                  strokeDasharray: 1400,
                  strokeDashoffset: inView ? 0 : 1400,
                  transition:
                    "stroke-dashoffset 3s cubic-bezier(0.4,0,0.2,1)",
                }}
              />

              {/* Dashed Overlay */}
              <path
                d={snakePath}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="12"
                strokeDasharray="1, 14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Nodes */}
              {positions.map((pos, index) => (
                <g
                  key={index}
                  transform={`translate(${pos.x}, ${pos.y})`}
                >
                  {/* Pulse */}
                  {activeStep >= index && (
                    <circle
                      r="36"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1"
                      opacity="0.2"
                      style={{
                        animation:
                          "pulse 2s ease-in-out infinite",
                      }}
                    />
                  )}

                  {/* Outer Circle */}
                  <circle
                    r="28"
                    fill={
                      activeStep >= index
                        ? "hsl(var(--primary) / 0.15)"
                        : "hsl(var(--card) / 0.4)"
                    }
                    stroke={
                      activeStep >= index
                        ? "hsl(var(--primary))"
                        : "hsl(var(--border))"
                    }
                    strokeWidth="1.5"
                    filter={
                      activeStep >= index
                        ? "url(#glow)"
                        : "none"
                    }
                    style={{
                      transition: "all 0.5s ease",
                    }}
                  />

                  {/* Inner Circle */}
                  <circle
                    r="20"
                    fill={
                      activeStep >= index
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted))"
                    }
                    style={{
                      transition: "all 0.5s ease",
                    }}
                  />

                  {/* Number */}
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="white"
                    fontSize="13"
                    fontWeight="700"
                    opacity={activeStep >= index ? 1 : 0.3}
                  >
                    {index + 1}
                  </text>

                  {/* Label */}
                  <text
                    textAnchor="middle"
                    y={index < 3 ? -42 : 48}
                    fill="white"
                    fontSize="13"
                    fontWeight="700"
                    opacity={activeStep >= index ? 1 : 0.3}
                  >
                    {steps[index].label}
                  </text>

                  {/* Description */}
                  <text
                    textAnchor="middle"
                    y={index < 3 ? -26 : 63}
                    fill="rgba(255,255,255,0.45)"
                    fontSize="10"
                    opacity={activeStep >= index ? 1 : 0}
                    style={{
                      transition: "opacity 0.5s ease",
                    }}
                  >
                    {steps[index].desc}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="rounded-3xl border border-border/50 bg-card/40 p-5 text-center backdrop-blur-xl transition-all duration-500"
              style={{
                opacity: activeStep >= index ? 1 : 0.4,
                transform:
                  activeStep >= index
                    ? "translateY(0px)"
                    : "translateY(20px)",
              }}
            >
              <div className="mb-3 text-3xl">
                {step.icon}
              </div>

              <div className="mb-1 text-sm font-bold text-primary">
                {index + 1}. {step.label}
              </div>

              <div className="text-xs leading-relaxed text-muted-foreground">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40"
          >
            Start Your Journey Today 🚀
          </a>
        </div>
      </div>
    </section>
  );
}