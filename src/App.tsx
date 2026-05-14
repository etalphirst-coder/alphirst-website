import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  BarChart3, 
  Zap, 
  Smartphone, 
  MapPin,
  Mail,
  Menu,
  X,
  Target,
  Layers,
  Award
} from 'lucide-react';
import { useState, useRef } from 'react';
import alphirstLogo from './assets/images/logo.png';
import rainImage from './assets/images/regenerated_image_1778731869492.png';
import murakamiImage from './assets/images/regenerated_image_1778731871914.png';
import offlineEventImage from './assets/images/regenerated_image_1778733388924.png';
import sportsEndorsementImage from './assets/images/regenerated_image_1778733391012.png';
import kpopActivationImage from './assets/images/regenerated_image_1778733392199.png';
import globalIpDealImage from './assets/images/regenerated_image_1778733394317.png';
import entertainmentEndorsementImage from './assets/images/regenerated_image_1778733396129.png';
import roiDrivenKolContentImage from './assets/images/regenerated_image_1778733397536.png';
import coachLorealScrmImage from './assets/images/regenerated_image_1778733398405.png';

const portfolioItems = [
  {
    title: "Rain x Plaza 66",
    subtitle: "Celebrity Driven Luxury Activation / SH",
    type: "GLOBAL IP",
    image: rainImage,
  },
  {
    title: "Murakami Takashi",
    subtitle: "Ohana Hatake Global Pop-up Synergy",
    type: "ELITE ARTIST",
    image: murakamiImage,
  },
  {
    title: "Sports Endorsement",
    subtitle: "Legacy IP x Tech Platform Integration",
    type: "SPORT IP",
    image: sportsEndorsementImage,
  },
  {
    title: "Kpop Activation",
    subtitle: "K-Pop Identity Synchronization",
    type: "ENTERTAINMENT",
    image: kpopActivationImage,
  },
  {
    title: "Global IP Deal",
    subtitle: "Doraemon Lifecycle & Commerce Scaling",
    type: "IP ECOSYSTEM",
    image: globalIpDealImage,
  },
  {
    title: "Entertainment Endorsement",
    subtitle: "Global Footprint & Private Traffic Ops",
    type: "ENTERTAINMENT",
    image: entertainmentEndorsementImage,
  },
  {
    title: "Offline Event",
    subtitle: "The Dark Knight Global Retail Concept",
    type: "IMPACT RETAIL",
    image: offlineEventImage,
  },
  {
    title: "ROI Driven KOL Content",
    subtitle: "Digital Asset Management & Growth",
    type: "KOL/KOC",
    image: roiDrivenKolContentImage,
  },
  {
    title: "Coach & L'Oreal SCRM",
    subtitle: "ROI Matrix & Private Traffic Optimization",
    type: "SCRM",
    image: coachLorealScrmImage,
  }
];

const services = [
  {
    title: "Elite IP Synergy",
    desc: "Weaponizing global titans from entertainment, sports, and contemporary art into your brand DNA.",
    items: ["Celebrity Strategy", "Global Artist Collaborations", "Cultural IP Integration"],
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Performance Social-Commerce",
    desc: "Aggressive, ROI-driven KOL matrix management and high-impact physical activations that convert.",
    items: ["ROI-Driven KOL Matrix", "Impact Offline Popups", "Omnichannel Growth"],
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "Next-Gen CRM Ecosystems",
    desc: "Bespoke digitalization of brand assets and private traffic development through custom tech architecture.",
    items: ["CRM Tech Architecture", "Private Traffic Operation", "Digital Asset Management"],
    icon: <Layers className="w-5 h-5" />
  }
];

const clients = [
  "Louis Vuitton", "Coach", "Anta", "Umbro", "Zeekr", "Doraemon", "Pop Mart", "L'Oreal", "Fendi", "Hublot", "le coq sportif", "avia", "human made", "QQ music", "Plaza66", "Descente", "DC shoes", "Lululemon"
];

const SectionHeader = ({ title, badge }: { title: string, badge?: string }) => (
  <div className="mb-8 md:mb-12">
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6"
      >
        {badge}
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-light tracking-tight mb-4 max-w-4xl"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative bg-[#F9FAFB] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img src={alphirstLogo} alt="Alphirst Logo" className="h-12 w-auto" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-[60] flex items-center justify-center"
        >
          <div className="text-center space-y-10">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-4xl font-light hover:text-brand-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-6 p-2"
          >
            <X />
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-3 py-1 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-8">
                  The Master of Advantage
                </div>
                <h1 className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tight mb-10">
                  Translating <span className="font-semibold">Unfair Edge</span> into Market Dominance.
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-12">
                  We empower established brands and nurture startups by weaponizing luxury-tier competitive advantages in elite IP and disruptive social commerce.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <a href="#services" className="w-full sm:w-auto px-10 py-5 bg-brand-accent text-white text-center font-semibold rounded-2xl shadow-accent-glow hover:bg-gray-900 transition-all transform hover:-translate-y-1">
                    Explore Capabilities
                  </a>
                  <div className="flex items-center gap-3 text-gray-400 text-sm italic font-serif">
                    <span className="block w-12 h-[1px] bg-gray-200"></span>
                    Scroll to dive into our pillars
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Solutions & Strategic Edge */}
      <section id="services" className="py-12 md:py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Weaponizing the Unfair Advantage" badge="Strategic Solutions" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mx-auto mb-12">
            <div className="space-y-8">
              <h3 className="text-4xl font-light leading-tight">
                Luxury-Tier <span className="font-semibold text-brand-accent">Operational Scaling</span>
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg font-light">
                Alphirst signifies the synthesis of Alpha and First. Our philosophy is predicated on deploying insurmountable competitive advantages for brands that demand market leadership. We bridge the gap between global creative visionaries and digital scalability through elite resources and aggressive ROI optimization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  { title: "Established Brands", desc: "Running operations to optimize and scale for global market dominance." },
                  { title: "Startup Ventures", desc: "Nurturing the next generation of IP with elite-tier investment and tech assets." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {services.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F9FAFB] p-8 rounded-[2rem] border border-gray-100 hover:border-brand-accent/20 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-brand-accent/5 text-brand-accent rounded-lg flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((tag, t) => (
                          <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-brand-accent transition-colors">
                            • {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-12 md:py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Global Impact Portfolio" badge="Elite Activations" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-6 bg-gray-50 border border-gray-100 flex items-center justify-center p-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {item.type}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-1 tracking-tight text-gray-900 group-hover:text-brand-accent transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm font-light uppercase tracking-widest">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-6 md:py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-300 uppercase tracking-[0.4em] font-bold text-[10px] mb-6 md:mb-10">Global Network & Elite Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8 opacity-30 hover:opacity-80 transition-opacity duration-1000">
            {clients.map((client, i) => (
              <span key={i} className="text-sm md:text-xl font-display font-black tracking-tighter hover:text-brand-accent transition-colors cursor-default">
                {client.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] shadow-clean border border-gray-100 relative overflow-hidden"
          >
            <div className="inline-block px-3 py-1 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-10">
              Elite Network Access
            </div>
            <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Deploy Your <br className="md:hidden" />
              <span className="font-semibold">Unfair Advantage</span>
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
              We operate exclusively in high-stakes environments for icons ready to scale. Synchronize your vision with our global architecture.
            </p>
            
            <a href="mailto:info@alphirst.com" className="inline-flex items-center gap-4 bg-brand-accent text-white px-10 py-5 rounded-2xl font-semibold shadow-accent-glow hover:bg-gray-900 transition-all transform hover:-translate-y-1">
              <Mail className="w-5 h-5" />
              info@alphirst.com
            </a>

            <div className="mt-16 flex justify-center gap-10 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-300">
              <a href="#" className="hover:text-black transition-colors">Linkedin</a>
              <a href="#" className="hover:text-black transition-colors">Instagram</a>
              <a href="#" className="hover:text-black transition-colors">Twitter</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] text-gray-300 uppercase tracking-[0.2em] mb-3 font-bold">Base of Operations</p>
              <p className="text-sm font-semibold">Shanghai/Bangkok</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center justify-end gap-3 md:mb-4">
              <img src={alphirstLogo} alt="Alphirst Logo" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
