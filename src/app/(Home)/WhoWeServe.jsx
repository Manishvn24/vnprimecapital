"use client";

import { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  HardHat,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Users,
} from "lucide-react";

const segments = [
  {
    icon: Stethoscope,
    title: "Doctors & Medical Professionals",
    description:
      "Tailored loan solutions for healthcare professionals — from clinic setup funding to personal loans at preferential rates.",
    highlight: "Professional Loans",
    tags: ["Clinic Setup", "Equipment Finance", "Personal Loans"],
  },
  {
    icon: HardHat,
    title: "Engineers & Tech Professionals",
    description:
      "Quick approvals for engineering and IT professionals looking for home loans, vehicle finance or personal credit.",
    highlight: "Tech Professional Loans",
    tags: ["Home Loan", "Vehicle Loan", "Overdraft"],
  },
  {
    icon: Briefcase,
    title: "Salaried Employees",
    description:
      "Hassle-free personal loans for working professionals. Minimal documents, fast disbursement, competitive rates.",
    highlight: "Salaried Loans",
    tags: ["Personal Loan", "Education", "Emergency Credit"],
  },
  {
    icon: GraduationCap,
    title: "Students & Graduates",
    description:
      "Fund your education journey with flexible repayment options and moratorium periods tailored for students.",
    highlight: "Education Loans",
    tags: ["Tuition Fee", "Study Abroad", "Skill Programs"],
  },
  {
    icon: ShoppingBag,
    title: "Self-Employed & Business Owners",
    description:
      "Business loans and overdraft facilities for entrepreneurs and SMEs to fuel growth and manage cash flow.",
    highlight: "Business Credit",
    tags: ["Working Capital", "Business Loan", "OD Facility"],
  },
  {
    icon: Users,
    title: "First-Time Borrowers",
    description:
      "New to credit? We guide you through the process and connect you with the right lender for your first loan.",
    highlight: "Starter Credit",
    tags: ["Credit Building", "Small Loans", "Guidance"],
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

export default function WhoWeServe() {
  const { ref, inView } = useInView();

  return (
    <section
      id="who-we-serve"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-accent/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            <Users size={14} />
            Who We Serve
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Loans Designed for{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Every Achiever
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you wear a stethoscope, hard hat, or business suit — we have
            the right financial solution waiting for you.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {segments.map((segment, index) => {
            const Icon = segment.icon;

            return (
              <div
                key={segment.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0px)" : "translateY(40px)",
                  transition: `all 0.7s cubic-bezier(0.22,0.61,0.36,1) ${
                    index * 0.1
                  }s`,
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} className="text-primary" strokeWidth={1.8} />
                </div>

                {/* Highlight */}
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {segment.highlight}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-tight text-foreground">
                  {segment.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {segment.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {segment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
