"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/service-area", label: "Service Area" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
    { href: "/card", label: "Digital Card" },
  ]

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="bg-red-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-center items-center gap-4 text-sm">
            <a href="tel:+16618097479" className="flex items-center gap-1 hover:underline">
              <Phone className="h-4 w-4" />
              (661) 809-7479
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:joshuaheartsill@icloud.com" className="flex items-center gap-1 hover:underline">
              <Mail className="h-4 w-4" />
              joshuaheartsill@icloud.com
            </a>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="J&L Mobile Mechanic LLC Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">J&L Mobile Mechanic LLC</h1>
                <p className="text-sm text-red-600 font-semibold">Veteran Owned & Operated</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="tel:+16618097479">Call Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="bg-red-600 hover:bg-red-700 mt-4">
                  <a href="tel:+16618097479">Call Now</a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
