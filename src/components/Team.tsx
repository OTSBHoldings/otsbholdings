
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import TeamMember from './team/TeamMember';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Team = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef],
  });

  const team = [
    {
      name: "Mark Eric Christiansen",
      role: "Founder & CEO",
      description: "A bold entrepreneur known for globally successful brands and groundbreaking ventures. Mark gets into the hearts of his audience, crafting narratives that ignite passion. The man in the back of the room wearing a T-shirt, shedding convention to envision the 'next big thing.' His pursuit of excellence transforms brands into cultural phenomena.",
      image: "public/lovable-uploads/662b92c7-b0c4-4308-9c8c-fd8c0c5edf5c.png",
      socialLinks: [
        { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
      ]
    },
    {
      name: "Nicolai Edgar Andersen",
      role: "Head of SEO & Search Marketing",
      description: "A distinguished Norwegian digital marketer with a decade of cross-continental experience. Award-winning SEO specialist propelling websites to the top of Google in fiercely competitive markets. Passionate about emerging technologies and AI-powered solutions, mentoring teams and sharing insights globally.",
      image: "public/lovable-uploads/4a50b7d4-8d33-43c3-b4d5-f9b4bf137794.png",
      socialLinks: [
        { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
      ]
    },
    {
      name: "John Shepherd IV",
      role: "Marketing & Digital Integration Lead",
      description: "A forward-thinking entrepreneur blending marketing strategy with technical precision. John connects brands with ideal channels through influencer partnerships and optimized sales funnels. The bridge between creative vision and execution, ensuring branding translates into scalable results with fluency in both storytelling and systems.",
      image: "public/lovable-uploads/fb51b3fa-2d66-432b-932b-71f7204bb828.png",
      socialLinks: [
        { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
      ]
    },
    {
      name: "Stefano Lisci",
      role: "Visual Storytelling Director",
      description: "Italian film director and photographer based in Los Angeles, bringing products to life through striking visuals. His award-winning films showcase cinematic artistry with powerful storytelling. Stefano's innovative approach redefines how products are experienced, making him a sought-after creative in photography and design.",
      image: "public/lovable-uploads/0760a365-a618-47f5-9d34-a06663af2da2.png",
      socialLinks: [
        { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
      ]
    },
    {
      name: "Patrick Lowe",
      role: "Head of AI Solutions",
      description: "Technology leader specializing in AI interfaces with offices in LA and Amsterdam. Holds dual master's degrees with extensive experience developing intuitive solutions. Patrick bridges complex technology with effective user experience, delivering systems that drive real-world results.",
      image: "public/lovable-uploads/ee7b7197-6054-4058-a67e-65b8d8479bf1.png",
      socialLinks: [
        { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
        { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
      ]
    },
    {
      name: "Catherine Alvarez Frias",
      role: "Head of Regulatory Affairs",
      description: "Distinguished authority in regulatory affairs with extensive history guiding businesses through compliance complexities. Catherine navigates intricate government regulations, FDA requirements, and local laws. Her talent for simplifying frameworks allows clients to focus on growth while managing compliance challenges.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
      socialLinks: [
        { icon: <Facebook size={18} />, url: "#", label: "Facebook" },
        { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
      ]
    }
  ];

  return (
    <section id="team" className="section-padding bg-richBlack-light pt-20 pb-20" aria-label="Team section">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Meet The Team</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            The <span className="gold-text">Game Changers</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-xl text-white/70">
            Unified Efforts, Limitless Achievements. A collective of industry disruptors who turn conventional thinking into extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              index={index}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>

        {/* Job Openings Section */}
        <div className="mt-20 text-center px-6 md:px-0">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase">
              Job <span className="gold-text">Openings</span>
            </h3>
            <p className="text-lg text-white/70 mb-6">
              Ready to turn your daily grind into a passion? Never miss an opportunity at our Los Angeles brand agency — bookmark this page for the latest job openings!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gold hover:bg-gold/90 text-richBlack font-bold px-8 py-3 rounded-sm uppercase text-sm tracking-widest transition-all duration-300 nav-contact-shimmer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
