import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Lightbulb, Settings, Users, Target } from 'lucide-react';

export default function DigitalTransformationSection() {
  return (
    <section id="digital" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digitalna <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Transformacija</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Strategije i implementacija za uspješan prelazak u digitalnu eru
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Most prema budućnosti
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Vodimo vaš biznis kroz kompletan proces digitalne transformacije - 
                od strategije do implementacije, omogućavajući vam da iskoristite 
                punu moć modernih tehnologija.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: 'Strategije transformacije', desc: 'Personalizovani roadmap za vaš biznis' },
                { title: 'Change management', desc: 'Uspješno vođenje ljudi kroz promjene' },
                { title: 'Tehnološka implementacija', desc: 'Integracija naprednih rješenja' },
                { title: 'Kontinuirana optimizacija', desc: 'Stalni razvoj i poboljšanje procesa' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-slate-700/50" />
              
              {/* Bridge visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Left side - analog world */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-2">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-3 bg-slate-500 rounded" />
                  </div>
                  <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
                    <div className="w-3 h-2 bg-slate-500 rounded" />
                  </div>
                </div>

                {/* Right side - digital world */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
                  {[Settings, Target, Users].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                  ))}
                </div>

                {/* Bridge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-2 bg-gradient-to-r from-slate-600 via-indigo-500 to-purple-500 rounded-full" />
                
                {/* Person walking */}
                <motion.div
                  className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                  animate={{ x: [0, 200, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Innovation symbols */}
                <motion.div
                  className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/50 flex items-center justify-center"
                  animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Lightbulb className="w-6 h-6 text-indigo-400" />
                </motion.div>

                {/* Arrow indicating direction */}
                <motion.div
                  className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}