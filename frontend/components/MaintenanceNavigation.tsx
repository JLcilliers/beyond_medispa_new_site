import { Button } from '@/components/ui/button'
import { Phone, MapPin, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { 
    name: 'Home', 
    type: 'single'
  },
  { 
    name: 'About', 
    type: 'single'
  },
  { 
    name: 'Procedures', 
    type: 'mega-dropdown',
    categories: [
      {
        title: 'Injectables',
        items: [
          { name: 'Anti-Wrinkle Treatment' },
          { name: 'Dermal & Facial Fillers' },
          { name: 'Lip Enhancement' },
          { name: 'Cheek Enhancement' },
          { name: 'Nasolabial Lines' },
          { name: 'Under Eye Correction' },
          { name: 'Facial Balancing' },
          { name: 'Profhilo' },
          { name: 'Nucleofill' },
          { name: 'Fat Dissolving Injectables' },
          { name: 'B12 Injections' }
        ]
      },
      {
        title: 'Skin Treatments',
        items: [
          { name: 'HydraFacial' },
          { name: 'Hydratite Facial' },
          { name: 'Oxygen Facial' },
          { name: 'Hydro Peptide' },
          { name: 'LED Light Therapy Facial' },
          { name: 'Microneedling' },
          { name: 'PRP for Hair Growth' },
          { name: 'Exosomes / DEC Exosomes' },
          { name: 'ZO Facial by Zein Obagi' },
          { name: 'Obagi Blue Radiance Peel' },
          { name: 'Exilis Elite Facial Skin Tightening' },
          { name: 'Cool Laser' },
          { name: 'Elos IPL Skin Rejuvenation' }
        ]
      },
      {
        title: 'Body Contouring & Fat Reduction',
        items: [
          { name: 'CoolSculpting' },
          { name: 'CoolSculpting for Men' },
          { name: 'Fat Freezing' },
          { name: 'CM Slim' },
          { name: 'Exilis Elite Body' },
          { name: 'Vanquish' },
          { name: 'Buttocks Enhancement' }
        ]
      },
      {
        title: 'Skin Concerns',
        items: [
          { name: 'Treatments for Anti-Ageing' },
          { name: 'Treatments for Acne and Scarring' },
          { name: 'Treatments for Sun Damage and Pigmentation' },
          { name: 'Treatments for Sensitive Skin' },
          { name: 'Mole & Skin Tag Removal' }
        ]
      },
      {
        title: 'Wellbeing & Specialist Therapies',
        items: [
          { name: 'Anti-Cellulite Treatment / Alidya' },
          { name: 'Intuitive Healing' },
          { name: 'The Harmony Massage' },
          { name: 'Mesotherapy' },
          { name: 'Sarah Carolides (Nutritionist & Skin Health)' }
        ]
      }
    ]
  },
  { 
    name: 'Locations', 
    type: 'dropdown',
    items: [
      { name: 'All Locations' },
      { name: 'London' },
      { name: 'Edinburgh' }
    ]
  },
  { 
    name: 'Doctors', 
    type: 'dropdown',
    items: [
      { name: 'All Doctors' },
      { name: 'London Team' },
      { name: 'Edinburgh Team' }
    ]
  },
  { 
    name: 'Contact', 
    type: 'single'
  },
  { 
    name: 'Blog', 
    type: 'single'
  }
]

export default function MaintenanceNavigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/logo_w_edge_to_top_bottom.png" 
              alt="Beyond Medispa Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {item.type === 'single' ? (
                  <span className="text-[#FAF8F5] hover:text-[#C6A77D] transition-colors text-sm py-2 font-medium cursor-default">
                    {item.name}
                  </span>
                ) : item.type === 'mega-dropdown' ? (
                  <div>
                    <span className="flex items-center text-[#FAF8F5] hover:text-[#C6A77D] transition-colors text-sm py-2 font-medium cursor-default">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </span>
                    
                    <div className="absolute top-full left-0 mt-1 bg-[#FAF8F5] border border-[#E5E5E5] rounded-lg shadow-xl min-w-[800px] p-6 grid grid-cols-3 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.categories?.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-3">
                          <span className="block text-[#333333] font-bold text-sm mb-2 cursor-default">
                            {category.title}
                          </span>
                          <div className="space-y-1">
                            {category.items.map((subItem, subIndex) => (
                              <span
                                key={subIndex}
                                className="block w-full text-left text-[#777777] text-xs py-1 cursor-default"
                              >
                                {subItem.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="flex items-center text-[#FAF8F5] hover:text-[#C6A77D] transition-colors text-sm py-2 font-medium cursor-default">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </span>
                    
                    <div className="absolute top-full left-0 mt-1 bg-[#FAF8F5] border border-[#E5E5E5] rounded-lg shadow-xl min-w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.items?.map((subItem, subIndex) => (
                        <span
                          key={subIndex}
                          className="block w-full text-left px-4 py-2 text-[#777777] text-sm cursor-default"
                        >
                          {subItem.name}
                        </span>
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
          </div>
        </div>
      </div>
    </nav>
  )
}