
import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const TeamPage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    
    if (title && subtitle) {
      title.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        subtitle.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team | Outside the Suitbox</title>
        <meta name="description" content="Meet the strategic minds behind Outside the Suitbox. Our team of industry veterans transforms ambitious brands into market leaders." />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section with animated elements */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('public/lovable-uploads/cd8748c5-25ca-4849-8b0d-d887fcdcbe96.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-richBlack-dark/90 via-richBlack-dark to-richBlack-dark/90"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-left">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium animate-fade-in">Meet The Team</p>
              <h1 
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 uppercase transform transition-all duration-700 opacity-0 translate-y-10"
              >
                THE <span className="gold-text">ARCHITECTS</span> OF EXCELLENCE
              </h1>
              <div className="w-16 h-1 bg-gold mb-8 animate-fade-in"></div>
              <p 
                ref={subtitleRef}
                className="text-white/80 text-xl leading-relaxed transform transition-all duration-700 opacity-0 translate-y-10 delay-300"
              >
                Your Unfair Advantage. We Don't Help. We Perform Brand Resurrection.
              </p>
              <div className="mt-8 animate-fade-in-delay-1">
                <Button className="bg-gold hover:bg-gold/90 text-richBlack px-8 py-6 h-auto rounded-sm text-sm uppercase tracking-widest font-bold shimmer-effect">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
          
          {/* Animated accent decorations */}
          <div className="absolute left-10 bottom-10 w-20 h-20 border border-gold/20 rounded-full animate-float opacity-50"></div>
          <div className="absolute right-1/4 top-1/4 w-32 h-32 border border-gold/10 rounded-full animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
        </section>
        
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
