import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, School, Globe } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 }
    })
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* SVG Wave Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto text-eco-green-50"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-eco-green-800 mb-4">
            About <span className="text-eco-green-600">EcoLearn</span>
          </h2>
          <p className="font-poppins text-lg text-eco-green-700">
            Pioneering sustainable education for a greener tomorrow
          </p>
        </motion.div>

        <div className="bg-glass-gradient backdrop-blur-md p-8 md:p-10 rounded-xl shadow-glass border border-white/10">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <div className="h-full bg-eco-wood-100/70 rounded-lg p-6 md:p-8 border border-eco-wood-200">
                <h3 className="font-montserrat font-semibold text-2xl text-eco-wood-800 mb-4">Our Mission</h3>
                <p className="font-poppins text-eco-wood-700 mb-6">
                  At EcoLearn, we're dedicated to creating a revolutionary educational experience that combines cutting-edge sustainability practices with forward-thinking curriculum. Our mission is to prepare students to become environmental leaders who will shape a more sustainable future.
                </p>
                <p className="font-poppins text-eco-wood-700">
                  Through hands-on learning, innovative technology, and community engagement, we empower students to develop the knowledge, skills, and passion needed to address the environmental challenges of our time.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-eco-green-50/80 rounded-lg p-5 flex flex-col items-center text-center border border-eco-green-100">
                  <Shield className="w-10 h-10 text-eco-green-600 mb-3" />
                  <h4 className="font-montserrat font-medium text-eco-green-800 mb-2">Environmental Stewardship</h4>
                  <p className="font-poppins text-sm text-eco-green-700">Committed to preserving and protecting our natural world</p>
                </div>
                
                <div className="bg-eco-blue-50/80 rounded-lg p-5 flex flex-col items-center text-center border border-eco-blue-100">
                  <Users className="w-10 h-10 text-eco-blue-600 mb-3" />
                  <h4 className="font-montserrat font-medium text-eco-blue-800 mb-2">Community Focused</h4>
                  <p className="font-poppins text-sm text-eco-blue-700">Building strong connections with our local and global communities</p>
                </div>
                
                <div className="bg-eco-blue-50/80 rounded-lg p-5 flex flex-col items-center text-center border border-eco-blue-100">
                  <School className="w-10 h-10 text-eco-blue-600 mb-3" />
                  <h4 className="font-montserrat font-medium text-eco-blue-800 mb-2">Innovative Education</h4>
                  <p className="font-poppins text-sm text-eco-blue-700">Using cutting-edge methods to inspire learning</p>
                </div>
                
                <div className="bg-eco-green-50/80 rounded-lg p-5 flex flex-col items-center text-center border border-eco-green-100">
                  <Globe className="w-10 h-10 text-eco-green-600 mb-3" />
                  <h4 className="font-montserrat font-medium text-eco-green-800 mb-2">Global Perspective</h4>
                  <p className="font-poppins text-sm text-eco-green-700">Preparing students to address worldwide challenges</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SVG Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto text-white"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;