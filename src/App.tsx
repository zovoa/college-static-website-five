import React, { Suspense, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Initiatives from './components/Initiatives';
import Courses from './components/Courses';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
  <BrowserRouter basename="/college-static-website-five">
    <div className="relative">
      {/* Background */}
      <ParallaxBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-eco-green-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          {/* Hero Section with 3D Earth */}
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Hero />
          </Suspense>
          
          {/* About Section */}
          <About />
          
          {/* Initiatives Section */}
          <Initiatives />
          
          {/* Courses Section */}
          <Courses />
          
          {/* Events Section */}
          <Events />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);
}

export default App;