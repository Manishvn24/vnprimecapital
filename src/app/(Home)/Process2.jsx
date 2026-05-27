"use client";

import { motion, useScroll } from "framer-motion";
import {
  FileText,
  SearchCheck,
  ShieldCheck,
  BadgeCheck,
  FileSignature,
  Rocket,
} from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    title: "Apply",
    description: "Fill out a quick online application with basic details.",
    icon: FileText,
  },
  {
    title: "Offer Check",
    description: "We compare multiple lenders to find the best offer.",
    icon: SearchCheck,
  },
  {
    title: "KYC",
    description: "Complete secure digital verification and documentation.",
    icon: ShieldCheck,
  },
  {
    title: "Approval",
    description: "Your application gets reviewed and approved quickly.",
    icon: BadgeCheck,
  },
  {
    title: "Consent",
    description: "Review and digitally sign the loan agreement.",
    icon: FileSignature,
  },
  {
    title: "Dispatch",
    description: "Funds are transferred directly to your bank account.",
    icon: Rocket,
  },
];

export default function TimelineStepper() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 80%"],
  });

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            Process Timeline
          </div>

          <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Your Loan Journey{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A smooth and transparent process from application to final
            disbursement.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top",
            }}
            className="absolute left-[28px] top-0 h-full w-px bg-primary md:left-1/2 md:-translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  className={`relative flex items-start md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="ml-20 w-full md:ml-0 md:w-1/2">
                    <div
                      className={`group relative rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 ${
                        isLeft ? "md:mr-14" : "md:ml-14"
                      }`}
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Step Number */}
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Step {index + 1}
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background shadow-lg shadow-primary/10 md:left-1/2 md:-translate-x-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                      <Icon size={18} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
