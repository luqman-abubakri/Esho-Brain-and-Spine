import Image from "next/image"
import Link from "next/link"
import { Home, Info, Layers, Mail, ArrowRight, Sparkles } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Layers },
]

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="relative group flex items-center gap-2"
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={180} 
              height={45} 
              priority 
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <Sparkles className="w-4 h-4 text-[var(--accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200 group"
              >
                <Icon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>{link.label}</span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-2.5 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10">Contact Us</span>
            <Mail className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
            <div className="absolute inset-0 bg-[var(--accent-hover)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar