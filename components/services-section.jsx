import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Globe, FileCheck, Users, Building, GraduationCap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Plane className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Tourist Visas",
      description: "Hassle-free tourist visa applications for your travel adventures around the world.",
    },
    {
      icon: <Building className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Work Permits",
      description: "Expert guidance for securing work permits and employment visas in your desired country.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Student Visas",
      description: "Comprehensive support for international students pursuing education abroad.",
    },
    {
      icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Family Sponsorship",
      description: "Reunite with your loved ones through family sponsorship and dependent visa services.",
    },
    {
      icon: <Globe className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Permanent Residency",
      description: "Strategic planning and application support for permanent residency programs.",
    },
    {
      icon: <FileCheck className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
      title: "Document Verification",
      description: "Professional verification and authentication of your important documents.",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16 lg:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-xl">
              Comprehensive visa and immigration solutions tailored to your specific needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-200">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-primary hover:underline text-sm md:text-base">
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
