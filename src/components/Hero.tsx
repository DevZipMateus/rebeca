
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements with rose gold theme */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-rose-300/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-rose-100 text-rose-700 font-medium px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              Perita Judicial Especializada
            </div>
            
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} 
                style={{ animationDelay: '0.1s' }}>
              A perícia que você pode <span className="text-rose-300">confiar</span>
            </h1>
            
            <p className="text-lg text-rose-100 mb-8 animate-fade-in max-w-xl mx-auto lg:mx-0" 
               style={{ animationDelay: '0.2s' }}>
              Análise técnica e resultados precisos em cálculos trabalhistas, impugnação e liquidação. 
              Bacharel em Contabilidade com expertise comprovada.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" 
                 style={{ animationDelay: '0.3s' }}>
              <a href="https://wa.me/5581983655230" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium shadow-lg">
                <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
                     alt="WhatsApp" 
                     className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </a>
              <a href="#services" 
                 className="bg-transparent border-2 border-rose-300 hover:bg-rose-300 hover:text-black text-rose-300 px-8 py-3 rounded-lg transition-all font-medium">
                Nossos Serviços
              </a>
            </div>
          </div>
          
          {/* Logo Column */}
          <div className="flex justify-center lg:justify-end animate-fade-in" 
               style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-rose-400/20 blur-2xl rounded-full"></div>
              <img 
                src="/lovable-uploads/7fd93af4-e775-45ed-b33c-d51a3da7848e.png" 
                alt="Rebeca Dantas - Assessoria Empresarial" 
                className="relative z-10 w-80 h-80 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
