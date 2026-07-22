import { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
              <FaBullhorn className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-blue-700 leading-none">
                Multimedia
              </h1>
              <p className="text-lg font-semibold text-blue-700">
                Marketing
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <a href="#home" className="hover:text-blue-600 transition duration-300">Home</a>
            <a href="#about" className="hover:text-blue-600 transition duration-300">About</a>
            <a href="#services" className="hover:text-blue-600 transition duration-300">Services</a>
            <a href="#portfolio" className="hover:text-blue-600 transition duration-300">Portfolio</a>
             <a href="#pricing" className="hover:text-blue-600 transition duration-300">Pricing</a>
             <a href="#faq" className="hover:text-blue-600 transition duration-300">FAQ</a>
           <a href="#Blog" className="hover:text-blue-600 transition duration-300">Blog</a>
            <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact</a>
  
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-blue-700 z-50 relative"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 pb-10 lg:hidden">
          <nav className="flex flex-col gap-8 text-xl font-medium text-gray-800">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#Blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            
            {/* Get Started Button */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-500 text-white text-center py-4 rounded-xl font-semibold mt-4"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}