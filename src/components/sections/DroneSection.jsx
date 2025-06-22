
import React from 'react';
import { motion } from 'framer-motion';
import { Airplay, Camera, Map, Zap, Eye, BarChart3 } from 'lucide-react';

export default function DroneSection() {
  return (
    <section id="drone" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6">
            <Airplay className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dron <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Tehnologije</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dron rješenja za inspekciju, nadzor i automatizaciju
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl backdrop-blur-sm border border-slate-700/50" />
              
              {/* Digitalized landscape */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800/80 to-transparent rounded-b-3xl" />
              
              {/* Flying drones */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                  style={{
                    top: `${30 + index * 15}%`,
                    left: `${20 + index * 25}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                >
                  <Airplay className="w-4 h-4 text-white" />
                  
                  {/* Data transmission lines */}
                  <motion.div
                    className="absolute w-24 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"
                    style={{
                      bottom: '-20px',
                      left: '50%',
                      transformOrigin: 'left',
                    }}
                    animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                  />
                </motion.div>
              ))}

              {/* Central control system */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-orange-400/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>

              {/* Data visualization icons */}
              {[Camera, Map, Eye, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/50 flex items-center justify-center"
                  style={{
                    top: `${60 + (index % 2) * 20}%`,
                    right: `${10 + (index % 3) * 15}%`,
                  }}
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, delay: index * 0.4, repeat: Infinity }}
                >
                  <Icon className="w-4 h-4 text-orange-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Autonomni sistemi nadzora
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Napredni dronovi opremljeni AI tehnologijom za preciznu inspekciju, 
                mapiranje terena i real-time monitoring industrijskih objekata.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: 'Aerial inspekcija', desc: 'Detaljne analize teško dostupnih područja' },
                { title: 'AI prepoznavanje', desc: 'Automatska detekcija anomalija i problema' },
                { title: '4K video streaming', desc: 'Real-time prenos visokokvalitetnog video signala' },
                { title: 'Autonomno mapiranje', desc: 'Kreiranje preciznih 3D modela terena' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
