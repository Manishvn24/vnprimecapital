"use client";

import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { name: "Bajaj Finance", abbr: "BF" },
  { name: "HDFC Bank", abbr: "HDFC" },
  { name: "ICICI Bank", abbr: "ICICI" },
  { name: "SBI", abbr: "SBI" },
  { name: "Axis Bank", abbr: "AXIS" },
  { name: "Kotak Mahindra", abbr: "KMB" },
  { name: "IndusInd Bank", abbr: "IIB" },
  { name: "Yes Bank", abbr: "YES" },
  { name: "PNB", abbr: "PNB" },
  { name: "Bank of Baroda", abbr: "BOB" },
  { name: "IDFC First", abbr: "IDFC" },
  { name: "Tata Capital", abbr: "TATA" },
];

const duplicatedPartners = [...partners, ...partners];

function PartnerRow({ reverse = false, duration = 30 }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={partner.name + index}
            className="group mx-3 flex min-w-[190px] flex-shrink-0 items-center gap-4 rounded-2xl border border-border/50 bg-card/40 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60"
          >
            {/* Logo */}
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-primary/40">
              {partner.abbr}
            </div>

            {/* Text */}
            <div>
              <div className="whitespace-nowrap text-sm font-semibold text-foreground">
                {partner.name}
              </div>

              <div className="text-xs text-muted-foreground">
                {reverse ? "Authorized DSA" : "Official Partner"}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function BankPartners() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Top Divider */}
      <div className="relative z-10 mx-8 mb-14 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-14 max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
          <Building2 size={14} />
          Our Bank Partners
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Connected to{" "}
          <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            India&apos;s Top Lenders
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We work with leading banks and NBFCs to bring you competitive loan
          offers with faster approvals and better flexibility.
        </p>
      </div>

      {/* Tickers */}
      <div className="relative z-10 space-y-5">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-background to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 */}
        <PartnerRow duration={28} />

        {/* Row 2 */}
        <PartnerRow reverse duration={32} />
      </div>

      {/* Trust Statement */}
      <div className="relative z-10 mx-auto mt-14 max-w-4xl px-6 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          VN Prime Capital is an authorized Direct Selling Agent (DSA) of all
          listed institutions. Loans are subject to eligibility and credit
          approval.
        </p>
      </div>

      {/* Bottom Divider */}
      <div className="relative z-10 mx-8 mt-14 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
