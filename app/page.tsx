import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Star, Shield, Clock, MapPin, Wrench, Car, Battery, Gauge, Mail } from "lucide-react"
import { CustomerReviews } from "@/components/customer-reviews"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/logo.jpg"
                  alt="J&L Mobile Mechanic LLC"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold">J & L Mobile Mechanic LLC</h1>
                  <p className="text-red-300 font-semibold">Veteran Owned and Ran • Est 2025</p>
                </div>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Veteran-Owned Mobile Mechanic in Buhl, ID
              </h2>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Honest, local car repair—We come to you!
                <span className="block text-lg mt-2">
                  We service all makes and models • 14+ years of trusted experience
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:+16618097479">Call Now: (661) 809-7479</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <a
                    href="https://m.me/61578019610829"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message on Facebook
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge className="bg-red-600 text-white px-3 py-1">
                  <Shield className="mr-1 h-4 w-4" />
                  Veteran Owned
                </Badge>
                <Badge className="bg-blue-600 text-white px-3 py-1">
                  <Clock className="mr-1 h-4 w-4" />
                  24/7 Emergency Service
                </Badge>
                <Badge className="bg-green-600 text-white px-3 py-1">
                  <Star className="mr-1 h-4 w-4" />
                  100% Recommended
                </Badge>
              </div>
            </div>

            <div className="lg:text-center">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Service Area</h3>
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-red-400 mr-2" />
                    <span className="text-lg">50-Mile Radius</span>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="font-semibold">Buhl • Filer • Twin Falls</p>
                    <p className="text-blue-200">9th Street, Buhl, ID 83316 and 50-mile radius</p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-lg font-semibold">100% Recommended</p>
                <p className="text-blue-200">Trusted by local customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Mobile Auto Repair</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From diagnostics to routine maintenance, we bring professional auto repair directly to your location in
              Buhl, Filer, Twin Falls, and surrounding areas. We service all makes and models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Gauge className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Diagnostics</h3>
                <p className="text-gray-600">Advanced diagnostic tools to identify issues quickly and accurately.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Brake Repairs</h3>
                <p className="text-gray-600">Complete brake system service and repairs for your safety.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Oil Changes</h3>
                <p className="text-gray-600">Quick and convenient oil changes at your location.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Battery className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Battery Service</h3>
                <p className="text-gray-600">Battery testing, replacement, and jump-start services.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose J&L Mobile Mechanic?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Veteran-Owned & Operated</h3>
                    <p className="text-gray-600">Bringing military precision and integrity to every repair job.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">14+ Years Experience</h3>
                    <p className="text-gray-600">
                      Working on cars since age 11, with deep automotive knowledge and local roots.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">We Come to You</h3>
                    <p className="text-gray-600">
                      Save time and hassle - we bring professional service to your location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Ready to Get Started?</h3>
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  <a href="tel:+16618097479">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: (661) 809-7479
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                  <a href="sms:+16618097479">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Text: (661) 809-7479
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                  <a href="mailto:joshuaheartsill@icloud.com">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">Available 24/7 for emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.jpg"
                  alt="J&L Mobile Mechanic LLC"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">J&L Mobile Mechanic LLC</h3>
                  <p className="text-red-400">Veteran Owned & Operated</p>
                </div>
              </div>
              <p className="text-gray-300">
                Professional mobile mechanic services in Buhl, Filer, Twin Falls, and surrounding areas.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+16618097479" className="hover:text-red-400">
                    (661) 809-7479
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:joshuaheartsill@icloud.com" className="hover:text-red-400">
                    joshuaheartsill@icloud.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  9th Street, Buhl, ID 83316
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/services" className="block hover:text-red-400">
                  Services
                </Link>
                <Link href="/service-area" className="block hover:text-red-400">
                  Service Area
                </Link>
                <Link href="/about" className="block hover:text-red-400">
                  About Us
                </Link>
                <Link href="/contact" className="block hover:text-red-400">
                  Contact
                </Link>
                <Link href="/card" className="block hover:text-red-400">
                  Digital Card
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 J&L Mobile Mechanic LLC. All rights reserved. | Veteran-owned business serving Idaho with pride.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
