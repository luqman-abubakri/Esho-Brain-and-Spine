
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-blue-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-16 lg:py-20 border-t bg-[var(--bg-primary)] border-slate-200 rounded-2xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Esho Brain & Spine Centre"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h2 className="text-sm font-semibold tracking-wide">
                  ESHO BRAIN
                </h2>
                <p className="text-xs tracking-wider text-emerald-600">
                  & SPINE CENTRE
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              Providing specialist and affordable neurosurgical
              services with a commitment to compassionate,
              patient-centred care.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/" className="transition-colors hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-emerald-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-emerald-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-emerald-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Specialities
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>Neurosurgery</li>
              <li>Neurology</li>
              <li>Neuro-radiology</li>
              <li>Neuro-rehabilitation</li>
              <li>Neuro-ICU / Anaesthesia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Get in Touch
            </h3>

            <ul className="space-y-5 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-emerald-600"
                />
                <span className="leading-6">
                  Beside Wemdel Mart, Off Ilesa Garage
                  Roundabout, Osogbo, Osun State, Nigeria.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-emerald-600" />
                <a
                  href="tel:+2348073944444"
                  className="transition-colors hover:text-emerald-600"
                >
                  +234 807 394 4444
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-emerald-600" />
                <a
                  href="mailto:info@eshobrainandspine.com"
                  className="break-all transition-colors hover:text-emerald-600"
                >
                  info@eshobrainandspine.com
                </a>
              </li>
            </ul>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Esho+Brain+%26+Spine+Centre+Osogbo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-blue-950"
            >
              Get directions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Esho Brain & Spine
            Centre. All rights reserved.
          </p>

          <Link
            href="/contact"
            className="transition-colors hover:text-emerald-600"
          >
            Contact the Centre
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;