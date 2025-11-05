"use client";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../locales/translations';

interface LocationsData {
  title: string;
  subtitle: string;
}

interface LocationsTinaProps {
  data: LocationsData;
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

export default function LocationsTina({ data }: LocationsTinaProps) {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const { before, highlight, after } = splitHighlight(data.title);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111A19] mb-4">
            {before}
            {highlight && (
              <span className="text-[#A38E78]">{highlight}</span>
            )}
            {after}
          </h2>
          {data.subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Locations */}
        <div className="space-y-16">
          {t.locations.locationData.map((location, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Location Details */}
              <div
                className={`bg-white p-8 rounded-lg shadow-sm ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <h3 className="text-2xl font-semibold text-[#111A19] mb-6">
                  {location.city}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-[#A38E78] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-[#A38E78] flex-shrink-0 mt-1" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 hover:text-[#A38E78] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-[#A38E78] flex-shrink-0 mt-1" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-gray-700 hover:text-[#A38E78] transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-[#A38E78] flex-shrink-0 mt-1" />
                    <div className="text-gray-700">
                      {location.hours.map((hour, i) => (
                        <p key={i}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/book"
                    className="px-6 py-2 bg-[#A38E78] text-white rounded-full hover:bg-[#8B7A67] transition-colors"
                  >
                    {t.locations.bookNow}
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      location.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-[#A38E78] text-[#A38E78] rounded-full hover:bg-[#A38E78] hover:text-white transition-colors"
                  >
                    {t.locations.getDirections}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div
                className={`relative h-[400px] rounded-lg overflow-hidden shadow-sm ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.city} location map`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
