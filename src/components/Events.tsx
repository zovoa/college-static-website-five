import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import gsap from 'gsap';

const Events: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        scrollLeft: carouselRef.current.scrollLeft + 400,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        scrollLeft: carouselRef.current.scrollLeft - 400,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-eco-wood-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-eco-wood-800 mb-4">
            Upcoming Events & News
          </h2>
          <p className="font-poppins text-lg text-eco-wood-700">
            Join us for these exciting sustainable events and stay updated with our latest news
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Navigation Buttons */}
          <div className="hidden md:block">
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white rounded-full p-2 shadow-md hover:bg-eco-wood-100 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-eco-wood-800" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white rounded-full p-2 shadow-md hover:bg-eco-wood-100 transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-eco-wood-800" />
            </button>
          </div>

          {/* Events Carousel */}
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[85%] md:w-[45%] lg:w-[30%] snap-start"
              >
                <div className="bg-glass-gradient backdrop-blur-sm rounded-xl overflow-hidden shadow-glass border border-white/10 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-eco-wood-800/90 text-white px-3 py-1 rounded-full flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-montserrat font-semibold text-xl text-eco-wood-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="font-poppins text-eco-wood-700 mb-4 flex-grow">
                      {event.description}
                    </p>
                    <a 
                      href="#" 
                      className="mt-auto inline-flex items-center font-montserrat font-medium text-eco-green-600 hover:text-eco-green-700 transition-colors duration-300"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;