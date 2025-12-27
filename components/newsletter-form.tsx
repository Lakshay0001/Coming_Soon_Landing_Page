"use client"

import type React from "react"

import { useState } from "react"
import { Mail, ArrowRight, Check } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail("")
        // Reset form after 3 seconds
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        const data = await response.json()
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Failed to subscribe. Please try again.')
      console.error('Subscription error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-1">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition" />
        <div className="relative flex items-center bg-background border border-border/40 rounded-lg overflow-hidden hover:border-primary/40 transition">
          <Mail className="w-5 h-5 text-muted-foreground ml-4" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            type="submit"
            disabled={loading || submitted}
            className="px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition disabled:opacity-50 flex items-center gap-2"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Confirmed!</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        We'll notify you when Reinwoods launches. No spam, ever.
      </p>
    </form>
  )
}
