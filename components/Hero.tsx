'use client'

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowRight, CalendarDays } from "lucide-react"

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { autoAlpha: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
      },
    )
    gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, scale: 1.05 },
      { autoAlpha: 1, scale: 1, duration: 1.1, ease: "power2.out" },
    )
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="grid min-h-[calc(100vh-76px)] grid-cols-1 overflow-hidden bg-[var(--bg-primary)] lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)]">
      <div className="flex items-center px-5 py-12 sm:px-8 lg:px-10 xl:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">Specialized neurological care</p>
          <h1 ref={headingRef} className="max-w-2xl text-5xl font-semibold leading-[1.03] tracking-tight text-blue-950 sm:text-6xl xl:text-7xl">
            Advanced care for the <span className="text-emerald-500">brain, spine, and nervous system.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            At Esho Brain & Spine, we provide world-class multidisciplinary care using advanced technology and compassionate expertise.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors duration-300 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">
              <CalendarDays size={18} aria-hidden="true" />
              Book an appointment
            </Link>
            <Link href="/services" className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-900 bg-white px-6 py-3.5 font-semibold text-blue-950 transition-colors duration-300 hover:bg-blue-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">
              Explore our services
              <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className="relative min-h-[420px] overflow-hidden lg:min-h-full"
        style={{
          clipPath: "inset(0 round 44% 10% 22% 36% / 22% 12% 18% 18%)",
          maskImage: "radial-gradient(ellipse 78% 82% at 52% 50%, #000 58%, rgba(0, 0, 0, 0.94) 72%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 78% 82% at 52% 50%, #000 58%, rgba(0, 0, 0, 0.94) 72%, transparent 100%)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <Image src="/surgery.jpg" alt="A neurosurgeon performing a delicate procedure" fill priority sizes="(max-width: 1023px) 100vw, 54vw" className="object-cover object-center" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/20" />
      </div>
    </section>
  )
}

export default Hero
