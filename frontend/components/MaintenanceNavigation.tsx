import { Phone, MapPin } from 'lucide-react'

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