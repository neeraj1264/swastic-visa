"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Contact Us</h2>
            <p className="max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-xl">
              Get in touch with our visa experts to start your journey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Fill out the form below and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-10 md:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-10 md:h-11"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-10 md:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="service"
                      placeholder="Service Interested In"
                      value={formData.service}
                      onChange={handleChange}
                      className="h-10 md:h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[100px] md:min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full h-10 md:h-11">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Our Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Address</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">IN JP TOWER, SUPER MARKET</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">NEAR BUS STAND, PEHOWA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">+91 99922-93760</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">+91 77770-72132</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">xyz@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Business Hours</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Book a Consultation</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Schedule a one-on-one consultation with our visa experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full h-10 md:h-11">Schedule Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
