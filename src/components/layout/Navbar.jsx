import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const location = useLocation();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/346d6b6be0ca3842fea772da96d77f37.png";
  const companyName = "Agropecuária Pai & Filho";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newDarkMode.toString());
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Produtos e Serviços', path: '/produtos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logoUrl} alt={`${companyName} Logo`} className="h-10 w-auto sm:h-12" />
            <span className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap">{companyName}</span>
          </Link>
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} currentPath={location.pathname}>
                {item.name}
              </NavLink>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-neutral-600" />}
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="mr-1" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-neutral-600" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleNavbar} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-neutral-700 dark:text-neutral-300" /> : <Menu className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <MobileNavLink key={item.name} to={item.path} currentPath={location.pathname} onClick={() => setIsOpen(false)}>
                  {item.name}
                </MobileNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, children, currentPath }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`relative px-2 py-2 lg:px-3 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap
        ${isActive ? 'text-primary dark:text-green-400' : 'text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-green-400'}`}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-green-400"
          layoutId="underline"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, children, currentPath, onClick }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium
        ${isActive ? 'bg-green-100 dark:bg-green-700 text-primary dark:text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary dark:hover:text-green-300'}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;