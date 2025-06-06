
import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Sprout, Truck, ThumbsUp, CheckCircle, Send, Info, Package } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Link } from 'react-router-dom';
    import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
    } from '@/components/ui/select';

    const ProductsPage = () => {
      const { toast } = useToast();
      const productsList = [
        {
          name: "Esterco de Galinha Puro",
          description: "Fertilizante orgânico de alta concentração de nutrientes, ideal para diversas culturas. Melhora a estrutura do solo e promove o crescimento vigoroso das plantas.",
          imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/0f16e2d6984903468860476edba01119.jpg",
          altText: "Monte de esterco de galinha puro de alta qualidade"
        },
        {
          name: "Esterco Bovino Puro",
          description: "Excelente condicionador de solo, rico em matéria orgânica. Contribui para a aeração, retenção de umidade e liberação gradual de nutrientes.",
          imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/b3bc5b18787d94ae10e183079c9521b9.jpg",
          altText: "Esterco bovino puro sendo preparado para uso agrícola"
        },
        {
          name: "Composto de Esterco de Galinha",
          description: "Uma mistura balanceada e enriquecida, otimizada para fornecer um espectro completo de nutrientes. Ideal para horticultura e agricultura orgânica.",
          imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/40b38595c2357bb61d7d93ce53610b92.jpg",
          altText: "Composto de esterco de galinha pronto para aplicação"
        }
      ];

      const [quoteFormData, setQuoteFormData] = useState({
        product: '',
        quantity: '',
        deliveryLocation: '',
        details: '',
        name: '',
        contact: '',
      });
      const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

      const handleQuoteChange = (e) => {
        const { name, value } = e.target;
        setQuoteFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleProductSelect = (value) => {
        setQuoteFormData(prev => ({ ...prev, product: value }));
      };

      const handleQuoteSubmit = async (e) => {
        e.preventDefault();
        setIsSubmittingQuote(true);

        const mailtoEmail = "agropecuariapaiefilho21@gmail.com";
        const subject = `Solicitação de Cotação - ${quoteFormData.name} - Produto: ${quoteFormData.product}`;
        const body = `
          Nova Solicitação de Cotação:
          --------------------------------
          Produto Desejado: ${quoteFormData.product}
          Quantidade Necessária: ${quoteFormData.quantity}
          Local de Entrega: ${quoteFormData.deliveryLocation}
          Nome: ${quoteFormData.name}
          Contato: ${quoteFormData.contact}
          Detalhes Adicionais: ${quoteFormData.details || 'Nenhum'}
          --------------------------------
        `;
        
        const mailtoLink = `mailto:${mailtoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;

        await new Promise(resolve => setTimeout(resolve, 500)); 

        setIsSubmittingQuote(false);
        setQuoteFormData({ // Reset form
          product: '',
          quantity: '',
          deliveryLocation: '',
          details: '',
          name: '',
          contact: '',
        });
        toast({
          title: "Abrindo seu cliente de e-mail...",
          description: "Por favor, envie a solicitação de cotação pelo seu aplicativo de e-mail.",
          variant: "default",
          duration: 7000,
        });
      };

      const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      };

       const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3
          }
        }
      };
      
      const imageUrlLogistics = "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/936c1305bf4e0548c3893f9a2c1a3402.jpg";

      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.section 
            className="text-center mb-12 md:mb-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
              <span className="block gradient-text">Nossos Fertilizantes Orgânicos</span>
              <span className="block text-neutral-800 dark:text-neutral-100">Potencialize Sua Produção Naturalmente</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Descubra nossa linha de fertilizantes orgânicos de alta qualidade, desenvolvidos para enriquecer seu solo e maximizar suas colheitas.
            </p>
          </motion.section>

          {/* Lista de Produtos */}
          <motion.section
            className="mb-16 md:mb-24 space-y-16"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {productsList.map((product, index) => (
              <motion.div 
                key={index}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-8 rounded-xl shadow-xl bg-white dark:bg-neutral-800/70 glassmorphism"
                variants={fadeIn}
              >
                <div className={`relative aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 rounded-lg shadow-lg overflow-hidden group ${index % 2 !== 0 ? 'md:order-last' : ''} bg-neutral-200 dark:bg-neutral-700`}>
                  <img
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" 
                    alt={product.altText}
                    src={product.imageUrl} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 p-2.5 bg-primary/80 text-white rounded-full shadow-md">
                    <Sprout size={24} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    {product.name}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 font-semibold mb-6">
                    Para mais informações sobre o produto, por favor entrar em contato.
                  </p>
                  <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white shadow-md transform hover:scale-105 transition-transform duration-300">
                    <Link to="/contato">
                      <Info size={18} className="mr-2" />
                      Solicitar Informações
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.section>


          {/* Formulário de Cotação */}
          <motion.section
            className="mb-16 md:mb-24 bg-white dark:bg-neutral-800/70 p-8 md:p-12 rounded-xl shadow-xl glassmorphism"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-neutral-800 dark:text-neutral-100">
              Solicite sua Cotação Online
            </h2>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
              Preencha o formulário abaixo e nossa equipe preparará um orçamento personalizado para você.
            </p>
            <form onSubmit={handleQuoteSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
                <Label htmlFor="product" className="text-neutral-700 dark:text-neutral-300">Produto Desejado</Label>
                <Select onValueChange={handleProductSelect} value={quoteFormData.product} name="product" required>
                  <SelectTrigger id="product" className="w-full mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Selecione o produto" />
                  </SelectTrigger>
                  <SelectContent>
                    {productsList.map((product) => (
                      <SelectItem key={product.name} value={product.name}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity" className="text-neutral-700 dark:text-neutral-300">Quantidade Necessária</Label>
                <Input 
                  type="text" 
                  name="quantity" 
                  id="quantity" 
                  value={quoteFormData.quantity}
                  onChange={handleQuoteChange}
                  placeholder="Ex: 10 toneladas ou 500 kg" 
                  required 
                  className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="deliveryLocation" className="text-neutral-700 dark:text-neutral-300">Local de Entrega (Cidade/Estado)</Label>
                <Input 
                  type="text" 
                  name="deliveryLocation" 
                  id="deliveryLocation" 
                  value={quoteFormData.deliveryLocation}
                  onChange={handleQuoteChange}
                  placeholder="Ex: Ribeirão Preto/SP" 
                  required 
                  className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
                />
              </div>
               <div>
                <Label htmlFor="name" className="text-neutral-700 dark:text-neutral-300">Seu Nome</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={quoteFormData.name}
                  onChange={handleQuoteChange}
                  placeholder="Nome completo" 
                  required 
                  className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="contact" className="text-neutral-700 dark:text-neutral-300">Seu Contato (Telefone/WhatsApp ou E-mail)</Label>
                <Input 
                  type="text" 
                  name="contact" 
                  id="contact" 
                  value={quoteFormData.contact}
                  onChange={handleQuoteChange}
                  placeholder="Ex: (XX) XXXXX-XXXX ou seu@email.com" 
                  required 
                  className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="details" className="text-neutral-700 dark:text-neutral-300">Detalhes Adicionais (Opcional)</Label>
                <Textarea 
                  name="details" 
                  id="details" 
                  rows={3}
                  value={quoteFormData.details}
                  onChange={handleQuoteChange}
                  placeholder="Ex: Tipo de cultura, acesso à propriedade, etc." 
                  className="mt-1 bg-white/70 dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 focus:border-primary focus:ring-primary"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white shadow-md transform hover:scale-105 transition-transform duration-300"
                disabled={isSubmittingQuote || !quoteFormData.product}
              >
                {isSubmittingQuote ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"
                  ></motion.div>
                ) : <Send size={18} className="mr-2" /> }
                {isSubmittingQuote ? 'Abrindo E-mail...' : 'Solicitar Cotação'}
              </Button>
            </form>
          </motion.section>
          
          {/* Logística e Diferenciais */}
          <motion.section 
            className="bg-neutral-50 dark:bg-neutral-800/50 p-8 md:p-12 rounded-xl shadow-xl"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">Logística Eficiente e Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div variants={fadeIn}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 dark:bg-green-500/20 rounded-full mr-4">
                    <Truck size={32} className="text-primary dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">Transporte Especializado</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Contamos com uma frota própria e parceiros logísticos estratégicos para garantir a entrega do seu fertilizante de forma rápida, segura e eficiente, diretamente na sua propriedade. Cobrimos uma vasta área nos estados de SP, MG, MS, GO e BA.
                </p>
                <div className="relative aspect-w-16 aspect-h-9 rounded-lg shadow-md overflow-hidden group bg-neutral-200 dark:bg-neutral-700">
                    <img
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                        alt="Caminhão da Agropecuária Pai & Filho descarregando fertilizantes em campo agrícola"
                        src={imageUrlLogistics} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="flex items-center mb-4">
                   <div className="p-3 bg-primary/10 dark:bg-green-500/20 rounded-full mr-4">
                    <ThumbsUp size={32} className="text-primary dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">Nossos Diferenciais</h3>
                </div>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong className="text-neutral-700 dark:text-neutral-200">Qualidade Insuperável:</strong> Produto rigorosamente selecionado e processado.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong className="text-neutral-700 dark:text-neutral-200">Atendimento Personalizado:</strong> Entendemos suas necessidades para oferecer a melhor solução.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong className="text-neutral-700 dark:text-neutral-200">Compromisso com Prazos:</strong> Respeitamos os cronogramas de entrega.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong className="text-neutral-700 dark:text-neutral-200">Preço Justo:</strong> Excelente custo-benefício para sua produção.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong className="text-neutral-700 dark:text-neutral-200">Sustentabilidade:</strong> Contribuímos para um agronegócio mais verde e produtivo.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
        </div>
      );
    };

    export default ProductsPage;
