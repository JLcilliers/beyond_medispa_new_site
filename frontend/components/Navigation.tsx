import { Button } from '@/components/ui/button'
import { Phone, MapPin, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

export default function Navigation() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const menuItems = [
    {
      name: t.nav.about,
      route: '/about',
      type: 'single' as const
    },
    {
      name: t.nav.londonTreatments,
      type: 'mega-dropdown' as const,
      categories: [
        {
          title: t.treatments.body,
          route: '/london/body',
          items: [
            { name: t.treatmentNames.exilis, route: '/procedures/body/exilis' },
            { name: t.treatmentNames.hifu, route: '/procedures/body/hifu' },
            { name: t.treatmentNames.cmSlim, route: '/procedures/body/cmslim' },
            { name: t.treatmentNames.coolLaser, route: '/procedures/body/cool-laser' },
            { name: t.treatmentNames.coolSculpting, route: '/procedures/body/coolsculpting' },
            { name: t.treatmentNames.unison, route: '/procedures/body/unison' },
            { name: t.treatmentNames.vanquish, route: '/procedures/body/vanquish' }
          ]
        },
        {
          title: t.treatments.peels,
          route: '/london/peels',
          items: [
            { name: t.treatmentNames.medik8, route: '/procedures/peels/medik8-london' },
            { name: t.treatmentNames.obagi, route: '/procedures/peels/obagi' },
            { name: t.treatmentNames.zo, route: '/procedures/peels/zo-london' }
          ]
        },
        {
          title: t.treatments.facial,
          route: '/london/facial',
          items: [
            { name: t.treatmentNames.skinScanner, route: '/procedures/facial/skin-scanner' },
            { name: t.treatmentNames.hydrafacial, route: '/procedures/facial/hydrafacial-london' },
            { name: t.treatmentNames.hydraTite, route: '/procedures/facial/hydratite' },
            { name: t.treatmentNames.oxygenFacial, route: '/procedures/facial/oxygen-facial' },
            { name: t.treatmentNames.keravive, route: '/procedures/facial/keravive' },
            { name: t.treatmentNames.ledFacial, route: '/procedures/facial/led-facial' },
            { name: t.treatmentNames.microneedling, route: '/procedures/facial/microneedling-london' },
            { name: t.treatmentNames.exosome, route: '/procedures/facial/exosome' }
          ]
        },
        {
          title: t.treatments.injectables,
          route: '/london/injectables',
          items: [
            { name: t.treatmentNames.antiWrinkle, route: '/procedures/injectables/anti-wrinkle' },
            { name: t.treatmentNames.carboxy, route: '/procedures/injectables/carboxy' },
            { name: t.treatmentNames.biofiller, route: '/procedures/injectables/biofiller-london' },
            { name: t.treatmentNames.dermalFiller, route: '/procedures/injectables/dermal-filler' },
            { name: t.treatmentNames.moleRemoval, route: '/procedures/injectables/mole-removal' },
            { name: t.treatmentNames.polynucleotides, route: '/procedures/injectables/polynucleotides' },
            { name: t.treatmentNames.prp, route: '/procedures/injectables/prp' },
            { name: t.treatmentNames.profhilo, route: '/procedures/injectables/profhilo' }
          ]
        }
      ]
    },
    {
      name: t.nav.edinburghTreatments,
      type: 'mega-dropdown' as const,
      categories: [
        {
          title: t.treatments.body,
          route: '/edinburgh/body',
          items: [
            { name: t.treatmentNames.electrolysis, route: '/procedures/body/electrolysis' },
            { name: t.treatmentNames.exilis, route: '/procedures/body/exilis' },
            { name: t.treatmentNames.cmSlim, route: '/procedures/body/cmslim' },
            { name: t.treatmentNames.coolLaser, route: '/procedures/body/cool-laser' },
            { name: t.treatmentNames.coolSculpting, route: '/procedures/body/coolsculpting' },
            { name: t.treatmentNames.hifu, route: '/procedures/body/hifu' },
            { name: t.treatmentNames.laserHairRemoval, route: '/procedures/body/laser-hair-removal' }
          ]
        },
        {
          title: t.treatments.peels,
          route: '/edinburgh/peels',
          items: [
            { name: t.treatmentNames.medik8, route: '/procedures/peels/medik8-edinburgh' },
            { name: t.treatmentNames.obagi, route: '/procedures/peels/obagi' },
            { name: t.treatmentNames.zo, route: '/procedures/peels/zo-edinburgh' }
          ]
        },
        {
          title: t.treatments.facial,
          route: '/edinburgh/facial',
          items: [
            { name: t.treatmentNames.exosome, route: '/procedures/facial/exosome' },
            { name: t.treatmentNames.hydrafacial, route: '/procedures/facial/hydrafacial-edinburgh' },
            { name: t.treatmentNames.hydraTite, route: '/procedures/facial/hydratite' },
            { name: t.treatmentNames.keravive, route: '/procedures/facial/keravive' },
            { name: t.treatmentNames.ledFacial, route: '/procedures/facial/led-facial' },
            { name: t.treatmentNames.microneedling, route: '/procedures/facial/microneedling-edinburgh' },
            { name: t.treatmentNames.skinScanner, route: '/procedures/facial/skin-scanner' }
          ]
        },
        {
          title: t.treatments.injectables,
          route: '/edinburgh/injectables',
          items: [
            { name: t.treatmentNames.allergy, route: '/procedures/injectables/allergy' },
            { name: t.treatmentNames.antiWrinkle, route: '/procedures/injectables/anti-wrinkle' },
            { name: t.treatmentNames.b12, route: '/procedures/injectables/b12' },
            { name: t.treatmentNames.biofiller, route: '/procedures/injectables/biofiller-edinburgh' },
            { name: t.treatmentNames.biotin, route: '/procedures/injectables/biotin' },
            { name: t.treatmentNames.dermalFiller, route: '/procedures/injectables/dermal-filler' },
            { name: t.treatmentNames.glutathione, route: '/procedures/injectables/glutathione' },
            { name: t.treatmentNames.ivDrip, route: '/procedures/injectables/iv-drip' },
            { name: t.treatmentNames.magnesium, route: '/procedures/injectables/magnesium' },
            { name: t.treatmentNames.neofound, route: '/procedures/injectables/neofound' },
            { name: t.treatmentNames.polynucleotides, route: '/procedures/injectables/polynucleotides' },
            { name: t.treatmentNames.prp, route: '/procedures/injectables/prp' },
            { name: t.treatmentNames.sclerotherapy, route: '/procedures/injectables/sclerotherapy' },
            { name: t.treatmentNames.vitaminD, route: '/procedures/injectables/vitamin-d' }
          ]
        }
      ]
    },
    {
      name: t.nav.locations,
      type: 'dropdown' as const,
      items: [
        { name: t.nav.allLocations, route: '/locations' },
        { name: t.nav.london, route: '/london' },
        { name: t.nav.edinburgh, route: '/edinburgh' }
      ]
    },
    {
      name: t.nav.doctors,
      route: '/doctors',
      type: 'single' as const
    },
    {
      name: t.nav.contact,
      route: '/contact',
      type: 'single' as const
    }
  ]
  
  const headlinePhone = t.contact.primaryPhoneNumber || '+44 (20) 7123 4567'
  const serviceAreaLabel = `${t.nav.london} ${t.common.and} ${t.nav.edinburgh}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/"
            className="flex items-center cursor-pointer"
          >
            <img
              src="/beyond-logo.png"
              alt="Beyond Aesthetic Clinic Logo"
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
                <span>{headlinePhone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#C6A77D]" />
                <span>{serviceAreaLabel}</span>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}
