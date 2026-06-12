"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <div className="fixed inset-x-0 z-50">
        <Header />
      </div>
      <header
        className={`fixed inset-x-0 top-10 z-50 transition-all duration-300  ${
          scrolled
            ? "border-b border-border/50 bg-background/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/40">
              <TrendingUp
                size={20}
                className="text-primary-foreground"
                strokeWidth={2.5}
              />

              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
            </div>

            <div className="leading-tight">
              <div className="text-lg font-bold tracking-wide text-foreground">
                VN Prime
              </div>

              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                Capital
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-xl border border-border bg-background/50 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent">
              Login
            </button>

            <Link
              href="#contact"
              className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="border-t border-border bg-background/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="px-6 pb-6 pt-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent">
                      Login
                    </button>

                    <Link
                      href="#contact"
                      className="flex-1 rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90"
                    >
                      Apply Now
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
