export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="glass text-gray-700 text-xs font-bold px-4 py-2 rounded-full border border-purple-100"
        style={{ boxShadow: '0 4px 20px rgba(124,58,237,0.15)' }}>
        Chat With GMB Expert
      </div>
      <a href="https://wa.me/918770161193?text=Hi%2C%20I%20need%20help%20with%20my%20GMB%20listing."
        target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="relative w-15 h-15 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200"
        style={{ background: '#25d366', boxShadow: '0 6px 24px rgba(37,211,102,0.5)', width: '58px', height: '58px' }}>
        <span className="wa-pulse absolute inset-0 rounded-full" />
        <span className="relative z-10">💬</span>
      </a>
    </div>
  );
}
