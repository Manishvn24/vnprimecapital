"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(120 * 60); // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e8f4fd 50%, #f0f9ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(30,120,220,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(30,120,220,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          background: "#ffffff",
          borderRadius: "16px",
          border: "1px solid rgba(30,120,220,0.12)",
          boxShadow:
            "0 4px 6px -1px rgba(30,120,220,0.08), 0 20px 60px -10px rgba(30,120,220,0.12)",
          padding: "3rem 3.5rem",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Check icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1e78dc 0%, #0ea5e9 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.75rem",
            boxShadow: "0 8px 24px rgba(30,120,220,0.30)",
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M7 17L13.5 23.5L27 10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontFamily: "'Outfit', 'DM Sans', sans-serif",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#0f172a",
            margin: "0 0 0.6rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Application Received!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
          style={{
            fontSize: "1rem",
            color: "#475569",
            margin: "0 0 2rem",
            lineHeight: 1.65,
          }}
        >
          Thank you for reaching out to{" "}
          <span style={{ color: "#1e78dc", fontWeight: 600 }}>
            VN Prime Capital
          </span>
          . Our team will review your details and contact you within
        </motion.p>

        {/* 2 hours badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.45 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
            border: "1.5px solid rgba(30,120,220,0.20)",
            borderRadius: "10px",
            padding: "0.65rem 1.25rem",
            marginBottom: "2rem",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#1e78dc" strokeWidth="2" />
            <path
              d="M12 7v5l3 3"
              stroke="#1e78dc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#1e78dc",
              letterSpacing: "-0.01em",
            }}
          >
            30 Minutes
          </span>
        </motion.div>

        {/* Live countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          style={{ marginBottom: "2rem" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "#94a3b8",
              marginBottom: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Estimated wait
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
            }}
          >
            {[
              { val: pad(hours), label: "hr" },
              { val: pad(minutes), label: "min" },
              { val: pad(seconds), label: "sec" },
            ].map(({ val, label }, i) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <div
                  style={{
                    background: "#f1f5f9",
                    borderRadius: "8px",
                    padding: "0.45rem 0.75rem",
                    minWidth: "52px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', monospace",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {val}
                  </span>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      color: "#94a3b8",
                      fontWeight: 500,
                      marginTop: "1px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </div>
                {i < 2 && (
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#cbd5e1",
                      marginBottom: "10px",
                    }}
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #e2e8f0, transparent)",
            margin: "0 0 1.75rem",
          }}
        />

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
          style={{ textAlign: "left" }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "#94a3b8",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "0.9rem",
            }}
          >
            What happens next
          </p>
          {[
            { icon: "📋", text: "Our loan advisor reviews your profile" },
            { icon: "📞", text: "You receive a call to discuss options" },
            { icon: "✅", text: "We match you with the best lender offer" },
          ].map(({ icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 + i * 0.1, duration: 0.35 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.55rem 0",
                borderBottom: i < 2 ? "1px solid #f1f5f9" : "none",
              }}
            >
              <span style={{ fontSize: "1.05rem" }}>{icon}</span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.4 }}
          style={{
            marginTop: "1.75rem",
            fontSize: "0.8rem",
            color: "#94a3b8",
            lineHeight: 1.6,
          }}
        >
          Questions? Call us at{" "}
          <a
            href="tel:+916265118905"
            style={{
              color: "#1e78dc",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            +91 6265118905
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@vnprimecapital.com"
            style={{
              color: "#1e78dc",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            info@vnprimecapital.com
          </a>
        </motion.p>
      </motion.div>

      {/* Lender strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "1.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            color: "#94a3b8",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Partner Banks
        </span>
        {["Indusland", "HDFC", "ICICI", "Axis Bank", "Kotak"].map(
          (bank) => (
            <span
              key={bank}
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                padding: "0.3rem 0.7rem",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#475569",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {bank}
            </span>
          ),
        )}
      </motion.div>
    </div>
  );
}
