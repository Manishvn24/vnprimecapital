"use client";

import { useEffect, useRef, useState } from "react";
import {
  Zap,
  FileCheck,
  Building2,
  Home,
  Shield,
  Clock,
  CheckCircle2,
  Star,
} from "lucide-react";
import Carousel from "../Carousel";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Process",
    description:
      "From application to approval in record time. Our streamlined process cuts waiting to just hours, not weeks.",
    stat: "48hr",
    statLabel: "Avg. Disbursal",
  },
  {
    icon: FileCheck,
    title: "Minimal Paperwork",
    description:
      "Forget the pile of documents. We work with digital documents and minimal physical paperwork.",
    stat: "3 Docs",
    statLabel: "Max Required",
  },
  {
    icon: Building2,
    title: "No Branch Visit",
    description:
      "Everything — application, verification, approval — happens online.",
    stat: "100%",
    statLabel: "Digital",
  },
  {
    icon: Home,
    title: "Apply From Home",
    description:
      "Submit your application from your couch. We bring the loan process to your fingertips.",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    description:
      "Your data is protected with bank-grade security and verified DSA partnerships.",
    stat: "SSL",
    statLabel: "Encrypted",
  },
  {
    icon: Clock,
    title: "Expert Support",
    description:
      "Real loan experts guide you through every step — no bots, no confusion.",
    stat: "6 Days",
    statLabel: "Support",
  },
];


function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section className="relative overflow-hidden bg-background py-12">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* Secondary Glow */}
        <div className="absolute left-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
              <Star size={14} />
              Why Choose Us
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              The Smarter Way to{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Get a Loan
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pt-14">
            <p className="text-lg leading-relaxed text-muted-foreground">
              VN Prime Capital removes the stress and complexity from the loan
              process with faster approvals, minimal paperwork, and expert
              financial guidance.
            </p>

            {/* Social Proof */}
            <div className="mt-6 flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {["D", "E", "R", "S"].map((letter, index) => (
                  <div
                    key={letter}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20"
                    style={{
                      transform: `translateY(${index % 2 === 0 ? "0px" : "4px"})`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div>
                <div className="mb-1 flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      className="fill-[#FDCC0D] text-[#FDCC0D]"
                    />
                  ))}
                </div>

                <div className="text-xs text-muted-foreground">
                  500+ happy borrowers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div ref={ref} className="lg:grid  lg:gap-5 lg:grid-cols-3 hidden">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0px)" : "translateY(40px)",
                  transition: `all 0.7s cubic-bezier(0.22,0.61,0.36,1) ${
                    index * 0.08
                  }s`,
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Row */}
                <div className="relative mb-5 flex items-start justify-between">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      size={22}
                      className="text-primary"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Stat */}
                  <div className="text-right">
                    <div className="text-2xl font-black leading-tight text-primary">
                      {reason.stat}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {reason.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative mb-2 text-xl font-bold leading-tight text-foreground">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>

                {/* Footer */}
                <div className="relative mt-5 flex items-center gap-2 border-t border-border/40 pt-4">
                  <CheckCircle2 size={15} className="text-primary" />

                  <span className="text-xs text-muted-foreground">
                    Guaranteed with every application
                  </span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
        <div className="lg:hidden flex justify-center">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
