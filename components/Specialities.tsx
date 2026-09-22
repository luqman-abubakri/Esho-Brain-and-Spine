import SpecialityCard from "@/components/SpecialityCard";

const specialties = [
  {
    title: "Neurosurgery",
    description: "Advanced surgical care for brain and nervous system conditions.",
    image: "/surgery.jpg",
    href: "/services",
    
  },
  {
    title: "Neurology",
    description: "Expert diagnosis and management of neurological disorders and conditions.",
    image: "/neurology.jpg",
    href: "/services"
  },
  {
    title: "Neuro-radiology",
    description: "Advanced imaging for accurate diagnosis and treatment planning.",
    image: "/x-ray.jpg",
    href: "/services"
  },
  {
    title: "Neuro-rehabilitation",
    description: "Helping patients regain function, independence, and improve their quality of life.",
    image: "/rehabilition.jpg",
    href: "/services"
  },
  {
    title: "Neuro-ICU/Anaesthesia",
    description: "Critical care and anaesthesia for complete neurological cases.",
    image: "/bg.jpg",
    href: "/contact"
  },
];

const Specialities = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center px-4 py-2 text-lg font-semibold uppercase tracking-[0.14em] text-green-300">
            Our Specialities
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            World-Class Expertise in Neurological Care
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Our multidisciplinary team provides specialized care across five key areas of neurology and neurosurgery, ensuring the best possible outcomes for every patient.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {specialties.map((specialty) => (
            <SpecialityCard
              key={specialty.title}
              title={specialty.title}
              description={specialty.description}
              image={specialty.image}
              href={specialty.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
