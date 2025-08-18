
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-600 mb-2 md:mb-0 items-center">
            <a href="mailto:rebecadantas16@outlook.com" className="flex items-center hover:text-rose-500 transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              rebecadantas16@outlook.com
            </a>
            <a href="tel:+5581983655230" className="flex items-center hover:text-rose-500 transition-colors duration-300 whitespace-nowrap">
              <Phone size={16} className="mr-2" />
              (81) 98365-5230
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/rebecadantas.perita" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500 transition-colors duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/lovable-uploads/eb26d8cf-aab6-452d-a378-55b5f764acaa.png" 
              alt="Rebeca Dantas Logo" 
              className="h-12 w-auto"
            />
            <div className="text-left">
              <div className="text-xl font-bold text-rose-600">Contadora e Perita Trabalhista</div>
              <div className="text-xs text-gray-600">Assessoria Empresarial</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#testimonials" className="nav-link">Depoimentos</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-rose-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre</a>
          <a href="#services" className="px-4 py-2 text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</a>
          <a href="#testimonials" className="px-4 py-2 text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Depoimentos</a>
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
