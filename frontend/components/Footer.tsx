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
              Aesthetic medicine clinic dedicated to your beauty and skin health. 
              Advanced technology, remarkable results.
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
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/procedures/injectables" className="hover:text-[#F8D794] transition-colors">Injectables</a></li>
              <li><a href="/procedures/facial" className="hover:text-[#F8D794] transition-colors">Facial Treatments</a></li>
              <li><a href="/procedures/body" className="hover:text-rose-400 transition-colors">Body Treatments</a></li>
              <li><a href="/procedures/peels" className="hover:text-rose-400 transition-colors">Chemical Peels</a></li>
              <li><a href="/doctors" className="hover:text-rose-400 transition-colors">Our Doctors</a></li>
              <li><a href="/book" className="hover:text-rose-400 transition-colors">Book Treatment</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="/doctors" className="hover:text-rose-400 transition-colors">Our Team</a></li>
              <li><a href="/locations" className="hover:text-rose-400 transition-colors">Locations</a></li>
              <li><a href="/locations/london" className="hover:text-rose-400 transition-colors">London Clinic</a></li>
              <li><a href="/locations/edinburgh" className="hover:text-rose-400 transition-colors">Edinburgh Clinic</a></li>
              <li><a href="/contact" className="hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-rose-400" />
                <span>0207 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-rose-400" />
                <span>info@aestheticlab.co.uk</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-rose-400 mt-1" />
                <div>
                  <p>London: 123 Harley Street, W1G 6AX</p>
                  <p>Edinburgh: 45 Queen Street, EH2 3NH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Aesthetic Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
