'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, FileText, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/hvac/1920/1080" 
          alt="Artisan génie climatique Montpellier" 
          fill
          className="object-cover opacity-30"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-sm border border-blue-700/50 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-blue-100 text-sm font-bold uppercase tracking-wider">Artisan Local à Montpellier</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Artisan en <span className="text-orange-500">génie climatique</span> à Montpellier
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl font-medium">
              Installation, entretien et dépannage de chauffage, climatisation et pompe à chaleur dans l&apos;Hérault. Confort thermique garanti toute l&apos;année.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact" 
                className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-orange-950/20 transform hover:-translate-y-1"
              >
                <FileText size={22} />
                <span>Demander un devis</span>
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phoneFormatted}`} 
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-extrabold text-lg transition-all transform hover:-translate-y-1"
              >
                <Phone size={22} />
                <span>Appeler maintenant</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Intervention 30km",
                "Devis Gratuit",
                "Artisan Local",
                "Solutions PAC / Clim"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                  <span className="text-blue-100 text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
