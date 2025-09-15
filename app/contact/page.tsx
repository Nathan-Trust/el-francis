"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          childAge: "",
          message: "",
        })
      } else {
        const message = `Hello! I'm interested in enrolling my child at Elfrancis International School.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nChild's Age: ${formData.childAge}\nMessage: ${formData.message}`
        const whatsappUrl = `https://wa.me/2348153322520?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      const message = `Hello! I'm interested in enrolling my child at Elfrancis International School.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nChild's Age: ${formData.childAge}\nMessage: ${formData.message}`
      const whatsappUrl = `https://wa.me/2348153322520?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to give your child the best educational start? We're here to answer your questions and guide you
              through the enrollment process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your interest. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Parent/Guardian Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+234 xxx xxx xxxx"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="childAge">Child's Age</Label>
                        <Input
                          id="childAge"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleChange}
                          placeholder="e.g., 3 years old"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your child's needs, questions about our programs, or any other information you'd like to share..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    We're here to help you with any questions about our programs and enrollment process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a
                        href="tel:+2348153322520"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +234 815 332 2520
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <a
                        href="https://wa.me/2348153322520"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a
                        href="mailto:info@elfrancisschool.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@elfrancisschool.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>School Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">Monday - Friday</p>
                      <p className="text-muted-foreground">7:30 AM - 3:00 PM</p>
                      <p className="font-semibold text-foreground mt-2">Office Hours</p>
                      <p className="text-muted-foreground">8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+2348153322520" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://wa.me/2348153322520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
