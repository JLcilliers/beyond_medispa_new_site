import Navigation from '../../../Navigation'
import RussianFooter from '../../../RussianFooter'
import { Button } from '@/components/ui/button'
import { Snowflake, Target, Award } from 'lucide-react'

const handleNavigation = (route: string) => {
  if ((window as any).navigateTo) {
    (window as any).navigateTo(route)
  }
}

export default function CoolSculptingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#111A19] to-[#284139] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="CoolSculpting treatment"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111A19]/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
            <div className="max-w-2xl">
              <p className="text-[#F8D794] text-lg mb-4 tracking-wider">WELCOME TO MAGISPA</p>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Your Sanctuary of<br />
                Fat Freezing and<br />
                <span className="text-[#F8D794]">Body Sculpting</span>
              </h1>
              <Button 
                onClick={() => handleNavigation('book-treatment')}
                className="bg-transparent border-2 border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19] px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                BOOK CONSULTATION
              </Button>
            </div>
          </div>
        </section>

        {/* Indulgence Section */}
        <section className="py-24 bg-[#80907E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light mb-8">Indulge in Revolutionary Fat Reduction</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Step into a realm of advanced body contouring, where stubborn fat deposits are eliminated through innovative cryolipolysis technology. 
              At MagiSpa, CoolSculpting delivers permanent fat reduction without surgery or downtime.
            </p>
          </div>
        </section>

        {/* Oasis Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light text-[#111A19] mb-8">
                  Your Oasis of<br />
                  <span className="text-[#284139]">Body Transformation</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Snowflake className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Cryolipolysis Technology</h3>
                      <p className="text-gray-700 leading-relaxed">
                        FDA-approved fat freezing technology that crystallizes and eliminates fat cells permanently, 
                        with no damage to surrounding tissues.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Target className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Targeted Fat Reduction</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Precisely targets stubborn fat deposits that resist diet and exercise, 
                        contouring specific areas for a more sculpted silhouette.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#80907E]/20 p-4 rounded-full">
                      <Award className="w-8 h-8 text-[#284139]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111A19] mb-3">Non-Surgical Solution</h3>
                      <p className="text-gray-700 leading-relaxed">
                        No incisions, no anesthesia, no recovery time required. 
                        Return to normal activities immediately after treatment.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleNavigation('procedures-body-contouring')}
                  className="mt-8 bg-transparent border-2 border-[#284139] text-[#284139] hover:bg-[#284139] hover:text-white px-8 py-3 font-light tracking-wide transition-all duration-300"
                >
                  VIEW ALL BODY TREATMENTS
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/api/placeholder/600/700" 
                  alt="CoolSculpting procedure"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Revitalize Section */}
        <section className="py-24 bg-[#F8D794]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-[#111A19] mb-8">Revitalize Your Silhouette</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
              CoolSculpting can target multiple areas of the body where stubborn fat 
              accumulates, creating comprehensive body contouring results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Common Treatment Areas */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="CoolSculpting treatment areas"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Popular Treatment Areas</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Target your most stubborn fat deposits with precision applicators 
                  designed for specific body areas and fat pad shapes.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#111A19] mb-3">Areas We Treat:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Abdomen & flanks</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Thighs & arms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Double chin & back</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Results Timeline */}
              <div className="text-left">
                <div className="mb-8">
                  <img 
                    src="/api/placeholder/500/400" 
                    alt="CoolSculpting results"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-light text-[#111A19] mb-6">Results Timeline</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience gradual, natural-looking results as your body naturally 
                  processes and eliminates the treated fat cells.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#111A19] mb-3">What to Expect:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Initial changes: 3 weeks</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Dramatic results: 2 months</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#284139] rounded-full mr-3"></div>
                      <span className="text-gray-600">Final results: 4 months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Details Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-[#111A19] mb-4">Treatment Details</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Duration</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">35-75 minutes</p>
                  <p className="text-gray-600 text-sm">Per treatment area</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Downtime</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">None</p>
                  <p className="text-gray-600 text-sm">Return to normal activities</p>
                </div>
                
                <div className="text-center bg-[#F8D794]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#111A19] mb-3">Pricing</h3>
                  <p className="text-2xl font-light text-[#284139] mb-2">From £600</p>
                  <p className="text-gray-600 text-sm">Per treatment cycle</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => handleNavigation('book-treatment')}
                  className="bg-[#284139] hover:bg-[#111A19] text-white px-8 py-4 text-lg font-light tracking-wide"
                >
                  BOOK YOUR COOLSCULPTING CONSULTATION
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}