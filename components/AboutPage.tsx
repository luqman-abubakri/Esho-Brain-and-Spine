"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const awardEntries = [
  { year: "1993", title: "UNESCO National Essay Competition Award — 2nd position" },
  {
    year: "1998 & 1999",
    title: "Neimeth Cardiovascular Award / Medical Pharmacy Undergraduate Scholarship (CAAMPUS) National Hypertension Essay Competition Award",
  },
  {
    year: "2000/2001",
    title: "Mr Reliable Award — House Officers, Obafemi Awolowo University Teaching Hospitals Complex, Wesley Guild Hospital Unit, Ilesa, Nigeria",
  },
  { year: "2002", title: "Commendation Award — National Youth Service Corps, Sokoto State" },
  {
    year: "2005",
    title: "Most Dedicated Doctor Award — Association of Resident Doctors, LAUTECH Teaching Hospital, Osogbo, Osun State",
  },
]

const facilities = [
  {
    heading: "CRITICAL CARE",
    items: [
      "3-bedded fully equipped ICU",
      "Mechanical ventilation",
      "Round-the-clock multiparameter monitoring",
      "ECG",
      "SpO2",
      "Temperature",
      "Blood pressure",
      "Respiratory rate",
      "End-tidal carbon dioxide",
      "Intracranial pressure (ICP)",
    ],
  },
  {
    heading: "OPERATING THEATRE",
    items: [
      "Self-ventilating anaesthetic machine",
      "Diathermy",
      "Neuro-endoscope",
      "Modern LED operating lamps with integrated camera systems",
    ],
  },
  {
    heading: "PATIENT COMFORT",
    items: ["Private room facilities", "Fully equipped kitchen"],
  },
  {
    heading: "EMERGENCY READINESS",
    items: ["Automatic defibrillator for cardiac emergencies"],
  },
]

const storyTimelines = [{ year: "2016", text: "Inpatient services commenced" }]

const biographySections = [
  {
    heading: "EDUCATION & TRAINING",
    items: [
      "M.B.Ch.B., Obafemi Awolowo University, Ile-Ife, Nigeria, 2000.",
      "Neurosurgical training at University College Hospital, Ibadan, under Professor Mathew Temitayo Shokunbi.",
      "Fellowship of the West African College of Surgeons in 2010.",
      "Best graduating fellow in the Faculty of Surgery and recipient of the Olajide Ajayi gold medal.",
    ],
  },
  {
    heading: "CAREER & SERVICE",
    items: [
      "Pioneered full-time rural neurosurgical practice at Federal Medical Centre, Ido-Ekiti, in late 2010.",
      "Joined LAUTECH Teaching Hospital, Osogbo, in June 2012 to establish a full-fledged neurosurgery programme.",
    ],
  },
  {
    heading: "RESEARCH INTERESTS",
    items: [
      "Endoscopic management of hydrocephalus",
      "Traumatic brain injury",
      "Low-cost spinal instrumentation",
      "Paediatric brain tumours",
    ],
  },
  {
    heading: "INTERNATIONAL EXPERIENCE",
    items: [
      "2011 International Development and Education Award (IDEA) from ASCO.",
      "Attended the ASCO meeting in Chicago.",
      "Short observership at Dana-Farber Cancer Institute and Brigham & Women's Hospital, Boston.",
      "2012 Globus Travelling Fellowship of the International Society for the Study of the Lumbar Spine (ISSLS).",
      "Training under Professor Wilco Peul and his team in the Netherlands.",
    ],
  },
  {
    heading: "LEADERSHIP & GLOBAL ENGAGEMENT",
    items: [
      "2012 Young Physician Leaders (YPL) award from the Inter-Academy Medical Panel.",
      "Participated in the 2012 World Health Summit in Berlin.",
      "Invited back in 2014 as a YPL alumnus to mentor global leaders and chair the YPL session.",
      "Participated in the 2016 World Health Assembly in Geneva as a member of the Nigerian delegation.",
    ],
  },
  {
    heading: "PROFESSIONAL SERVICE",
    items: ["General Secretary, Nigerian Medical Association (NMA), Osun State Branch, 2004–2006."],
  },
]

export default function AboutPage() {
  const pageRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    const revealItems = pageRef.current?.querySelectorAll("[data-reveal]")
    const imageItems = pageRef.current?.querySelectorAll("[data-image]")

    if (revealItems) {
      gsap.fromTo(
        revealItems,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      )
    }

    if (imageItems) {
      gsap.fromTo(
        imageItems,
        { y: 18, opacity: 0, scale: 1.04 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
      )
    }
  }, { scope: pageRef })

  return (
    <main ref={pageRef} className="bg-[#f6fafb] text-slate-800">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:px-10 lg:pb-20 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div data-reveal className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-600 sm:text-xs">
              ABOUT ESHO BRAIN & SPINE CENTRE
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-blue-950 sm:text-5xl lg:text-[4rem]">
              Specialist care for the brain and spine.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              ESHO Brain & Spine Centre (EBASiC) is a specialist centre in Osogbo, Nigeria, focused on providing world-class and affordable neurosurgical services.
            </p>
          </div>

          <div data-image className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50 shadow-[0_20px_60px_-32px_rgba(14,116,144,0.35)] lg:min-h-[560px]">
            <div
              className="absolute inset-0"
              style={{
                clipPath: "inset(0 round 35% 18% 22% 40% / 20% 12% 18% 18%)",
                maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 58%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 58%, transparent 100%)",
              }}
            >
              <Image
                src="/surgery.jpg"
                alt="Placeholder medical operating theatre image"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 54vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-sky-900/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-image className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50 lg:min-h-[540px]">
            <Image
              src="/bg.jpg"
              alt="Placeholder clinical environment image"
              fill
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>

          <div data-reveal className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 sm:text-xs">OUR STORY</p>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.04em] text-blue-950 sm:text-4xl">
              Built around specialist neurological care.
            </h2>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                EBASiC commenced inpatient services in Osogbo on Wednesday, August 10, 2016, with the goal of providing world-class and affordable neurosurgical services.
              </p>
              <p>
                The centre was built around a dedicated, experienced and motivated approach to patient care, with the aim of delivering specialist neurological services with compassion and clinical focus.
              </p>
            </div>

            <div className="mt-8 border-t border-sky-100 pt-6">
              {storyTimelines.map((item) => (
                <div key={item.year} className="flex items-baseline gap-5 border-b border-sky-100 py-4 last:border-b-0">
                  <span className="w-20 text-lg font-semibold text-blue-950">{item.year}</span>
                  <span className="text-base text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl" data-reveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-blue-950 sm:text-4xl">
            Designed for specialist care and recovery.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {facilities.map((group) => (
            <div key={group.heading} data-reveal className="rounded-[1.75rem] border border-sky-100 bg-white p-6 sm:p-8">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-xs">
                {group.heading}
              </h3>
              <ul className="space-y-3 text-base leading-7 text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-reveal className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 sm:text-xs">MEDICAL LEADERSHIP</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-blue-950 sm:text-4xl">
              Medical Director / Consultant Neurosurgeon
            </h2>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-image className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-sky-100 bg-sky-50 sm:col-span-2">
                <Image
                  src="/nurses.jpg"
                  alt="Placeholder portrait of Dr. Taopheeq Bamidele Rabiu"
                  fill
                  sizes="(max-width: 767px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-sky-100 bg-sky-50">
                <Image
                  src="/neurology.jpg"
                  alt="Placeholder neurology clinic portrait"
                  fill
                  sizes="(max-width: 767px) 50vw, 24vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-sky-100 bg-sky-50">
                <Image
                  src="/surgery.jpg"
                  alt="Placeholder medical team portrait"
                  fill
                  sizes="(max-width: 767px) 50vw, 24vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div data-reveal className="space-y-4">
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-blue-950 sm:text-4xl">
                Dr. Taopheeq Bamidele Rabiu
              </h3>
              <p className="text-lg font-medium text-sky-700">Medical Director / Consultant Neurosurgeon</p>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                Dr. Rabiu leads the centre with a specialist neurosurgical focus and a deeply clinical, patient-centred approach. His work reflects a long-standing commitment to specialist neurological care, academic engagement, and service to the wider medical community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-8">
          {biographySections.map((section) => (
            <div key={section.heading} data-reveal className="border-t border-sky-100 pt-8 first:border-t-0 first:pt-0">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 sm:text-xs">
                {section.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-base leading-8 text-slate-600">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f7fb] py-10 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div data-reveal className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 sm:text-xs">AWARDS & DISTINCTIONS</p>
          </div>

          <div className="relative mt-10 space-y-8 pl-6 before:absolute before:bottom-0 before:left-[10px] before:top-0 before:w-px before:bg-sky-200">
            {awardEntries.map((award) => (
              <div key={award.year} data-reveal className="relative pl-10">
                <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#f0f7fb]" aria-hidden="true" />
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-950 sm:text-xs">
                  {award.year}
                </div>
                <p className="text-base leading-7 text-slate-700 sm:text-lg">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-10 lg:py-20">
        <div data-reveal className="rounded-[2rem] border border-sky-100 bg-white p-8 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 sm:text-xs">PHYSICIAN PARTNERSHIP</p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-blue-950 sm:text-4xl">
            Supporting the wider medical community
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Esho has a programme supporting physicians with training and conference attendance as they partner with the centre.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-800"
            >
              Partner with Esho
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24">
        <div data-reveal className="text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-blue-950 sm:text-4xl lg:text-5xl">
            Specialist care, delivered with purpose.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Learn more about our specialist services or get in touch with the Esho Brain & Spine Centre.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition-colors duration-200 hover:bg-sky-50"
            >
              Explore our services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-600"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
