/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, MapPin, History, Landmark, Palette, Info } from 'lucide-react';
import { SECTIONS } from './constants';
import { ContentSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSection = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'about': return <Info className="w-5 h-5" />;
      case 'history': return <History className="w-5 h-5" />;
      case 'architecture': return <Landmark className="w-5 h-5" />;
      case 'culture': return <Palette className="w-5 h-5" />;
      default: return <ChevronRight className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-ochre-dark selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-ochre-dark flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className={`font-display font-bold text-lg tracking-tighter text-gray-900`}>
              KASTRAKI
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`text-sm font-medium transition-colors hover:text-ochre-dark ${activeSection === section.id ? 'text-ochre-dark border-b-2 border-ochre-dark' : 'text-gray-700'}`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-display font-bold text-left ${activeSection === section.id ? 'text-ochre-dark' : 'text-gray-400'}`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-ochre-light">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://picsum.photos/seed/kastraki-hero/1920/1080?grayscale" 
            alt="Kastraki Landscape" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ochre"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-700 mb-4 font-medium tracking-widest uppercase text-xs">
              <MapPin className="w-4 h-4" />
              Peloponnese, Greece
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Kastraki, a place of <span className="text-ochre-dark italic underline decoration-ochre-dark/30">memory</span> and <span className="text-ochre-dark italic underline decoration-ochre-dark/30">experience</span>
            </h1>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto font-light">
              Discover the layers of history, the beauty of ancient architecture, and the vibrant culture of a site that bridges millennia.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="space-y-2">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id 
                    ? 'bg-ochre-dark text-white shadow-xl' 
                    : 'text-gray-700 hover:bg-black/5'
                  }`}
                >
                  {getIcon(section.id)}
                  <span className="font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Content Area */}
          <section className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-ochre-dark"></span>
                    {currentSection.title}
                  </h2>
                  <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-ochre-dark/30 pl-6 font-light">
                    {currentSection.shortText}
                  </p>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentSection.images.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className={`relative overflow-hidden rounded-xl bg-black/5 backdrop-blur-sm aspect-[4/3] ${img.type === 'plan' ? 'p-8 bg-white' : ''}`}>
                        <img 
                          src={img.url} 
                          alt={img.caption}
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.type === 'plan' ? 'mix-blend-multiply opacity-90' : ''}`}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                            img.type === 'plan' ? 'bg-ochre-dark text-white' : 'bg-white text-ochre-dark'
                          }`}>
                            {img.type}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-600 italic font-medium">
                        {img.caption}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="pt-12 flex justify-center opacity-10">
                  <Landmark className="w-32 h-32 text-ochre-dark" />
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm text-gray-900 py-16 mt-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-ochre-dark flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">KASTRAKI</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              A place of memory and experience in the heart of Peloponnese. Preserving the past for the future.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs opacity-60">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              {SECTIONS.map(s => (
                <li key={s.id}>
                  <button onClick={() => setActiveSection(s.id)} className="hover:text-ochre-dark transition-colors">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs opacity-60">Location</h4>
            <p className="text-gray-700 text-sm">
              Archaeological Site of Kastraki<br />
              Peloponnese Region, Greece
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-ochre-dark flex items-center justify-center text-white hover:bg-black hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-black/5 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Kastraki Archaeological Site. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
