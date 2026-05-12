import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, Award, BookOpen, Users } from 'lucide-react';
import aboutImg from '../assets/about.png';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="relative py-24 bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Story & <span className="text-yellow-400">Mission</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-indigo-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Building a foundation for excellence since 2010. Learn about our journey, values, and the vision that drives us.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-3xl z-0 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600 rounded-full opacity-20 z-0"></div>
                <img 
                  src={aboutImg} 
                  alt="Students in classroom" 
                  className="relative z-10 rounded-[2.5rem] shadow-2xl border-8 border-white"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-8">Dedicated to Excellence in Education</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Welcome to EduPortal. We are dedicated to providing the highest quality education and shaping the leaders of tomorrow. Our institution has consistently ranked among the top schools in the region.
                </p>
                <p>
                  We believe in holistic development, ensuring our students excel not just academically, but also in sports, arts, and character. Our modern approach to education combines traditional values with cutting-edge technology.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Certified Excellence</h4>
                      <p className="text-sm">Awarded Top Institutional Grade A+</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Modern Labs</h4>
                      <p className="text-sm">State-of-the-art facilities for research</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="p-10 rounded-[2rem] bg-indigo-50 border border-indigo-100 group hover:bg-indigo-600 transition-colors duration-500"
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed group-hover:text-indigo-100 transition-colors">
                To provide an environment that fosters curiosity, creativity, and critical thinking. We aim to empower students with the skills and knowledge necessary to succeed in a globalized world while maintaining strong moral values.
              </p>
            </motion.div>

            <motion.div 
              className="p-10 rounded-[2rem] bg-slate-50 border border-slate-200 group hover:bg-slate-900 transition-colors duration-500"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                To be a world-class center for educational excellence, producing responsible global citizens who contribute positively to society. We envision a future where every student has the tools to achieve their highest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">A Legacy of Achievement</h2>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 hidden md:block"></div>
          
          <div className="space-y-16">
            {[
              { year: "2010", title: "Inception", desc: "EduPortal was founded with a small campus and a big vision." },
              { year: "2015", title: "Campus Expansion", desc: "Opened our second campus with advanced science labs and sports facilities." },
              { year: "2020", title: "Digital Transformation", desc: "Launched our full digital portal system for remote learning and management." },
              { year: "2024", title: "Global Recognition", desc: "Ranked among the top 50 educational institutions in the region." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className={`relative flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                {...fadeInUp}
              >
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm z-10 hidden md:block"></div>
                <div className="w-full md:w-5/12 glass-card p-8 rounded-3xl border border-white shadow-xl shadow-slate-200/50">
                  <span className="text-2xl font-bold text-indigo-600">{item.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Leadership Team</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Guided by visionaries and experts dedicated to educational innovation.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Dr. Sarah Johnson", role: "Principal", initial: "S", color: "bg-indigo-600" },
            { name: "Prof. Michael Chen", role: "Academic Dean", initial: "M", color: "bg-purple-600" },
            { name: "Ms. Elena Rodriguez", role: "Director of Admissions", initial: "E", color: "bg-yellow-500" }
          ].map((leader, idx) => (
            <motion.div 
              key={idx}
              className="text-center group"
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={`w-32 h-32 mx-auto ${leader.color} rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                {leader.initial}
              </div>
              <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
              <p className="text-indigo-600 font-medium">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
