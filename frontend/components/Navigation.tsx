import { Button } from '@/components/ui/button'
import { Phone, MapPin, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

const menuItems = [
  { 
    name: 'Home', 
    route: '/',
    type: 'single'
  },
  { 
    name: 'About', 
    route: '/about',
    type: 'single'
  },
  { 
    name: 'London Treatments', 
    type: 'mega-dropdown',
    categories: [
      {
        title: 'Body',
        route: '/london/body',
        items: [
          { name: 'Exilis', route: '/procedures/body/exilis' },
          { name: 'Hifu', route: '/procedures/body/hifu' },
          { name: 'CM Slim', route: '/procedures/body/cmslim' },
          { name: 'Cool Laser', route: '/procedures/body/cool-laser' },
          { name: 'CoolSculpting', route: '/procedures/body/coolsculpting' },
          { name: 'Unison', route: '/procedures/body/unison' },
          { name: 'Vanquish', route: '/procedures/body/vanquish' }
        ]
      },
      {
        title: 'Peels',
        route: '/london/peels',
        items: [
          { name: 'Medik8', route: '/procedures/peels/medik8-london' },
          { name: 'Obagi', route: '/procedures/peels/obagi' },
          { name: 'ZO', route: '/procedures/peels/zo-london' }
        ]
      },
      {
        title: 'Facial',
        route: '/london/facial',
        items: [
          { name: 'Skin Scanner', route: '/procedures/facial/skin-scanner' },
          { name: 'Hydrafacial', route: '/procedures/facial/hydrafacial-london' },
          { name: 'HydraTite', route: '/procedures/facial/hydratite' },
          { name: 'Oxygen Facial', route: '/procedures/facial/oxygen-facial' },
          { name: 'Keravive', route: '/procedures/facial/keravive' },
          { name: 'LED Facial', route: '/procedures/facial/led-facial' },
          { name: 'Microneedling', route: '/procedures/facial/microneedling-london' },
          { name: 'Exosome', route: '/procedures/facial/exosome' }
        ]
      },
      {
        title: 'Injectables',
        route: '/london/injectables',
        items: [
          { name: 'Anti Wrinkle', route: '/procedures/injectables/anti-wrinkle' },
          { name: 'Carboxy', route: '/procedures/injectables/carboxy' },
          { name: 'Biofiller', route: '/procedures/injectables/biofiller-london' },
          { name: 'Dermal Filler', route: '/procedures/injectables/dermal-filler' },
          { name: 'Mole Removal', route: '/procedures/injectables/mole-removal' },
          { name: 'Polynucleotides', route: '/procedures/injectables/polynucleotides' },
          { name: 'PRP', route: '/procedures/injectables/prp' },
          { name: 'Profhilo', route: '/procedures/injectables/profhilo' }
        ]
      }
    ]
  },
  { 
    name: 'Edinburgh Treatments', 
    type: 'mega-dropdown',
    categories: [
      {
        title: 'Body',
        route: '/edinburgh/body',
        items: [
          { name: 'Electrolysis', route: '/procedures/body/electrolysis' },
          { name: 'Exilis', route: '/procedures/body/exilis' },
          { name: 'CM Slim', route: '/procedures/body/cmslim' },
          { name: 'Cool Laser', route: '/procedures/body/cool-laser' },
          { name: 'CoolSculpt', route: '/procedures/body/coolsculpting' },
          { name: 'Hifu', route: '/procedures/body/hifu' },
          { name: 'Laser Hair Removal', route: '/procedures/body/laser-hair-removal' }
        ]
      },
      {
        title: 'Peels',
        route: '/edinburgh/peels',
        items: [
          { name: 'Medik8', route: '/procedures/peels/medik8-edinburgh' },
          { name: 'Obagi', route: '/procedures/peels/obagi' },
          { name: 'ZO', route: '/procedures/peels/zo-edinburgh' }
        ]
      },
      {
        title: 'Facial',
        route: '/edinburgh/facial',
        items: [
          { name: 'Exosomes', route: '/procedures/facial/exosome' },
          { name: 'HydraFacial', route: '/procedures/facial/hydrafacial-edinburgh' },
          { name: 'HydraTite', route: '/procedures/facial/hydratite' },
          { name: 'Keravive', route: '/procedures/facial/keravive' },
          { name: 'LED facial', route: '/procedures/facial/led-facial' },
          { name: 'Microneedling', route: '/procedures/facial/microneedling-edinburgh' },
          { name: 'Skin Scanner', route: '/procedures/facial/skin-scanner' }
        ]
      },
      {
        title: 'Injectables',
        route: '/edinburgh/injectables',
        items: [
          { name: 'Allergy', route: '/procedures/injectables/allergy' },
          { name: 'Anti Wrinkle', route: '/procedures/injectables/anti-wrinkle' },
          { name: 'B12', route: '/procedures/injectables/b12' },
          { name: 'Biofiller', route: '/procedures/injectables/biofiller-edinburgh' },
          { name: 'Biotin', route: '/procedures/injectables/biotin' },
          { name: 'Dermal', route: '/procedures/injectables/dermal-filler' },
          { name: 'Glutathione', route: '/procedures/injectables/glutathione' },
          { name: 'IV Drip', route: '/procedures/injectables/iv-drip' },
          { name: 'Magnesium', route: '/procedures/injectables/magnesium' },
          { name: 'Neofound', route: '/procedures/injectables/neofound' },
          { name: 'Polynucleotides', route: '/procedures/injectables/polynucleotides' },
          { name: 'PRP', route: '/procedures/injectables/prp' },
          { name: 'Sclerotherapy', route: '/procedures/injectables/sclerotherapy' },
          { name: 'Vitamin D', route: '/procedures/injectables/vitamin-d' }
        ]
      }
    ]
  },
  { 
    name: 'Locations', 
    type: 'dropdown',
    items: [
      { name: 'All Locations', route: '/locations' },
      { name: 'London', route: '/london' },
      { name: 'Edinburgh', route: '/edinburgh' }
    ]
  },
  { 
    name: 'Doctors', 
    route: '/doctors',
    type: 'single'
  },
  { 
    name: 'Contact', 
    route: '/contact',
    type: 'single'
  }
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/"
            className="flex items-center cursor-pointer"
          >
            <img 
              src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/logo_w_edge_to_top_bottom.png" 
              alt="Beyond Medispa Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {item.type === 'single' ? (
                  <Link 
                    to={item.route!}
                    className="text-[#FAF8F5] hover:text-[#C6A77D] transition-colors text-sm py-2 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : item.type === 'mega-dropdown' ? (
                  <div>
                    <button className="flex items-center text-[#FAF8F5] hover:text-[#C6A77D] transition-colors text-sm py-2 font-medium">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-1 bg-[#FAF8F5] border border-[#E5E5E5] rounded-lg shadow-xl min-w-[800px] p-6 grid grid-cols-4 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.categories?.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-3">
                          <Link
                            to={category.route}
                            className="block text-[#333333] font-bold text-sm hover:text-[#A38E78] transition-colors mb-2"
                          >
                            {category.title}
                          </Link>
                          <div className="space-y-1">
                            {category.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.route}
                                className="block w-full text-left text-[#777777] hover:text-[#A38E78] transition-colors text-xs py-1"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <button className="flex items-center text-[#FAF8F5] hover:text-[#C6A77D] transition-colors text-sm py-2 font-medium">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-1 bg-[#FAF8F5] border border-[#E5E5E5] rounded-lg shadow-xl min-w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.route}
                          className="block w-full text-left px-4 py-2 text-[#777777] hover:text-[#A38E78] hover:bg-[#A38E78]/10 transition-colors text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-4 text-[#B5A68B] text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#C6A77D]" />
                <span>+44 (20) 7123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#C6A77D]" />
                <span>London & Edinburgh</span>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}