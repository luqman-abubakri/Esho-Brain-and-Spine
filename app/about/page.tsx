
"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  Phone,
  CalendarCheck,
  Siren,
  BedDouble,
  Brain,
  Stethoscope,
  ScanLine,
  Accessibility,
  HeartPulse,
  UtensilsCrossed,
  Monitor,
  Handshake,
  Award,
  Microscope,
  ShieldCheck,
  Clock,
  Check,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ---------- CONFIG ---------- */

const HERO_IMAGE = "/why.jpg";
const DOCTOR_IMAGE = "/doctor.jpg";
const PHONE_HREF = "tel:+234 807 394 4444";
const BOOK_HREF = "/contact";

/* ---------- DATA ---------- */

type Fact = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type Milestone = {
  year: string;
  text: string;
  highlight?: boolean;
};

const facts: Fact[] = [
  { icon: Siren, label: "Emergency care", value: "Emergency services" },
  { icon: BedDouble, label: "Intensive care", value: "3-bed ICU" },
  { icon: Clock, label: "In-patient care since", value: "August 2016" },
  { icon: ShieldCheck, label: "Our commitment", value: "Affordable specialist care" },
];

const milestones: Milestone[] = [
  {
    year: "2000",
    text: "Graduates with an M.B.Ch.B. from Obafemi Awolowo University, Ile-Ife.",
  },
  {
    year: "2004–06",
    text: "General Secretary, Nigerian Medical Association, Osun State Branch.",
  },
  {
    year: "2010",
    text: "Completes neurosurgical training at University College Hospital, Ibadan. Becomes a Fellow of the West African College of Surgeons as its best graduating fellow in Surgery, and receives the Olajide Ajayi gold medal.",
  },
  {
    year: "2010",
    text: "Pioneers full-time rural neurosurgical practice in Nigeria at the Federal Medical Centre, Ido-Ekiti.",
  },
  {
    year: "2011",
    text: "Wins the ASCO International Development and Education Award. Observes at Dana-Farber Cancer Institute and Brigham and Women's Hospital, Boston.",
  },
  {
    year: "2012",
    text: "Joins LAUTECH Teaching Hospital, Osogbo, to set up a full neurosurgery programme. Named a Young Physician Leader by the Inter-Academy Medical Panel and attends the World Health Summit, Berlin.",
  },
  {
    year: "2012–13",
    text: "Trains at Leiden University Medical Centre and Medisch Centrum Haaglanden in The Netherlands as Globus Travelling Fellow of the ISSLS.",
  },
  {
    year: "2014",
    text: "Returns to Berlin as a Young Physician Leader alumnus to mentor new leaders and chair a World Health Summit session.",
  },
  {
    year: "2016",
    text: "Joins the Nigerian delegation to the World Health Assembly, Geneva.",
  },
  {
    year: "Aug 2016",
    text: "Esho Brain & Spine Centre opens to in-patients in Osogbo.",
    highlight: true,
  },
];

const research = [
  "Endoscopic management of hydrocephalus",
  "Traumatic brain injury",
  "Low-cost spinal instrumentation",
  "Paediatric brain tumours",
];

const awards = [
  {
    year: "1993",
    title: "UNESCO National Essay Competition, 2nd position",
  },
  {
    year: "1998, 1999",
    title: "Neimeth CAAMPUS National Hypertension Essay Competition Award",
  },
  {
    year: "2001",
    title:
      "Mr Reliable Award, House Officers, OAUTHC Wesley Guild Hospital Unit, Ilesa",
  },
  {
    year: "2002",
    title: "Commendation Award, National Youth Service Corps, Sokoto State",
  },
  {
    year: "2005",
    title:
      "Most Dedicated Doctor Award, Association of Resident Doctors, LAUTECH Teaching Hospital",
  },
];

const monitoring = [
  "ECG",
  "SpO₂",
  "Temperature",
  "Blood pressure",
  "Respiratory rate",
  "End-tidal CO₂",
  "Intracranial pressure",
];

const expertise: { icon: LucideIcon; name: string }[] = [
  { icon: Brain, name: "Neurosurgery" },
  { icon: Stethoscope, name: "Neurology" },
  { icon: ScanLine, name: "Neuro-radiology" },
  { icon: Accessibility, name: "Neuro-rehabilitation" },
];

/* ---------- REUSABLE ELEMENTS ---------- */

const Section = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
      {children}
    </div>
  </section>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
    <span className="h-px w-8 bg-emerald-600" />
    {children}
  </div>
);

const Heading = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={`max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl ${className}`}
  >
    {children}
  </h2>
);

const Button = ({
  href,
  icon: Icon,
  children,
  variant = "solid",
}: {
  href: string;
  icon: LucideIcon;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
}) => {
  const styles = {
    solid:
      "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700",
    outline:
      "bg-white border-slate-300 text-blue-950 hover:border-blue-900 hover:bg-blue-50",
    light:
      "bg-white text-blue-950 border-white hover:bg-emerald-50",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center gap-3 rounded-md border px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:w-auto ${styles}`}
    >
      {children}
      <Icon size={18} aria-hidden="true" />
    </a>
  );
};

/* ---------- PAGE ---------- */

export default function AboutPage() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero]", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          })
          .from(
            "[data-hero-img]",
            {
              clipPath: "inset(0 0 100% 0)",
              duration: 1.1,
              ease: "power2.inOut",
            },
            0.15
          );

        gsap.from("[data-reveal]", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-story]",
            start: "top 80%",
          },
        });

        gsap.from("[data-tl-line]", {
          scaleY: 0,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: "[data-tl]",
            start: "top 65%",
            end: "bottom 65%",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-tl-item]").forEach((el) => {
          gsap.from(el, {
            opacity: 0.3,
            x: 12,
            duration: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.from("[data-icu] li", {
          opacity: 0,
          y: 12,
          duration: 0.45,
          stagger: 0.07,
          scrollTrigger: {
            trigger: "[data-icu]",
            start: "top 85%",
            once: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={root}
      className="overflow-x-hidden bg-white text-slate-600 antialiased"
    >
      {/* HERO */}

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <div
              data-hero
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-800"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Esho Brain & Spine Centre
            </div>

            <h1
              data-hero
              className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl"
            >
              Specialist care for the{" "}
              <span className="text-emerald-700">brain and spine.</span>
            </h1>

            <p
              data-hero
              className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg"
            >
              Esho Brain &amp; Spine Centre began caring for in-patients on
              10 August 2016, with one goal: world-class neurosurgery that
              patients can afford.
            </p>

            <div
              data-hero
              className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Button href={BOOK_HREF} icon={CalendarCheck}>
                Book an appointment
              </Button>

              <Button href={PHONE_HREF} icon={Phone} variant="outline">
                Contact our team
              </Button>
            </div>

            <div
              data-hero
              className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <ShieldCheck
                  size={20}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Specialist brain and spine care
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Serving patients in Osogbo and beyond
                </p>
              </div>
            </div>
          </div>

          <div
            data-hero-img
            className="relative min-h-[380px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 sm:min-h-[480px] lg:min-h-[560px]"
          >
            {HERO_IMAGE ? (
              <Image
                src={HERO_IMAGE}
                alt="Esho Brain & Spine Centre, Osogbo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-blue-50 p-8 text-center">
                <Brain
                  size={48}
                  strokeWidth={1.2}
                  className="text-blue-300"
                  aria-hidden="true"
                />
                <p className="max-w-xs text-sm leading-6 text-blue-800">
                  Add a photograph of Esho Brain &amp; Spine Centre to
                  complete the hero section.
                </p>
              </div>
            )}

            <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/60 bg-white p-5 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                Our commitment
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-blue-950 sm:text-xl">
                Specialist healthcare delivered with care, dignity and
                purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-emerald-50/50 blur-3xl" />
      </section>

      {/* TRUST STRIP */}

      <section
        aria-label="Centre information"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {facts.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className={`flex items-start gap-4 px-5 py-7 sm:px-8 lg:px-5 ${
                i !== 0 ? "lg:border-l lg:border-slate-200" : ""
              } border-b border-slate-100 last:border-b-0 sm:last:border-b-0`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-emerald-50">
                <Icon
                  size={22}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-blue-950">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}

      <Section>
        <div
          data-story
          className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28"
        >
          <div data-reveal>
            <Eyebrow>Our story</Eyebrow>
            <Heading>
              Bringing specialist brain and spine care closer to home.
            </Heading>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-12 w-1 rounded-full bg-emerald-600" />
              <div>
                <p className="text-2xl font-semibold text-blue-950">
                  2016
                </p>
                <p className="text-sm text-slate-500">
                  The beginning of in-patient care
                </p>
              </div>
            </div>
          </div>

          <div data-reveal className="space-y-8 text-base leading-8 sm:text-lg">
            <p>
              Our medical director began by taking full-time neurosurgery
              to a rural federal medical centre, then set up a full
              neurosurgery programme at a teaching hospital in Osogbo.
            </p>

            <p>
              Esho Brain &amp; Spine Centre is the next step: a dedicated
              centre with an experienced, motivated team, an ICU that
              monitors patients round the clock, and an operating theatre
              equipped for modern neurosurgery.
            </p>

            <div className="border-l-2 border-emerald-600 py-2 pl-5">
              <p className="font-medium leading-7 text-blue-950">
                Our aim is to make specialist brain and spine care
                accessible and affordable to the people who need it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* TIMELINE */}

      <Section className="bg-slate-50">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <Eyebrow>Our journey</Eyebrow>
            <Heading>The path to opening day.</Heading>
            <p className="mt-6 max-w-md leading-7 text-slate-600">
              A journey shaped by years of medical training, clinical
              service, research and international collaboration.
            </p>

            <div className="mt-10 hidden border-l-2 border-emerald-600 pl-5 lg:block">
              <p className="text-3xl font-semibold text-blue-950">
                16+
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Years of specialist care and service since opening
              </p>
            </div>
          </div>

          <div data-tl className="relative">
            <div
              className="absolute bottom-3 left-[5px] top-3 w-px bg-slate-200"
              aria-hidden="true"
            >
              <div
                data-tl-line
                className="h-full w-full origin-top bg-emerald-600"
              />
            </div>

            <ol className="space-y-12 lg:space-y-14">
              {milestones.map(({ year, text, highlight }, i) => (
                <li
                  key={`${year}-${i}`}
                  data-tl-item
                  className="relative grid gap-3 pl-8 sm:grid-cols-[100px_1fr] sm:gap-6 sm:pl-10 lg:gap-8"
                >
                  <span
                    className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-emerald-600 ${
                      highlight ? "bg-emerald-600" : "bg-white"
                    }`}
                    aria-hidden="true"
                  />

                  <span
                    className={`text-sm font-bold ${
                      highlight ? "text-emerald-700" : "text-blue-900"
                    }`}
                  >
                    {year}
                  </span>

                  <p
                    className={`text-sm leading-7 sm:text-base ${
                      highlight
                        ? "font-semibold text-blue-950"
                        : "text-slate-600"
                    }`}
                  >
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* MEDICAL DIRECTOR */}

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <Eyebrow>Our medical director</Eyebrow>
            <Heading>
              Experience, dedication and a commitment to better care.
            </Heading>

            <div className="relative mt-10 aspect-[4/5] max-w-md overflow-hidden rounded-lg bg-blue-50">
              {DOCTOR_IMAGE ? (
                <Image
                  src={DOCTOR_IMAGE}
                  alt="Dr. Taopheeq Bamidele Rabiu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <Stethoscope
                    size={44}
                    strokeWidth={1.2}
                    className="text-blue-300"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-blue-800">
                    Add the medical director&apos;s photograph.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-tight text-blue-950">
                Dr. Taopheeq Bamidele Rabiu
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Medical Director, Consultant Neurosurgeon and CEO
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                M.B.Ch.B., Obafemi Awolowo University, 2000. Fellow,
                West African College of Surgeons.
              </p>
            </div>
          </div>

          <div>
            <div className="border-b border-slate-200 pb-10">
              <Eyebrow>Professional background</Eyebrow>
              <p className="text-base leading-8 text-slate-600">
                Trained in Nigeria, the USA, the Netherlands and Germany,
                Dr. Rabiu has pursued specialist training, clinical
                practice and collaboration in neurosurgery.
              </p>
            </div>

            <div className="py-10">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-blue-950">
                <Microscope
                  size={21}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
                Research interests
              </h3>

              <ul className="mt-6 space-y-4">
                {research.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-1 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-10">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-blue-950">
                <Award
                  size={21}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
                Awards and distinctions
              </h3>

              <ul className="mt-6 divide-y divide-slate-100">
                {awards.map(({ year, title }) => (
                  <li
                    key={title}
                    className="grid gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-5"
                  >
                    <span className="text-sm font-semibold text-emerald-700">
                      {year}
                    </span>
                    <span className="text-sm leading-6 text-slate-600">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FACILITIES */}

      <Section className="bg-blue-50/60">
        <div className="max-w-3xl">
          <Eyebrow>Our facilities</Eyebrow>
          <Heading>
            Designed to support specialist care and patient comfort.
          </Heading>
          <p className="mt-6 max-w-2xl leading-7 text-slate-600">
            Our facilities support neurosurgical care, patient monitoring
            and a more comfortable hospital experience.
          </p>
        </div>

        <div className="mt-14 border-y border-slate-200 bg-white sm:mt-16">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:p-14">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50">
                <Monitor
                  size={25}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-blue-950">
                3-bed intensive care unit
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Mechanical ventilation and multiparameter monitoring
                to support patient care around the clock.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Patient monitoring
              </p>

              <ul
                data-icu
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {monitoring.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-100 py-3 text-sm font-medium text-blue-950"
                  >
                    <Check
                      size={17}
                      className="shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:mt-12">
          {[
            {
              icon: Brain,
              title: "Operating theatre",
              text: "Self-ventilating anaesthetic machine, diathermy, neuro-endoscope and modern LED operating lamps with integrated camera systems.",
            },
            {
              icon: HeartPulse,
              title: "Cardiac readiness",
              text: "An automatic defibrillator is kept at hand for cardiac emergencies.",
            },
            {
              icon: BedDouble,
              title: "Private rooms",
              text: "Private rooms designed to provide a comfortable environment for patients during their stay.",
            },
            {
              icon: UtensilsCrossed,
              title: "Kitchen facilities",
              text: "A fully equipped kitchen to support a comfortable in-patient experience.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="border-t border-slate-200 py-7 sm:py-8"
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={23}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold text-blue-950">
                  {title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERTISE */}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <Heading>Specialist expertise across brain and spine care.</Heading>
            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              Our centre brings together areas of specialist care focused
              on neurological conditions and patient recovery.
            </p>
          </div>

          <div>
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {expertise.map(({ icon: Icon, name }, i) => (
                <li
                  key={name}
                  className="flex items-center gap-5 py-7 sm:py-8"
                >
                  <span className="text-sm font-medium text-slate-400">
                    0{i + 1}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50">
                    <Icon
                      size={22}
                      className="text-emerald-700"
                      aria-hidden="true"
                    />
                  </div>

                  <span className="flex-1 text-base font-semibold text-blue-950 sm:text-lg">
                    {name}
                  </span>

                  <ArrowRight
                    size={19}
                    className="text-slate-400"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-slate-200 pt-12 md:grid-cols-2 lg:mt-24">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-emerald-50">
              <ShieldCheck
                size={22}
                className="text-emerald-700"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="font-semibold text-blue-950">
                Health education
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We promote health education and early healthcare-seeking
                behaviour, so problems are caught sooner.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-emerald-50">
              <Handshake
                size={22}
                className="text-emerald-700"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="font-semibold text-blue-950">
                Professional collaboration
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Partner physicians can join a programme that supports
                training and conference attendance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CALL TO ACTION */}

      <section className="bg-blue-950 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              We are here to help
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your health deserves specialist attention.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100">
              Speak with our team or book an appointment to learn more
              about the care available at Esho Brain &amp; Spine Centre.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              href={BOOK_HREF}
              icon={CalendarCheck}
              variant="light"
            >
              Book an appointment
            </Button>

            <Button
              href={PHONE_HREF}
              icon={Phone}
              variant="outline"
            >
              Call our office
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}