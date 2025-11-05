import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";

export default function ContactSection() {
  // useRef se koristi da bismo dobili direktan pristup formi
  const form = useRef(); 

  // Stanja za praćenje da li je forma poslana, da li postoji greška, i da li se trenutno šalje
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Onemogući dugme i pokaži "Slanje..."
    setError(null);

    // --------------------------------------------------------------------
    // OVDJE UNESITE VAŠE PODATKE SA EMAILJS DASHBOARDA
    // --------------------------------------------------------------------
    const serviceID = 'service_4xf9ta3';
    const templateID = 'template_fu6d33c';
    const publicKey = 'Nn5luGN_87VK2BNFd';
    // --------------------------------------------------------------------

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setIsSubmitted(true); // Pokaži poruku o uspjehu
          form.current.reset(); // Očisti polja forme
      }, (error) => {
          console.log('FAILED...', error.text);
          setError('Došlo je do greške. Molimo pokušajte ponovo.'); // Pokaži poruku o grešci
      })
      .finally(() => {
          setIsSubmitting(false); // Ponovo omogući dugme
          // Sakrij poruku o uspjehu ili grešci nakon 5 sekundi
          setTimeout(() => {
            setIsSubmitted(false);
            setError(null);
          }, 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kontaktirajte <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">nas</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Spremni smo da realizujemo vašu viziju. Rezervišite besplatan demo ili konsultacije.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Poruka poslana!</h3>
                    <p className="text-slate-300">Kontaktiraćemo vas u najkraćem mogućem roku.</p>
                  </motion.div>
                ) : (
                  // Dodajemo ref={form} na formu da bi je EmailJS mogao "pročitati"
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Ime i prezime</label>
                        <Input name="name" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400" placeholder="Vaše ime" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email adresa</label>
                        <Input name="email" type="email" required className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400" placeholder="vas@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Kompanija</label>
                      <Input name="company" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400" placeholder="Naziv vaše kompanije" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Poruka</label>
                      <Textarea name="message" required rows={5} className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none" placeholder="Opišite vaš projekat ili postavite pitanje..." />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting} // Dugme je onemogućeno tokom slanja
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold rounded-xl shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Slanje...' : <><Send className="w-5 h-5 mr-2" /> Zatraži konsultacije</>}
                    </Button>

                    {error && (
                        <div className="flex items-center justify-center text-red-400 mt-4">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            <span>{error}</span>
                        </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Ostatak koda ostaje isti */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
             <div className="space-y-6">
               <h3 className="text-2xl font-bold text-white">
                 Pokrenimo vaš projekat
               </h3>
               <p className="text-lg text-slate-300 leading-relaxed">
                 Naš tim eksperata je spreman da analizira vaše potrebe i predloži 
                 najoptimalnije rješenje za vašu digitalnu transformaciju.
               </p>
             </div>
 
             <div className="space-y-6">
               {[
                 { icon: Mail, title: 'Email', info: 'nermin.goran@gmail.com' },
                 { icon: Phone, title: 'Telefon', info: '+387 61 184 555' },
                 { icon: MapPin, title: 'Lokacija', info: 'Sarajevo, Bosna i Hercegovina' }
               ].map((contact, index) => (
                 <motion.div
                   key={index}
                   className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                   whileHover={{ scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                   transition={{ duration: 0.3 }}
                 >
                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                     <contact.icon className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                     <p className="text-slate-300">{contact.info}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
 
             <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30">
               <h4 className="text-lg font-semibold text-white mb-2">Besplatne konsultacije</h4>
               <p className="text-slate-300 text-sm leading-relaxed">
                 Razgovarajte sa našim ekspertima i saznajte kako možemo pomoći 
                 vašoj kompaniji da iskoristi punu moć AI i IoT tehnologija.
               </p>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}