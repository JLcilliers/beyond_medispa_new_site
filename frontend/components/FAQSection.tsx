import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What treatments does Beyond Aesthetic Clinic offer?',
    answer: 'Beyond Aesthetic Clinic provides a wide range of aesthetic medicine treatments, including dermal fillers, laser treatments, and body contouring. Whether you\'re looking to reduce wrinkles, enhance your natural beauty, or achieve a sculpted silhouette, our expert team tailors every treatment to you.'
  },
  {
    question: 'Are your treatments suitable for all skin types?',
    answer: 'Yes. Our medical aesthetics experts specialise in treating a variety of skin concerns, from dry skin to dark spots and fine lines. We personalise every skin treatment to your unique needs, ensuring the best possible results while prioritising your skin health.'
  },
  {
    question: 'What is body contouring, and how does it work?',
    answer: 'Body contouring helps sculpt and refine your figure by reducing stubborn fat and enhancing definition. Our expert team, led by experienced professionals, offers non-surgical treatments and more advanced reshaping procedures like liposuction.'
  },
  {
    question: 'How long do aesthetic treatments take?',
    answer: 'Most treatments take just 30-90 minutes, making them easy to fit into your schedule. Note that some procedures may require multiple sessions for optimal, long-lasting results.'
  },
  {
    question: 'Is there any downtime after treatment?',
    answer: 'Many of our aesthetic clinic treatments require minimal to no downtime. Many clients return to daily activities immediately, though treatments like laser procedures or injectables may cause slight redness or swelling for a short time.'
  },
  {
    question: 'How do I know which treatment is right for me?',
    answer: 'We offer a personalised consultation to assess your goals and recommend the best skin, body, or facial aesthetic treatments for you. Our expert team ensures every treatment enhances your natural beauty while delivering real, noticeable results.'
  },
  {
    question: 'Can I combine treatments for a complete transformation?',
    answer: 'Absolutely. Many clients choose to combine facial aesthetics, body treatments, and medical aesthetics for a comprehensive, tailored approach. Whether you want to smooth wrinkles, restore skin health, or refine your appearance, we create bespoke treatment plans to suit your needs.'
  },
  {
    question: 'How can I book a consultation?',
    answer: 'Booking is simple. Contact us now, call us at 020 7201 8595, or visit our aesthetic clinic in London or Edinburgh to start your beauty journey today. Our team is here to guide you toward real results with confidence.'
  }
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
            Beyond Aesthetic Clinic Medical Aesthetic Clinic: <span className="text-[#A38E78]">FAQs</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/80"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-[#333333] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-[#A38E78]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#A38E78]" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-[#E5E5E5]">
                      <p className="text-[#777777] leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[#FAF8F5] border border-[#E5E5E5] rounded-2xl p-8">
              <h3 className="text-2xl font-light text-[#333333] mb-4">
                Visit Our Aesthetic Clinic In London Or Edinburgh Today
              </h3>
              <p className="text-[#777777] mb-6">
                Experience expert aesthetic care in a luxurious, calming setting. Visit our London or Edinburgh clinics and start your beauty journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:02072018595"
                  className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Call Us: 020 7201 8595
                </a>
                <a 
                  href="/book-treatment"
                  className="border border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}