import Navigation from '../Navigation'
import RussianFooter from '../RussianFooter'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, Award } from 'lucide-react'
import { useState } from 'react'

const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:30 AM", available: true },
  { time: "12:00 PM", available: false },
  { time: "2:00 PM", available: true },
  { time: "3:30 PM", available: true },
  { time: "5:00 PM", available: true }
]

const treatments = [
  "Facial Rejuvenation",
  "Body Contouring", 
  "Injectables (Botox/Fillers)",
  "Laser Treatments",
  "Skin Analysis",
  "Wellness Consultation"
]

const locations = ["London", "Edinburgh"]

export default function BookTreatmentPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedTreatment, setSelectedTreatment] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#111A19] via-[#284139] to-[#111A19] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-light mb-6">
                Book Your <span className="text-[#F8D794]">Treatment</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Schedule your consultation or treatment at our London or Edinburgh clinic. 
                Our expert team is ready to help you achieve your aesthetic goals.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Form */}
                <div>
                  <h2 className="text-3xl font-light text-[#111A19] mb-8">
                    Book Your <span className="text-[#284139]">Appointment</span>
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location *</label>
                      <select 
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      >
                        <option value="">Select Location</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Interest</label>
                      <select 
                        value={selectedTreatment}
                        onChange={(e) => setSelectedTreatment(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                      >
                        <option value="">Select Treatment</option>
                        {treatments.map(treatment => (
                          <option key={treatment} value={treatment}>{treatment}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                        <input 
                          type="date" 
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                        <select 
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(slot => (
                            <option key={slot.time} value={slot.time} disabled={!slot.available}>
                              {slot.time} {!slot.available ? "(Unavailable)" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#284139]"
                        placeholder="Please share any specific concerns, previous treatments, or questions..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="consent"
                        className="mt-1 w-4 h-4 text-[#284139] border-gray-300 rounded focus:ring-[#284139]"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I consent to being contacted by MagiSpa regarding my appointment and agree to the privacy policy.
                      </label>
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] py-4"
                    >
                      Book Appointment
                    </Button>
                  </form>
                </div>

                {/* Info Panel */}
                <div className="space-y-8">
                  <div className="bg-[#F8D794]/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-[#111A19] mb-6">What to Expect</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Calendar className="w-6 h-6 text-[#284139] mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#111A19] mb-1">Free Consultation</h4>
                          <p className="text-gray-600 text-sm">Initial consultations are complimentary and typically last 30-45 minutes.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <User className="w-6 h-6 text-[#284139] mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#111A19] mb-1">Expert Assessment</h4>
                          <p className="text-gray-600 text-sm">Our specialists will assess your needs and recommend the best treatment plan.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Award className="w-6 h-6 text-[#284139] mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#111A19] mb-1">Personalized Plan</h4>
                          <p className="text-gray-600 text-sm">Receive a customized treatment plan tailored to your goals and timeline.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="w-6 h-6 text-[#284139] mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#111A19] mb-1">Flexible Scheduling</h4>
                          <p className="text-gray-600 text-sm">We offer extended hours and weekend appointments for your convenience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#284139] text-white rounded-2xl p-8">
                    <h3 className="text-2xl font-light mb-4">
                      Need Help <span className="text-[#F8D794]">Choosing?</span>
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Not sure which treatment is right for you? Our experts are here to help guide you to the perfect solution.
                    </p>
                    
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19]"
                      >
                        Call for Advice
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#F8D794] text-[#F8D794] hover:bg-[#F8D794] hover:text-[#111A19]"
                      >
                        WhatsApp Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <RussianFooter />
    </div>
  )
}