import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
          <img 
            src={logo} 
            alt="Sammo Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-lg">
          <Link to="/" className="block hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="block hover:text-yellow-400">
            About
          </Link>
          <Link to="/services" className="block hover:text-yellow-400">
            Services
          </Link>
          <Link to="/contact" className="block hover:text-yellow-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
