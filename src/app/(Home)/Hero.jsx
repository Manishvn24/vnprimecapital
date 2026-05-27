// "use client";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const PHRASES = [
//   "Built for professionals, not just profiles",
//   "Where ambition meets better financing",
//   "Where speed meets smart lending",
// ];

// const textVariants = {
//   initial: {
//     opacity: 0,
//     y: 30,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//   },
//   exit: {
//     opacity: 0,
//     y: -30,
//   },
// };

// export default function HeroSection() {
//   const [currentPhrase, setCurrentPhrase] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPhrase((prev) => (prev + 1) % PHRASES.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24">
//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Blue Glow */}
//         <div className="absolute right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl md:h-[800px] md:w-[800px]" />

//         {/* Secondary Glow */}
//         <div className="absolute bottom-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-accent/10 blur-3xl md:h-[600px] md:w-[600px]" />

//         {/* Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

//         {/* Radial Fade */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_75%)]" />
//       </div>

//       <div className="container relative z-10 mx-auto px-6 md:px-10">
//         <div className="max-w-5xl">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-6 inline-flex items-center rounded-full border border-border bg-card/40 px-4 py-1.5 backdrop-blur-md"
//           >
//             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
//               Premium DSA Partner
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <div className="mb-6 flex min-h-[180px] items-center sm:min-h-[220px] md:min-h-[280px]">
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={PHRASES[currentPhrase]}
//                 variants={textVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                 }}
//                 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//               >
//                 {PHRASES[currentPhrase]}
//               </motion.h1>
//             </AnimatePresence>
//           </div>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
//           >
//             India&apos;s trusted DSA partner connecting you with Bajaj Finance,
//             HDFC, ICICI & more. Fast, paperless financing without the
//             branch-visit hassle.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.7 }}
//             className="mt-10 flex flex-col gap-4 sm:flex-row"
//           >
//             <Button
//               size="lg"
//               className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02]"
//             >
//               Apply Now
//             </Button>

//             <Button
//               size="lg"
//               variant="outline"
//               className="h-14 rounded-xl border-border bg-background/40 px-8 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-foreground hover:text-background"
//             >
//               Talk to an Expert
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PHRASES = [
  "Built for professionals, not just profiles",
  "Where ambition meets better financing",
  "Where speed meets smart lending",
];

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
        <div className="absolute right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl md:h-[800px] md:w-[800px]" />

        {/* Secondary Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-accent/10 blur-3xl md:h-[600px] md:w-[600px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-border bg-card/40 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
              Premium DSA Partner
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mb-6 flex min-h-[180px] items-center sm:min-h-[220px] md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={PHRASES[currentPhrase]}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                {PHRASES[currentPhrase]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            India&apos;s trusted DSA partner connecting you with Bajaj Finance,
            HDFC, ICICI & more. Fast, paperless financing without the
            branch-visit hassle.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              Apply Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-xl border-border bg-background/40 px-8 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}