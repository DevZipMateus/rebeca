
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section" style={{ backgroundColor: '#21211F' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-rose-100 text-rose-700 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Entre em <span className="text-rose-400">contato</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Estamos prontos para atender suas necessidades com a expertise e confiabilidade 
            que sua empresa merece.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-fade-in hover:shadow-md transition-all border border-gray-700">
            <div className="bg-emerald-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-300 mb-4">Atendimento rápido</p>
              <a 
                href="https://wa.me/5581983655230" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-fade-in hover:shadow-md transition-all border border-gray-700" style={{ animationDelay: '0.1s' }}>
            <div className="bg-rose-500 p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
              <p className="text-gray-300 mb-4">Ligue diretamente</p>
              <a 
                href="tel:+5581983655230"
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
              >
                <span>(81) 98365-5230</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-fade-in hover:shadow-md transition-all border border-gray-700" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-900 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-rose-400" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
              <p className="text-gray-300 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:rebecadantas16@outlook.com"
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-all font-medium text-sm break-all"
              >
                <span>rebecadantas16@outlook.com</span>
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-fade-in hover:shadow-md transition-all border border-gray-700" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 flex items-center justify-center">
              <Instagram className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
              <p className="text-gray-300 mb-4">Siga nosso perfil</p>
              <a 
                href="https://www.instagram.com/rebecadantas.perita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
              >
                <span>@rebecadantas.perita</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-gray-800 rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-rose-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-rose-600" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Endereço</h4>
                <p className="text-gray-300">Rua Dona Alda de Andrade, 217</p>
                <p className="text-gray-300">Pernambuco, Brasil</p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Segunda - Sexta:</span>
                  <span className="font-medium text-white">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado:</span>
                  <span className="font-medium text-white">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="font-medium text-white">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
