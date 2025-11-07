"use client";
import { ArrowRight } from 'lucide-react';

interface Treatment {
  tag: string;
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
  cta: string;
}

interface ServicesData {
  treatments: Treatment[];
}

interface ServicesOverviewTinaProps {
  data: ServicesData;
}

export default function ServicesOverviewTina({ data }: ServicesOverviewTinaProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-0">
          {data.treatments.map((treatment, index) => {
            const isEven = index % 2 === 0;
            const isOdd = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-0 ${
                  isEven
                    ? 'bg-gradient-to-br from-[#A38E78] to-[#8B7A67]'
                    : 'bg-gradient-to-br from-[#8B7A67] to-[#6B5D52]'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] md:h-[500px] ${
                    isOdd ? 'md:order-2' : ''
                  }`}
                >
                  <img
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white ${
                    isOdd ? 'md:order-1' : ''
                  }`}
                >
                  <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-6 w-fit">
                    {treatment.tag}
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
                    {treatment.title}
                  </h3>

                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {treatment.description}
                  </p>

                  <a
                    href={treatment.link}
                    className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all group"
                  >
                    <span className="text-lg">{treatment.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
