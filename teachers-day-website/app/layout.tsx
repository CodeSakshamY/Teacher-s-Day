import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import NavigationMenu from "@/components/NavigationMenu"
import Loading from "./loading"
import "./globals.css"

export const metadata: Metadata = {
  title: "Teacher's Day Celebration",
  description:
    "A special website dedicated to honoring our beloved teachers with interactive experiences, beautiful poems, and memorable photo collections.",
  generator: "v0.app",
  keywords: ["teachers day", "education", "tribute", "teachers", "celebration"],
  authors: [{ name: "Teacher's Day Team" }],
  openGraph: {
    title: "Teacher's Day Celebration",
    description: "Honor your beloved teachers with our interactive celebration website",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NavigationMenu />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
