
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#21211F' }} className="text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/7fd93af4-e775-45ed-b33c-d51a3da7848e.png" 
                alt="Rebeca Dantas Logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold text-rose-400">Rebeca Dantas</div>
                <div className="text-sm text-gray-400">Assessoria Empresarial</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Perita Judicial especializada em cálculos trabalhistas, impugnação e liquidação. 
              A perícia que você pode confiar!
            </p>
            <div className="text-rose-400 font-medium">
              CNPJ: 46.105.222/0001-70
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-rose-400" size={18} />
                <span>(81) 98365-5230</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-rose-400" size={18} />
                <span>rebecadantas16@outlook.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-rose-400" size={18} />
                <span>Rua Dona Alda de Andrade, 217<br />Pernambuco, Brasil</span>
              </li>
            </ul>
          </div>
          
          {/* Services & Social */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <span className="hover:text-rose-400 transition-colors duration-300">Cálculos Trabalhistas</span>
              </li>
              <li>
                <span className="hover:text-rose-400 transition-colors duration-300">Impugnação</span>
              </li>
              <li>
                <span className="hover:text-rose-400 transition-colors duration-300">Liquidação</span>
              </li>
              <li>
                <span className="hover:text-rose-400 transition-colors duration-300">Perícia Judicial</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/rebecadantas.perita" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-rose-500 hover:text-white transition-colors duration-300 p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Rebeca Dantas - Assessoria Empresarial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
