
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
import { motion } from "framer-motion";
import Masonry from "../Masonry";

const items = [
  {
    id: "1",
    img: "/collage/building.avif",
    url: "https://example.com/one",
    height: 250,
  },
  {
    id: "10",
    img: "/collage/airplane.avif",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "2",
    img: "/collage/class1.avif",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "/collage/smilingdr.avif",
    url: "https://example.com/three",
    height: 300,
  },
  {
    id: "4",
    img: "/collage/newspaper.avif",
    url: "https://example.com/three",
    height: 400,
  },
  {
    id: "5",
    img: "/collage/drgirl.avif",
    url: "https://example.com/three",
    height: 350,
  },
  {
    id: "6",
    img: "/collage/engineer.avif",
    url: "https://example.com/three",
    height: 400,
  },
  {
    id: "7",
    img: "/collage/startup1.avif",
    url: "https://example.com/three",
    height: 300,
  },

  {
    id: "12",
    img: "/collage/spectro.avif",
    url: "https://example.com/three",
    height: 400,
  },

  {
    id: "9",
    img: "/collage/newhouse.avif",
    url: "https://example.com/three",
    height: 400,
  },

  {
    id: "11",
    img: "/collage/bike.avif",
    url: "https://example.com/three",
    height:350,
  },
  {
    id: "13",
    img: "/collage/student.avif",
    url: "https://example.com/three",
    height: 250,
  },
];

const segmentStyles = [
  {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    tagBg: "bg-blue-50",
    tagText: "text-blue-800",
    tagBorder: "border-blue-200",
  },
  {
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    tagBg: "bg-teal-50",
    tagText: "text-teal-800",
    tagBorder: "border-teal-200",
  },
  {
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    tagBg: "bg-purple-50",
    tagText: "text-purple-800",
    tagBorder: "border-purple-200",
  },
  {
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    tagBg: "bg-amber-50",
    tagText: "text-amber-800",
    tagBorder: "border-amber-200",
  },
  {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-700",
    tagBg: "bg-orange-50",
    tagText: "text-orange-800",
    tagBorder: "border-orange-200",
  },
  {
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
    tagBg: "bg-green-50",
    tagText: "text-green-800",
    tagBorder: "border-green-200",
  },
];

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
    icon: ShoppingBag,
    title: "Self-Employed & Business Owners",
    description:
      "Business loans and overdraft facilities for entrepreneurs and SMEs to fuel growth and manage cash flow.",
    highlight: "Business Credit",
    tags: ["Working Capital", "Business Loan", "OD Facility"],
  },
];
// split images into two columns
const colA = items.filter((_, i) => i % 2 === 0);
const colB = items.filter((_, i) => i % 2 === 1);

// heights to assign per image card
const cardHeights = [130, 100, 140, 105, 120, 110];
// Fix ScrollCol — both columns scroll UP, right one just starts mid-way
function ScrollCol({ images, duration, startY = "0%" }) {
  const doubled = [...images, ...images];

  return (
    <div
      className="flex flex-col gap-2 overflow-hidden md:hidden lg:hidden"
      style={{ height: 380 }}
    >
      <motion.div
        className="flex flex-col gap-2"
        initial={{ y: startY }} // ← start offset so they're out of phase
        animate={{ y: [startY, "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="w-full flex-shrink-0 overflow-hidden rounded-xl"
            style={{ height: cardHeights[i % cardHeights.length] }}
          >
            <img src={item.img} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

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
    <section id="who-we-serve" className="relative bg-background py-12 hidden md:block lg:block">
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
        <div className="h-150">
          {" "}
          {/* Cards */}
          <div className="relative w-full">
            <Masonry
              items={items}
              ease="power3.out"
              duration={0}
              stagger={0}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
