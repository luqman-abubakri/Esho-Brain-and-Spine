"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accessibility,
  ArrowDownRight,
  ArrowRight,
  Brain,
  CalendarCheck,
  Check,
  Clock,
  HeartPulse,
  Phone,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHONE_HREF = "tel:+2348073944444";
const BOOK_HREF = "/contact";

type Service = {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon: LucideIcon;
  category: "Specialist care" | "Surgical & acute care" | "Outpatient care";
  href: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Neurosurgery",
    shortDescription: "Specialist surgical care for the brain and spine.",
    description:
      "Neurosurgery is one of the centre's specialist services. Esho Brain & Spine Centre focuses on making specialist brain and spine care accessible and affordable.",
    image: "/surgery.jpg",
    imageAlt: "A surgical team at work in an operating theatre",
    icon: Brain,
    category: "Specialist care",
    href: "#specialist-care",
  },
  {
    number: "02",
    title: "Neurology",
    shortDescription: "Neurology is among the centre's listed specialties.",
    description:
      "The centre lists neurology among its specialist services. Contact the team for more information about the care available and whether a consultation may be suitable for you.",
    image: "/neurology.jpg",
    imageAlt: "A patient taking part in a rehabilitation exercise",
    icon: Stethoscope,
    category: "Specialist care",
    href: "#specialist-care",
  },
  {
    number: "03",
    title: "Neuro-radiology & Imaging",
    shortDescription: "Imaging support is listed among the centre's services.",
    description:
      "The centre lists neuro-radiology and imaging among its specialist services. Please contact the team for details about the imaging services available.",
    image: "/x-ray.jpg",
    imageAlt: "Medical imaging equipment in a clinical room",
    icon: ScanLine,
    category: "Specialist care",
    href: "#specialist-care",
  },
  {
    number: "04",
    title: "Neuro-rehabilitation",
    shortDescription:
      "Rehabilitation support focused on function and independence.",
    description:
      "The centre describes neuro-rehabilitation as helping patients regain function and independence. Contact the team to ask about rehabilitation support and next steps.",
    image: "/rehabilition.jpg",
    imageAlt: "A patient working with a rehabilitation professional",
    icon: Accessibility,
    category: "Specialist care",
    href: "#specialist-care",
  },
  {
    number: "05",
    title: "Intensive Care (ICU)",
    shortDescription: "A three-bed intensive care unit with patient monitoring.",
    description:
      "The centre's three-bed intensive care unit has mechanical ventilation and multiparameter monitoring to support patient care around the clock.",
    icon: HeartPulse,
    category: "Surgical & acute care",
    href: "#acute-care",
  },
  {
    number: "06",
    title: "Emergency Care",
    shortDescription: "Emergency services are available at the centre.",
    description:
      "Emergency services are listed among the centre's services. For enquiries, contact the centre directly by phone.",
    icon: Siren,
    category: "Surgical & acute care",
    href: "#acute-care",
  },
  {
    number: "07",
    title: "Spine Surgery",
    shortDescription: "Specialist care within the centre's brain and spine focus.",
    description:
      "Spine care is part of the centre's stated specialist focus. Contact the team to discuss the care available for your needs.",
    icon: Brain,
    category: "Surgical & acute care",
    href: "#acute-care",
  },
  {
    number: "08",
    title: "Outpatient Consultations",
    shortDescription: "A first step towards specialist assessment and guidance.",
    description:
      "An outpatient consultation can be a starting point to discuss your concerns, understand possible next steps and find out whether a referral is appropriate.",
    icon: CalendarCheck,
    category: "Outpatient care",
    href: "#outpatient-care",
  },
];

const coreServices = services.slice(0, 4);
const acuteServices = services.slice(4, 7);
const carePrinciples = [
  "Specialist-focused care",
  "A multidisciplinary approach",
  "Intensive monitoring",
  "Patient-centred care",
  "Accessible specialist treatment",
];

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
      "border-emerald-600 bg-emerald-600 text-white hover:border-emerald-700 hover:bg-emerald-700",
    outline:
      "border-slate-300 bg-white text-blue-950 hover:border-blue-900 hover:bg-blue-50",
    light:
      "border-white bg-white text-blue-950 hover:bg-emerald-50",
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

export default function ServicesPage() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero]", {
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
          })
          .from(
            "[data-hero-image]",
            {
              clipPath: "inset(0 0 100% 0)",
              duration: 1,
              ease: "power2.inOut",
            },
            0.15
          );

        gsap.from("[data-directory-item]", {
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-directory]",
            start: "top 78%",
            once: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-service-row]").forEach((row) => {
          gsap.from(row, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 82%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-service-image]").forEach((image) => {
          gsap.from(image, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.85,
            ease: "power2.inOut",
            scrollTrigger: { trigger: image, start: "top 82%", once: true },
          });
        });

        gsap.from("[data-final-cta]", {
          y: 24,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-final-cta]",
            start: "top 82%",
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
      <section className="border-b border-slate-100">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12 lg:py-24">
          <div>
            <div data-hero>
              <Eyebrow>Our services</Eyebrow>
            </div>
            <h1
              data-hero
              className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl"
            >
              Specialist care for the brain, spine and nervous system.
            </h1>
            <p
              data-hero
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:mt-7 sm:text-lg"
            >
              Explore the specialist services available at Esho Brain &amp;
              Spine Centre. Our team can help you understand where to begin.
            </p>
            <div
              data-hero
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            >
              <Button href={BOOK_HREF} icon={CalendarCheck}>
                Book an appointment
              </Button>
              <Button href={PHONE_HREF} icon={Phone} variant="outline">
                Call our team
              </Button>
            </div>
            <p data-hero className="mt-7 flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={17} className="text-emerald-700" aria-hidden="true" />
              Specialist brain and spine care in Osogbo
            </p>
          </div>

          <div
            data-hero-image
            className="relative min-h-[300px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 sm:min-h-[420px] lg:min-h-[520px]"
          >
            <Image
              src="/why.jpg"
              alt="The Esho Brain & Spine Centre team outside the centre"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 right-4 border-l-2 border-emerald-500 bg-white p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                Esho Brain &amp; Spine Centre
              </p>
              <p className="mt-2 text-base font-semibold leading-snug text-blue-950 sm:text-lg">
                Specialist care, with a focus on the brain and spine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="service-directory">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>Our services</Eyebrow>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Comprehensive specialist care for the brain and spine.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              From specialist services to outpatient consultations, find the
              area you are looking for and speak with our team about the next
              step.
            </p>
          </div>

          <ol
            data-directory
            className="divide-y divide-slate-200 border-y border-slate-200"
          >
            {services.map(({ number, title, href }, index) => (
              <li key={number} data-directory-item>
                <a
                  href={href}
                  className="group flex min-h-20 items-center gap-4 py-5 transition-colors sm:gap-6 sm:py-6"
                >
                  <span className="w-8 shrink-0 text-sm font-medium text-slate-400 sm:w-10">
                    {number}
                  </span>
                  <span className="flex-1 text-base font-semibold text-blue-950 transition-colors group-hover:text-emerald-700 sm:text-lg">
                    {title}
                  </span>
                  {index < 4 ? (
                    <ArrowRight
                      size={19}
                      className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-700"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownRight
                      size={19}
                      className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-emerald-700"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="specialist-care" className="border-y border-slate-100 bg-slate-50/70">
        <div className="mb-14 max-w-3xl sm:mb-16">
          <Eyebrow>Core specialist services</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Care shaped around specialist expertise.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            These services are listed among the centre&apos;s areas of care.
            Get in touch for details about the support available for your
            circumstances.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={service.number}
                data-service-row
                className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  data-service-image
                  className={`relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200 bg-slate-100 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                >
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      fill
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-emerald-700">
                      {service.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50">
                      <Icon size={22} className="text-emerald-700" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {service.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-7 text-blue-950">
                    {service.shortDescription}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    {service.description}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-blue-950"
                  >
                    Ask our team
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="acute-care">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>Surgical &amp; acute care</Eyebrow>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Specialist support when care needs are more immediate.
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              The centre lists spine surgery, intensive care and emergency
              services among its areas of care. Call the team directly for
              service information.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-emerald-600 py-2 pl-4">
              <Clock size={19} className="shrink-0 text-emerald-700" aria-hidden="true" />
              <p className="text-sm font-medium leading-6 text-blue-950">
                The ICU supports patient monitoring around the clock.
              </p>
            </div>
          </div>

          <div className="border-y border-slate-300">
            {acuteServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  data-service-row
                  className="grid gap-4 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-start sm:gap-8 sm:py-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-emerald-700">
                      {service.number}
                    </span>
                    <Icon size={21} className="shrink-0 text-emerald-700" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-blue-950 sm:text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-6 text-blue-950">
                      {service.shortDescription}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="outpatient-care" className="bg-blue-50/60">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <Eyebrow>Outpatient care</Eyebrow>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Start with the right specialist.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              An outpatient consultation is an accessible starting point to
              discuss your concerns, seek assessment and understand possible
              next steps. Where appropriate, the team can help you consider a
              care plan or referral.
            </p>
            <a
              href={BOOK_HREF}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-blue-950"
            >
              Arrange a consultation
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <ol className="mt-12 grid border-y border-slate-200 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {["Consultation", "Assessment", "Care plan", "Follow-up"].map(
            (step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 border-b border-slate-200 py-5 last:border-b-0 sm:px-5 sm:py-6 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="text-sm font-semibold text-emerald-700">
                  0{index + 1}
                </span>
                <span className="text-base font-semibold text-blue-950">
                  {step}
                </span>
                {index < 3 ? (
                  <ArrowRight
                    size={17}
                    className="ml-auto text-slate-400"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            )
          )}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>Why choose specialist care at Esho</Eyebrow>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl">
              Care grounded in specialist focus and attention to the person.
            </h2>
          </div>
          <ul className="grid divide-y divide-slate-200 border-y border-slate-200 sm:grid-cols-2 sm:divide-y-0 sm:gap-x-8">
            {carePrinciples.map((principle, index) => (
              <li
                key={principle}
                className={`flex items-center gap-4 py-5 ${index < 3 ? "sm:border-b sm:border-slate-200" : ""} ${index === carePrinciples.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <Check size={18} className="shrink-0 text-emerald-700" aria-hidden="true" />
                <span className="text-sm font-semibold text-blue-950 sm:text-base">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-blue-950 text-white">
        <div
          data-final-cta
          className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-12 lg:py-28"
        >
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Need specialist care?
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let&rsquo;s help you find the right care.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100">
              Speak with our team to ask about services or arrange an
              appointment at Esho Brain &amp; Spine Centre.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={BOOK_HREF} icon={CalendarCheck} variant="light">
              Book an appointment
            </Button>
            <Button href={PHONE_HREF} icon={Phone} variant="outline">
              Call our office
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
