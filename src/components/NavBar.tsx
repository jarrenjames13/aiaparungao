import { useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="pl-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img className="w-12 h-12" src="AIA.png" alt="Logo-AIA" />
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 tracking-wider">
                AIA-Parungao
              </span>
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Nav links */}
          <div className={`flex-col md:flex-row md:flex gap-3 sm:gap-4 ml-auto absolute md:static top-16 left-0 w-full md:w-auto bg-base-200 md:bg-transparent p-4 md:p-0 transition-all duration-300 z-10 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
            <Link to="/">
              <button className={`btn btn-ghost ${location.pathname === "/" ? "text-red-600 font-bold" : ""}`}>Home</button>
            </Link>
            <Link to="/about">
              <button className={`btn btn-ghost ${location.pathname === "/about" ? "text-red-600 font-bold" : ""}`}>About Us</button>
            </Link>
            <Link to="/contact">
              <button className={`btn btn-ghost ${location.pathname === "/contact" ? "text-red-600 font-bold" : ""}`}>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;