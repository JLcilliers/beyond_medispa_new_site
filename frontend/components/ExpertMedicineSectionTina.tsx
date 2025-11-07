"use client";
import { CheckCircle2 } from 'lucide-react';

interface ExpertMedicineData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  points: string[];
  buttonText: string;
  buttonLink: string;
}

interface ExpertMedicineSectionTinaProps {
  data: ExpertMedicineData;
}

export default function ExpertMedicineSectionTina({ data }: ExpertMedicineSectionTinaProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111A19] mb-4">
              {data.title}{' '}
              {data.titleHighlight && (
                <span className="text-[#A38E78]">{data.titleHighlight}</span>
              )}
            </h2>
            {data.subtitle && (
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Points List */}
          <div className="space-y-6 mb-12">
            {data.points.map((point, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#A38E78] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          {data.buttonText && data.buttonLink && (
            <div className="text-center">
              <a
                href={data.buttonLink}
                className="inline-block px-8 py-3 bg-[#A38E78] text-white rounded-full hover:bg-[#8B7A67] transition-colors"
              >
                {data.buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
