
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Carlos Silva',
    role: 'Advogado Trabalhista',
    content: 'Rebeca é uma profissional excepcional. Seus laudos são sempre precisos e fundamentados tecnicamente, o que nos dá total segurança nos processos.',
    rating: 5,
    delay: '0s'
  },
  {
    id: 2,
    name: 'Ana Paula Santos',
    role: 'Gestora de RH',
    content: 'Trabalho com a Rebeca há mais de 2 anos. Sua expertise em cálculos trabalhistas e departamento pessoal é incomparável. Sempre disponível e assertiva.',
    rating: 5,
    delay: '0.1s'
  },
  {
    id: 3,
    name: 'Eduardo Oliveira',
    role: 'Empresário',
    content: 'A perícia da Rebeca foi fundamental para resolver uma questão trabalhista complexa em minha empresa. Profissionalismo e competência técnica exemplares.',
    rating: 5,
    delay: '0.2s'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-rose-100 text-rose-700 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos clientes <span className="text-rose-600">dizem</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A confiança dos nossos clientes é o reflexo da qualidade e precisão 
            do nosso trabalho especializado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 relative hover:bg-rose-50 transition-all duration-300 animate-fade-in border border-gray-100 hover:border-rose-200"
              style={{ animationDelay: testimonial.delay }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote size={32} className="text-rose-600" />
              </div>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={18} 
                    className="text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-rose-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-rose-600 mb-2">100+</div>
            <div className="text-gray-600">Perícias realizadas</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-rose-600 mb-2">5 anos</div>
            <div className="text-gray-600">De experiência</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-rose-600 mb-2">98%</div>
            <div className="text-gray-600">Clientes satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
