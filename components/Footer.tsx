import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO, SERVICES } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div>
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold leading-none">Clim Confort</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">Montpellier</span>
            </Link>
            <p className="text-blue-100/70 mb-6 leading-relaxed font-medium">
              Artisan spécialisé en génie climatique à Montpellier. Nous installons, entretenons et dépannons vos systèmes de climatisation et pompes à chaleur avec rigueur et proximité.
            </p>
            <div className="flex space-x-4">
              {/* Optional social icons could go here */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Nos Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="#services" className="text-blue-100/70 hover:text-orange-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link href="#accueil" className="text-blue-100/70 hover:text-orange-400 transition-colors">Accueil</Link></li>
              <li><Link href="#realisations" className="text-blue-100/70 hover:text-orange-400 transition-colors">Nos Réalisations</Link></li>
              <li><Link href="#zones" className="text-blue-100/70 hover:text-orange-400 transition-colors">Zones d&apos;intervention</Link></li>
              <li><Link href="#avis" className="text-blue-100/70 hover:text-orange-400 transition-colors">Avis Clients</Link></li>
              <li><Link href="#faq" className="text-blue-100/70 hover:text-orange-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Nous Contacter</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-blue-100/70 font-medium">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                <span>{CONTACT_INFO.address}<br />Intervention 30km rayon</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-100/70 font-medium">
                <Phone className="text-orange-500 flex-shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.phoneFormatted}`} className="hover:text-orange-400">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3 text-blue-100/70 font-medium text-sm">
                <Mail className="text-orange-500 flex-shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-400 truncate">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-center space-x-3 text-blue-100/70 font-medium">
                <Clock className="text-orange-500 flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-10 text-center">
          <p className="text-blue-300/40 text-sm mb-4 leading-relaxed max-w-4xl mx-auto">
            Artisan en génie climatique à Montpellier, spécialisé en chauffage, climatisation, pompe à chaleur, entretien et dépannage dans un rayon de 30 km (Lattes, Castelnau-le-Lez, Juvignac, etc.).
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-blue-300/30 uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} Clim Confort Montpellier. Tous droits réservés.</p>
            <Link href="/mentions-legales" className="hover:text-orange-400">Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
