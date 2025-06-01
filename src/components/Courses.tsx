import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '../data/courses';
import * as LucideIcons from 'lucide-react';

type Category = string | 'All';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(courses.map(course => course.category)))];
  
  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-eco-blue-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-eco-blue-800 mb-4">
            Our Sustainable Courses
          </h2>
          <p className="font-poppins text-lg text-eco-blue-700">
            Explore our innovative curriculum designed to prepare students for a sustainable future
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-montserrat text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-eco-blue-600 text-white shadow-md'
                  : 'bg-white/80 text-eco-blue-700 hover:bg-eco-blue-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, index) => {
              const IconComponent = (LucideIcons as any)[course.icon.charAt(0).toUpperCase() + course.icon.slice(1)] || LucideIcons.BookOpen;
              
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-eco-blue-100 flex flex-col"
                >
                  <div className="bg-wood-texture bg-cover bg-center h-32 relative">
                    <div className="absolute inset-0 bg-eco-blue-900/40 flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-eco-blue-700">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-montserrat font-semibold text-xl text-eco-blue-800 mb-3">
                      {course.title}
                    </h3>
                    <p className="font-poppins text-eco-blue-700 mb-4 flex-grow">
                      {course.description}
                    </p>
                    <a 
                      href="#" 
                      className="mt-auto inline-flex items-center font-montserrat font-medium text-eco-blue-600 hover:text-eco-blue-700 transition-colors duration-300"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Courses;