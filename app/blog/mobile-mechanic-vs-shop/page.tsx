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
  Clock,
  MapPin,
  Shield,
  DollarSign,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mobile Mechanic or Auto Repair Shop? The Ultimate Guide for Idaho Drivers",
  description:
    "Understand the differences between mobile mechanics and auto shops in Idaho. Find out which repair option is best for you—and your budget!",
  keywords:
    "mobile mechanic vs auto shop Idaho, mobile mechanic benefits Buhl ID, auto repair comparison Twin Falls, mobile mechanic advantages",
}

export default function MobileVsShopBlogPost() {
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

            <Badge className="bg-blue-600 text-white mb-4">Service Comparison</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Mobile Mechanic or Auto Repair Shop? The Ultimate Guide for Idaho Drivers
            </h1>

            <div className="flex items-center gap-4 text-blue-200 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>January 10, 2025</span>
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
                If your car breaks down in Buhl, Twin Falls, or Filer, should you call a local shop—or a mobile
                mechanic? Both have their place, but today, more Idaho drivers are choosing on-site car repair. Here's
                what you need to know:
              </p>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Image
                  src="/images/work2.jpg"
                  alt="Mobile mechanic working on engine"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/work5.jpg"
                  alt="Engine repair work in progress"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-green-900 mb-6">Mobile Mechanic Advantages:</h2>

                <div className="space-y-6">
                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-bold">Repairs on Your Schedule</h3>
                      </div>
                      <p className="text-gray-700">
                        Mobile mechanics come to you. No need to arrange rides, sit in waiting rooms, or leave your
                        vehicle for days. Whether you're at home, at work, or stranded, expert repairs are just a call
                        away.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-bold">On-the-Spot Diagnostics</h3>
                      </div>
                      <p className="text-gray-700">
                        Problems are diagnosed with professional-grade tools and scanners, so you understand the issue
                        before repair begins.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-bold">Fair, Transparent Pricing</h3>
                      </div>
                      <p className="text-gray-700">
                        With small, owner-operated businesses like J&L Mobile Mechanic LLC, you pay for quality work—not
                        hidden shop fees or extras. Pricing is discussed up front.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <User className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-bold">Personalized Service</h3>
                      </div>
                      <p className="text-gray-700">
                        Talk to the mechanic—often the company owner—who works directly on your vehicle. You get honest
                        advice, real answers, and accountability.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <h3 className="text-xl font-bold">Service for All Makes and Models</h3>
                      </div>
                      <p className="text-gray-700">
                        Gone are the days when mobile mechanics handled only basic repairs. Today's top mobile techs in
                        Idaho have the experience and equipment for battery, starter, alternator, brakes, engine
                        diagnostics, routine service, even advanced computer and electrical repairs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Image
                  src="/images/work6.jpg"
                  alt="Engine component repair"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/work1.jpg"
                  alt="Cylinder head work"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Traditional Auto Shop Benefits:</h2>

                <div className="space-y-4">
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-bold">Big Repairs and Specialty Tools</h3>
                      </div>
                      <p className="text-gray-700">
                        Some repairs—like engine swaps or tire mounting—may require special shop equipment or lifts. In
                        rare cases, a shop may be faster for these specialized jobs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-bold">Long-Term Facility</h3>
                      </div>
                      <p className="text-gray-700">
                        Shops may offer multi-day storage if your car requires extensive or custom work.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-lg my-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Which Should You Choose?</h2>
                <p className="text-gray-700 text-lg mb-6">
                  For 90% of typical break-downs or regular car maintenance, a skilled mobile mechanic is faster,
                  cheaper, and more convenient—especially across rural Idaho, where towing can be slow and expensive.
                  When you need major structural repairs or services needing specialty equipment, your trusted mobile
                  mechanic can recommend the right partner shop.
                </p>
                <p className="text-gray-700 text-lg font-semibold">
                  J&L Mobile Mechanic LLC offers the best of both worlds—expertise, flexibility, and deep local
                  knowledge—for all makes and models. Whether you're on 9th Street in Buhl or miles outside Twin Falls,
                  we bring trustworthy service to your driveway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience Mobile Mechanic Convenience</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to try the mobile mechanic advantage? J&L Mobile Mechanic LLC brings professional service directly to
            your location throughout Buhl, Filer, Twin Falls, and surrounding areas. We service all makes and models!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+16618097479">Call: (661) 809-7479</a>
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
