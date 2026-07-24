export default function WhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40"></span>

      <a
        href="https://wa.me/919016441913"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
      >
        <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/50 hover:scale-110 hover:rotate-6 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 fill-white"
          >
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.5c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.3c-2.4 0-4.7-.6-6.8-1.9l-.5-.3-4.9 1.5 1.6-4.8-.3-.5A12.6 12.6 0 013.3 16C3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.7 16 28.7z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
