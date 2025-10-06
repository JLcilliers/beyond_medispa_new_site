import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "Are the treatments painful?",
    answer: "Most of our treatments are minimally invasive and are performed with local anesthesia. The level of discomfort is minimal and temporary. Our team ensures that you feel comfortable throughout the procedures."
  },
  {
    id: 2,
    question: "How long does a treatment session last?",
    answer: "The duration varies depending on the type of treatment. A Botox session lasts approximately 15-30 minutes, while facial treatments can take between 60-90 minutes. We will inform you exactly about the treatment duration at the initial consultation."
  },
  {
    id: 3,
    question: "When will I see results?",
    answer: "Results vary depending on the treatment. For Botox and fillers, effects are visible in 3-7 days. For facial treatments, the skin looks better immediately after the procedure, and results improve progressively in the following weeks."
  },
  {
    id: 4,
    question: "Are the treatments safe?",
    answer: "Yes, all treatments are performed by specialist doctors using certified products and state-of-the-art equipment. We respect all safety and hygiene protocols. Each patient receives a detailed evaluation before treatment."
  },
  {
    id: 5,
    question: "What is the recovery period?",
    answer: "Most treatments do not require recovery time. You can return to normal activities immediately after the procedure. For certain treatments, we may recommend avoiding sun exposure or intense exercise for 24-48 hours."
  },
  {
    id: 6,
    question: "How often should I repeat treatments?",
    answer: "Frequency depends on the type of treatment. Botox lasts 4-6 months, fillers 6-18 months, and facial treatments are recommended monthly. We will provide you with a personalized plan to maintain your results."
  },
  {
    id: 7,
    question: "Can I combine multiple treatments?",
    answer: "Yes, many treatments can be combined for optimal results. For example, Botox with fillers or facial treatments with mesotherapy. The specialist doctor will evaluate which combinations are suitable for you."
  },
  {
    id: 8,
    question: "What are the treatment costs?",
    answer: "Prices vary depending on the type and complexity of the treatment. We offer free consultations to evaluate your needs and provide you with a treatment plan with transparent costs. We also have advantageous packages available."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Frequently Asked <span className="text-[#284139]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answers to the most common questions about our treatments
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-6 h-6 text-[#284139] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Didn't find the answer to your question?</p>
            <button className="bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] px-8 py-4 rounded-lg font-medium transition-colors">
              Contact Us Directly
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
