import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import { FaXmark, FaBars } from 'react-icons/fa6';
import  '../App';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonials", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className={`w-full ${isSticky ? "bg-white border-b shadow-md" : "bg-white md:bg-transparent"} fixed top-0 left-0 right-0 z-50`}>
      <nav className={`flex justify-between items-center px-6 py-4 ${isSticky ? "duration-300" : ""}`}>
        <div className='flex items-center space-x-3'>
          <a href="#" className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={logo} alt="logo" className='w-10' />
            <span className='text-[#263238]'>NEXCENT</span>
          </a>
        </div>
        {/* Navigation links - Desktop */}
        <ul className='md:flex space-x-12 hidden'>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={path}
              className='cursor-pointer text-base text-gray-900 hover:text-brandPrimary font-medium'
            >
              {link}
            </Link>
          ))}
        </ul>
        {/* Buttons - Desktop */}
        <div className='space-x-6 hidden lg:flex items-center'>
          <a href="/" className='text-brandPrimary hover:text-gray-900'>Login</a>
          <button className='bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300'>
            Sign up
          </button>
        </div>
        {/* Mobile menu toggle */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className='h-6 w-6 text-neutralDGrey' />
            ) : (
              <FaBars className='h-6 w-6 text-neutralDGrey' />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white w-full fixed top-16 left-0 right-0 z-40 py-4 shadow-md border-t'>
          <ul className='flex flex-col space-y-4 px-6'>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={path}
                onClick={toggleMenu}
                className='cursor-pointer text-lg text-gray-900 hover:text-brandPrimary font-medium'
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;