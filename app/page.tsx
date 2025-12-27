"use client"

import { useState, useEffect } from "react"
import NewsletterForm from "@/components/newsletter-form"
import CountdownTimer from "@/components/countdown-timer"
import { motion } from "framer-motion"

export default function LaunchingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex flex-col">
      {/* ================= HEADER ================= */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-xl tracking-tight text-foreground">
              <img src="/logo.svg" alt="Reinwoods" className="h-[50px]" />
            </span>
          </div>


          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center gap-8">
            {["Properties", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav> */}
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-wide">Coming Soon</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Luxury Real Estate <span className="text-primary">Reimagined</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover exclusive properties across the UAE. Reinwoods brings transparency, trust, and elegance to luxury
              real estate.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="py-2"
          >
            <CountdownTimer launchDate="2026-02-01T00:00:00Z" />
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-md mx-auto"
          >
            <NewsletterForm />
          </motion.div>

          {/* Trust Indicators */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="pt-8 border-t border-border/40"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by leading property investors & developers
            </p>
            <div className="flex items-center justify-center gap-10 flex-wrap opacity-80">
              {["Emaar", "Damac", "Azizi", "Mag"].map((brand) => (
                <span key={brand} className="text-sm font-medium text-muted-foreground">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Curated Portfolio",
                description:
                  "Handpicked luxury properties across Dubai, Abu Dhabi, and the UAE's prime destinations.",
              },
              {
                icon: "👥",
                title: "Expert Guidance",
                description:
                  "Our specialists offer tailored advice to match your investment goals and lifestyle.",
              },
              {
                icon: "✓",
                title: "Transparent Process",
                description: "Enjoy clarity in pricing, documentation, and transactions — always.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl border border-border/40 bg-background/50 hover:border-primary/50 transition-all duration-300 shadow-sm"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border/40 bg-background/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {[
              {
                heading: "Properties",
                links: ["Dubai", "Abu Dhabi", "Northern Emirates"],
              },
              {
                heading: "Company",
                links: ["About Us", "Blog", "Careers"],
              },
              {
                heading: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Compliance"],
              },
              {
                heading: "Connect",
                links: ["Instagram", "LinkedIn", "WhatsApp"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-foreground mb-4">{col.heading}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-foreground transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 Reinwoods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
