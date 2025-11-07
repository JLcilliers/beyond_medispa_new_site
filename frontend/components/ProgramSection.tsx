const showcaseImages = [
  {
    src: '/About - Clinic Pages/London.jpg',
    alt: 'Beyond MediSpa London clinic reception'
  },
  {
    src: '/About - Clinic Pages/Edinburgh.jpg',
    alt: 'Beyond MediSpa Edinburgh clinic interior'
  },
  {
    src: '/About - Clinic Pages/Beyond Desk.webp',
    alt: 'Beyond MediSpa consultation area'
  }
]

export default function ProgramSection() {
  return (
    <section className="bg-[#111A19] py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A77D]">Gallery Highlights</p>
          <h2 className="mt-4 text-4xl font-light leading-tight lg:text-5xl">
            Inside Beyond MediSpa London &amp; Edinburgh
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Take a look inside our Knightsbridge and Edinburgh clinics—serene reception spaces, private consultation
            rooms, and calming treatment suites curated for every stage of your aesthetic journey.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Visit us at Harvey Nichols in London's Knightsbridge and on St Andrew Square in Edinburgh to experience
            doctor-led treatments delivered in luxurious surroundings that feel as welcoming as they are advanced.
          </p>
        </div>
        <div className="grid gap-4 lg:w-1/2">
          {showcaseImages.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
