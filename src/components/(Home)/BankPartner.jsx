"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const banks = [
  {
    name: "Aditya Birla",
    logo: "/logos/aditya_birla.svg",
  },
  {
    name: "Axis Bank",
    logo: "/logos/axis_bank.svg",
  },
  {
    name: "HDFC",
    logo: "/logos/Hdfc.svg",
  },
  {
    name: "ICICI",
    logo: "/logos/icici.svg",
  },
  {
    name: "PNB",
    logo: "/logos/pnb.svg",
  },
  {
    name: "larsen",
    logo: "/logos/larsen.svg",
  },
  {
    name: "shreeram",
    logo: "/logos/shreeram.svg",
  },
  {
    name: "indusland",
    logo: "/logos/indusland.svg",
  },
  {
    name: "Idfc",
    logo: "/logos/idfc.svg",
  },
  {
    name: "bajaj-finserv",
    logo: "/logos/bajaj-finserv.svg",
  },
];

const duplicatedBanks = [...banks, ...banks];

function LogoRow({ reverse = false, duration = 30 }) {
  return (
    <div className="relative overflow-hidden py-2 ">
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedBanks.map((bank, index) => (
          <div
            key={bank.name + index}
            className="group flex h-16 w-[220px] flex-shrink-0 items-center justify-center rounded-3xl border border-border/50 bg-card/40 px-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60"
          >
            <div className="relative h-12 w-full grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
              <Image
                src={bank.logo}
                alt={bank.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function BankLogoTicker() {
  return (
    <section className="relative overflow-hidden bg-background">

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            Trusted Financial Partners
          </div>

          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Connected with{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              India’s Top Banks
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We partner with leading banks and NBFCs to provide fast approvals
            and competitive loan solutions.
          </p>
        </div>

        <div>
          {/* Fade Left */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-background to-transparent" />

          {/* Fade Right */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          {/* Row 1 */}
          <LogoRow duration={28} />
        </div>
      </div>
    </section>
  );
}
