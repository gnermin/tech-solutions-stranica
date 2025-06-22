
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Brain, 
  Network, 
  Airplay, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";


import HeroSection from '../components/sections/HeroSection';
import AIAgentsSection from '../components/sections/AIAgentsSection';
import IoTSection from '../components/sections/IoTSection';
import DroneSection from '../components/sections/DroneSection';
import DigitalTransformationSection from '../components/sections/DigitalTransformationSection';
import ContactSection from '../components/sections/ContactSection';
import Navigation from '../components/layout/Navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'ai-agents', 'iot', 'drone', 'digital', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AIAgentsSection />
        <IoTSection />
        <DroneSection />
        <DigitalTransformationSection />
        <ContactSection />
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
      </div>
    </div>
  );
}
