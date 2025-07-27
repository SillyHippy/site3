import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, Users, Award, Phone, Wrench, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "About J&L Mobile Mechanic LLC - Veteran-Owned Auto Repair in Buhl, ID",
  description:
    "Learn about our veteran-owned mobile mechanic business. 14+ years experience, serving Buhl, Filer, Twin Falls with honest, reliable auto repair services.",
  keywords:
    "veteran owned mechanic Buhl ID, mobile auto repair Twin Falls, honest mechanic Idaho, local car repair 83316",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About J&L Mobile Mechanic LLC</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Veteran-owned, community-focused, and committed to honest service since day one
            </p>
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="py-16 bg-white">
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
                  <Badge className="bg-red-600 text-white mb-2">
                    <Shield className="mr-1 h-4 w-4" />
                    Veteran Owned
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  J&L Mobile Mechanic LLC was founded in 2025 by a proud veteran with deep roots in the Buhl, Idaho
                  community. Our journey began long before we opened our doors—it started when our founder was just 11
                  years old, working on cars and developing a passion for automotive repair that would span over 14
                  years.
                </p>

                <p>
                  After serving our country with honor, we returned home to Idaho with a mission: to bring the same
                  dedication, integrity, and attention to detail that we learned in the military to automotive service.
                  We believe in doing things right the first time, treating every customer like family, and standing
                  behind our work with unwavering commitment.
                </p>

                <p>
                  What sets us apart isn't just our technical expertise—it's our values. We're not just fixing cars;
                  we're building relationships and serving our community with the same pride we served our country.
                  Every repair, every service call, every interaction is guided by the principles of honesty,
                  transparency, and genuine care for our neighbors.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="h-8 w-8 text-red-600" />
                    <h3 className="text-xl font-bold">14+ Years Experience</h3>
                  </div>
                  <p className="text-gray-600">
                    Started working on cars at age 11, developing deep mechanical knowledge and problem-solving skills
                    that come from years of hands-on experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold">Military Precision</h3>
                  </div>
                  <p className="text-gray-600">
                    Bringing military discipline, attention to detail, and commitment to excellence to every automotive
                    repair and service call.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                    <h3 className="text-xl font-bold">Local Roots</h3>
                  </div>
                  <p className="text-gray-600">
                    Deep connections to the Buhl, Filer, and Twin Falls communities. We're not just your mechanic—we're
                    your neighbors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from the simplest oil change to the most complex diagnostic work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest assessments, fair pricing, and transparent communication in every interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Commitment to quality workmanship and continuous improvement in our services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">
                  Supporting our local community and building lasting relationships with our neighbors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Service</h3>
                <p className="text-gray-600">
                  Putting customer needs first and going above and beyond to ensure satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Committed to Our Community</h2>
              <p className="text-xl text-gray-600">
                J&L Mobile Mechanic LLC is more than a business—we're active members of the Buhl, Filer, and Twin Falls
                communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Business Support</h3>
                <p className="text-gray-700 mb-4">
                  We believe in supporting local businesses and keeping our dollars in the community. When you choose
                  J&L Mobile Mechanic, you're supporting a local, veteran-owned business that reinvests in the area we
                  all call home.
                </p>
                <p className="text-gray-700">
                  We source parts from local suppliers when possible and work with other local businesses to provide the
                  best possible service to our customers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h3>
                <p className="text-gray-700 mb-4">
                  We understand that car troubles don't follow a 9-to-5 schedule. That's why we offer 24/7 emergency
                  services to our community members. Whether you're stranded on Highway 30 or need urgent repairs before
                  work, we're here to help.
                </p>
                <p className="text-gray-700">
                  Our commitment to service extends beyond business hours because we know how important reliable
                  transportation is to our neighbors' daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience the J&L Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to work with a mechanic who values integrity, quality, and community? Contact us today for honest,
            professional mobile auto repair services.
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
              <Star className="mr-2 h-5 w-5" />
              <a
                href="https://www.facebook.com/profile.php?id=61578019610829"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Our Reviews
              </a>
            </Button>
          </div>

          <p className="mt-6 text-blue-100">
            Serving Buhl, Filer, Twin Falls, and surrounding areas • Available 24/7 for emergencies
          </p>
          <p className="mt-2 text-blue-100">We service all makes and models</p>
          <p className="mt-2 text-blue-100">
            Email: <a href="mailto:joshuaheartsill@icloud.com">joshuaheartsill@icloud.com</a>
          </p>
        </div>
      </section>
    </div>
  )
}
