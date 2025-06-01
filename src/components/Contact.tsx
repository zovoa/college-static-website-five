import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-eco-green-50 to-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-eco-green-800 mb-4">
            Get In Touch
          </h2>
          <p className="font-poppins text-lg text-eco-green-700">
            Have questions or want to learn more about our sustainable campus? Reach out to us!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-glass-gradient backdrop-blur-sm p-8 rounded-xl shadow-glass border border-white/10"
          >
            <h3 className="font-montserrat font-semibold text-2xl text-eco-green-800 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-eco-green-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-eco-green-600" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-eco-green-800 mb-1">Email</h4>
                  <p className="font-poppins text-eco-green-700">info@ecolearn.edu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-eco-green-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-eco-green-600" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-eco-green-800 mb-1">Phone</h4>
                  <p className="font-poppins text-eco-green-700">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-eco-green-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-eco-green-600" />
                </div>
                <div>
                  <h4 className="font-montserrat font-medium text-eco-green-800 mb-1">Address</h4>
                  <p className="font-poppins text-eco-green-700">
                    123 Sustainability Avenue<br />
                    Green City, EC 98765
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-montserrat font-medium text-eco-green-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-eco-green-100 p-3 rounded-full hover:bg-eco-green-200 transition-colors duration-300">
                  <Facebook className="w-5 h-5 text-eco-green-600" />
                </a>
                <a href="#" className="bg-eco-green-100 p-3 rounded-full hover:bg-eco-green-200 transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-eco-green-600" />
                </a>
                <a href="#" className="bg-eco-green-100 p-3 rounded-full hover:bg-eco-green-200 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-eco-green-600" />
                </a>
                <a href="#" className="bg-eco-green-100 p-3 rounded-full hover:bg-eco-green-200 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-eco-green-600" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white p-8 rounded-xl shadow-md border border-eco-green-100">
              <h3 className="font-montserrat font-semibold text-2xl text-eco-green-800 mb-6">
                Send Us a Message
              </h3>
              
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-montserrat text-sm font-medium text-eco-green-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-eco-green-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all duration-300 font-poppins"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-montserrat text-sm font-medium text-eco-green-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-eco-green-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all duration-300 font-poppins"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-montserrat text-sm font-medium text-eco-green-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-eco-green-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all duration-300 font-poppins"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-montserrat text-sm font-medium text-eco-green-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-eco-green-200 focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500 outline-none transition-all duration-300 font-poppins"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-eco-green-600 hover:bg-eco-green-700 text-white font-montserrat font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;