import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type SpecialityCardProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

const SpecialityCard = ({ title, description, image, href }: SpecialityCardProps) => {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[28px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(79,70,229,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
    >
      <article className="h-full">
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            width={800}
            height={520}
            sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(50vw - 2.5rem), 384px"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
        </div>

        <div className="space-y-4 p-6">
          <div className="inline-flex items-center rounded-full bg-[rgba(99,102,241,0.10)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Specialty
          </div>

          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{title}</h3>
          <p className="text-base leading-7 text-[var(--text-secondary)]">{description}</p>

        </div>
      </article>
    </Link>
  );
};

export default SpecialityCard;
