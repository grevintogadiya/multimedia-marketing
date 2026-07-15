import { useState } from "react";
import { FaBullhorn } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
  <FaBullhorn className="text-3xl text-blue-600" />

  <h1 className="text-2xl font-bold text-blue-600">
    Multimedia Marketing
  </h1>
</a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <a href="#home" className="hover:text-blue-600 duration-300">
              Home
            </a>

            <a href="#about" className="hover:text-blue-600 duration-300">
              About
            </a>


            <a href="#services" className="hover:text-blue-600 duration-300">
              Services
            </a>

           <a href="#Blog" className="hover:text-blue-600 duration-300">
            Blog
            </a>


            <a href="#portfolio" className="hover:text-blue-600 duration-300">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-blue-600 duration-300">
              Contact
            </a>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl duration-300">
              Get Started
            </button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">

          <div className="flex flex-col px-6 py-6 gap-5">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <button className="bg-blue-600 text-white py-3 rounded-xl">
              Get Started
            </button>

          </div>

        </div>
      )}
    </header>
  );
}