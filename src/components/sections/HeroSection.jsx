import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Target } from 'lucide-react';
import { Button } from "../ui/button";


export default function HeroSection({ scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Budućnost
              </span>
              <br />
              <span className="text-white">je ovdje</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolucionarni AI sistemi, IoT rješenja i drone tehnologije 
              za vašu digitalnu transformaciju
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={() => scrollToSection('ai-agents')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
            >
              Istražite rješenja
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Rezerviši demo
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Zap, title: 'AI Automatizacija', desc: 'Inteligentni sistemi za povećanje efikasnosti' },
              { icon: Shield, title: 'Sigurna Integracija', desc: 'Enterprise-level sigurnost i pouzdanost' },
              { icon: Target, title: 'Precizni Rezultati', desc: 'Optimizovane performanse za vaš biznis' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-400 text-center text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('ai-agents')}
            className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}