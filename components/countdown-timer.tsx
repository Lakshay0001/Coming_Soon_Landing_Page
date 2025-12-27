"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ launchDate }: { launchDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(launchDate).getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 sm:p-6 min-w-20 sm:min-w-24">
        <span className="text-3xl sm:text-4xl font-bold text-primary">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wide">{label}</span>
    </div>
  )

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-2xl sm:text-3xl text-primary/40 font-light">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-2xl sm:text-3xl text-primary/40 font-light">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-2xl sm:text-3xl text-primary/40 font-light">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
