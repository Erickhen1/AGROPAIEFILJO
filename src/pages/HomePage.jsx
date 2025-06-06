import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, ShieldCheck, Users } from 'lucide-react';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const companyName = "Agropecuária Pai & Filho";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-16 md:mb-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="block">Fertilizando o Futuro do</span>
            <span className="block gradient-text">Agronegócio Brasileiro</span>
          </h1>
          <motion.div 
            className="absolute -top-4 -left-8 w-16 h-16 bg-green-400/30 dark:bg-green-600/30 rounded-full blur-xl -z-10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-8 w-20 h-20 bg-yellow-400/30 dark:bg-yellow-600/30 rounded-full blur-xl -z-10"
            animate={{ scale: [1, 1.3, 1], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
          {companyName}: Tradição e inovação na comercialização de fertilizantes orgânicos, impulsionando a produtividade sustentável no campo.
        </p>
        <motion.div variants={fadeIn}>
          <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link to="/produtos">
              Nossos Produtos
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Mascote Section */}
      <motion.section
        className="mb-16 md:mb-24 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="relative max-w-lg mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/e15015b5d2f100959bd81ab44a51b637.jpg"
              alt="Betty, a mascote da Agropecuária Pai & Filho, sorrindo em frente aos caminhões da empresa"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Conheça a Betty! 🐾
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Nossa mascote Betty, sempre alegre e carinhosa, representa o amor e dedicação que temos pelo nosso trabalho.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Valores Section */}
      <motion.section 
        className="mb-16 md:mb-24"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">Nossos Valores Fundamentais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeIn} className="p-8 rounded-xl shadow-xl bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-primary text-white mb-6 shadow-md">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Qualidade Superior</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Compromisso com a excelência, oferecendo esterco de galinha poedeira rico em nutrientes e de alta performance.</p>
          </motion.div>
          <motion.div variants={fadeIn} className="p-8 rounded-xl shadow-xl bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white mb-6 shadow-md">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Confiança e Parceria</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Construímos relações de longo prazo baseadas na transparência, respeito e resultados para nossos clientes.</p>
          </motion.div>
          <motion.div variants={fadeIn} className="p-8 rounded-xl shadow-xl bg-white dark:bg-neutral-800/70 glassmorphism hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white mb-6 shadow-md">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Tradição Familiar</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Nossa história é nosso alicerce. Unimos a sabedoria de gerações com a busca constante por inovação no agronegócio.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Missão Section */}
      <motion.section 
        className="mb-12 md:mb-20"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="p-8 md:p-12 rounded-xl bg-gradient-to-r from-primary/80 to-green-600/80 dark:from-primary/70 dark:to-green-700/70 text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Nossa Missão no Agronegócio</h2>
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed">
            "Fornecer soluções em fertilizantes orgânicos que promovam uma agricultura mais produtiva, sustentável e rentável, contribuindo para o fortalecimento do agronegócio brasileiro e a preservação do meio ambiente para as futuras gerações."
          </p>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        className="text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100">Pronto para Potencializar sua Produção?</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
          Entre em contato conosco e descubra como nossos fertilizantes orgânicos podem fazer a diferença na sua lavoura.
        </p>
        <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/10 transform hover:scale-105 transition-transform duration-300">
          <Link to="/contato">
            Fale Conosco
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </Button>
      </motion.section>
    </div>
  );
};

export default HomePage;