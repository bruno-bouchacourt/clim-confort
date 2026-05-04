'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

const ServiceCard = ({ title, description, iconName, index }: ServiceCardProps) => {
  // @ts-ignore
  const Icon = Icons[iconName] || Icons.HelpCircle;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon size={30} />
      </div>
      <h3 className="text-xl font-bold text-blue-950 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
