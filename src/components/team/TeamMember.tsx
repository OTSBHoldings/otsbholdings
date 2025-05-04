
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

type SocialLink = {
  icon: React.ReactNode;
  url: string;
  label: string;
};

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
  socialLinks?: SocialLink[];
};

const TeamMember = ({ name, role, description, image, index, socialLinks = [] }: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [memberRef],
  });

  return (
    <div 
      ref={memberRef}
      className="group relative overflow-hidden rounded-md opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      {/* Enhanced overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-richBlack-dark via-richBlack-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
      
      {/* Gold accent line that animates on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500 ease-out"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:translate-y-0">
        <h3 className="text-lg font-bold uppercase tracking-wide">{name}</h3>
        <p className="text-gold mb-3 uppercase text-xs tracking-wider">{role}</p>
        <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">{description}</p>
        
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex space-x-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.url} 
                className="text-white/60 hover:text-gold transition-colors duration-300" 
                aria-label={`${name}'s ${link.label} profile`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
        
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default TeamMember;
