import { Button } from '@/components/ui/button'
import { Phone, MapPin, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { 
    name: 'Home', 
    route: 'home',
    type: 'single'
  },
  { 
    name: 'About', 
    route: 'about',
    type: 'single'
  },
  { 
    name: 'Procedures', 
    type: 'mega-dropdown',
    categories: [
      {
        title: 'Injectables',
        route: 'procedures-injectables',
        items: [
          { name: 'Anti-Wrinkle Treatment', route: 'anti-wrinkle-treatment' },
          { name: 'Dermal & Facial Fillers', route: 'dermal-facial-fillers' },
          { name: 'Lip Enhancement', route: 'lip-enhancement' },
          { name: 'Cheek Enhancement', route: 'cheek-enhancement' },
          { name: 'Nasolabial Lines', route: 'nasolabial-lines' },
          { name: 'Under Eye Correction', route: 'under-eye-correction' },
          { name: 'Facial Balancing', route: 'facial-balancing' },
          { name: 'Profhilo', route: 'profhilo' },
          { name: 'Nucleofill', route: 'nucleofill' },
          { name: 'Fat Dissolving Injectables', route: 'fat-dissolving-injectables' },
          { name: 'B12 Injections', route: 'b12-injections' }
        ]
      },
      {
        title: 'Skin Treatments',
        route: 'procedures-skin-treatments',
        items: [
          { name: 'HydraFacial', route: 'hydrafacial' },
          { name: 'Hydratite Facial', route: 'hydratite-facial' },
          { name: 'Oxygen Facial', route: 'oxygen-facial' },
          { name: 'Hydro Peptide', route: 'hydro-peptide' },
          { name: 'LED Light Therapy Facial', route: 'led-light-therapy-facial' },
          { name: 'Microneedling', route: 'microneedling' },
          { name: 'PRP for Hair Growth', route: 'prp-hair-growth' },
          { name: 'Exosomes / DEC Exosomes', route: 'exosomes-dec' },
          { name: 'ZO Facial by Zein Obagi', route: 'zo-facial-zein-obagi' },
          { name: 'Obagi Blue Radiance Peel', route: 'obagi-blue-radiance-peel' },
          { name: 'Exilis Elite Facial Skin Tightening', route: 'exilis-elite-facial' },
          { name: 'Cool Laser', route: 'cool-laser' },
          { name: 'Elos IPL Skin Rejuvenation', route: 'elos-ipl-skin-rejuvenation' }
        ]
      },
      {
        title: 'Body Contouring & Fat Reduction',
        route: 'procedures-body-contouring',
        items: [
          { name: 'CoolSculpting', route: 'coolsculpting' },
          { name: 'CoolSculpting for Men', route: 'coolsculpting-men' },
          { name: 'Fat Freezing', route: 'fat-freezing' },
          { name: 'CM Slim', route: 'cm-slim' },
          { name: 'Exilis Elite Body', route: 'exilis-elite-body' },
          { name: 'Vanquish', route: 'vanquish' },
          { name: 'Buttocks Enhancement', route: 'buttocks-enhancement' }
        ]
      },
      {
        title: 'Skin Concerns',
        route: 'procedures-skin-concerns',
        items: [
          { name: 'Treatments for Anti-Ageing', route: 'treatments-anti-ageing' },
          { name: 'Treatments for Acne and Scarring', route: 'treatments-acne-scarring' },
          { name: 'Treatments for Sun Damage and Pigmentation', route: 'treatments-sun-damage-pigmentation' },
          { name: 'Treatments for Sensitive Skin', route: 'treatments-sensitive-skin' },
          { name: 'Mole & Skin Tag Removal', route: 'mole-skin-tag-removal' }
        ]
      },
      {
        title: 'Wellbeing & Specialist Therapies',
        route: 'procedures-wellbeing',
        items: [
          { name: 'Anti-Cellulite Treatment / Alidya', route: 'anti-cellulite-alidya' },
          { name: 'Intuitive Healing', route: 'intuitive-healing' },
          { name: 'The Harmony Massage', route: 'harmony-massage' },
          { name: 'Mesotherapy', route: 'mesotherapy' },
          { name: 'Sarah Carolides (Nutritionist & Skin Health)', route: 'sarah-carolides-nutritionist' }
        ]
      }
    ]
  },
  { 
    name: 'Locations', 
    type: 'dropdown',
    items: [
      { name: 'All Locations', route: 'locations' },
      { name: 'London', route: 'london' },
      { name: 'Edinburgh', route: 'edinburgh' }
    ]
  },
  { 
    name: 'Doctors', 
    type: 'dropdown',
    items: [
      { name: 'All Doctors', route: 'doctors' },
      { name: 'London Team', route: 'doctors-london' },
      { name: 'Edinburgh Team', route: 'doctors-edinburgh' }
    ]
  },
  { 
    name: 'Contact', 
    route: 'contact',
    type: 'single'
  },
  { 
    name: 'Blog', 
    route: 'blog',
    type: 'single'
  }
]

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-[#111A19]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </button>
          
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {item.type === 'single' ? (
                  <button 
                    onClick={() => handleNavigation(item.route!)}
                    className="text-white hover:text-[#F8D794] transition-colors text-sm py-2"
                  >
                    {item.name}
                  </button>
                ) : item.type === 'mega-dropdown' ? (
                  <div>
                    <button className="flex items-center text-white hover:text-[#F8D794] transition-colors text-sm py-2">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-1 bg-[#111A19] border border-[#284139] rounded-lg shadow-xl min-w-[800px] p-6 grid grid-cols-3 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.categories?.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-3">
                          <button
                            onClick={() => {
                              handleNavigation(category.route)
                            }}
                            className="block text-[#F8D794] font-semibold text-sm hover:text-white transition-colors mb-2"
                          >
                            {category.title}
                          </button>
                          <div className="space-y-1">
                            {category.items.map((subItem, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => {
                                  handleNavigation(subItem.route)
                                }}
                                className="block w-full text-left text-white hover:text-[#F8D794] transition-colors text-xs py-1"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <button className="flex items-center text-white hover:text-[#F8D794] transition-colors text-sm py-2">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-1 bg-[#111A19] border border-[#284139] rounded-lg shadow-xl min-w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.items?.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => {
                            handleNavigation(subItem.route)
                          }}
                          className="block w-full text-left px-4 py-2 text-white hover:text-[#F8D794] hover:bg-[#284139]/30 transition-colors text-sm"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-4 text-white text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#F8D794]" />
                <span>+44 (20) 7123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#F8D794]" />
                <span>London & Edinburgh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}