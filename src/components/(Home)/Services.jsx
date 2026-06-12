"use client";

import { useEffect, useRef, useState } from "react";
import {
  CreditCard,
  GraduationCap,
  UserCircle,
  ArrowRight,
  BadgePercent,
} from "lucide-react";

import ScrollStack, { ScrollStackItem } from "../ScrollStack";

import Link from "next/link";
const loanProducts = [
  {
    icon: GraduationCap,
    tag: "Education Finance",
    title: "Education Loan",
    description:
      "Invest in your future with education loans for top institutions in India and abroad.",
    features: [
      "Covers tuition + living expenses",
      "Study in India & abroad",
      "Moratorium during course",
      "Tax benefit under Sec 80E",
    ],
    rate: "Starting 8.5% p.a.",
    amount: "Up to ₹1Cr",
    popular: false,
  },
  {
    icon: CreditCard,
    tag: "Business Credit",
    title: "Overdraft (OD) Facility",
    description:
      "Access a revolving credit line linked to your account. Draw funds as needed and pay interest only on what you use.",
    features: [
      "Flexible withdrawal anytime",
      "Interest only on utilized amount",
      "Linked to current/savings account",
      "Instant top-up available",
    ],
    rate: "Starting 10.5% p.a.",
    amount: "Up to ₹50L",
    popular: true,
  },
  {
    icon: UserCircle,
    tag: "Personal Credit",
    title: "Personal Loan",
    description:
      "Unsecured personal loans for medical, travel, wedding, or home renovation needs.",
    features: [
      "No collateral required",
      "Disbursal within 24–48 hours",
      "Flexible tenure 12–60 months",
      "Pre-payment facility available",
    ],
    rate: "Starting 10.99% p.a.",
    amount: "Up to ₹40L",
    popular: false,
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

export default function LoanServices() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-2 md:py-4 "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            <BadgePercent size={14} />
            Loan Products
          </div>

          <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Financial Solutions{" "}
            <span className="bg-linear-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Built For You
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From revolving credit to education funding — we bring you the best
            loan products from India&apos;s top lenders.
          </p>
        </div>

        {/* Cards desktop view */}
        <div ref={ref} className="grid grid-cols-1 lg:grid gap-8 lg:grid-cols-3">
          {loanProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group relative overflow-hidden rounded-3xl border transition-all duration-700 border-primary/30 bg-primary/5 backdrop-blur-xl hover:-translate-y-2 hover:border-primary/40"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0px)" : "translateY(40px)",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col p-8">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <Icon
                        size={26}
                        className="text-primary"
                        strokeWidth={1.8}
                      />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {product.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Stats */}
                  {/* <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                      <div className="mb-1 text-xs text-muted-foreground">
                        Interest Rate
                      </div>

                      <div className="font-bold text-primary">
                        {product.rate}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                      <div className="mb-1 text-xs text-muted-foreground">
                        Loan Amount
                      </div>

                      <div className="font-bold text-foreground">
                        {product.amount}
                      </div>
                    </div>
                  </div> */}

                  {/* Features */}
                  {/* <ul className="mb-8 flex-1 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-[10px] text-primary">
                          ✓
                        </div>

                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul> */}

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className={`group/btn flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold transition-all duration-300 ${
                      product.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-border bg-background/50 text-foreground hover:bg-accent"
                    }`}
                  >
                    Apply Now
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
