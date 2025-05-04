
import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-richBlack-dark pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-end mb-10">
          <button
            onClick={scrollToTop}
            className="bg-gold/10 hover:bg-gold/20 text-gold p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-xl font-display font-bold uppercase gold-text mb-6">Outside the Suitbox</h3>
            <p className="text-white/70 mb-6 text-sm">
              Strategic brand acquisition and transformation. Building valuable brands that dominate markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/team" className="text-white/60 hover:text-gold transition-colors duration-300">Our Team</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Our Services</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-gold transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Brand Development</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Creative Strategy</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Marketing & Digital Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Contact Information</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>+1 (310) 795-2328</li>
              <li>Info@OutsideTheSuitBox.com</li>
              <li>3835 W 2nd St</li>
              <li>Los Angeles, CA 90004</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/40">
          <p className="uppercase text-xs tracking-wider">© {new Date().getFullYear()} Outside the Suitbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
