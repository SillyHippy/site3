import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Shield, Star, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact J&L Mobile Mechanic LLC - Mobile Auto Repair in Buhl, ID | Call (661) 809-7479",
  description:
    "Contact J&L Mobile Mechanic LLC for professional mobile auto repair in Buhl, Filer, Twin Falls, ID. Call (661) 809-7479, text, or email for service.",
  keywords:
    "contact mobile mechanic Buhl ID, J&L Mobile Mechanic phone number, auto repair contact Twin Falls, mobile mechanic 83316",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact J&L Mobile Mechanic LLC</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Ready to get your vehicle serviced? We prefer direct contact for the fastest, most personal service.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-red-600 text-white px-4 py-2">
                <Shield className="mr-1 h-4 w-4" />
                Veteran Owned
              </Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2">
                <Clock className="mr-1 h-4 w-4" />
                24/7 Emergency Service
              </Badge>
              <Badge className="bg-green-600 text-white px-4 py-2">
                <Star className="mr-1 h-4 w-4" />
                100% Recommended
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch - No Contact Form Required
              </h2>
              <p className="text-xl text-gray-600">
                We believe in personal service. Please call, text, or email us directly to request service, ask
                questions, or schedule an appointment.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Image
                    src="/images/logo.jpg"
                    alt="J&L Mobile Mechanic LLC"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">J&L Mobile Mechanic LLC</h3>
                    <p className="text-red-600 font-semibold">Veteran Owned & Operated • Est. 2025</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-red-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Phone className="h-8 w-8 text-red-600 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">Call or Text</h4>
                          <p className="text-gray-600 mb-3">Best for immediate service and emergency calls</p>
                          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 w-full">
                            <a href="tel:+16618097479" className="flex items-center justify-center gap-2">
                              <Phone className="h-5 w-5" />
                              (661) 809-7479
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Mail className="h-8 w-8 text-blue-600 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">Email</h4>
                          <p className="text-gray-600 mb-3">For detailed service requests and questions</p>
                          <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                            <a
                              href="mailto:joshuaheartsill@icloud.com"
                              className="flex items-center justify-center gap-2"
                            >
                              <Mail className="h-5 w-5" />
                              joshuaheartsill@icloud.com
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Facebook className="h-8 w-8 text-green-600 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">Facebook Messenger</h4>
                          <p className="text-gray-600 mb-3">Quick messages and service scheduling</p>
                          <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                            <a
                              href="https://m.me/61578019610829"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <MessageCircle className="h-5 w-5" />
                              Message Us on Messenger
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-red-600" />
                      <CardTitle>Service Area</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Primary Service Areas:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• 9th street buhl Idaho, Buhl, ID, United States, 83316 (Our home base)</li>
                          <li>• Filer, ID 83328</li>
                          <li>• Twin Falls, ID 83301</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Extended Service:</h4>
                        <p className="text-gray-700">
                          50-mile radius from Buhl, including Jerome, Gooding, Wendell, Shoshone, and surrounding
                          communities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <CardTitle>Service Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-blue-900">Hours:</h4>
                        <p className="text-blue-800">Always open</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                      <h4 className="font-bold text-green-900 mb-2">Customer Reviews</h4>
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-green-800 font-semibold">100% recommend (7 Reviews)</p>
                      <Button asChild size="sm" variant="outline" className="mt-3 bg-transparent">
                        <a
                          href="https://m.me/61578019610829"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Message Us on Messenger
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include When Contacting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                When You Contact Us, Please Include:
              </h2>
              <p className="text-xl text-gray-600">
                This information helps us prepare for your service call and provide accurate estimates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-red-600" />
                    Location Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your specific location (address or landmark)</li>
                    <li>• City and ZIP code</li>
                    <li>• Any access considerations (gated community, apartment complex, etc.)</li>
                    <li>• Preferred service time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Vehicle Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Year, make, and model of your vehicle</li>
                    <li>• Description of the problem or service needed</li>
                    <li>• Any warning lights or unusual symptoms</li>
                    <li>• Whether the vehicle is drivable</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Zap className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Emergency Service Available 24/7</h2>
            <p className="text-xl mb-8 text-red-100">
              Car trouble doesn't wait for business hours. Whether you're stranded on the highway, won't start in your
              driveway, or need urgent repairs, we're here to help around the clock.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Fast Response</h3>
                <p className="text-red-100">1-2 hour response time for emergencies</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Wide Coverage</h3>
                <p className="text-red-100">50-mile service radius from Buhl</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <Shield className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Reliable Service</h3>
                <p className="text-red-100">Veteran-owned dependability</p>
              </div>
            </div>

            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Phone className="mr-2 h-6 w-6" />
              <a href="tel:+16618097479">Emergency Call: (661) 809-7479</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
