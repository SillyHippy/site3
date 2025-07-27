import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  User,
  ArrowLeft,
  Phone,
  MessageCircle,
  CheckCircle,
  Wrench,
  Battery,
  Car,
  Gauge,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Car Maintenance Checklist: Local Tips for Reliable Driving in Buhl, Twin Falls & Filer",
  description:
    "Apply these proven maintenance tips from Idaho's top-rated mobile mechanic to keep your car reliable—no matter what you drive!",
  keywords:
    "car maintenance checklist Idaho, vehicle maintenance Buhl ID, auto maintenance tips Twin Falls, preventive car care Filer",
}

export default function MaintenanceChecklistBlogPost() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Badge className="bg-green-600 text-white mb-4">Maintenance Tips</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Car Maintenance Checklist: Local Tips for Reliable Driving in Buhl, Twin Falls & Filer
            </h1>

            <div className="flex items-center gap-4 text-blue-200 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>January 5, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>J&L Mobile Mechanic LLC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Routine car maintenance is your first line of defense against breakdowns—and is the easiest way to save
                money over your vehicle's life. As a mobile mechanic serving Buhl, Filer, and Twin Falls, J&L Mobile
                Mechanic LLC helps busy drivers stay ahead of trouble, no matter the make or model. Here's a complete
                checklist tailored for Idaho conditions:
              </p>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Image
                  src="/images/work3.jpg"
                  alt="Engine maintenance work"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/work7.jpg"
                  alt="Engine bay maintenance"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-8">
                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Gauge className="h-8 w-8 text-blue-600" />
                      <h2 className="text-2xl font-bold">1. Oil & Fluids</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Change engine oil as recommended (often 5,000–7,500mi).</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Top up coolant, brake fluid, and power steering regularly, especially before summer and winter
                          extremes.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Flush and replace transmission fluid at recommended intervals to keep gears smooth.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Battery className="h-8 w-8 text-yellow-600" />
                      <h2 className="text-2xl font-bold">2. Battery Care</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Idaho's cold winters and hot summers drain batteries faster.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Clean terminals, check for swelling, and replace batteries every 3–5 years.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          If you notice slow cranking or dim lights, get a checkup—at home!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Image
                    src="/images/work2.jpg"
                    alt="Brake and tire maintenance"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/images/work4.jpg"
                    alt="Engine component maintenance"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="h-8 w-8 text-red-600" />
                      <h2 className="text-2xl font-bold">3. Brakes & Tires</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Listen for squeaks, grinding, or pulsating pedal; these are early warning signs of worn pads
                          or rotors.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Inspect tire tread for even wear and maintain correct air pressure—our mobile service does
                          tire checks, rotations, and brake jobs at your location.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Wrench className="h-8 w-8 text-green-600" />
                      <h2 className="text-2xl font-bold">4. Belts, Hoses & Air Filters</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Cracks, leaks, or frays in belts and hoses signal future breakdown risk, especially on long
                          trips or rural roads.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Replace air and cabin filters for best engine performance and cabin comfort (important for
                          Idaho dust/allergens).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-8 w-8 text-purple-600" />
                      <h2 className="text-2xl font-bold">5. Lights & Warning Systems</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Test all headlights, brake lights, turn signals, and dashboard indicators.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Address warning lights promptly for safety—J&L Mobile Mechanic LLC can do a full dashboard
                          scan wherever you're parked.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Image
                    src="/images/work5.jpg"
                    alt="Engine maintenance work"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/images/work6.jpg"
                    alt="Engine component service"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-lg my-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Let Car Maintenance Slide?</h2>
                  <p className="text-gray-700 text-lg mb-6">
                    Deferred maintenance costs Idaho drivers thousands on emergency repairs each year. Mobile mechanics
                    make it easy—no excuses! J&L Mobile Mechanic LLC proudly services all makes and models with
                    friendly, honest support.
                  </p>
                  <p className="text-gray-700 text-lg font-semibold">
                    Ready for a tune-up or peace of mind check before your next Idaho road trip? Call, text, or email
                    for prompt service wherever you are, and see why customers rate us 100% for trust and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for Professional Maintenance Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for a breakdown to think about maintenance. J&L Mobile Mechanic LLC provides comprehensive
            maintenance services at your location throughout Buhl, Filer, Twin Falls, and surrounding areas. We service
            all makes and models!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+16618097479">Schedule Service: (661) 809-7479</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <a href="mailto:joshuaheartsill@icloud.com">Email Us</a>
            </Button>
          </div>

          <p className="mt-6 text-blue-100">
            Available 24/7 for emergency services • Veteran-owned and operated • We service all makes and models
          </p>
        </div>
      </section>
    </div>
  )
}
