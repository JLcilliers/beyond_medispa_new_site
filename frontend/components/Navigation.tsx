import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../locales/translations'

type FeaturedItem = {
  name: string
  route: string
  badge?: string
}

type CategoryItem = {
  name: string
  route: string
  isSeeAll?: boolean
}

type CategoryGroup = {
  title: string
  route: string
  items: CategoryItem[]
}

type LocationMenu = {
  name: string
  featured: FeaturedItem[]
  categories: CategoryGroup[]
}

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`

const SPECIALITIES_LABEL = 'Our Specialities'
const OTHER_OPTIONS_LABEL = 'Other treatment options'
const CLIENT_FAVOURITE_LABEL = 'Client favourite'

type MenuItem =
  | { type: 'link'; name: string; route: string }
  | { type: 'location'; menu: LocationMenu }

export default function Navigation() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const [mobileOpen, setMobileOpen] = useState(false)

  const viewAllLabel = t.buttons.viewAllTreatments || t.buttons.viewAll || 'View all'

  const londonMenu: LocationMenu = {
    name: t.nav.londonTreatments,
    featured: [
      { name: t.treatmentNames.hydrafacial, route: '/procedures/facial/hydrafacial-london', badge: CLIENT_FAVOURITE_LABEL },
      { name: t.treatmentNames.ledFacial, route: '/procedures/facial/led-facial' },
      { name: t.treatmentNames.oxygenFacial, route: '/procedures/facial/oxygen-facial' },
      { name: t.treatmentNames.microneedling, route: '/procedures/facial/microneedling-london' },
      { name: t.treatmentNames.exosome, route: '/procedures/facial/exosome' },
      { name: t.treatmentNames.exilis, route: '/procedures/body/exilis' },
      { name: t.treatmentNames.hifu, route: '/procedures/body/hifu' }
    ],
    categories: [
      {
        title: t.treatments.facial,
        route: '/london/facial',
        items: [
          { name: t.treatmentNames.zo, route: '/procedures/peels/zo-london' },
          { name: t.treatmentNames.hydraTite, route: '/procedures/facial/hydratite' },
          { name: viewAllLabel, route: '/london/facial', isSeeAll: true }
        ]
      },
      {
        title: t.treatments.body,
        route: '/london/body',
        items: [
          { name: t.treatmentNames.coolSculpting, route: '/procedures/body/coolsculpting' },
          { name: viewAllLabel, route: '/london/body', isSeeAll: true }
        ]
      },
      {
        title: t.treatments.injectables,
        route: '/london/injectables',
        items: [
          { name: t.treatmentNames.biofiller, route: '/procedures/injectables/biofiller-london' },
          { name: t.treatmentNames.antiWrinkle, route: '/procedures/injectables/anti-wrinkle' },
          { name: t.treatmentNames.polynucleotides, route: '/procedures/injectables/polynucleotides' },
          { name: t.treatmentNames.dermalFiller, route: '/procedures/injectables/dermal-filler' },
          { name: viewAllLabel, route: '/london/injectables', isSeeAll: true }
        ]
      }
    ]
  }

  const edinburghMenu: LocationMenu = {
    name: t.nav.edinburghTreatments,
    featured: [
      { name: t.treatmentNames.hydrafacial, route: '/procedures/facial/hydrafacial-edinburgh', badge: CLIENT_FAVOURITE_LABEL },
      { name: t.treatmentNames.ledFacial, route: '/procedures/facial/led-facial' },
      { name: t.treatmentNames.microneedling, route: '/procedures/facial/microneedling-edinburgh' },
      { name: t.treatmentNames.exosome, route: '/procedures/facial/exosome' },
      { name: t.treatmentNames.exilis, route: '/procedures/body/exilis' },
      { name: t.treatmentNames.coolLaser, route: '/procedures/body/cool-laser' },
      { name: t.treatmentNames.electrolysis, route: '/procedures/body/electrolysis' }
    ],
    categories: [
      {
        title: t.treatments.facial,
        route: '/edinburgh/facial',
        items: [
          { name: t.treatmentNames.zo, route: '/procedures/peels/zo-edinburgh' },
          { name: t.treatmentNames.hydraTite, route: '/procedures/facial/hydratite' },
          { name: viewAllLabel, route: '/edinburgh/facial', isSeeAll: true }
        ]
      },
      {
        title: t.treatments.body,
        route: '/edinburgh/body',
        items: [
          { name: t.treatmentNames.laserHairRemoval, route: '/procedures/body/laser-hair-removal' },
          { name: viewAllLabel, route: '/edinburgh/body', isSeeAll: true }
        ]
      },
      {
        title: t.treatments.injectables,
        route: '/edinburgh/injectables',
        items: [
          { name: t.treatmentNames.biofiller, route: '/procedures/injectables/biofiller-edinburgh' },
          { name: t.treatmentNames.antiWrinkle, route: '/procedures/injectables/anti-wrinkle' },
          { name: t.treatmentNames.polynucleotides, route: '/procedures/injectables/polynucleotides' },
          { name: t.treatmentNames.dermalFiller, route: '/procedures/injectables/dermal-filler' },
          { name: t.treatmentNames.ivDrip, route: '/procedures/injectables/iv-drip' },
          { name: t.treatmentNames.sclerotherapy, route: '/procedures/injectables/sclerotherapy' },
          { name: viewAllLabel, route: '/edinburgh/injectables', isSeeAll: true }
        ]
      }
    ]
  }

  const menuItems: MenuItem[] = [
    { type: 'link', name: t.nav.about, route: '/about' },
    { type: 'location', menu: londonMenu },
    { type: 'location', menu: edinburghMenu },
    { type: 'link', name: t.nav.team, route: '/doctors' },
    { type: 'link', name: t.nav.contact, route: '/contact' }
  ]

  const primaryPhone = t.contact.primaryPhoneNumber || '020 7224 1555'
  const phoneHref = formatPhoneHref(primaryPhone)

  const closeMobileMenu = () => setMobileOpen(false)

  const renderLocationDropdown = (menu: LocationMenu) => (
    <div className="relative group" key={menu.name}>
      <button className="flex items-center gap-1 py-2 text-sm font-medium text-[#F5F1EC] transition-colors hover:text-[#C6A77D] focus-visible:outline-none">
        {menu.name}
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-1/2 top-full hidden w-[900px] -translate-x-1/2 rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-black/5 group-hover:block">
        <div className="grid gap-8 lg:grid-cols-[minmax(220px,260px)_repeat(3,minmax(170px,1fr))]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C8A76]">{SPECIALITIES_LABEL}</p>
            <div className="mt-4 space-y-3">
              {menu.featured.map((item) => (
                <Link
                  key={item.route}
                  to={item.route}
                  className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-[#2C2C2C] transition-colors hover:border-[#E6DED3] hover:text-[#8F7657]"
                >
                  <span>{item.name}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-[#F2ECE3] px-2 py-[2px] text-xs font-semibold uppercase tracking-wide text-[#8F7657]">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
          {menu.categories.map((category) => (
            <div key={category.title}>
              <Link
                to={category.route}
                className="flex items-center justify-between text-sm font-semibold text-[#2C2C2C] transition-colors hover:text-[#8F7657]"
              >
                {category.title}
                <ChevronRight className="h-4 w-4 text-[#C6A77D]" />
              </Link>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#B5A68B]">{OTHER_OPTIONS_LABEL}</p>
              <div className="mt-3 space-y-2">
                {category.items.map((item) => (
                  <Link
                    key={item.route}
                    to={item.route}
                    className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                      item.isSeeAll
                        ? 'text-[#8F7657] hover:bg-[#F5EFE6]/70 font-semibold'
                        : 'text-[#4B4B4B] hover:bg-[#F5EFE6]/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDesktopMenu = () => (
    <div className="hidden items-center space-x-8 lg:flex">
      {menuItems.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.route}
              to={item.route}
              className="text-sm font-medium text-[#F5F1EC] transition-colors hover:text-[#C6A77D]"
            >
              {item.name}
            </Link>
          )
        }
        return renderLocationDropdown(item.menu)
      })}
    </div>
  )

  const renderMobileMenu = () => (
    <div className="lg:hidden border-t border-white/10 bg-[#141414] text-[#F5F1EC]">
      <div className="space-y-6 px-4 py-6">
        {menuItems.map((item) => {
          if (item.type === 'link') {
            return (
              <Link
                key={item.route}
                to={item.route}
                onClick={closeMobileMenu}
                className="block text-base font-medium hover:text-[#C6A77D]"
              >
                {item.name}
              </Link>
            )
          }

          return (
            <div key={item.menu.name} className="rounded-xl border border-white/10 p-4">
              <div className="text-sm font-semibold uppercase tracking-wide text-[#C6A77D]">{item.menu.name}</div>
              <div className="mt-4 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{SPECIALITIES_LABEL}</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {item.menu.featured.map((featured) => (
                      <Link
                        key={featured.route}
                        to={featured.route}
                        onClick={closeMobileMenu}
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white hover:bg-white/10"
                      >
                        {featured.name}
                        {featured.badge ? (
                          <span className="rounded-full bg-[#C6A77D]/20 px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide text-[#EED9B7]">
                            {featured.badge}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
                {item.menu.categories.map((category) => (
                  <div key={category.title}>
                    <Link
                      to={category.route}
                      onClick={closeMobileMenu}
                      className="text-sm font-semibold text-white hover:text-[#C6A77D]"
                    >
                      {category.title}
                    </Link>
                    <div className="mt-2 space-y-2 pl-2">
                      {category.items.map((categoryItem) => (
                        <Link
                          key={categoryItem.route}
                          to={categoryItem.route}
                          onClick={closeMobileMenu}
                          className={`block text-sm ${
                            categoryItem.isSeeAll ? 'font-semibold text-[#C6A77D]' : 'text-white/80'
                          }`}
                        >
                          {categoryItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
        <a
          href={phoneHref}
          className="flex items-center gap-3 rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-white hover:border-[#C6A77D] hover:text-[#C6A77D]"
          onClick={closeMobileMenu}
        >
          <Phone className="h-4 w-4" />
          {primaryPhone}
        </a>
        <Button
          asChild
          className="inline-flex w-full justify-center bg-[#C6A77D] py-3 text-base font-semibold text-white hover:bg-[#b49368]"
        >
          <a href="https://book.beyondmedispa.com" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
            {t.nav.bookNow}
          </a>
        </Button>
        <div className="border-t border-white/10 pt-4">
          <LanguageSelector />
        </div>
      </div>
    </div>
  )

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[#1B1B1B]/95 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
      <div className="flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center" aria-label="Beyond MediSpa home">
          <img
            src="https://i.ibb.co/B52LXBrt/Untitled-design-28.png"
            alt="Beyond MediSpa"
            className="h-12 w-auto transition-transform duration-200 hover:scale-[1.02]"
          />
        </Link>
        {renderDesktopMenu()}
        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-[#F6F2EC] transition-colors hover:text-[#C6A77D] xl:flex"
          >
            <Phone className="h-4 w-4 text-[#C6A77D]" />
            <span>{primaryPhone}</span>
          </a>
          <Button
            asChild
            className="hidden bg-[#C6A77D] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#b49368] lg:inline-flex"
          >
            <a href="https://book.beyondmedispa.com" target="_blank" rel="noopener noreferrer">
              {t.nav.bookNow}
            </a>
          </Button>
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md bg-[#2C2C2C]/70 p-2 text-[#F5F1EC] transition-colors hover:bg-[#3A3A3A] lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && renderMobileMenu()}
    </nav>
  )
}
