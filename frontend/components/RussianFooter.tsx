import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function RussianFooter() {
  return (
    <footer className="bg-white text-black py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-light text-[#F8D794] mb-6">Beyond MediSpa</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium medical aesthetics clinics in London and Edinburgh. Let your natural beauty shine with our expert treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#284139] p-3 rounded-full hover:bg-[#F8D794] hover:text-[#111A19] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#284139] p-3 rounded-full hover:bg-[#F8D794] hover:text-[#111A19] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#284139] p-3 rounded-full hover:bg-[#F8D794] hover:text-[#111A19] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#F8D794] mb-6">Treatments</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('procedures-injectables')} className="hover:text-[#F8D794] transition-colors text-left">Injectables</button></li>
              <li><button onClick={() => handleNavigation('procedures-skin-treatments')} className="hover:text-[#F8D794] transition-colors text-left">Skin Treatments</button></li>
              <li><button onClick={() => handleNavigation('procedures-body-contouring')} className="hover:text-[#F8D794] transition-colors text-left">Body Contouring</button></li>
              <li><button onClick={() => handleNavigation('procedures-skin-concerns')} className="hover:text-[#F8D794] transition-colors text-left">Skin Concerns</button></li>
              <li><button onClick={() => handleNavigation('procedures-wellbeing')} className="hover:text-[#F8D794] transition-colors text-left">Wellbeing</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#F8D794] mb-6">Information</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('about')} className="hover:text-[#F8D794] transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleNavigation('doctors')} className="hover:text-[#F8D794] transition-colors text-left">Our Team</button></li>
              <li><button onClick={() => handleNavigation('locations')} className="hover:text-[#F8D794] transition-colors text-left">Locations</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="hover:text-[#F8D794] transition-colors text-left">Contact</button></li>
              <li><button onClick={() => handleNavigation('blog')} className="hover:text-[#F8D794] transition-colors text-left">Blog</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#F8D794] mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#F8D794] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">London & Edinburgh</p>
                  <p className="text-gray-400 text-sm">Premium locations</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#F8D794] mr-3" />
                <div>
                  <p className="text-gray-300">+44 (20) 7123 4567</p>
                  <p className="text-gray-400 text-sm">Monday - Saturday 9:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#F8D794] mr-3" />
                <p className="text-gray-300">info@beyondmedispa.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#284139] mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Beyond MediSpa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#F8D794] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F8D794] text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}