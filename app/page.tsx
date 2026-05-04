'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import FAQItem from '@/components/FAQItem';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { SERVICES, WHY_CHOOSE_US, CITIES, TESTIMONIALS, FAQ, CONTACT_INFO, PROJECTS } from '@/lib/data';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Phone, Mail, Award, ThermometerSnowflake, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Clim Confort Montpellier",
    "image": "https://picsum.photos/seed/hvac/800/600",
    "@id": "",
    "url": "https://clim-confort-montpellier.fr",
    "telephone": CONTACT_INFO.phoneFormatted,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Montpellier",
      "addressLocality": "Montpellier",
      "postalCode": "34000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.610769,
      "longitude": 3.876716
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": CITIES.map(city => ({
      "@type": "City",
      "name": city
    }))
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Nos services en génie climatique"
            subtitle="Des solutions complètes pour votre confort thermique à Montpellier et dans l'Hérault."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                iconName={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Pourquoi optimiser votre confort ?"
                subtitle="Le génie climatique au service de votre bien-être et de votre budget."
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-8 mt-10">
                {[
                  { title: "Confort toute l&apos;année", icon: <ThermometerSnowflake className="text-blue-600" />, desc: "Température idéale hiver comme été." },
                  { title: "Économies d'énergie", icon: <Zap className="text-orange-500" />, desc: "Réduction durable de vos factures de chauffage." },
                  { title: "Climat Méditerranéen", icon: <Award className="text-blue-600" />, desc: "Matériel adapté aux fortes chaleurs locales." },
                  { title: "Normes respectées", icon: <ShieldCheck className="text-orange-500" />, desc: "Installation certifiée et sécurisée." }
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-extrabold text-blue-950 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 font-medium">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/home/800/1000" 
                  alt="Maison méditerranéenne confort thermique" 
                  width={800}
                  height={1000}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-900 p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-white text-4xl font-bold mb-1">100%</p>
                <p className="text-blue-200 font-bold uppercase tracking-widest text-xs">Satisfaction Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Votre artisan de proximité"
            subtitle="Choisir Clim Confort, c'est privilégier le savoir-faire local et la réactivité."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-800/50 backdrop-blur-sm border border-blue-700 p-8 rounded-2xl hover:border-orange-500 transition-colors"
              >
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle2 className="text-orange-500 mr-2" size={20} />
                  {item.title}
                </h4>
                <p className="text-blue-100/70 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Realisations Section */}
      <section id="realisations" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Nos dernières réalisations"
            subtitle="Découvrez quelques-uns de nos projets récents chez nos clients autour de Montpellier."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-lg h-80"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Terminé
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
                  <div className="flex items-center text-blue-200 font-semibold italic">
                    <MapPin size={14} className="mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Section */}
      <section id="zones" className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 leading-tight">
                Zone d&apos;intervention <br/> <span className="text-blue-600">autour de Montpellier</span>
              </h2>
              <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                L’entreprise intervient dans un rayon de 30 km autour de Montpellier pour vos besoins en chauffage, climatisation, pompe à chaleur, entretien et dépannage.
              </p>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((city, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-extrabold hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square relative bg-blue-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center p-12">
                <MapPin size={100} className="text-blue-400 opacity-20 absolute top-10 left-10" />
                <MapPin size={60} className="text-orange-500 animate-bounce" />
                <div className="absolute inset-0 border-4 border-white rounded-3xl m-4 border-dashed opacity-50"></div>
                <p className="absolute bottom-10 text-center font-bold text-blue-900 border-t border-blue-200 pt-4 px-4">Agglomération Montpelliéraine & Hérault</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avis" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre meilleure publicité."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading 
            title="Foire aux questions"
            subtitle="Tout ce qu'il faut savoir sur vos projets de génie climatique."
          />
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-gray-100">
            {FAQ.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 text-white">
              <h2 className="text-4xl font-extrabold mb-8 leading-tight">
                Besoin d&apos;un spécialiste près de Montpellier ?
              </h2>
              <p className="text-blue-100 mb-10 text-lg font-medium leading-relaxed">
                Contactez-nous pour un diagnostic gratuit ou une demande de devis. Nous vous répondons avec plaisir et professionnalisme.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-orange-950/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-blue-300 font-bold uppercase tracking-wider text-xs">Appelez-nous</p>
                    <a href={`tel:${CONTACT_INFO.phoneFormatted}`} className="text-xl font-extrabold hover:text-orange-400 transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-blue-700/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-blue-300 font-bold uppercase tracking-wider text-xs">Écrivez-nous</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-extrabold hover:text-orange-400 transition-colors break-all">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-blue-700/50 rounded-2xl flex items-center justify-center border border-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-blue-300 font-bold uppercase tracking-wider text-xs">Zone d&apos;action</p>
                    <p className="text-xl font-extrabold">{CONTACT_INFO.zone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-950 opacity-10 pointer-events-none"></div>
      </section>

      <Footer />

      {/* Floating Call Button for mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={`tel:${CONTACT_INFO.phoneFormatted}`} 
          className="flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full shadow-2xl animate-bounce"
        >
          <Phone size={30} fill="white" />
        </a>
      </div>
    </main>
  );
}
