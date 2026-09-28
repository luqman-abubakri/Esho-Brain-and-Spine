
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Esho Brain & Spine Centre offer?",
    answer:
      "We provide specialist services in neurosurgery, neurology, neuro-radiology, neuro-rehabilitation, and neuro-ICU/anaesthesia.",
  },
  {
    question: "Where is Esho Brain & Spine Centre located?",
    answer:
      "Our centre is located in Osogbo, Osun State, Nigeria. Visit our contact page for directions and contact details.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Please contact our team directly to enquire about consultations and appointment availability.",
  },
  {
    question: "Does Esho provide inpatient care?",
    answer:
      "Yes. We commenced inpatient services on August 10, 2016, with facilities including a 3-bedded ICU and a fully equipped operating theatre.",
  },
  {
    question: "How can I enquire about treatment costs?",
    answer:
      "Contact our team directly for information about your care needs and applicable treatment costs.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-5 py-28 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
            FAQs
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-2xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
            Find answers to common questions about our services and care.
          </p>
        </div>

        <div className="border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <span className="text-lg font-medium text-blue-950 sm:text-xl">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-emerald-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-500 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;