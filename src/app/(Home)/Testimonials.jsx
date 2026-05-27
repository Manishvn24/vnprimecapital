"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Cardiologist, AIIMS Delhi",
    initials: "PS",
    rating: 5,
    quote:
      "I needed a quick clinic setup loan and VN Prime Capital got it approved within 36 hours. The entire process was online — no branch visit, no hassle.",
    loan: "₹18L Business Loan",
    bank: "Bajaj Finance",
  },
  {
    name: "Rahul Mehta",
    role: "Software Engineer, TCS",
    initials: "RM",
    rating: 5,
    quote:
      "Got my personal loan at a great interest rate through HDFC. The team was super helpful throughout the process.",
    loan: "₹10L Personal Loan",
    bank: "HDFC Bank",
  },
  {
    name: "Anjali Verma",
    role: "MBA Student, IIM Indore",
    initials: "AV",
    rating: 5,
    quote:
      "They handled all the paperwork and explained everything clearly. The education loan process felt smooth and stress-free.",
    loan: "₹25L Education Loan",
    bank: "ICICI Bank",
  },
  {
    name: "Suresh Kumar",
    role: "Government Employee",
    initials: "SK",
    rating: 5,
    quote:
      "The experts compared offers from multiple banks and secured the best rate in just two days.",
    loan: "₹8L Personal Loan",
    bank: "SBI",
  },
  {
    name: "Neha Joshi",
    role: "CA, Private Practice",
    initials: "NJ",
    rating: 5,
    quote:
      "The overdraft facility setup was seamless. Minimal paperwork and very professional support.",
    loan: "₹30L OD Facility",
    bank: "Axis Bank",
  },
  {
    name: "Amit Patel",
    role: "Civil Engineer, L&T",
    initials: "AP",
    rating: 5,
    quote:
      "Applied Monday evening, approved Tuesday, and funds credited Wednesday morning. Excellent service!",
    loan: "₹12L Personal Loan",
    bank: "Kotak Mahindra",
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

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            <MessageSquare size={14} />
            Testimonials
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Stories from Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Happy Borrowers
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Real people. Real loans. Real financial success stories.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
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

              {/* Top */}
              <div className="relative mb-5 flex items-start justify-between">
                {/* Quote Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Quote size={17} className="text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={13}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="relative mb-6 text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Loan Badge */}
              <div className="relative mb-6 flex items-center gap-2 rounded-2xl border border-primary/15 bg-primary/10 px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-primary" />

                <span className="text-xs font-semibold text-primary">
                  {testimonial.loan}
                </span>

                <span className="ml-auto text-xs text-muted-foreground">
                  via {testimonial.bank}
                </span>
              </div>

              {/* Author */}
              <div className="relative flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  {testimonial.initials}
                </div>

                {/* Info */}
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 flex justify-center">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border/50 bg-card/40 px-8 py-6 backdrop-blur-xl sm:flex-row">
            {/* Rating */}
            <div className="text-center">
              <div className="mb-1 text-4xl font-black text-foreground">
                4.9
              </div>

              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
            </div>

            <div className="hidden h-12 w-px bg-border sm:block" />

            {/* Borrowers */}
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">500+</div>

              <div className="text-sm text-muted-foreground">
                Happy Borrowers
              </div>
            </div>

            <div className="hidden h-12 w-px bg-border sm:block" />

            {/* Disbursed */}
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">₹500Cr+</div>

              <div className="text-sm text-muted-foreground">
                Loans Disbursed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
