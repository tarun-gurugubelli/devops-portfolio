import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevAnswers - Knowledge Base",
  description: "Your comprehensive resource for development questions and answers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-baseline">
            <span className="font-semibold text-lg">DevOps</span>
            <span className="text-xs font-light ml-1">by Tarun Gurugubelli</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/modules" className="text-sm font-medium hover:text-primary">
              Modules
            </Link>
            <Link href="/questions" className="text-sm font-medium hover:text-primary">
              All Qn's
            </Link>
            <Link href="/installations" className="text-sm font-medium hover:text-primary">
              Installations
            </Link>
            <Link href="/cheatsheets" className="text-sm font-medium hover:text-primary">
              Cheatsheets
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <MobileNav />
        </div>
        </header>
        {children}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevOpsKnowledgeBoard. All rights not reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
