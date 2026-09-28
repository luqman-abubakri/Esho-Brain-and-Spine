
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

const Maps = () => {
  const hospitalName = "Esho Brain & Spine Centre";

  const address =
    "Beside Wemdel Mart, Off Ilesa Garage Roundabout, Osogbo, Osun State, Nigeria";

  const location = `${hospitalName}, ${address}`;

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    location
  )}`;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
            Find Us
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Visit Esho Brain & Spine Centre
          </h2>
        </div>

        {/* Address and directions */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <MapPin
              size={22}
              className="mt-1 shrink-0 text-emerald-600"
            />

            <div>
              <p className="font-medium text-blue-950">
                Esho Brain & Spine Centre
              </p>

              <p className="mt-1 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                {address}
              </p>
            </div>
          </div>

          <Link
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-blue-950 px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-600"
          >
            Get Directions
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Google Map */}
        <div className="h-[350px] overflow-hidden rounded-2xl border border-slate-200 sm:h-[450px] lg:h-[520px]">
          <iframe
            src={mapUrl}
            title="Esho Brain & Spine Centre on Google Maps"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Maps;