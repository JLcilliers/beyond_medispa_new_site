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
    // Handle form submission
    // Form data would be processed here
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+40 21 123 4567", "+40 21 123 4568"]
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["contact@aestheticlab.ro", "rezervari@aestheticlab.ro"]
    },
    {
      icon: MapPin,
      title: "Adresă",
      details: ["Strada Frumuseții Nr. 123", "Sector 1, București"]
    },
    {
      icon: Clock,
      title: "Program",
      details: ["Luni - Vineri: 9:00 - 20:00", "Sâmbătă: 9:00 - 17:00"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Contactează-ne <span className="text-[#284139]">Acum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suntem aici să răspundem la toate întrebările tale și să programăm consultația
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Trimite-ne un mesaj</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nume complet</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Numele tău"
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
                    placeholder="email@exemple.ro"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+40 XXX XXX XXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serviciul dorit</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#284139]"
                    required
                  >
                    <option value="">Selectează serviciul</option>
                    <option value="botox">Botox & Fillers</option>
                    <option value="facial">Tratamente Faciale</option>
                    <option value="laser">Terapie Laser</option>
                    <option value="mezoterapie">Mezoterapia</option>
                    <option value="peeling">Peeling Chimic</option>
                    <option value="lifting">Lifting Non-Invaziv</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descrie-ne nevoile tale..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-[#F8D794] hover:bg-[#F8D794] text-black hover:opacity-90">
                Trimite Mesajul
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
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
            
            {/* Call to Action */}
            <div className="bg-rose-500 text-white p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4">Programează o consultație gratuită</h4>
              <p className="mb-6">Vorbește cu specialiștii noștri pentru a afla cel mai potrivit tratament pentru tine.</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-500">
                Sună Acum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
