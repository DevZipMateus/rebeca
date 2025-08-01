
import React from 'react';
import { Calculator, FileCheck, Gavel, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Cálculos Trabalhistas',
    description: 'Serviço especializado em cálculos trabalhistas para ajudar empregadores e empregados a garantir que seus direitos e obrigações financeiras estejam em conformidade com a legislação trabalhista vigente.',
    icon: Calculator,
    delay: '0s',
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 2,
    title: 'Impugnação',
    description: 'Laudos especializados para fins de impugnação, proporcionando argumentação técnica sólida e fundamentada para contestação de cálculos e decisões trabalhistas.',
    icon: FileCheck,
    delay: '0.1s',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 3,
    title: 'Liquidação',
    description: 'Cálculos precisos de liquidação trabalhista, proporcionando uma base sólida e confiável para suas argumentações jurídicas em processos trabalhistas.',
    icon: Gavel,
    delay: '0.2s',
    color: 'from-rose-600 to-pink-700'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-[#21211F]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-rose-100 text-rose-700 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Soluções especializadas em <span className="text-rose-400">perícia trabalhista</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Oferecemos serviços técnicos especializados para garantir precisão e conformidade 
            com a legislação trabalhista em todas as suas necessidades.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in border border-gray-700 hover:border-rose-400/50"
              style={{ animationDelay: service.delay }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block mb-6`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center text-rose-400 font-medium hover:text-rose-300 transition-colors">
                  <span>Saiba mais</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de uma perícia confiável?
          </h3>
          <p className="text-rose-100 mb-8 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e tenha a segurança de um trabalho técnico, 
            preciso e em conformidade com a legislação vigente.
          </p>
          <a 
            href="https://wa.me/5581983655230" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-rose-600 px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
                 alt="WhatsApp" 
                 className="w-5 h-5" />
            <span>Fale com a especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
