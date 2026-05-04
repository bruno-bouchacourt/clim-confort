'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  name: string;
  city: string;
  type: string;
  text: string;
  index: number;
}

const TestimonialCard = ({ name, city, type, text, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-lg transition-all"
    >
      <div className="absolute top-8 right-8 text-blue-100 group-hover:text-orange-100 transition-colors">
        <Quote size={40} fill="currentColor" />
      </div>
      <div className="flex items-center space-x-1 mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className="text-orange-400">★</span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10 font-medium">
        &quot;{text}&quot;
      </p>
      <div className="border-t border-gray-50 pt-4">
        <p className="font-bold text-blue-950">{name}</p>
        <p className="text-sm text-blue-600 font-semibold">{city} — {type}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
