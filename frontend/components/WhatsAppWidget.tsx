export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/442071234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
          <img 
            src="https://www.beyondmedispa.com/wp-content/uploads/2025/09/apple.png" 
            alt="WhatsApp"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </a>
    </div>
  )
}