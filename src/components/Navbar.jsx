import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBullhorn} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (section) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.querySelector(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/" + section);
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 shadow-md z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
              <FaBullhorn
                className="text-2xl text-white"
                aria-hidden="true"
              />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-blue-700 leading-none">
                Multimedia
              </h1>

              <p className="text-lg font-semibold text-blue-700">
                Marketing
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav
            aria-label="Desktop navigation"
            className="hidden lg:flex items-center gap-8 font-medium text-gray-700"
          >
            {/* <a href="#home" className="hover:text-blue-600 transition duration-300">Home</a>
          
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
            </a> */}
            <button
              onClick={() => handleNavigation("#home")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("#about")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>

            <button
              onClick={() => handleNavigation("#services")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>

            <button
              onClick={() => handleNavigation("#portfolio")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Portfolio
            </button>

            <button
              onClick={() => handleNavigation("#pricing")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavigation("#faq")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavigation("#Blog")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </button>

            <button
              onClick={() => handleNavigation("#contact")}
              className="relative text-[15px] font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>

            <button
              onClick={() => handleNavigation("#contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg transition duration-300 text-sm"
            >
              Get Started
            </button>
          </nav>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden text-3xl text-blue-700 z-50 relative"
          >
            {menuOpen ? (
              <HiX aria-hidden="true" />
            ) : (
              <HiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div >

      {/* Mobile Menu Overlay */}
      {
        menuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 pb-10 lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-8 text-xl font-medium text-gray-800"
            >
              {/* <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#Blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a> */}

              <button onClick={() => handleNavigation("#home")}>
                Home
              </button>  <button onClick={() => handleNavigation("#about")}>
                About
              </button>  <button onClick={() => handleNavigation("#services")}>
                Services
              </button>  <button onClick={() => handleNavigation("#portfolio")}>
                Portfolio
              </button>  <button onClick={() => handleNavigation("#pricing")}>
                Pricing
              </button>  <button onClick={() => handleNavigation("#faq")}>
                FAQ
              </button>  <button onClick={() => handleNavigation("#Blog")}>
                Blog
              </button>

              {/* Get Started Button */}
              <button
                onClick={() => handleNavigation("#contact")}
                className="bg-blue-500 text-white text-center py-2 px-4 rounded-lg font-medium text-sm mt-4"
              >
                Get Started
              </button>

            </nav>
          </div>
        )
      }
    </header >
  );
}