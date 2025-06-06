import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 'initial-bot-message', type: 'bot', content: 'Olá! 👋 Sou o assistente virtual da Agropecuária Pai & Filho. Como posso ajudar?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo')) {
      return 'Para fornecer um orçamento preciso, precisamos considerar a quantidade e o local de entrega. Por favor, use nosso formulário de cotação na página de produtos ou entre em contato pelo WhatsApp: (17) 99280-0859.';
    }
    
    if (lowerMessage.includes('entrega') || lowerMessage.includes('prazo') || lowerMessage.includes('frete')) {
      return 'Realizamos entregas em SP, MG, MS, GO e BA. O prazo de entrega varia conforme a região e disponibilidade. Entre em contato para mais detalhes!';
    }
    
    if (lowerMessage.includes('produto') || lowerMessage.includes('fertilizante') || lowerMessage.includes('esterco')) {
      return 'Oferecemos Esterco de Galinha Puro, Esterco Bovino Puro e Composto de Esterco de Galinha. Todos são de alta qualidade e ótimos para diversas culturas. Quer saber mais sobre algum específico?';
    }
    
    if (lowerMessage.includes('contato') || lowerMessage.includes('telefone') || lowerMessage.includes('whatsapp')) {
      return 'Você pode nos contatar pelo:\nWhatsApp: (17) 99280-0859\nE-mail: agropecuariapaiefilho21@gmail.com';
    }
    
    if (lowerMessage.includes('endereço') || lowerMessage.includes('localização')) {
      return 'Estamos localizados na Rua João Pinto Rodriguês, 1868, Ubarana, São Paulo.';
    }

    return 'Desculpe, não entendi completamente. Pode reformular sua pergunta? Ou se preferir, entre em contato direto pelo WhatsApp: (17) 99280-0859';
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { id: `user-${Date.now()}`, type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = getBotResponse(inputMessage);
      const botResponse = { id: `bot-${Date.now()}`, type: 'bot', content: botResponseText };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };
  
  const typingIndicatorVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg transform transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir chat"
          >
            <MessageSquare className="h-7 w-7" />
          </Button>
        </SheetTrigger>
        <SheetContent 
            side="right" 
            className="w-[90vw] sm:w-[400px] h-[70vh] sm:h-[600px] flex flex-col p-0 shadow-2xl rounded-lg border-none"
            onOpenAutoFocus={(e) => e.preventDefault()} 
        >
          <SheetHeader className="border-b p-4 bg-gradient-to-r from-primary to-green-600 text-white flex flex-row justify-between items-center">
            <SheetTitle className="text-white flex items-center gap-2 text-lg">
              <MessageSquare className="h-5 w-5" />
              Assistente Virtual
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8 rounded-full">
                <span className="sr-only">Fechar</span>
              </Button>
            </SheetClose>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-800/50">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl shadow ${
                    message.type === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                </div>
              </motion.div>
            ))}
             <AnimatePresence>
              {isTyping && (
                <motion.div
                  key="typing-indicator"
                  variants={typingIndicatorVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-neutral-700 p-3 rounded-xl shadow rounded-bl-none">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}/>
                      <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t p-3 bg-white dark:bg-neutral-900">
            <div className="flex gap-2 items-center">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 focus:ring-primary focus:border-primary"
                aria-label="Campo de mensagem"
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-primary hover:bg-primary/90 text-white rounded-md"
                disabled={!inputMessage.trim() || isTyping}
                aria-label="Enviar mensagem"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Chatbot;