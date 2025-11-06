import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Button } from '@/components/ui/button'

interface DynamicSectionRendererProps {
  sections?: any[]
}

const handleNavigation = (route: string) => {
  if (window.navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function DynamicSectionRenderer({ sections }: DynamicSectionRendererProps) {
  if (!sections || sections.length === 0) return null

  return (
    <>
      {sections.map((section, index) => {
        const sectionType = section._template || section.__typename

        switch (sectionType) {
          case 'testimonialsSection':
            return (
              <section key={index} className="py-24 bg-[#F5F1EC]">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-[#2C2C2C] mb-4">
                      {section.title || 'What Our Clients Say'}
                    </h2>
                    {section.subtitle && (
                      <p className="text-[#777777] text-lg">{section.subtitle}</p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.testimonials?.map((testimonial: any, idx: number) => (
                      <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#C6A77D]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-[#333333] mb-4">
                          <TinaMarkdown content={testimonial.content} />
                        </div>
                        <div className="border-t border-[#E5E5E5] pt-4">
                          <p className="font-semibold text-[#2C2C2C]">{testimonial.name}</p>
                          {testimonial.treatment && (
                            <p className="text-sm text-[#777777]">{testimonial.treatment}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'spaWelcomeSection':
            return (
              <section key={index} className="py-24 bg-white">
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {section.image && (
                      <div className="relative h-[500px] rounded-3xl overflow-hidden">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-[#C6A77D] text-sm tracking-wider mb-4">
                        {section.tagline || 'WELCOME TO SPA CENTER'}
                      </p>
                      <h2 className="text-4xl font-light text-[#2C2C2C] mb-6">
                        {section.title || 'Best Relaxation and Regeneration Center'}
                      </h2>
                      <div className="text-[#777777] leading-relaxed">
                        <TinaMarkdown content={section.description} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )

          case 'expertiseSection':
            return (
              <section key={index} className="py-24 bg-[#2C2C2C] text-white">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-[#C6A77D] text-sm tracking-wider mb-4">
                      {section.tagline || 'EXPERTISE COMBINED WITH QUALITY'}
                    </p>
                    <h2 className="text-4xl font-light mb-6">
                      {section.title || 'Professional Aesthetic Treatments'}
                    </h2>
                    <div className="text-[#F5F1EC] leading-relaxed">
                      <TinaMarkdown content={section.description} />
                    </div>
                  </div>
                  {section.features && section.features.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {section.features.map((feature: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="w-16 h-16 bg-[#C6A77D] rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">{feature.icon || '✨'}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                          <p className="text-[#F5F1EC]">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )

          case 'promotionsSection':
            return (
              <section key={index} className="py-24 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-16">
                    {section.title || 'Special Offers'}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {section.promotions?.map((promo: any, idx: number) => (
                      <div key={idx} className="relative rounded-3xl overflow-hidden">
                        {promo.image && (
                          <img
                            src={promo.image}
                            alt={promo.title}
                            className="w-full h-80 object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                          {promo.discount && (
                            <div className="bg-[#C6A77D] text-white text-sm px-4 py-2 rounded-full w-fit mb-4">
                              {promo.discount}
                            </div>
                          )}
                          <h3 className="text-white text-2xl font-semibold mb-2">{promo.title}</h3>
                          <div className="text-white/90 mb-4">
                            <TinaMarkdown content={promo.description} />
                          </div>
                          {promo.buttonText && (
                            <Button
                              onClick={() => handleNavigation('book-treatment')}
                              className="bg-white text-[#2C2C2C] hover:bg-[#F5F1EC] w-fit"
                            >
                              {promo.buttonText}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'beautySection':
            return (
              <section key={index} className="py-24 bg-[#F5F1EC]">
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl font-light text-[#2C2C2C] mb-6">
                        {section.title || 'The Essence of Beauty'}
                      </h2>
                      <div className="text-[#777777] leading-relaxed">
                        <TinaMarkdown content={section.description} />
                      </div>
                    </div>
                    {section.image && (
                      <div className="relative h-[500px] rounded-3xl overflow-hidden">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )

          case 'faqSection':
            return (
              <section key={index} className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-16">
                    {section.title || 'Frequently Asked Questions'}
                  </h2>
                  <div className="space-y-6">
                    {section.questions?.map((qa: any, idx: number) => (
                      <details
                        key={idx}
                        className="bg-[#F5F1EC] rounded-2xl p-6 group"
                      >
                        <summary className="text-xl font-semibold text-[#2C2C2C] cursor-pointer list-none flex justify-between items-center">
                          <span>{qa.question}</span>
                          <svg
                            className="w-6 h-6 text-[#C6A77D] transition-transform group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-4 text-[#777777] leading-relaxed">
                          <TinaMarkdown content={qa.answer} />
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'productsSection':
            return (
              <section key={index} className="py-24 bg-[#F5F1EC]">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-6">
                    {section.title || 'Professional Products'}
                  </h2>
                  <div className="text-center text-[#777777] mb-16 max-w-3xl mx-auto">
                    <TinaMarkdown content={section.description} />
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.products?.map((product: any, idx: number) => (
                      <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        {product.image && (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                          />
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[#2C2C2C] mb-3">{product.name}</h3>
                          <div className="text-[#777777]">
                            <TinaMarkdown content={product.description} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'treatmentJourneySection':
            return (
              <section key={index} className="py-24 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-16">
                    {section.title || 'Your Treatment Journey'}
                  </h2>
                  <div className="max-w-4xl mx-auto space-y-12">
                    {section.steps?.map((step: any, idx: number) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-[#C6A77D] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            {idx + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-3">{step.title}</h3>
                          <div className="text-[#777777] leading-relaxed">
                            <TinaMarkdown content={step.description} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'customTextSection':
            return (
              <section key={index} className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                  {section.heading && (
                    <h2 className="text-4xl font-light text-[#2C2C2C] mb-8">
                      {section.heading}
                    </h2>
                  )}
                  <div className="text-[#777777] leading-relaxed prose prose-lg max-w-none">
                    <TinaMarkdown content={section.body} />
                  </div>
                </div>
              </section>
            )

          case 'imageSection':
            return (
              <section key={index} className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.alt || ''}
                      className="w-full h-auto"
                    />
                    {section.caption && (
                      <div className="text-center mt-4 text-[#777777] italic">
                        {section.caption}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )

          default:
            return null
        }
      })}
    </>
  )
}
