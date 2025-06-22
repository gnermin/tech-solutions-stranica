import React from 'react';
import { motion } from 'framer-motion';
import { Network, Smartphone, Wifi, Cloud, MapPin, Activity } from 'lucide-react';

export default function IoTSection() {
  return (
    <section id="iot" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl mb-6">
            <Network className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Sistemi</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            IoT integracija za pametne gradove, industriju i optimizaciju procesa
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
                Povezana budućnost već je tu
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Naša IoT rješenja omogućavaju pametno upravljanje resursima, 
                real-time monitoring i automatizaciju procesa kroz mrežu 
                povezanih uređaja i senzora.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: 'Pametni senzori', desc: 'Precizno prikupljanje podataka iz okruženja' },
                { title: 'Real-time monitoring', desc: 'Kontinuirani nadzor i analiza performansi' },
                { title: 'Cloud integracija', desc: 'Sigurno skladištenje i obrada podataka' },
                { title: 'Automatizacija procesa', desc: 'Inteligentne odluke bazirane na podacima' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-slate-700/50" />
              
              {/* Central hub */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8">
                <Cloud className="w-8 h-8 text-white" />
              </div>

              {/* Connected devices */}
              {[
                { Icon: Smartphone, position: { top: '20%', left: '20%' } },
                { Icon: Wifi, position: { top: '20%', right: '20%' } },
                { Icon: Activity, position: { bottom: '20%', left: '20%' } },
                { Icon: MapPin, position: { bottom: '20%', right: '20%' } }
              ].map((device, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/50 flex items-center justify-center"
                  style={device.position}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                >
                  <device.Icon className="w-5 h-5 text-green-400" />
                  
                  {/* Connection lines */}
                  <motion.div
                    className="absolute w-1 bg-gradient-to-r from-green-400 to-cyan-400 opacity-60"
                    style={{
                      height: '60px',
                      transformOrigin: 'top',
                      transform: `rotate(${45 + index * 90}deg)`,
                      top: '50%',
                      left: '50%',
                      marginLeft: '-2px',
                      marginTop: '-30px'
                    }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                  />
                </motion.div>
              ))}

              {/* Data points */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-green-400/30 p-4">
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-2"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <div className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex-1" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}