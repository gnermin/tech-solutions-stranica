import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from "../ui/button";

export default function Navigation({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Početna' },
    { id: 'ai-agents', label: 'AI Agenti' },
    { id: 'iot', label: 'IoT Sistemi' },
    { id: 'drone', label: 'Dron Tehnologije' },
    { id: 'digital', label: 'Digitalna Transformacija' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-white">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              TechSolutions
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              Kontaktiraj nas
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                scrollToSection('contact');
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 mt-2"
            >
              Kontaktiraj nas
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
