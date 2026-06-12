"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Stepper from "../Stepper";
import TextType from "../TextType";
import BorderGlow from "../BorderGlow";
import StarBorder from "../StarBorder";
import CheckEligiblity, { PhoneNumberSubmition } from "./CheckEligiblity";



const PHRASES = ["faster approvals", "smarter financing", "trusted lenders"];
const textVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -30,
  },
};

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % PHRASES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute right-[-20%] top-[10%] h-125 w-125 rounded-full bg-primary/20 blur-3xl md:h-200 md:w-200" />

        {/* Secondary Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] h-87.5 w-87.5 rounded-full bg-accent/10 blur-3xl md:h-150 md:w-150" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />

        {/* Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      <div className="pt-12 container px-3.5 sm:px-6 lg:px-8flex items-center  relative z-10 mx-auto flex">
        <div className="flex flex-col items-center text-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="max-w-7xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/20 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="text-xs uppercase tracking-balance text-muted-foreground">
                ⚡ Instant Funding For Every Need
              </span>
  
            </motion.div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="flex flex-col gap-1 sm:gap-2 md:gap-3 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {/* Static line */}
                <motion.span
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className="text-foreground"
                >
                  Connecting you to
                </motion.span>
                {/* Animated line */}
                <span className="relative inline-block min-w-[16ch] text-primary ">
                  <div className="absolute inset-0">
                    <TextType
                      text={[
                        "faster approvals",
                        "smarter financing",
                        "trusted lenders",
                      ]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor
                      cursorCharacter="|"
                      texts={[
                        "Welcome to React Bits! Good to see you!",
                        "Build some amazing experiences!",
                      ]}
                      deletingSpeed={50}
                      cursorBlinkDuration={0.5}
                    />
                  </div>
                  {/* Reserve width for longest phrase */}
                  <span className="invisible">better financing</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="pt-2 px-3 max-w-xl text-base leading-relaxed text-muted-foreground text-justify sm:text-lg md:text-xl"
            >
              Compare loan offers from trusted banks and NBFCs. Fast approvals,
              expert guidance, and a seamless experience.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="h-14 w-full sm:w-auto rounded-xl px-8 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                Apply Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full sm:w-auto rounded-xl border-border bg-background/40 px-8 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                Talk to an Expert
              </Button>
            </motion.div>

            {/* Mobile Lead Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="mt-8 lg:hidden"
            >
              <form>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 w-full rounded-xl border border-primary bg-background px-4 pr-36 outline-none transition focus:border-primary"
                  />

                  <Button
                    type="submit"
                    className="absolute right-1 top-1 h-12 px-4 "
                  >
                    Check Offers
                  </Button>
                </div>

                <p className="mt-3 text-center text-xs text-muted-foreground ">
                  No paperwork • Multiple lenders • Quick response
                </p>
              </form>
            </motion.div>
          </div>
        </div>
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.8,
          }}
        >
          <div className="hidden lg:block">
            <PhoneNumberSubmition/>
          </div>
        </motion.span>
      </div>
    </section>
  );
}
