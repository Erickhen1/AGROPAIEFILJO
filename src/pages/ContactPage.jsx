
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MessageSquare, MapPin, Send, Briefcase } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: "Mensagem Enviada! 🚀",
      description: "Obrigado por entrar em contato. Responderemos em breve.",
      variant: "default",
      duration: 5000,
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.section 
        className="text-center mb-12 md:mb-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          <span className="block gradient-text">Entre em Contato</span>
          <span className="block text-neutral-800 dark:text-neutral-100">Estamos Prontos para Atender Você</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Tem alguma dúvida, precisa de um orçamento ou quer saber mais sobre nossos produtos? Fale conosco!
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="bg-white dark:bg-neutral-800/70 p-8 rounded-xl shadow-xl glassmorphism"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-neutral-700 dark:text-neutral-300">Nome Completo</Label>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome" 
                required 
                className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-300">E-mail</Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com" 
                required 
                className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-neutral-700 dark:text-neutral-300">Telefone (Opcional)</Label>
              <Input 
                type="tel" 
                name="phone" 
                id="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="(XX) XXXXX-XXXX" 
                className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-neutral-700 dark:text-neutral-300">Sua Mensagem</Label>
              <Textarea 
                name="message" 
                id="message" 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem aqui..." 
                required 
                className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white shadow-md transform hover:scale-105 transition-transform duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"
                ></motion.div>
              ) : <Send size={18} className="mr-2" /> }
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100">Outras Formas de Contato</h2>
          
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <Phone size={24} className="text-primary dark:text-green-400 mr-4 flex-shrink-0" />
              <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">Telefone</h3>
            </div>
            <a href="tel:+5517992800859" className="text-lg text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-green-400 transition-colors">(17) 99280-0859</a>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Segunda a Sábado, 7:00 às 18h</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <MessageSquare size={24} className="text-primary dark:text-green-400 mr-4 flex-shrink-0" />
              <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">WhatsApp</h3>
            </div>
            <a 
              href="https://wa.me/5517992800859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-green-400 transition-colors"
            >
              (17) 99280-0859
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
             <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Clique para iniciar uma conversa!</p>
          </div>
          
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <Mail size={24} className="text-primary dark:text-green-400 mr-4 flex-shrink-0" />
              <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">E-mail Comercial</h3>
            </div>
            <a href="mailto:agropecuariapaiefilho21@gmail.com" className="text-lg text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-green-400 transition-colors break-all">agropecuariapaiefilho21@gmail.com</a>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <Briefcase size={24} className="text-primary dark:text-green-400 mr-4 flex-shrink-0" />
              <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">E-mail Financeiro</h3>
            </div>
            <a href="mailto:agropaiefilhofinanceiro24@gmail.com" className="text-lg text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-green-400 transition-colors break-all">agropaiefilhofinanceiro24@gmail.com</a>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-3">
              <MapPin size={24} className="text-primary dark:text-green-400 mr-4 flex-shrink-0 mt-1" />
              <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">Nosso Endereço</h3>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">Rua João Pinto Rodriguês, 1868</p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">Ubarana, São Paulo</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Brasil</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;