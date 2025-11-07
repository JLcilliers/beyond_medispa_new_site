import { Button } from '@/components/ui/button'
import { Calendar, Clock } from 'lucide-react'
import { useState } from 'react'

const timeSlots = [
  { time: "10:00 - 13:00", available: true },
  { time: "13:30 - 16:30", available: false },
  { time: "17:00 - 20:00", available: true }
]

const dates = [
  { day: 8, available: true },
  { day: 9, available: true },
  { day: 10, available: false },
  { day: 11, available: true },
  { day: 12, available: true },
  { day: 13, available: true },
  { day: 14, available: true }
]

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState(8)
  const [selectedTime, setSelectedTime] = useState("10:00 - 13:00")
  const [personalData, setPersonalData] = useState(false)

  return (
    <section className="py-20 bg-[#111A19] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12">
            <span className="text-[#F8D794]">Book Your</span> Appointment
          </h2>
          
          <div className="bg-[#284139]/30 backdrop-blur-sm rounded-3xl p-8 space-y-8">
            <div>
              <label className="block text-lg mb-4 text-[#F8D794]">Select Date</label>
              <div className="grid grid-cols-7 gap-3">
                {dates.map((date) => (
                  <button
                    key={date.day}
                    onClick={() => date.available && setSelectedDate(date.day)}
                    disabled={!date.available}
                    className={`
                      w-12 h-12 rounded-full border-2 transition-all duration-300
                      ${selectedDate === date.day 
                        ? 'bg-[#F8D794] border-[#F8D794] text-[#111A19]' 
                        : date.available 
                          ? 'border-[#80907E] hover:border-[#F8D794] text-white' 
                          : 'border-gray-600 text-gray-600 cursor-not-allowed'
                      }
                    `}
                  >
                    {date.day}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-lg mb-4 text-[#F8D794]">Time</label>
              <div className="space-y-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`
                      w-full p-4 rounded-xl border-2 transition-all duration-300 text-left
                      ${selectedTime === slot.time 
                        ? 'bg-[#F8D794] border-[#F8D794] text-[#111A19]' 
                        : slot.available 
                          ? 'border-[#80907E] hover:border-[#F8D794] text-white' 
                          : 'border-gray-600 text-gray-600 cursor-not-allowed'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{slot.time}</span>
                      {!slot.available && <span className="text-sm">Booked</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="personalData"
                checked={personalData}
                onChange={(e) => setPersonalData(e.target.checked)}
                className="w-5 h-5 rounded border-[#80907E] text-[#F8D794] focus:ring-[#F8D794]"
              />
              <label htmlFor="personalData" className="text-sm text-gray-300">
                I agree to the processing of personal data
              </label>
            </div>
            
            <Button 
              className="w-full bg-[#F8D794] hover:bg-[#B86330] text-[#111A19] py-4 text-lg font-medium rounded-xl transition-all duration-300"
              disabled={!personalData}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
