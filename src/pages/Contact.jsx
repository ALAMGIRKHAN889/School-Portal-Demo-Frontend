import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Globe, Share2, MessageSquare, Heart } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Header */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In <span className="text-gradient brightness-125">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have questions about admissions, academics, or our portal? We're here to help you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-500/10 overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info Side */}
              <div className="bg-indigo-600 p-12 lg:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                  <p className="text-indigo-100 text-lg mb-12 opacity-90">
                    Reach out to us through any of these channels. Our team is available to assist you during working hours.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Phone</p>
                        <p className="text-xl font-medium mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Email</p>
                        <p className="text-xl font-medium mt-1">admissions@eduportal.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Location</p>
                        <p className="text-xl font-medium mt-1">123 Education Excellence Way,<br />Innovation City, ST 54321</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Working Hours</p>
                        <p className="text-xl font-medium mt-1">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16">
                    <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider mb-6">Follow Us</p>
                    <div className="flex gap-4">
                      {[Globe, Share2, MessageSquare, Heart].map((Icon, idx) => (
                        <button key={idx} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                          <Icon size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-12 lg:p-20 bg-white">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                <p className="text-slate-600 mb-10">We'll get back to you within 24-48 working hours.</p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                      <option>General Inquiry</option>
                      <option>Admission Process</option>
                      <option>Technical Support</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea 
                      rows="5" 
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full py-4 flex items-center justify-center gap-2 group">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden h-[400px] bg-slate-100 border border-slate-200 shadow-xl">
            <div className="absolute inset-0 bg-mesh opacity-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white mb-6 shadow-xl animate-bounce">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Visit Our Campus</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                Join us for a guided tour and experience the vibrant life at EduPortal first-hand.
              </p>
              <button className="mt-8 text-indigo-600 font-bold hover:underline">Get Directions on Google Maps</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
