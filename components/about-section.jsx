import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const features = [
    "Licensed immigration consultants",
    "Personalized visa strategies",
    "High success rate",
    "Transparent process",
    "Ongoing support and updates",
    "Multilingual consultants",
  ]

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="About our visa consultancy"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                About VisaPath
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground md:text-xl">
                With over 15 years of experience, we've helped thousands of clients achieve their immigration goals.
              </p>
            </div>
            <div className="space-y-4 mt-4 md:mt-6">
              <p className="text-sm sm:text-base">
                Our team of certified immigration consultants specializes in providing tailored visa solutions for
                individuals, families, and businesses. We understand that each case is unique, and we pride ourselves on
                our personalized approach.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-sm sm:text-base">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
