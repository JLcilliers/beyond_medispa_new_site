"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQData {
  title: string;
  questions: FAQQuestion[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPhone: string;
  ctaPhoneText: string;
  ctaBookText: string;
}

interface FAQSectionTinaProps {
  data: FAQData;
}

function splitHighlight(text: string): { before: string; highlight: string; after: string } {
  const match = text.match(/^(.*?)\{(.*?)\}(.*)$/);
  if (match) {
    return {
      before: match[1],
      highlight: match[2],
      after: match[3],
    };
  }
  return { before: text, highlight: '', after: '' };
}

export default function FAQSectionTina({ data }: FAQSectionTinaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { before, highlight, after } = splitHighlight(data.title);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111A19] mb-4">
            {before}
            {highlight && (
              <span className="text-[#A38E78]">{highlight}</span>
            )}
            {after}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {data.questions.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-[#111A19] pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#A38E78] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A38E78] flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-[#A38E78] to-[#8B7A67] rounded-lg p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              {data.ctaTitle}
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {data.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.ctaPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#A38E78] rounded-full hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {data.ctaPhoneText}
              </a>
              <a
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#A38E78] transition-colors"
              >
                {data.ctaBookText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
