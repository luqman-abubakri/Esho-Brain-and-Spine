"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { gsap } from "gsap";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const root = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero]", {
            y: 20,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.1,
          })
          .from(
            "[data-form]",
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.7,
            },
            "-=0.35"
          )
          .from(
            "[data-field]",
            {
              y: 12,
              autoAlpha: 0,
              duration: 0.45,
              stagger: 0.07,
            },
            "-=0.35"
          );
      });
    }, root);

    return () => context.revert();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      ref={root}
      className="flex-1 bg-white px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div
            data-hero
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-emerald-600" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Contact Esho
            </p>

            <span className="h-px w-8 bg-emerald-600" />
          </div>

          <h1
            data-hero
            className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl"
          >
            How can we help?
          </h1>

          <p
            data-hero
            className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Have a question, need more information, or want to get in touch
            with our team? Send us a message.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div
            data-form
            className="mx-auto mt-9 max-w-3xl border border-slate-200 bg-slate-50 px-6 py-12 text-center sm:mt-12 sm:px-10"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Check size={24} aria-hidden="true" />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-blue-950">
              Message sent
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
              Thank you for contacting Esho Brain & Spine Centre. Our team
              will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            data-form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 max-w-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(7,27,58,0.06)] sm:mt-12 sm:p-8 lg:p-9"
          >
            <div className="mb-7 border-b border-slate-200 pb-5">
              <p className="text-lg font-semibold text-blue-950">
                Send us a message
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Fill in the form below and our team will get back to you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name */}
              <div data-field>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-sm font-medium text-blue-950"
                >
                  Full name <span className="text-emerald-600">*</span>
                </label>

                <input
                  id="full-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Email */}
              <div data-field>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-blue-950"
                >
                  Email address <span className="text-emerald-600">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Phone */}
              <div data-field>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-blue-950"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+234..."
                  className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Service */}
              <div data-field>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-blue-950"
                >
                  Service
                </label>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-md border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-700 outline-none transition-all duration-200 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="neurosurgery">Neurosurgery</option>
                    <option value="neurology">Neurology</option>
                    <option value="neuro-radiology">
                      Neuro-radiology & Imaging
                    </option>
                    <option value="neuro-rehabilitation">
                      Neuro-rehabilitation
                    </option>
                    <option value="icu">Intensive Care (ICU)</option>
                    <option value="emergency-care">Emergency Care</option>
                    <option value="spine-surgery">Spine Surgery</option>
                    <option value="outpatient">
                      Outpatient Consultations
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div data-field className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-blue-950"
                >
                  How can we help?{" "}
                  <span className="text-emerald-600">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us how we can assist you..."
                  className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>
            </div>

            {/* Submit */}
            <div
              data-field
              className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center"
            >
              <p className="max-w-sm text-xs leading-5 text-slate-500">
                By sending this message, you agree to be contacted by our
                team regarding your enquiry.
              </p>

              <button
                type="submit"
                className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-3 rounded-md bg-emerald-600 px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:w-auto"
              >
                <span>Send message</span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}