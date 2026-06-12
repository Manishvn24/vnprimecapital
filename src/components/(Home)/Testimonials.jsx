"use client";

import { Star, MessageSquare } from "lucide-react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    name: "Dr. Prateek Rathore",
    role: "Medical Officer",
    initials: "PR",
    quote:
      "VN Prime Capital helped me secure a clinic expansion loan with minimal documentation. The entire process was smooth, transparent, and completed much faster than expected.",
    loan: "₹25L Business Loan",
  },
  {
    name: "Rahul Sharma",
    role: "Senior Software Engineer",
    initials: "RS",
    quote:
      "I compared multiple personal loan offers through VN Prime Capital and received a significantly better interest rate than what I was getting directly from banks.",
    loan: "₹12L Personal Loan",
  },
  {
    name: "Anjali Verma",
    role: "MBA Student",
    initials: "AV",
    quote:
      "Their team guided me through every step of my education loan process. The application was hassle-free and approval came much quicker than expected.",
    loan: "₹30L Education Loan",
  },
];

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "VN Prime Capital helped me secure a clinic expansion loan with minimal documentation. The entire process was smooth, transparent, and completed much faster than expected.",
      name: "Dr. Prateek Rathore",
      designation: "Medical Officer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I compared multiple personal loan offers through VN Prime Capital and received a significantly better interest rate than what I was getting directly from banks.",
      loan: "₹12L Personal Loan",
      name: "Rahul Sharma",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their team guided me through every step of my education loan process. The application was hassle-free and approval came much quicker than expected.",
      name: "Anjali Verma",
      designation: "MBA Student",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            <MessageSquare size={14} />
            Testimonials
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            What Our Clients
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              {" "}
              Say About Us
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Trusted by doctors, professionals, students and business owners
            across India.
          </p>
        </div>
        {/* Reviews Link */}
        <div className="mt-10 text-center">
          <span className="border-b-2 border-primary pb-2 text-base font-semibold text-primary">
            500+ Successful Loan Approvals
          </span>
        </div>
        <div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
