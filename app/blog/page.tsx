import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Wrench, Snowflake, Shield, Car, Phone, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Auto Repair Blog & Resources - J&L Mobile Mechanic LLC | Idaho Car Care Tips",
  description:
    "Expert auto repair advice and Idaho-specific car care tips from J&L Mobile Mechanic LLC. Learn about vehicle maintenance, seasonal care, and more.",
  keywords:
    "auto repair blog Idaho, car maintenance tips Buhl ID, Idaho vehicle care, mobile mechanic advice, seasonal car care Idaho",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Urgent Signs You Need a Mobile Mechanic in Buhl, Idaho (And How to Handle Car Trouble Fast)",
      excerpt:
        "Recognize early warning signs of vehicle trouble in Idaho and get expert mobile help—no tow needed! Fast, honest local repairs for all makes and models.",
      date: "January 15, 2025",
      author: "J&L Mobile Mechanic LLC",
      category: "Emergency Service",
      icon: AlertTriangle,
      slug: "urgent-signs-mobile-mechanic",
      tags: ["Emergency Service", "Warning Signs", "Mobile Mechanic"],
    },
    {
      title: "Mobile Mechanic or Auto Repair Shop? The Ultimate Guide for Idaho Drivers",
      excerpt:
        "Understand the differences between mobile mechanics and auto shops in Idaho. Find out which repair option is best for you—and your budget!",
      date: "January 10, 2025",
      author: "J&L Mobile Mechanic LLC",
      category: "Service Comparison",
      icon: Car,
      slug: "mobile-mechanic-vs-shop",
      tags: ["Mobile Service", "Comparison", "Benefits"],
    },
    {
      title: "Car Maintenance Checklist: Local Tips for Reliable Driving in Buhl, Twin Falls & Filer",
      excerpt:
        "Apply these proven maintenance tips from Idaho's top-rated mobile mechanic to keep your car reliable—no matter what you drive!",
      date: "January 5, 2025",
      author: "J&L Mobile Mechanic LLC",
      category: "Maintenance",
      icon: Wrench,
      slug: "car-maintenance-checklist",
      tags: ["Maintenance", "Prevention", "Idaho Tips"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Auto Repair Blog & Resources</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Expert advice, maintenance tips, and Idaho-specific car care guidance from your trusted mobile mechanic
            </p>
            <Badge className="bg-red-600 text-white px-4 py-2">
              <User className="mr-1 h-4 w-4" />
              Written by Professional Mechanics
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-red-600 text-white mb-4">Featured Article</Badge>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <Badge variant="outline">Emergency Service</Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      5 Urgent Signs You Need a Mobile Mechanic in Buhl, Idaho (And How to Handle Car Trouble Fast)
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Car trouble rarely waits until you're ready. In rural Idaho, prompt help matters—whether you live
                      in Buhl, Filer, Twin Falls, or anywhere nearby. As a veteran-owned business, J&L Mobile Mechanic
                      LLC has rescued countless drivers in urgent situations. Learn what every driver should watch for,
                      and how local mobile mechanics make breakdowns less stressful.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        January 15, 2025
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        J&L Mobile Mechanic LLC
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/blog/urgent-signs-mobile-mechanic">
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Emergency Signs</h3>
                    <ul className="space-y-2 text-red-800">
                      <li>✓ Silence or clicks when starting</li>
                      <li>✓ Dashboard warning lights</li>
                      <li>✓ Unfamiliar noises or vibrations</li>
                      <li>✓ Leaking fluids</li>
                      <li>✓ Loss of power or poor brakes</li>
                      <li>✓ We service all makes and models</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert automotive advice tailored specifically for Idaho drivers and vehicle owners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <post.icon className="h-6 w-6 text-red-600" />
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-red-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular automotive topics and find the information you need to keep your vehicle running
              smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Snowflake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Seasonal Care</h3>
                <p className="text-gray-600 text-sm">
                  Idaho-specific seasonal maintenance and weather preparation tips.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Diagnostics</h3>
                <p className="text-gray-600 text-sm">
                  Understanding warning signs and diagnostic procedures for your vehicle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Maintenance</h3>
                <p className="text-gray-600 text-sm">Preventive maintenance schedules and DIY tips for vehicle care.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Safety</h3>
                <p className="text-gray-600 text-sm">
                  Vehicle safety tips and emergency preparedness for Idaho drivers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Professional Auto Repair Advice?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            While our blog provides helpful tips and information, nothing replaces professional diagnosis and repair.
            Contact J&L Mobile Mechanic LLC for expert automotive services in the Buhl, Filer, and Twin Falls areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+16618097479">Call for Service: (661) 809-7479</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 bg-transparent"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <p className="mt-6 text-blue-100">Professional mobile mechanic services • Available 24/7 for emergencies</p>
        </div>
      </section>
    </div>
  )
}
