import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                Your Journey to Global Opportunities Starts Here
              </h1>
              <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl">
                Professional visa and immigration consultancy services to help you achieve your international goals with
                confidence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/demo.jpg?height=600&width=600"
                alt="Visa consultancy services"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
