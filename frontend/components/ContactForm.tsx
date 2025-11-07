import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+44 (20) 7123 4567", "+44 (131) 456 7890"]
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["contact@beyondmedispa.co.uk", "bookings@beyondmedispa.co.uk"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["London & Edinburgh", "United Kingdom"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat: 9:00 AM - 5:00 PM"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Contact Us <span className="text-[#284139]">Now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer all your questions and schedule your consultation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+44 XXX XXX XXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Desired Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#284139]"
                    required
                  >
                    <option value="">Select service</option>
                    <option value="botox">Botox & Fillers</option>
                    <option value="facial">Facial Treatments</option>
                    <option value="laser">Laser Therapy</option>
                    <option value="mesotherapy">Mesotherapy</option>
                    <option value="peeling">Chemical Peel</option>
                    <option value="lifting">Non-Invasive Lifting</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your needs..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-[#F8D794] hover:bg-[#F8D794] text-black hover:opacity-90">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#80907E]/20 p-4 rounded-full mr-6">
                  <info.icon className="w-6 h-6 text-[#284139]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-rose-500 text-white p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">Schedule a Free Consultation</h4>
              <p className="mb-6">Speak with our specialists to find the most suitable treatment for you.</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-500">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
