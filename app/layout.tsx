import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reinwoods - Luxury Real Estate Coming Soon",
  description:
    "Discover premium properties in Dubai and the UAE. Reinwoods brings transparency and expertise to luxury real estate. Launching soon.",
  generator: "v0.app",
  openGraph: {
    title: "Reinwoods - Luxury Real Estate",
    description: "Premium properties in Dubai and the UAE",
    url: "https://reinwoods.ae",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
