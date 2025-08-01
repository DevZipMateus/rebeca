
import React from 'react';
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Bacharel em Contabilidade',
      description: 'Formação sólida e especializada na área contábil'
    },
    {
      icon: Award,
      title: 'Perita Judicial',
      description: 'Atuação especializada em perícia judicial trabalhista'
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Expertise em gestão de pessoas e direitos trabalhistas'
    },
    {
      icon: TrendingUp,
      title: 'Cursos Complementares',
      description: 'Constante atualização em temas trabalhistas e metodologia'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-rose-100 text-rose-700 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Sobre Rebeca Dantas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experiência e credibilidade em <span className="text-rose-600">perícia judicial</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Bacharel em Contabilidade com atuação especializada em departamento pessoal e perícia judicial. 
            Possuo diversos cursos complementares em temas trabalhistas, garantindo sempre as melhores práticas e atualizações da área.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-rose-200 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-rose-100 p-4 rounded-full inline-block mb-4">
                <achievement.icon className="text-rose-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Professional Description */}
        <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Especialização em temas trabalhistas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Direito do Trabalho para Calculistas</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Departamento Pessoal e eSocial</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Atualizações e Metodologia de Cálculos</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Perícia Judicial Trabalhista</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <blockquote className="text-2xl font-medium text-gray-900 mb-4 italic">
                "A perícia que você pode confiar"
              </blockquote>
              <p className="text-rose-600 font-semibold text-lg">
                Análise técnica e resultados precisos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
