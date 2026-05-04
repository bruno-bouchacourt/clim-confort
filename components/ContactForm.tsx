'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center md:text-left">
        Envoyer une demande de devis
      </h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
            <input 
              type="text" 
              placeholder="Ex: Jean Dupont"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
            <input 
              type="tel" 
              placeholder="Ex: 06 00 00 00 00"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
          <input 
            type="email" 
            placeholder="Ex: jean.dupont@email.com"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Ville d&apos;intervention</label>
          <input 
            type="text" 
            placeholder="Ex: Montpellier, Lattes, etc."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Type de demande</label>
          <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
            <option>Sélectionnez un service</option>
            <option>Installation Climatisation</option>
            <option>Installation Pompe à chaleur</option>
            <option>Entretien annuel</option>
            <option>Dépannage urgent</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Votre message</label>
          <textarea 
            rows={4}
            placeholder="Dites-nous en plus sur votre projet..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-orange-950/20 flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
        >
          <Send size={18} />
          <span>Envoyer ma demande de devis</span>
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">
          Nous vous recontactons sous 24h à 48h. Devis gratuit et sans engagement.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
