
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import EgestorERP from '../components/EgestorERP';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';
import { Helmet } from 'react-helmet';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Rebeca Dantas - Perita Judicial e Cálculos Trabalhistas | Pernambuco</title>
        <meta name="description" content="Perita Judicial especializada em cálculos trabalhistas, impugnação e liquidação. Bacharel em Contabilidade com expertise em Departamento Pessoal. A perícia que você pode confiar!" />
        <meta name="keywords" content="perita judicial, cálculos trabalhistas, liquidação trabalhista, impugnação, departamento pessoal, contabilidade, Recife, Pernambuco" />
        <meta name="author" content="Rebeca Gonçalves Da Silva Dantas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rebeca Dantas - Perita Judicial e Cálculos Trabalhistas" />
        <meta property="og:description" content="A perícia que você pode confiar! Análise técnica e resultados precisos em cálculos trabalhistas." />
        <meta property="og:url" content="https://rebecadantas.com.br" />
        <meta property="og:site_name" content="Rebeca Dantas - Assessoria Empresarial" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rebeca Dantas - Perita Judicial e Cálculos Trabalhistas" />
        <meta name="twitter:description" content="A perícia que você pode confiar! Análise técnica e resultados precisos em cálculos trabalhistas." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Rebeca Gonçalves Da Silva Dantas - Assessoria Empresarial",
            "description": "Perita Judicial especializada em cálculos trabalhistas, impugnação e liquidação",
            "telephone": "+55-81-98365-5230",
            "email": "rebecadantas16@outlook.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Dona Alda de Andrade, 217",
              "addressRegion": "PE",
              "addressCountry": "BR"
            },
            "url": "https://rebecadantas.com.br",
            "sameAs": [
              "https://www.instagram.com/rebecadantas.perita"
            ],
            "serviceType": ["Cálculos Trabalhistas", "Perícia Judicial", "Liquidação Trabalhista", "Impugnação"]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <EgestorERP />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
        <FloatingButton />
      </div>
    </>
  );
};

export default Index;
