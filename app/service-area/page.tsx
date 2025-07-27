import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Car, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Area - Mobile Mechanic in Buhl, Filer, Twin Falls, ID | J&L Mobile Mechanic",
  description:
    "J&L Mobile Mechanic serves Buhl, Filer, Twin Falls, and 50-mile radius in Idaho. Professional mobile auto repair services. Call (661) 809-7479",
  keywords:
    "mobile mechanic Buhl ID, auto repair Filer Idaho, car mechanic Twin Falls, service area 83316, mobile mechanic Idaho",
}

export default function ServiceAreaPage() {
  const primaryAreas = [
    {
      city: "Buhl",
      zip: "83316",
      description: "Our home base and primary service area. Same-day service available for most repairs.",
      features: ["Same-day service", "No travel fees", "Priority scheduling"],
    },
    {
      city: "Filer",
      zip: "83328",
      description: "Regular service area with quick response times and full mobile repair capabilities.",
      features: ["Quick response", "Full service menu", "Emergency availability"],
    },
    {
      city: "Twin Falls",
      zip: "83301",
      description: "Comprehensive mobile mechanic services throughout Twin Falls and surrounding neighborhoods.",
      features: ["City-wide coverage", "Commercial services", "Fleet maintenance"],
    },
  ]

  const extendedAreas = [
    "Castleford",
    "Hagerman",
    "Wendell",
    "Gooding",
    "Shoshone",
    "Richfield",
    "Carey",
    "Bellevue",
    "Hailey",
    "Kimberly",
    "Hansen",
    "Eden",
    "Hazelton",
    "Jerome",
    "Bliss",
    "King Hill",
    "Glenns Ferry",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Mobile Mechanic Service Area</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Professional mobile auto repair services throughout South-Central Idaho
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-red-600 text-white px-4 py-2">
                <MapPin className="mr-1 h-4 w-4" />
                50-Mile Service Radius
              </Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2">
                <Clock className="mr-1 h-4 w-4" />
                24/7 Emergency Service
              </Badge>
              <Badge className="bg-green-600 text-white px-4 py-2">
                <Shield className="mr-1 h-4 w-4" />
                Veteran Owned
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Primary Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are our main service areas where we provide the fastest response times and most comprehensive
              services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {primaryAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-red-600" />
                    <div>
                      <CardTitle className="text-2xl">{area.city}, ID</CardTitle>
                      <p className="text-gray-600">ZIP {area.zip}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Service Features:</h4>
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">50-Mile Service Radius</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve a 50-mile radius from our 9th Street, Buhl, ID 83316 base, covering much of South-Central Idaho's
              Magic Valley region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Service Coverage</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Primary Areas (0-15 miles)</p>
                        <p className="text-sm text-gray-600">Buhl, Filer, Twin Falls - Same day service</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Extended Areas (15-35 miles)</p>
                        <p className="text-sm text-gray-600">Jerome, Gooding, Wendell - Next day service</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Outer Areas (35-50 miles)</p>
                        <p className="text-sm text-gray-600">Hailey, Shoshone, Glenns Ferry - Scheduled service</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Extended Service Areas</h3>
              <p className="text-gray-700 mb-4">
                We also provide mobile mechanic services to these communities within our 50-mile service radius:
              </p>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {extendedAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Don't see your area listed?</strong> Give us a call! We may still be able to provide service
                  depending on your specific location and service needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Policies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Service Policies & Response Times</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our service policies helps you know what to expect when you call J&L Mobile Mechanic LLC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-green-600" />
                  <CardTitle>Response Times</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Emergency Service:</p>
                    <p className="text-sm text-gray-600">1-2 hours (24/7 availability)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Same-Day Service:</p>
                    <p className="text-sm text-gray-600">2-4 hours (primary areas)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Scheduled Service:</p>
                    <p className="text-sm text-gray-600">Next available appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Travel Policy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">0-15 miles:</p>
                    <p className="text-sm text-gray-600">No travel charge</p>
                  </div>
                  <div>
                    <p className="font-semibold">15-35 miles:</p>
                    <p className="text-sm text-gray-600">Minimal travel fee</p>
                  </div>
                  <div>
                    <p className="font-semibold">35-50 miles:</p>
                    <p className="text-sm text-gray-600">Standard travel fee applies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-red-600" />
                  <CardTitle>Service Guarantee</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Quality Work:</p>
                    <p className="text-sm text-gray-600">All repairs guaranteed</p>
                  </div>
                  <div>
                    <p className="font-semibold">Fair Pricing:</p>
                    <p className="text-sm text-gray-600">Transparent, upfront estimates</p>
                  </div>
                  <div>
                    <p className="font-semibold">Professional Service:</p>
                    <p className="text-sm text-gray-600">Veteran-owned reliability</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Schedule Service in Your Area?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're in our primary service area or at the edge of our 50-mile radius, we're committed to
            providing professional mobile mechanic services when you need them. We service all makes and models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+16618097479">Call: (661) 809-7479</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 bg-transparent"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Check Service Availability
            </Button>
          </div>

          <p className="text-blue-100">
            Call to confirm service availability in your specific location • Emergency services available 24/7
          </p>
        </div>
      </section>
    </div>
  )
}
