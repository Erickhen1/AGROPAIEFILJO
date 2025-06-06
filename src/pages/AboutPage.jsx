import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Award, Star, Users, TrendingUp, Leaf } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const states = ["São Paulo (SP)", "Minas Gerais (MG)", "Mato Grosso do Sul (MS)", "Goiás (GO)", "Bahia (BA)"];
  const companyName = "Agropecuária Pai & Filho";

  const founderStory = {
    title: "Do Primeiro Caminhão ao Legado no Agronegócio",
    paragraphs: [
      `Há cinco anos, Locael Alves da Costa, um visionário motorista de caminhão, deu o primeiro passo para transformar seu sonho em realidade. Com paixão e uma determinação inabalável, ele fundou a ${companyName}, iniciando uma jornada promissora com apenas um caminhão amarelo, mas com um coração cheio de ambição.`,
      `Hoje, a ${companyName} é um nome respeitado no setor de fertilizantes orgânicos. Aquele único caminhão amarelo multiplicou-se em uma frota robusta com mais de 10 veículos, cruzando estradas diariamente para levar qualidade e inovação aos produtores. O crescimento é constante: além de um moderno estabelecimento próprio, a empresa já projeta a construção de uma fábrica de pellets, um marco que solidificará ainda mais sua posição no mercado.`,
      `A trajetória de Locael é um farol de inspiração. Ela prova que, com trabalho árduo, dedicação incansável e uma visão clara do futuro, é possível não apenas alcançar, mas superar os próprios sonhos, construindo um legado que inspira e impulsiona o agronegócio brasileiro.`
    ],
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/8d294a6c66793b5ecd6c675053065bc4.jpg",
    imageAlt: "Locael Alves da Costa ao lado de seu primeiro caminhão amarelo, símbolo do início de sua jornada empreendedora"
  };

  const fleetImages = [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/66eed8b48d9eef2a9e00eb76332de60d.jpg", alt: "Frota de caminhões modernos da Agropecuária Pai & Filho em formação" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/8740f7235e758e146589dc8b43c2bed6.jpg", alt: "Caminhões da frota alinhados, prontos para o transporte de fertilizantes" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/48c4bf94ce45f4234ceb48503e25979c.jpg", alt: "Detalhe de um caminhão da Agropecuária Pai & Filho em operação logística" }
  ];

  const differentials = [
    { icon: Truck, title: "Frota Própria e Moderna", description: "Mais de 10 caminhões equipados para entregas ágeis e seguras em todo o território nacional." },
    { icon: Award, title: "Qualidade Superior", description: "Fertilizantes orgânicos de excelência, processados para garantir os melhores resultados na sua lavoura." },
    { icon: TrendingUp, title: "Visão de Futuro", description: "Investimento contínuo em tecnologia e expansão, incluindo a futura implantação de uma fábrica de pellets." },
    { icon: Users, title: "Atendimento Dedicado", description: "Nossa equipe está pronta para entender suas necessidades e oferecer soluções personalizadas." },
    { icon: Leaf, title: "Compromisso Sustentável", description: "Práticas que respeitam o meio ambiente, promovendo um agronegócio mais verde e produtivo." },
    { icon: Star, title: "Experiência Comprovada", description: "Anos de dedicação e conhecimento no mercado de fertilizantes orgânicos."}
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center mb-16 md:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
          <span className="block gradient-text">Nossa Essência</span>
          <span className="block text-neutral-800 dark:text-neutral-100 text-3xl sm:text-4xl mt-2">A Jornada da {companyName}</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mt-6">
          Descubra a história inspiradora de Locael Alves da Costa e a evolução da nossa empresa, movida pela paixão pelo campo e pelo compromisso com a qualidade.
        </p>
      </motion.section>

      {/* História do Fundador */}
      <motion.section 
        className="mb-20 md:mb-28"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <motion.div 
            variants={fadeIn} 
            className="md:col-span-2 relative aspect-[4/3] sm:aspect-square md:aspect-[3/4] rounded-xl shadow-2xl overflow-hidden group"
          >
            <img  
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              alt={founderStory.imageAlt}
              src={founderStory.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-semibold">Locael Alves da Costa</h3>
              <p className="text-sm opacity-90">Fundador da {companyName}</p>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="md:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 leading-tight">
              {founderStory.title}
            </h2>
            {founderStory.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed text-justify sm:text-left">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Nossa Frota Atual */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="mb-20 md:mb-28"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">Nossa Frota: Força e Eficiência</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerChildren}
        >
          {fleetImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative aspect-video rounded-xl shadow-xl overflow-hidden group"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Área de Atuação */}
      <motion.section 
        className="mb-20 md:mb-28 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-neutral-800 dark:text-neutral-100">Levando Qualidade a Todo Canto</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12">
          Com uma logística estratégica e eficiente, a {companyName} orgulha-se de atender produtores rurais em diversos estados, levando soluções que impulsionam a produtividade e a sustentabilidade no campo.
        </p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={staggerChildren}
        >
          {states.map((state, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex items-center bg-gradient-to-br from-green-500/10 via-yellow-500/10 to-green-500/10 dark:from-green-700/30 dark:via-yellow-700/30 dark:to-green-700/30 p-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <MapPin size={22} className="mr-3 text-primary dark:text-green-400" />
              <span className="font-semibold text-neutral-700 dark:text-neutral-200 text-md">{state}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      
      {/* Nossos Diferenciais */}
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 dark:from-neutral-800/60 dark:via-neutral-800/80 dark:to-green-900/50 p-8 md:p-12 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">Por Que Escolher a {companyName}?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-700/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="p-4 bg-primary/10 dark:bg-green-500/20 rounded-full mb-5">
                 <diff.icon size={36} className="text-primary dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">{diff.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;