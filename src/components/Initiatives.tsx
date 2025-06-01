import React from 'react';
import { motion } from 'framer-motion';
import { initiatives } from '../data/initiatives';
import * as LucideIcons from 'lucide-react';

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-20 lg:py-28 bg-gradient-to-b from-white to-eco-green-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-eco-green-800 mb-4">
            Our Eco Initiatives
          </h2>
          <p className="font-poppins text-lg text-eco-green-700">
            Discover how we're making our campus and community more sustainable through innovative practices
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {initiatives.map((initiative, index) => {
            const IconComponent = (LucideIcons as any)[initiative.icon.charAt(0).toUpperCase() + initiative.icon.slice(1)] || LucideIcons.Leaf;
            
            return (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-glass-gradient backdrop-blur-sm rounded-xl overflow-hidden shadow-glass border border-white/10 group"
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-lg bg-${initiative.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 text-${initiative.color}`} />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-eco-green-800 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="font-poppins text-eco-green-700 mt-auto">
                    {initiative.description}
                  </p>
                </div>
                <div className={`h-1 bg-${initiative.color} w-0 group-hover:w-full transition-all duration-500 ease-out`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;