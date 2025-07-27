import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Gauge, Car, Wrench, Battery, Zap, Settings, Shield, Clock, MapPin, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Mobile Auto Repair Services in Buhl, ID | J&L Mobile Mechanic LLC",
  description:
    "Professional mobile mechanic services: diagnostics, brake repair, oil changes, battery replacement, and more. Serving Buhl, Filer, Twin Falls, ID. Call (661) 809-7479",
  keywords:
    "mobile mechanic services Buhl ID, brake repair Twin Falls, oil change Filer Idaho, car diagnostics 83316, battery replacement mobile mechanic",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Gauge,
      title: "Automotive Diagnostics",
      description:
        "Advanced diagnostic equipment to quickly identify issues with your vehicle's engine, transmission, electrical systems, and more.",
      features: [
        "Computer diagnostic scans",
        "Engine performance analysis",
        "Electrical system testing",
        "Transmission diagnostics",
        "Check engine light diagnosis",
      ],
      color: "text-red-600",
    },
    {
      icon: Car,
      title: "Brake Repairs & Service",
      description:
        "Complete brake system service including pad replacement, rotor resurfacing, brake fluid changes, and safety inspections.",
      features: [
        "Brake pad replacement",
        "Rotor resurfacing/replacement",
        "Brake fluid service",
        "Brake line repairs",
        "Safety inspections",
      ],
      color: "text-blue-600",
    },
    {
      icon: Wrench,
      title: "Oil Changes & Fluid Services",
      description:
        "Quick and convenient oil changes using quality oils and filters, plus comprehensive fluid maintenance services.",
      features: [
        "Conventional & synthetic oil changes",
        "Filter replacement",
        "Fluid level checks",
        "Coolant service",
        "Power steering fluid",
      ],
      color: "text-green-600",
    },
    {
      icon: Battery,
      title: "Battery & Electrical Service",
      description:
        "Battery testing, replacement, and electrical system repairs to keep your vehicle starting reliably.",
      features: [
        "Battery testing & replacement",
        "Jump-start services",
        "Alternator testing",
        "Starter motor service",
        "Electrical troubleshooting",
      ],
      color: "text-yellow-600",
    },
    {
      icon: Settings,
      title: "Routine Maintenance",
      description: "Preventive maintenance services to keep your vehicle running smoothly and avoid costly repairs.",
      features: [
        "Scheduled maintenance",
        "Belt & hose inspection",
        "Air filter replacement",
        "Spark plug service",
        "Tune-ups",
      ],
      color: "text-purple-600",
    },
    {
      icon: Zap,
      title: "General Repairs",
      description:
        "Comprehensive repair services for most makes and models, from minor fixes to major mechanical work.",
      features: [
        "Engine repairs",
        "Transmission service",
        "Suspension work",
        "Exhaust system repairs",
        "AC/heating service",
      ],
      color: "text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Mobile Auto Repair Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Comprehensive automotive services brought directly to your location in Buhl, Filer, Twin Falls, and
              surrounding areas
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
                <MapPin className="mr-1 h-4 w-4" />
                50-Mile Service Radius
              </Badge>
            </div>
            <p className="text-2xl font-bold mt-4">WE SERVICE ALL MAKES AND MODELS</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mobile Mechanic Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we bring professional automotive service directly to you. No
              need to waste time at a shop—we come to your home, office, or wherever you are.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className={`h-12 w-12 ${service.color}`} />
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
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

      {/* Why Mobile Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Mobile Auto Repair?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Save Time</h3>
                    <p className="text-gray-600">
                      No need to drive to a shop, wait around, or arrange alternative transportation. We come to you, so
                      you can continue with your day.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Convenient Location</h3>
                    <p className="text-gray-600">
                      Whether you're at home, work, or stranded somewhere, we'll come to your location anywhere within
                      our 50-mile service radius.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Service</h3>
                    <p className="text-gray-600">
                      Watch the work being done on your vehicle and ask questions. We believe in complete transparency
                      and education.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Service Areas</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">Primary Service Areas:</h4>
                  <div className="space-y-1">
                    <p className="text-gray-700">Buhl, ID 83316</p>
                    <p className="text-gray-700">Filer, ID 83328</p>
                    <p className="text-gray-700">Twin Falls, ID 83301</p>
                  </div>
                </div>
                <div className="text-center border-t pt-4">
                  <h4 className="font-bold text-lg mb-2">Extended Service:</h4>
                  <p className="text-gray-700">50-mile radius from Buhl, ID</p>
                  <p className="text-sm text-gray-600 mt-2">Call to confirm service availability in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makes and Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Makes & Models We Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work on most domestic and foreign vehicles. Our experience spans across many makes and models, from
              everyday commuters to work trucks.
            </p>
            <p className="text-2xl font-bold mt-4">WE SERVICE ALL MAKES AND MODELS</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Domestic Brands</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Ford • Chevrolet • GMC</p>
                  <p>Dodge • Chrysler • Jeep</p>
                  <p>Cadillac • Buick</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Japanese Brands</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Toyota • Honda • Nissan</p>
                  <p>Mazda • Subaru</p>
                  <p>Acura • Lexus • Infiniti</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">European Brands</h3>
                <div className="space-y-1 text-gray-600">
                  <p>BMW • Mercedes-Benz</p>
                  <p>Audi • Volkswagen</p>
                  <p>Volvo • Saab</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Korean Brands</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Hyundai • Kia</p>
                  <p>Genesis</p>
                  <p className="text-sm mt-3">And many more!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your vehicle's make or model listed? Give us a call—we likely service it!
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <a href="tel:+16618097479">
                <Phone className="mr-2 h-5 w-5" />
                Call to Confirm: (661) 809-7479
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Schedule Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let car troubles slow you down. Contact J&L Mobile Mechanic LLC today for fast, professional, and
            convenient auto repair services at your location.
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
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <p className="text-blue-100">
            Available 24/7 for emergency services • Serving Buhl, Filer, Twin Falls & 50-mile radius
          </p>
          <p className="text-blue-100">Email: joshuaheartsill@icloud.com</p>
        </div>
      </section>
    </div>
  )
}
