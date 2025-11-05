"use client";
import { Award, Zap, Heart, LucideIcon } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface WhyChooseUsData {
  title: string;
  subtitle: string;
  features: Feature[];
  stats: Stat[];
}

interface WhyChooseUsSectionTinaProps {
  data: WhyChooseUsData;
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Zap,
  Heart,
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

export default function WhyChooseUsSectionTina({ data }: WhyChooseUsSectionTinaProps) {
  const { before, highlight, after } = splitHighlight(data.title);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111A19] mb-6">
            {before}
            {highlight && (
              <span className="block text-[#A38E78]">{highlight}</span>
            )}
            {after}
          </h2>
          {data.subtitle && (
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                {Icon && (
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#A38E78]/10 mb-6">
                    <Icon className="w-8 h-8 text-[#A38E78]" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#111A19] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        {data.stats && data.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-light text-[#A38E78] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
