import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Phone, MessageCircle, AlertTriangle, Wrench, Battery, Gauge } from "lucide-react"

export const metadata: Metadata = {
  title: "5 Urgent Signs You Need a Mobile Mechanic in Buhl, Idaho (And How to Handle Car Trouble Fast)",
  description:
    "Recognize early warning signs of vehicle trouble in Idaho and get expert mobile help—no tow needed! Fast, honest local repairs for all makes and models.",
  keywords:
    "mobile mechanic Buhl Idaho, car trouble signs, emergency auto repair Twin Falls, vehicle breakdown Filer ID, mobile mechanic 83316",
}

export default function UrgentSignsBlogPost() {
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

            <Badge className="bg-red-600 text-white mb-4">Emergency Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              5 Urgent Signs You Need a Mobile Mechanic in Buhl, Idaho (And How to Handle Car Trouble Fast)
            </h1>

            <div className="flex items-center gap-4 text-blue-200 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
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
                Car trouble rarely waits until you're ready. In rural Idaho, prompt help matters—whether you live in
                Buhl, Filer, Twin Falls, or anywhere nearby. As a veteran-owned business, J&L Mobile Mechanic LLC has
                rescued countless drivers in urgent situations. Here's what every driver should watch for, and how local
                mobile mechanics make breakdowns less stressful:
              </p>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <Image
                    src="/images/work3.jpg"
                    alt="Engine diagnostic work"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <Image
                    src="/images/work7.jpg"
                    alt="Engine bay repair work"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Battery className="h-8 w-8 text-red-600" />
                      <h2 className="text-2xl font-bold">1. Silence or Clicks When You Turn the Key</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Nothing happens, or you just hear clicking? This could be a dead battery, corroded terminals, a
                      bad starter, or wiring issues. Instead of waiting hours or paying for a tow, a mobile mechanic
                      arrives fast, tests your components with professional tools, and gets you moving—on the spot,
                      wherever you're parked.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-8 w-8 text-yellow-600" />
                      <h2 className="text-2xl font-bold">2. Dashboard Lights That Stay On</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Is your "check engine," battery, or ABS light lit up? Ignore them and small glitches can snowball
                      into severe—and expensive—damage. J&L Mobile Mechanic LLC carries advanced diagnostic scanners for
                      all makes and models, so we'll pinpoint problems quickly and advise you right at your location,
                      without third-party markups.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Gauge className="h-8 w-8 text-blue-600" />
                      <h2 className="text-2xl font-bold">3. Unfamiliar Noises or Vibrations</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Squealing brakes, grinding or scraping sounds, odd smells, or shaking steering can all forecast
                      major repairs if left unaddressed. Suffering through these symptoms instead of calling for help
                      means risking roadside breakdowns or unsafe driving. Our local mobile service lets you stay home
                      (or at work) while seasoned pros locate issues and fix them with the right parts and service.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Image
                    src="/images/work1.jpg"
                    alt="Engine cylinder head repair"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/images/work4.jpg"
                    alt="Engine block repair work"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <Card className="border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Wrench className="h-8 w-8 text-green-600" />
                      <h2 className="text-2xl font-bold">4. Leaking Fluids</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Noticed engine oil, transmission fluid, or coolant puddling under your car? Even small leaks can
                      spell disaster for your engine or transmission if ignored. With local cold snaps and summer heat,
                      Idaho cars need regular attention—our mobile service checks, repairs, and tops off fluids on-site,
                      saving you from costly repairs later.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-8 w-8 text-purple-600" />
                      <h2 className="text-2xl font-bold">5. Loss of Power, Poor Brakes, or Unsteady Handling</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      If your car hesitates on acceleration, brakes feel spongy or slow, or you sense pulling or
                      wobbling, call help immediately! Our mobile response means same-day assessment and repair—reducing
                      accident risk and avoiding full shop downtime.
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-lg my-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Take the Stress Out of Emergencies</h2>
                  <p className="text-gray-700 text-lg mb-6">
                    We service all makes and models—domestic or import. Our owner-operated approach puts honesty and
                    speed first, with direct-to-customer communication and no pushy upsells. For Buhl, Filer, and Twin
                    Falls drivers, a mobile mechanic is the fastest, safest way to get back on the road.
                  </p>
                  <p className="text-gray-700 text-lg font-semibold">
                    Don't wait—call, text, or email J&L Mobile Mechanic LLC today and see why our clients rate us 100%
                    for reliability and trust.
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Emergency Mobile Mechanic Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let car trouble leave you stranded. J&L Mobile Mechanic LLC provides fast, professional service
            throughout Buhl, Filer, Twin Falls, and surrounding areas. We service all makes and models!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+16618097479">Emergency Call: (661) 809-7479</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              <a href="sms:+16618097479">Text Us Now</a>
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
