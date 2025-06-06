
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import ContactPage from '@/pages/ContactPage';
import Chatbot from '@/components/Chatbot';
import { Toaster } from '@/components/ui/toaster';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-green-900 text-neutral-800 dark:text-neutral-200">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/sobre" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/produtos" element={<PageWrapper><ProductsPage /></PageWrapper>} />
              <Route path="/contato" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Chatbot />
        <Toaster />
      </div>
    </Router>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default App;
