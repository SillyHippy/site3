import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function CustomerReviews() {
  const reviews = [
    {
      text: "Joshua was there in under an hour, diagnosed and fixed my starter and battery for a fair price. Very honest and timely.",
      author: "Local Customer",
    },
    {
      text: "Prompt, knowledgeable, and personable. Didn't upcharge my mom and was very reasonable.",
      author: "Local Customer",
    },
    {
      text: "Fast, friendly, and knowledgeable. Will use again and recommend to anyone.",
      author: "Local Customer",
    },
    {
      text: "Very honest and helpful when I needed help with my car.",
      author: "Local Customer",
    },
    {
      text: "Professional and reliable. Helped with repairs from bearings to filters—excellent every time.",
      author: "Local Customer",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">100% Recommended</h2>
          <p className="text-xl text-gray-600">
            Real reviews from satisfied customers across Buhl, Filer, and Twin Falls
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">- {review.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.facebook.com/profile.php?id=61578019610829"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <Star className="h-5 w-5" />
            Read More Reviews on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
