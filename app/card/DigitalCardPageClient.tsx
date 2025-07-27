"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, MapPin, Star, Download, Share2, Facebook, Clock, Shield } from "lucide-react"

export default function DigitalCardPageClient() {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:J&L Mobile Mechanic LLC
ORG:J&L Mobile Mechanic LLC
TITLE:Mobile Auto Repair Services
TEL;TYPE=WORK,VOICE:(661) 809-7479
TEL;TYPE=CELL:(661) 809-7479
EMAIL:joshuaheartsill@icloud.com
URL:https://jlmobilemechanic.com
ADR;TYPE=WORK:;;9th Street;Buhl;ID;83316;USA
NOTE:Veteran-owned mobile mechanic serving Buhl, Filer, Twin Falls, and surrounding areas. Available 24/7 for emergency services. We service all makes and models.
END:VCARD`

    const blob = new Blob([vCardData], { type: "text/vcard" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "JL-Mobile-Mechanic.vcf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "J&L Mobile Mechanic LLC",
          text: "Veteran-owned mobile mechanic in Buhl, ID. Professional auto repair services that come to you!",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-md">
        {/* Digital Business Card */}
        <Card className="mb-6 overflow-hidden">
          <div className="bg-gradient-to-br from-blue-900 to-red-800 text-white p-6 text-center">
            <Image
              src="/images/logo.jpg"
              alt="J&L Mobile Mechanic LLC"
              width={100}
              height={100}
              className="rounded-full mx-auto mb-4 border-4 border-white"
            />
            <h1 className="text-2xl font-bold mb-2">J&L Mobile Mechanic LLC</h1>
            <p className="text-red-300 font-semibold mb-1">Veteran Owned & Operated</p>
            <p className="text-blue-200">Est. 2025</p>

            <div className="flex justify-center gap-2 mt-4">
              <Badge className="bg-red-600 text-white">
                <Shield className="mr-1 h-3 w-3" />
                Veteran Owned
              </Badge>
              <Badge className="bg-blue-600 text-white">
                <Clock className="mr-1 h-3 w-3" />
                24/7 Service
              </Badge>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Mobile Auto Repair Services</h2>
              <p className="text-gray-600">Professional mechanic services that come to you!</p>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3 mb-6">
              <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg">
                <a href="tel:+16618097479" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Click to Call: (661) 809-7479
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full text-lg bg-transparent">
                <a href="sms:+16618097479" className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Send Text Message
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full text-lg bg-transparent">
                <a href="mailto:joshuaheartsill@icloud.com" className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>

            {/* Service Area */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <h3 className="font-bold">Service Area</h3>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Primary Areas:</strong>
                </p>
                <p>• 9th Street, Buhl, ID 83316</p>
                <p>• Filer, ID 83328</p>
                <p>• Twin Falls, ID 83301</p>
                <p className="mt-2">
                  <strong>Extended Service:</strong> 50-mile radius
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-center">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">Experience</p>
                <p className="text-lg font-bold text-blue-900">14+ Years</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-800">Reviews</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-lg font-bold text-green-900">5.0</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <Button onClick={handleDownloadVCard} size="lg" variant="outline" className="w-full bg-transparent">
            <Download className="mr-2 h-5 w-5" />
            Add to Contacts (Download vCard)
          </Button>

          <Button onClick={handleShare} size="lg" variant="outline" className="w-full bg-transparent">
            <Share2 className="mr-2 h-5 w-5" />
            Share This Card
          </Button>
        </div>

        {/* Social Links */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-bold mb-3 text-center">Connect With Us</h3>
            <div className="space-y-2">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a
                  href="https://m.me/jlmobilemechanic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Message on Facebook
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full bg-transparent">
                <a
                  href="https://www.facebook.com/profile.php?id=61578019610829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  Leave a Facebook Review
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Services Preview */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-bold mb-3 text-center">Our Services</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <p>• Diagnostics</p>
                <p>• Brake Repairs</p>
                <p>• Oil Changes</p>
              </div>
              <div className="space-y-1">
                <p>• Battery Service</p>
                <p>• Routine Maintenance</p>
                <p>• General Repairs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Notice */}
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <h3 className="font-bold text-red-800 mb-2">24/7 Emergency Service</h3>
            <p className="text-sm text-red-700 mb-3">
              Car trouble doesn't wait for business hours. We're available around the clock for emergency repairs.
            </p>
            <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
              <a href="tel:+16618097479">Emergency Call Now</a>
            </Button>
          </CardContent>
        </Card>

        {/* Save Instructions */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p className="mb-2">
            💡 <strong>Save this card:</strong>
          </p>
          <p>
            Bookmark this page or download the vCard to keep our contact information handy for future auto repair needs.
          </p>
        </div>
      </div>
    </div>
  )
}
