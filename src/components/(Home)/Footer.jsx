"use client";

import Link from "next/link";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  PersonStandingIcon,
  HandHelping,
  Locate,
  LocationEdit,
  LocateFixed,
  LocationEditIcon,
} from "lucide-react";
import { FaServicestack } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Personal Loan",
  "Education Loan",
  "Overdraft (OD) Facility",
  "Business Loan",
  "Home Loan",
  "Vehicle Loan",
];

const partners = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra",
  "Bajaj Finance",
];

const socials = [
  { Icon: Star, href: "#" },
  { Icon: PersonStandingIcon, href: "#" },
  { Icon: Star, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background">
      {/* Top Glow Line */}
      <div className="absolute left-1/2 top-0 h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-16">
        {/* Main Grid */}
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              India&apos;s trusted DSA partner connecting you with top financial
              institutions. Fast, digital, and transparent loan services.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <FooterLink
                href="tel:+916265118905"
                icon={Phone}
                text="+91 62651 18905"
              />

              <FooterLink
                href="mailto:nikhil@vnprimecapital.com"
                icon={Mail}
                text="nikhil@vnprimecapital.com"
              />
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <LocationEditIcon size={14} className="text-primary" />
                Madan Mahal, Jabalpur
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <HandHelping size={14} className="text-primary" />
                Pan-India Services
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card/40 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" items={quickLinks} />

          {/* Services */}
          <FooterColumn
            title="Loan Services"
            items={services.map((service) => ({
              label: service,
              href: "#services",
            }))}
          />

          {/* Partners */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              Bank Partners
            </h4>

            <ul className="space-y-3">
              {partners.map((partner) => (
                <li
                  key={partner}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  {partner}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40"
              >
                Apply Now
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-center text-xs leading-relaxed text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} VN Prime Capital. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Fine Print */}
        <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
          Loan approvals are subject to lender terms and eligibility. VN Prime
          Capital facilitates loan applications as an authorized DSA partner.
        </p>
      </div>
    </footer>
  );
}

/* Footer Link */
function FooterLink({ href, icon: Icon, text }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
    >
      <Icon
        size={14}
        className="text-primary transition-transform duration-300 group-hover:scale-110"
      />

      {text}
    </Link>
  );
}

/* Footer Column */
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
        {title}
      </h4>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
