'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Avis', href: '#avis' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className={`text-xl font-bold leading-none ${scrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>
            Clim Confort
          </span>
          <span className={`text-xs font-semibold uppercase tracking-widest ${scrolled ? 'text-blue-500' : 'text-blue-500 md:text-blue-200'}`}>
            Montpellier
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-orange-700 transition-all transform hover:scale-105"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <a 
            href={`tel:${CONTACT_INFO.phoneFormatted}`} 
            className="p-2 bg-blue-600 text-white rounded-full shadow-lg"
          >
            <Phone size={20} />
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-blue-900' : 'text-blue-900'} p-1`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 py-2 border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-blue-900 text-white text-center py-4 rounded-xl font-bold text-lg"
              >
                Demander un devis
              </Link>
              <div className="text-center pt-4">
                <p className="text-gray-500 text-sm">Besoin d&apos;aide ?</p>
                <a href={`tel:${CONTACT_INFO.phoneFormatted}`} className="text-blue-600 font-bold text-xl">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
