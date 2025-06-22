import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Database, Cpu, MessageSquare, BarChart3 } from 'lucide-react';

export default function AIAgentsSection() {
  return (
    <section id="ai-agents" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Agenti <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">(RAG)</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Napredni AI agenti za inteligentnu automatizaciju i poslovno odlučivanje
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
            {/* Main figure silhouette */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-slate-700/50" />
              
              {/* Human silhouette */}
              <div className="relative z-10 w-24 h-24 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full mb-8" />
              
              {/* Holographic screen */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl backdrop-blur-md border border-blue-400/30">
                {/* Data flow visualization */}
                <div className="p-4 space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      style={{ width: `${60 + Math.random() * 40}%` }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating data elements */}
              {[Network, Database, MessageSquare, BarChart3].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/50 flex items-center justify-center"
                  style={{
                    top: `${20 + (index % 2) * 60}%`,
                    left: `${10 + (index % 3) * 30}%`,
                  }}
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                >
                  <Icon className="w-5 h-5 text-blue-400" />
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
                Retrieval-Augmented Generation arhitektura
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Kombinujemo moć velikih jezičkih modela sa vašim specifičnim podacima za 
                kreiranje AI agenata koji razumiju vaš biznis i donose precizne odluke.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: 'Inteligentno pretraživanje', desc: 'Brza analiza velikih količina podataka' },
                { title: 'Kontekstualni odgovori', desc: 'Personalizovani rezultati bazirani na vašim podacima' },
                { title: 'Učenje u realnom vremenu', desc: 'Kontinuirano poboljšanje performansi' },
                { title: 'Sigurna integracija', desc: 'Enterprise-level sigurnost i privatnost' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
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