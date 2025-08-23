// src/components/Header.tsx
import React, { useState } from 'react';
// Import useLocation to get the current URL path
import { Link, NavLink, useLocation } from 'react-router-dom'; 
import { Menu, X } from 'lucide-react';
import Logo from '../assets/bvr_constructions_logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get location object

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';

  const baseNavItems = [
    { name: 'HOME', path: '/', type: 'route' },
    { name: 'ABOUT', path: '/about', type: 'route' },
    { name: 'CONTACTS', path: '/consultation', type: 'route' },
  ];
  
  // Conditionally add the 'SERVICES' item only on the home page
  const navItems = isHomePage 
    ? [
        { name: 'HOME', path: '/', type: 'route' },
        { name: 'ABOUT', path: '/about', type: 'route' },
        { name: 'SERVICES', path: '#services', type: 'scroll' },
        { name: 'CONTACTS', path: '/consultation', type: 'route' },
      ]
    : baseNavItems;

  const activeLinkStyle = {
    color: '#F59E0B',
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="cursor-pointer">
            <img className='w-[100px] h-auto' src={Logo} alt="BVR Constructions Logo"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'scroll' ? (
                <a 
                  key={item.name} 
                  href={item.path} 
                  onClick={(e) => handleScroll(e, item.path)}
                  className="text-gray-300 hover:text-[--color-brand-orange] transition-colors duration-300 font-semibold tracking-wider"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink 
                  key={item.name} 
                  to={item.path}
                  className="text-gray-300 hover:text-[--color-brand-orange] transition-colors duration-300 font-semibold tracking-wider"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden absolute top-24 left-0 w-full bg-black/95 flex flex-col items-center space-y-6 py-8"
          onClick={() => setIsMenuOpen(false)}
        >
          {navItems.map((item) => (
             item.type === 'scroll' ? (
                <a 
                  key={item.name} 
                  href={item.path} 
                  onClick={(e) => handleScroll(e, item.path)}
                  className="text-gray-300 text-lg hover:text-[--color-brand-orange] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink 
                  key={item.name} 
                  to={item.path}
                  className="text-gray-300 text-lg hover:text-[--color-brand-orange] transition-colors duration-300"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {item.name}
                </NavLink>
              )
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
