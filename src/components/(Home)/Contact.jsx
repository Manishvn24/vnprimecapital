"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const loanTypes = [
  "Personal Loan",
  "Education Loan",
  "Overdraft (OD) Facility",
  "Business Loan",
  "Home Loan",
  "Vehicle Loan",
  "Other",
];

const employmentTypes = [
  "Salaried",
  "Self-Employed",
  "Doctor / Medical Professional",
  "Engineer",
  "Business Owner",
  "Student",
  "Government Employee",
  "Other",
];

const contactItems = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 62651 18905",
    sub: "Mon–Sat, 9 AM – 7 PM",
    href: "tel:+916265118905",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@vnprimecapital.com",
    sub: "We reply within 2 hours",
    href: "mailto:info@vnprimecapital.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jabapur",
    sub: "Pan-India Loan Services",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    employment: "",
    amount: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
     const formData = new FormData(e.target);
    formData.append("access_key", "701addc5-3cea-4812-9048-62c6f21599c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md">
            <MessageCircle size={14} />
            Get In Touch
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Ready to Apply?{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Let&apos;s Talk
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Fill the form below and our loan expert will contact you within 30
            minutes during business hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            {/* Contact Cards */}
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-3xl border border-border/50 bg-card/40 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} className="text-primary" />
                  </div>

                  {/* Text */}
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>

                    <div className="text-sm font-semibold text-foreground">
                      {item.value}
                    </div>

                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {item.sub}
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/916265118905"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-3xl bg-primary px-6 py-5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40"
            >
              {/* WhatsApp Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Chat on WhatsApp
            </Link>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-3xl border border-border/50 bg-card/40 p-12 text-center backdrop-blur-xl">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <CheckCircle2 size={40} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-3xl font-bold text-foreground">
                  Application Received!
                </h3>

                {/* Text */}
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  Thank you for contacting VN Prime Capital. Our loan expert
                  will reach out within{" "}
                  <span className="font-semibold text-primary">30 minutes</span>
                  .
                </p>

                {/* Button */}
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-2xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-accent"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div className="rounded-3xl border border-border/50 bg-card/40 p-8 backdrop-blur-xl">
                {/* Title */}
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Apply for a Loan
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* Inputs */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Full Name *"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <Input
                      label="Mobile Number *"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Selects */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Select
                      label="Loan Type *"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      options={loanTypes}
                    />

                    <Select
                      label="Employment Type *"
                      name="employment"
                      value={formData.employment}
                      onChange={handleChange}
                      options={employmentTypes}
                    />
                  </div>

                  {/* Amount */}
                  <div className="mt-4">
                    <Input
                      label="Loan Amount Required"
                      name="amount"
                      placeholder="e.g. ₹5,00,000"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                      Message (Optional)
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your loan requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                  type="submit"
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.phone ||
                      !formData.loanType
                    }
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  {/* Footer */}
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    🔒 Your information is secure and never shared with third
                    parties.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Input */
function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

/* Select */
function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          Select option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
