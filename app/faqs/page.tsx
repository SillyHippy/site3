import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, MessageCircle, Clock, MapPin, Shield, Wrench, DollarSign, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - J&L Mobile Mechanic LLC | Mobile Auto Repair FAQ",
  description:
    "Get answers to common questions about J&L Mobile Mechanic LLC services, pricing, service areas, and mobile auto repair in Buhl, Filer, Twin Falls, ID.",
  keywords:
    "mobile mechanic FAQ Buhl ID, auto repair questions Twin Falls, mobile mechanic pricing Idaho, service area questions 83316",
}

export default function FAQsPage() {
  const faqCategories = [
    {
      title: "Service Areas & Availability",
      icon: MapPin,
      color: "text-red-600",
      faqs: [
        {
          question: "What areas do you serve?",
          answer:
            "We serve Buhl, Filer, Twin Falls, and a 50-mile radius from our Buhl, ID base. Our primary service areas include ZIP codes 83316, 83328, and 83301. We also provide service to surrounding communities like Jerome, Gooding, Wendell, Shoshone, and many others within our service radius. Call us to confirm service availability in your specific location.",
        },
        {
          question: "Are you really open 24/7?",
          answer:
            "Yes! We provide 24/7 emergency mobile mechanic services for urgent situations like breakdowns, won't-start issues, and roadside emergencies. For routine maintenance and non-emergency repairs, we schedule appointments during regular business hours. Emergency service may include additional fees for after-hours calls.",
        },
        {
          question: "How quickly can you respond to a service call?",
          answer:
            "Response times vary by location and service type. For emergency calls in our primary service areas (Buhl, Filer, Twin Falls), we typically respond within 1-2 hours. Same-day service is usually available within 2-4 hours for non-emergency calls. Extended service areas may require next-day scheduling.",
        },
        {
          question: "Do you charge extra to come to my location?",
          answer:
            "Travel fees depend on distance from our Buhl base. There's no travel charge for locations within 15 miles. Minimal travel fees apply for 15-35 mile distances, and standard travel fees for 35-50 mile distances. All travel fees are disclosed upfront before scheduling service.",
        },
      ],
    },
    {
      title: "Services & Capabilities",
      icon: Wrench,
      color: "text-blue-600",
      faqs: [
        {
          question: "What makes and models do you work on?",
          answer:
            "We service most domestic and foreign vehicles including Ford, Chevrolet, GMC, Dodge, Toyota, Honda, Nissan, BMW, Mercedes-Benz, Audi, Hyundai, Kia, and many others. Our experience spans cars, trucks, SUVs, and light commercial vehicles. If you're unsure about your specific vehicle, give us a call to confirm.",
        },
        {
          question: "What services can you perform on-site?",
          answer:
            "We can perform most automotive repairs and maintenance services at your location, including diagnostics, brake repairs, oil changes, battery replacement, starter/alternator service, belt and hose replacement, tune-ups, and many engine repairs. Some complex services may require shop facilities, which we'll discuss upfront.",
        },
        {
          question: "Do you have the same diagnostic equipment as a shop?",
          answer:
            "Yes! We bring professional-grade diagnostic equipment to every service call, including computer scanners, multimeters, and specialized tools. Our mobile setup allows us to perform comprehensive diagnostics and most repairs right at your location with the same quality as a traditional shop.",
        },
        {
          question: "Can you perform warranty work?",
          answer:
            "We can perform many types of warranty work depending on your vehicle's warranty terms. We'll work with you to understand your warranty requirements and provide documentation as needed. Contact us to discuss your specific warranty situation.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      icon: DollarSign,
      color: "text-green-600",
      faqs: [
        {
          question: "How do you determine pricing for mobile service?",
          answer:
            "Our pricing is competitive with traditional shops and includes the convenience of mobile service. We provide upfront estimates before beginning work, with no hidden fees. Pricing includes labor, parts (at competitive rates), and any applicable travel fees. Emergency after-hours service may include additional charges.",
        },
        {
          question: "Do you provide estimates before starting work?",
          answer:
            "We believe in complete transparency. After diagnosing the issue, we'll provide a detailed estimate including parts and labor costs. We never begin work without your approval of the estimate. If additional issues are discovered during repair, we'll contact you before proceeding.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, check, and most major credit cards. Payment is due upon completion of service. For larger repairs, we may be able to arrange payment plans on a case-by-case basis. We'll discuss payment options when scheduling your service.",
        },
        {
          question: "Do you warranty your work?",
          answer:
            "Yes! We stand behind our work with warranties on both parts and labor. Warranty terms vary by service type and parts used. We'll explain warranty coverage for your specific repair when providing the estimate. Our veteran-owned business is built on integrity and customer satisfaction.",
        },
      ],
    },
    {
      title: "Scheduling & Process",
      icon: Clock,
      color: "text-purple-600",
      faqs: [
        {
          question: "How do I request service on short notice?",
          answer:
            "For urgent needs, call us directly at (661) 809-7479. We prioritize emergency calls and will do our best to accommodate same-day service requests. For non-emergency services, we can often schedule within 24-48 hours depending on our current workload.",
        },
        {
          question: "What information do you need when I call?",
          answer:
            "Please have ready: your location, vehicle year/make/model, description of the problem or service needed, and your preferred time frame. This helps us prepare the right tools and parts, and provide accurate time estimates for your service call.",
        },
        {
          question: "What should I expect during a mobile service call?",
          answer:
            "Our technician will arrive in a fully-equipped service vehicle, assess your vehicle's needs, provide an estimate, and perform approved repairs on-site. We'll explain what we're doing and answer any questions. The process is transparent, professional, and convenient.",
        },
        {
          question: "Can you work in any weather conditions?",
          answer:
            "We work in most weather conditions, though extreme weather (severe storms, heavy snow) may require rescheduling for safety reasons. We have portable shelters for light rain and can work in cold conditions. Idaho weather rarely stops us from providing service!",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Get answers to common questions about our mobile mechanic services in Buhl, Filer, Twin Falls, and
              surrounding Idaho areas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="h-4 w-4" />
                <span>Veteran Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Question? Contact Us Directly!</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <a href="tel:+16618097479" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call: (661) 809-7479
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="sms:+16618097479" className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Text Us
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-xl text-gray-600">
                Our team is here to answer any questions and help you get the automotive service you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our team for immediate assistance</p>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a href="tel:+16618097479">(661) 809-7479</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Text Message</h3>
                  <p className="text-gray-600 mb-4">Send us a text for quick questions or scheduling</p>
                  <Button asChild variant="outline">
                    <a href="sms:+16618097479">Text Us</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
                  <p className="text-gray-600 mb-4">24/7 availability for urgent automotive needs</p>
                  <Button asChild variant="outline">
                    <a href="tel:+16618097479">Emergency Call</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Reminder */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving South-Central Idaho</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            J&L Mobile Mechanic LLC proudly serves Buhl, Filer, Twin Falls, and a 50-mile radius with professional,
            veteran-owned mobile automotive services. We bring the shop to you!
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
              <MapPin className="mr-2 h-5 w-5" />
              View Service Areas
            </Button>
          </div>

          <p className="mt-6 text-blue-100">
            Available 24/7 for emergency services • Veteran-owned and operated with pride
          </p>
        </div>
      </section>
    </div>
  )
}
