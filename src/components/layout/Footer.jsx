import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/8757e2ae-a915-422d-aaf7-a1152b56c93b/b9e616e1b126cab67755f3db0b78a5b4.jpg";
  const instagramLink = "https://www.instagram.com/agropecuariapaiefilho21?igsh=bmtiNThmcWFrbGdl";
  const facebookLink = "https://www.facebook.com/profile.php?id=100069668163996&sk=about";
  const companyName = "R.A. FERTILIZANTES";
  const companyCnpj = "41.431.783/0001-45";

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary dark:text-green-400 mb-4">
              <img src={logoUrl} alt={`${companyName} Logo`} className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-center md:text-left">{companyName}</p>
            <p className="text-sm text-center md:text-left">Comercialização e transporte de fertilizantes orgânicos de alta qualidade.</p>
            <p className="text-sm mt-2 text-center md:text-left">CNPJ: {companyCnpj}</p>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Contato</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-primary dark:text-green-400 flex-shrink-0 mt-1" />
                <span>Rua João Pinto Rodriguês, 1868, Ubarana, São Paulo</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary dark:text-green-400 flex-shrink-0" />
                <a href="tel:+5517992800859" className="hover:text-primary dark:hover:text-green-400">(17) 99280-0859</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary dark:text-green-400 flex-shrink-0" />
                <a href="mailto:agropecuariapaiefilho21@gmail.com" className="hover:text-primary dark:hover:text-green-400 break-all">agropecuariapaiefilho21@gmail.com</a>
              </li>
               <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary dark:text-green-400 flex-shrink-0" />
                <a href="mailto:agropaiefilhofinanceiro24@gmail.com" className="hover:text-primary dark:hover:text-green-400 break-all">agropaiefilhofinanceiro24@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Redes Sociais</p>
            <div className="flex space-x-4">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label={`Facebook da ${companyName}`} className="text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-green-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label={`Instagram da ${companyName}`} className="text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-green-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-300 dark:border-neutral-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;