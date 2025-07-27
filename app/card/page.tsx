import type { Metadata } from "next"
import DigitalCardPageClient from "./DigitalCardPageClient"

export const metadata: Metadata = {
  title: "Digital Business Card - J&L Mobile Mechanic LLC | Save Our Contact Info",
  description:
    "Save J&L Mobile Mechanic LLC contact information. Veteran-owned mobile mechanic in Buhl, ID. Call (208) 555-0123 for auto repair services.",
  keywords: "J&L Mobile Mechanic contact, digital business card, mobile mechanic Buhl ID, save contact information",
}

export default function DigitalCardPage() {
  return <DigitalCardPageClient />
}
