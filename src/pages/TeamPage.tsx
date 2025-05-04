
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Outside the Suitbox</title>
        <meta name="description" content="Meet the strategic minds behind Outside the Suitbox. Our team of industry veterans transforms ambitious brands into market leaders." />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-left">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Meet The Team</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 uppercase">
                THE <span className="gold-text">ARCHITECTS</span> OF EXCELLENCE
              </h1>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-white/80 text-xl leading-relaxed">
                Your Unfair Advantage. We Don't Help. We Perform Brand Resurrection.
              </p>
              <div className="mt-8">
                <Button className="bg-gold hover:bg-gold/90 text-richBlack px-8 py-6 h-auto rounded-sm text-sm uppercase tracking-widest font-bold">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
