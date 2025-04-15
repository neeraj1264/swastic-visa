import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student Visa to Canada",
      content:
        "VisaPath made my student visa application process incredibly smooth. Their guidance was invaluable, and I'm now pursuing my dream education in Canada!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Work Permit to Australia",
      content:
        "I was struggling with my work permit application until I found VisaPath. Their expertise and attention to detail ensured my application was approved without any issues.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Family Sponsorship",
      content:
        "Reuniting with my family seemed like a distant dream until VisaPath stepped in. Their consultants were compassionate and professional throughout the entire process.",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Client Success Stories
            </h2>
            <p className="max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-xl">
              Hear from our clients who have successfully achieved their immigration goals
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                    ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-sm sm:text-base">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
