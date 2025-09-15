"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Elfrancis International School
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+2348153322520" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://wa.me/2348153322520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
            <Link
              href="/"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+2348153322520" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href="https://wa.me/2348153322520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
