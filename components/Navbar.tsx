"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef<HTMLElement>(null)

    const closeMenu = () => setIsMenuOpen(false)

    useEffect(() => {
        if (!isMenuOpen) return

        const handlePointerDown = (event: PointerEvent) => {
            if (!navRef.current?.contains(event.target as Node)) {
                closeMenu()
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeMenu()
        }

        document.addEventListener("pointerdown", handlePointerDown)
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isMenuOpen])

  return (
        <nav ref={navRef} className="fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 rounded-b-3xl sm:px-8 md:flex-nowrap md:py-0">
            <Link href="/" className="inline-block" onClick={closeMenu}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={50}
                    priority
                    sizes="(max-width: 639px) 160px, 200px"
                    className="h-auto w-40 sm:w-[200px]"
                />
            </Link>

            <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="rounded-xl p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--border-subtle)] md:hidden"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                id="primary-navigation"
                className={`${isMenuOpen ? "flex" : "hidden"} basis-full flex-col items-center gap-5 border-t border-[var(--border-subtle)] py-5 text-center md:flex md:basis-auto md:flex-row md:items-center md:gap-12 md:border-0 md:py-0`}
            >
                <Link href="/" onClick={closeMenu} className="font-medium text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent)]">
                    Home
                </Link>
                <Link href="/about" onClick={closeMenu} className="font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]">
                    About
                </Link>
                <Link href="/services" onClick={closeMenu} className="font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]">
                    Services
                </Link>
                <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="w-fit rounded-2xl bg-[var(--accent)] px-6 py-2.5 font-medium text-[var(--bg-surface)] shadow-sm transition-colors duration-200 hover:bg-[var(--accent-hover)] md:hidden"
                >
                    Contact Us
                </Link>
            </div>

            <Link
                href="/contact"
                className="hidden rounded-2xl bg-[var(--accent)] px-6 py-2.5 font-medium text-[var(--bg-surface)] shadow-sm transition-colors duration-200 hover:bg-[var(--accent-hover)] md:block"
            >
                Contact Us
            </Link>
    </nav>
  )
}

export default Navbar