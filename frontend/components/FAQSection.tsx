import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is Profhilo and how does it work?',
    answer: 'Profhilo is a revolutionary bio-remodelling treatment that stimulates collagen and elastin production. Unlike traditional fillers, it spreads evenly under the skin to improve skin quality, hydration, and firmness. The treatment involves a series of small injections and results typically last 6-9 months.'
  },
  {
    question: 'How long do anti-wrinkle treatments last?',
    answer: 'Anti-wrinkle treatments typically last 3-4 months, though this can vary depending on individual factors such as muscle strength, metabolism, and lifestyle. Regular treatments may extend the duration as muscles become trained to relax.'
  },
  {
    question: 'Is CoolSculpting safe and does it really work?',
    answer: 'CoolSculpting is FDA-approved and clinically proven to reduce fat cells by up to 25% in treated areas. The procedure is non-invasive and uses controlled cooling to freeze fat cells, which are then naturally eliminated by the body over 2-3 months. Most clients see noticeable results after one session.'
  },
  {
    question: 'What should I expect during my first consultation?',
    answer: 'Your first consultation includes a thorough assessment of your skin and medical history, discussion of your aesthetic goals, and personalized treatment recommendations. We explain all options, costs, and expected outcomes. There\'s no pressure to book treatments immediately - take time to consider your options.'
  },
  {
    question: 'Are there any side effects with dermal fillers?',
    answer: 'Common side effects are mild and temporary, including slight swelling, redness, or bruising at injection sites. These typically resolve within 24-48 hours. Serious complications are rare when treatments are performed by qualified medical professionals using high-quality products.'
  },
  {
    question: 'How do I prepare for my treatment?',
    answer: 'Preparation varies by treatment but generally includes avoiding blood-thinning medications, alcohol, and supplements like fish oil for 24-48 hours beforehand. We provide detailed pre-treatment instructions specific to your procedure during your consultation.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options including interest-free payment plans for treatments over certain amounts. We accept card payments, bank transfers, and work with several finance providers to make treatments accessible. Discuss options during your consultation.'
  },
  {
    question: 'How do I choose between your London and Edinburgh clinics?',
    answer: 'Both clinics offer the same high standards of care and treatment options. Choose based on convenience and location preference. Some practitioners may specialize in specific treatments, which we can discuss during booking to ensure you see the most suitable expert for your needs.'
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
            Frequently Asked <span className="text-[#A38E78]">Questions</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            Get answers to common questions about our treatments, procedures, and what to expect 
            during your aesthetic journey with Beyond MediSpa.
          </p>
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
                Still Have Questions?
              </h3>
              <p className="text-[#777777] mb-6">
                Our expert team is here to help. Contact us for personalized advice 
                and detailed information about any of our treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+442071234567"
                  className="bg-[#A38E78] hover:bg-[#8B7A67] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Call Us: +44 (20) 7123 4567
                </a>
                <a 
                  href="mailto:info@beyondmedispa.com"
                  className="border border-[#A38E78] text-[#A38E78] hover:bg-[#A38E78] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}