"use client";
import { Star, Users, Stethoscope, LucideIcon } from 'lucide-react';

interface Benefit {
  icon: string;
  title: string;
}

interface GetMoreData {
  title: string;
  benefits: Benefit[];
}

interface GetMoreSectionTinaProps {
  data: GetMoreData;
}

const iconMap: Record<string, LucideIcon> = {
  Star,
  Users,
  Stethoscope,
};

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

export default function GetMoreSectionTina({ data }: GetMoreSectionTinaProps) {
  const { before, highlight, after } = splitHighlight(data.title);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#A38E78] to-[#8B7A67]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white text-center mb-12">
          {before}
          {highlight && <span className="text-white/90">{highlight}</span>}
          {after}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center text-white"
              >
                {Icon && (
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                )}
                <p className="text-lg leading-relaxed">{benefit.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
