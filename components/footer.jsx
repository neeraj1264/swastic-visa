import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4 col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-bold">VisaPath</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Professional visa and immigration consultancy services to help you achieve your international goals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Services</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Tourist Visas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Work Permits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Student Visas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Family Sponsorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Permanent Residency
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Resources</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Visa Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Country Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Application Checklists
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Legal</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VisaPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
