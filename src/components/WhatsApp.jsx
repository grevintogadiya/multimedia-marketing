export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/919016441913"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.5c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.3c-2.4 0-4.7-.6-6.8-1.9l-.5-.3-4.9 1.5 1.6-4.8-.3-.5A12.6 12.6 0 013.3 16C3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.7 16 28.7z"/>
        </svg>
      </div>
    </a>
  );
}