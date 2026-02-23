"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = active === index;
        return (
          <div key={item.question} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-soft">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setActive(isOpen ? null : index)}
            >
              <span className="font-semibold text-stone-900">{item.question}</span>
              <span className="ml-4 text-xl text-forest">{isOpen ? "−" : "+"}</span>
            </button>
            <div id={`faq-panel-${index}`} className={`${isOpen ? "mt-3 block" : "hidden"} text-sm text-stone-700`}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
