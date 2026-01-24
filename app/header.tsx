"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para cambiar el fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo con Garra */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center italic font-black text-xl">
            E
          </div>
          <span className="text-xl font-[1000] uppercase italic tracking-tighter">
            ELITE<span className="text-red-600">GYM</span>
          </span>
        </div>

        {/* Links de Navegación - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {['Programas', 'Metodología', 'Opiniones', 'Contacto'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Botón VIP / CTA */}
        <div className="flex items-center gap-6">
          <a 
            href="https://wa.me/XXXXXXXXXXX"
            className="hidden sm:block text-[10px] font-mono text-stone-500 uppercase tracking-widest border-b border-stone-800 hover:border-red-600 transition-all"
          >
            Membresía VIP
          </a>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}