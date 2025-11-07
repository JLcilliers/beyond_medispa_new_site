"use client";

interface ProgramImage {
  src: string;
  alt: string;
}

interface ProgramData {
  tagline: string;
  title: string;
  description: string;
  description2: string;
  images: ProgramImage[];
}

interface ProgramSectionTinaProps {
  data: ProgramData;
}

export default function ProgramSectionTina({ data }: ProgramSectionTinaProps) {
  return (
    <section className="py-16 md:py-24 bg-[#111A19]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <div className="inline-block px-4 py-1 bg-[#A38E78] rounded-full text-sm mb-6">
              {data.tagline}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              {data.title}
            </h2>

            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {data.description}
            </p>

            {data.description2 && (
              <p className="text-lg text-white/80 leading-relaxed">
                {data.description2}
              </p>
            )}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((image, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 0 ? 'col-span-2 h-[300px]' : 'h-[200px]'
                } rounded-lg overflow-hidden`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
