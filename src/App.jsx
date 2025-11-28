import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Instagram, Twitter, Linkedin, Menu, X, ArrowLeft, PenTool, Code, Smartphone, Sparkles, Home } from 'lucide-react';

const SITE_DATA = {
  name: "Nitu Choudhary",
  role: "Creative Director & Strategist",
  tagline: "Designing chaos into clarity.",
  heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  about: "I am a designer who believes in the power of negative space and bold typography. My work isn't just about looking good—it's about feeling right. Based in India, working globally.",
  email: "hello@nitu.design",
  services: [
    {
      icon: <PenTool size={32} />,
      title: "Brand Identity",
      desc: "More than just a logo. I build comprehensive visual systems that tell your story across every touchpoint."
    },
    {
      icon: <Smartphone size={32} />,
      title: "UI/UX Design",
      desc: "Crafting intuitive, pixel-perfect interfaces that delight users and drive engagement on web and mobile."
    },
    {
      icon: <Code size={32} />,
      title: "Development",
      desc: "Bringing designs to life with clean, modern code using React, Tailwind, and cutting-edge web technologies."
    }
  ],
  projects: [
    {
      id: 1,
      title: "The Vogue Edit",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
      description: "A digital reimagining of classic fashion layouts."
    },
    {
      id: 2,
      title: "Ceramic Soul",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
      description: "Brand identity for a boutique pottery studio."
    },
    {
      id: 3,
      title: "Urban Flora",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1530968464165-611291842f69?auto=format&fit=crop&q=80&w=800",
      description: "Capturing nature reclaiming the concrete jungle."
    },
    {
      id: 4,
      title: "Abstract Minds",
      category: "Art Direction",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
      description: "A collection of 3D rendered abstract thoughts."
    }
  ]
};

// --- Custom Router Hook ---
const useRouter = () => {
  const [route, setRoute] = useState('home');
  const [params, setParams] = useState(null);
  
  const navigate = (newRoute, newParams = null) => {
    setRoute(newRoute);
    setParams(newParams);
    window.scrollTo(0, 0);
  };

  return { route, params, navigate };
};

const Navbar = ({ navigate, activeRoute }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNav = (route) => {
    navigate(route);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1917]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <button 
          onClick={() => handleNav('home')} 
          className="text-2xl font-black tracking-tighter uppercase text-[#FDFBF7] hover:opacity-80 transition-opacity"
        >
          {SITE_DATA.name}.
        </button>
        
        <div className="hidden md:flex gap-12 font-medium text-sm tracking-widest uppercase text-[#A8A29E] items-center">
          <button 
            onClick={() => handleNav('home')} 
            className={`hover:text-yellow-500 transition-colors flex items-center gap-2 ${activeRoute === 'home' ? 'text-yellow-500' : ''}`}
            aria-label="Home"
          >
            <Home size={18} />
            <span className="hidden lg:inline">Home</span>
          </button>
          {['work', 'about', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => handleNav(item)} 
              className={`hover:text-yellow-500 transition-colors capitalize ${activeRoute === item ? 'text-yellow-500' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden text-[#FDFBF7]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[80px] bg-[#1c1917] flex flex-col items-center justify-start pt-20 gap-8 text-4xl font-bold md:hidden text-[#FDFBF7] z-40">
          <button onClick={() => handleNav('home')} className="flex items-center gap-3"><Home size={32}/> Home</button>
          <button onClick={() => handleNav('work')}>Work</button>
          <button onClick={() => handleNav('about')}>About</button>
          <button onClick={() => handleNav('contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
};

// --- Page Components ---

const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* 1. Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-yellow-500 text-xs font-medium mb-8">
            <Sparkles size={12} />
            <span>Open to new collaborations</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#E7E5E4] tracking-tight mb-8 leading-[1.1]">
            BUILDING<br/>THE FUTURE
          </h1>
          <p className="text-lg md:text-xl text-[#A8A29E] max-w-lg leading-relaxed mb-12">
            {SITE_DATA.tagline} Digital experiences that merge art, technology, and human connection.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button onClick={() => navigate('work')} className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-medium transition-all transform hover:scale-105">
              See My Work
            </button>
            <button onClick={() => navigate('about')} className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-lg font-medium transition-all backdrop-blur-sm">
              More About Me
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#292524]">
               <div className="absolute inset-0 bg-yellow-900/20 mix-blend-overlay z-10" />
               <img 
                 src={SITE_DATA.heroImage} 
                 alt="Hero Portrait" 
                 className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
               />
            </div>
        </div>
      </div>
    </section>

    {/* 2. Services Section */}
    <section className="py-24 px-6 md:px-12 bg-[#0C0A09] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#E7E5E4] mb-4">What I Do</h2>
          <p className="text-[#A8A29E] max-w-md">Bridging the gap between design and functionality.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SITE_DATA.services.map((service, idx) => (
            <div key={idx} className="p-8 bg-[#1c1917] rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors group">
              <div className="mb-6 text-yellow-500 group-hover:text-white transition-colors">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#E7E5E4] mb-3">{service.title}</h3>
              <p className="text-[#A8A29E] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. Featured Work Preview */}
    <section className="py-24 px-6 md:px-12 bg-[#1c1917]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#E7E5E4]">Featured Work</h2>
          <button onClick={() => navigate('work')} className="flex items-center gap-2 text-yellow-500 hover:text-white transition-colors">
            View All <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SITE_DATA.projects.slice(0, 2).map((project) => (
            <div 
              key={project.id} 
              onClick={() => navigate('work')} 
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 relative bg-[#292524]">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <h3 className="text-2xl font-bold text-[#E7E5E4] mb-2 group-hover:text-yellow-500 transition-colors">{project.title}</h3>
              <p className="text-[#A8A29E]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. Process/Philosophy */}
    <section className="py-24 px-6 md:px-12 bg-[#0C0A09] border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-[#E7E5E4] mb-16">How I Work</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Discover', 'Define', 'Design', 'Deliver'].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl md:text-8xl font-bold text-[#292524] mb-4 group-hover:text-[#44403c] transition-colors">{`0${i+1}`}</div>
                <h3 className="text-xl font-bold text-[#E7E5E4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{step}</h3>
              </div>
            ))}
         </div>
      </div>
    </section>

    {/* 5. Mini CTA */}
    <section className="py-32 px-6 text-center bg-gradient-to-b from-[#1c1917] to-[#0C0A09]">
       <h2 className="text-4xl font-bold text-[#E7E5E4] mb-6">Have an idea?</h2>
       <button onClick={() => navigate('contact')} className="px-10 py-4 bg-[#E7E5E4] text-[#1c1917] rounded-full font-bold hover:bg-yellow-500 hover:text-white transition-all">
         Let's Discuss It
       </button>
    </section>
  </div>
);

const WorkPage = () => (
  <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-500">
    <h1 className="text-5xl md:text-7xl font-black text-[#E7E5E4] mb-20">Selected Work</h1>
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
      {SITE_DATA.projects.map((project, index) => (
        <div key={project.id} className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}>
          <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm bg-[#292524]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
            <div className="absolute top-4 right-4 bg-[#1c1917] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-500 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Case</div>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-[#E7E5E4] group-hover:text-yellow-500 transition-colors">{project.title}</h3>
          <p className="text-[#A8A29E] text-lg">{project.description}</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#57534E] mt-4">{project.category}</p>
        </div>
      ))}
    </div>
  </section>
);

const AboutPage = () => (
  <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-500">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="w-full aspect-square bg-gradient-to-tr from-yellow-600/20 to-amber-700/20 rounded-full blur-[100px] absolute opacity-60" />
        <img src={SITE_DATA.heroImage} alt="Portrait" className="relative z-10 w-full h-auto grayscale contrast-125 rounded-lg border border-white/5" />
      </div>
      <div>
        <h1 className="text-5xl md:text-7xl font-black mb-12 leading-tight text-[#E7E5E4]">About<br/>The Artist.</h1>
        <p className="text-xl md:text-2xl font-light text-[#A8A29E] leading-relaxed mb-12">{SITE_DATA.about}</p>
        <div className="grid grid-cols-2 gap-8 text-sm tracking-widest uppercase">
          <div><h4 className="font-bold text-yellow-500 mb-4">Services</h4><ul className="space-y-2 text-[#78716C]"><li>Art Direction</li><li>Brand Identity</li><li>Web Design</li></ul></div>
          <div><h4 className="font-bold text-yellow-500 mb-4">Clients</h4><ul className="space-y-2 text-[#78716C]"><li>Nike</li><li>Aesop</li><li>Spotify</li></ul></div>
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-center animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
      <div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-[#E7E5E4]">Let's Talk.</h1>
        <a href={`mailto:${SITE_DATA.email}`} className="text-2xl md:text-3xl text-[#A8A29E] border-b-2 border-[#A8A29E] pb-2 hover:text-yellow-500 hover:border-yellow-500 transition-colors">{SITE_DATA.email}</a>
      </div>
      <div className="flex gap-6">
        <a href="#" className="p-4 bg-[#292524] rounded-full text-[#A8A29E] hover:bg-[#E7E5E4] hover:text-[#1c1917] transition-all"><Instagram size={24} /></a>
        <a href="#" className="p-4 bg-[#292524] rounded-full text-[#A8A29E] hover:bg-[#E7E5E4] hover:text-[#1c1917] transition-all"><Twitter size={24} /></a>
        <a href="#" className="p-4 bg-[#292524] rounded-full text-[#A8A29E] hover:bg-[#E7E5E4] hover:text-[#1c1917] transition-all"><Linkedin size={24} /></a>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const { route, navigate } = useRouter();

  return (
    <div className="font-sans text-[#E7E5E4] bg-[#1c1917] selection:bg-yellow-900 selection:text-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;900&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #1c1917; }
      `}</style>
      
      <Navbar navigate={navigate} activeRoute={route} />
      
      <main>
        {route === 'home' && <HomePage navigate={navigate} />}
        {route === 'work' && <WorkPage />}
        {route === 'about' && <AboutPage />}
        {route === 'contact' && <ContactPage />}
      </main>

      {route !== 'contact' && (
        <footer className="px-6 py-8 max-w-7xl mx-auto border-t border-white/5 flex justify-between text-xs font-bold tracking-widest uppercase text-[#57534E]">
          <p>© 2025 {SITE_DATA.name}</p>
          <p>Made with React</p>
        </footer>
      )}
    </div>
  );
}