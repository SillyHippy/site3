import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { StickyCallBar } from "@/components/sticky-call-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "J&L Mobile Mechanic LLC - Veteran-Owned Mobile Auto Repair in Buhl, ID",
  description:
    "Professional mobile mechanic services in Buhl, Filer, Twin Falls, ID. Veteran-owned, we service all makes and models. Call (661) 809-7479",
  keywords:
    "mobile mechanic Buhl ID, auto repair Twin Falls, car mechanic Filer Idaho, veteran owned mechanic, emergency car repair 83316",
  openGraph: {
    title: "J&L Mobile Mechanic LLC - Veteran-Owned Mobile Auto Repair",
    description:
      "Professional mobile mechanic services in Buhl, Filer, Twin Falls, ID. We service all makes and models!",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "J&L Mobile Mechanic LLC",
              description: "Veteran-owned mobile mechanic services in Buhl, Idaho. We service all makes and models.",
              url: "https://jlmobilemechanic.com",
              telephone: "(661) 809-7479",
              email: "joshuaheartsill@icloud.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9th Street",
                addressLocality: "Buhl",
                addressRegion: "ID",
                postalCode: "83316",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "42.5996",
                longitude: "-114.7597",
              },
              areaServed: ["Buhl, ID", "Filer, ID", "Twin Falls, ID", "83316"],
              serviceType: "Mobile Auto Repair",
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-23:59",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <StickyCallBar />
      </body>
    </html>
  )
}
