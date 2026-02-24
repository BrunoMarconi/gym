"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Efecto Parallax para la imagen secundaria
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="py-32 bg-[#050505] px-6 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* 1. Composición de Imágenes con Next.js Image */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 w-4/5 aspect-[3/4] border border-white/10"
            >
              
            </motion.div>

            {/* Imagen Secundaria con Efecto Parallax */}
            <motion.div 
              style={{ y: yImage }}
              className="absolute -bottom-12 -right-4 w-1/2 aspect-square border-[10px] border-[#050505] z-20 shadow-2xl hidden md:block"
            >
              
            </motion.div>

            {/* Texto de Fondo Dinámico */}
            <div className="absolute -left-16 top-0 hidden xl:block pointer-events-none -z-0">
              <span className="text-transparent font-black text-[10rem] leading-none uppercase select-none opacity-20"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                EST.<br/>2012
              </span>
            </div>
          </div>

          {/* 2. Columna Editorial */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
                The Mastermind
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Más que tinta, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600 italic font-serif">
                  identidad.
                </span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                Con más de una década trazando historias, mi enfoque fusiona la agresividad del 
                <span className="text-white font-medium mx-2">Blackwork</span> 
                con la delicadeza de la anatomía.
              </p>
            </motion.div>

            {/* Características con diseño de cajas de la imagen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "El Manifiesto", desc: "Diseños irrepetibles. La piel merece originalidad." },
                { title: "Grado Médico", desc: "Higiene quirúrgica en un ambiente privado." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ borderColor: "rgba(245, 158, 11, 0.5)" }}
                  className="p-8 border border-white/5 bg-white/[0.02] transition-colors"
                >
                  <div className="w-1 h-1 bg-amber-500 mb-4" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">{item.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center gap-4 group uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
              Ver filosofía de trabajo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;