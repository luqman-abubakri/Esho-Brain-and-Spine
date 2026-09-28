
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const Why = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-[2rem] bg-blue-50">
            <Image
              src="/nurses.jpg"
              alt="Esho Brain and Spine Centre"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating milestone */}
          <div className="absolute -bottom-5 right-4 flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-950/5 sm:-right-6 sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CalendarDays size={23} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight text-blue-950">
                2016
              </p>
              <p className="text-sm text-slate-500">
                Inpatient services commenced
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 lg:pt-0">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Why Esho
            </p>
          </div>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Specialist care for the brain and spine.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            ESHO Brain & Spine Centre (EBASiC), Osogbo, commenced inpatient
            services on August 10, 2016, with a commitment to providing
            world-class and affordable neurosurgical services.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            Our approach is built around an experienced, dedicated and
            motivated team, delivering specialist neurological care with
            compassion and clinical focus.
          </p>

          {/* Supporting details */}
          <div className="mt-8 grid gap-5 border-y border-slate-100 py-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-emerald-600">
                <HeartPulse size={22} strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-950">
                  Patient-centred care
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Compassion and comfort at every stage of care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-emerald-600">
                <ShieldCheck size={22} strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-950">
                  Specialist expertise
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Dedicated neurological and neurosurgical services.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-950 px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-600"
            >
              Learn more about us
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Stethoscope size={17} className="text-emerald-600" />
              <span>Care with clinical purpose</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;