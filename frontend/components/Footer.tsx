import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#284139] mb-4">Aesthetic Lab</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Clinica de medicină estetică dedicată frumuseții și sănătății pielii tale. 
              Tehnologie avansată, rezultate remarcabile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#284139] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#284139] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-[#284139] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#F8D794] transition-colors">Botox & Fillers</a></li>
              <li><a href="#" className="hover:text-[#F8D794] transition-colors">Tratamente Faciale</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Terapie Laser</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Mezoterapia</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Peeling Chimic</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Lifting Non-Invaziv</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rapide</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Despre Noi</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Echipa</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Testimoniale</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Prețuri</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-rose-400" />
                <span>+40 21 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-rose-400" />
                <span>contact@aestheticlab.ro</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-rose-400 mt-1" />
                <div>
                  <p>București: Strada Frumuseții Nr. 123</p>
                  <p>Cluj-Napoca: Strada Clinicii Nr. 45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Aesthetic Lab. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Politica de Confidențialitate</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Termeni și Condiții</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
