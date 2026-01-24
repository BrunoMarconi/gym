export default function ContactSection() {
  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Columna de Información */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 self-start">
              Location / HQ
            </div>
            
            <h2 className="text-5xl md:text-7xl font-[900] uppercase italic tracking-tighter leading-none mb-10 text-balance">
              ENCUENTRA <br /> 
              <span className="text-stone-500">LA FORJA</span>
            </h2>

            <div className="space-y-6 md:space-y-8 mb-12">
              <div className="group border-l border-white/10 pl-6 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Dirección Central</p>
                <p className="text-lg md:text-xl font-bold italic uppercase tracking-tight leading-tight">
                  Calle Ejemplo 123, <br />
                  <span className="text-red-600 text-sm md:text-base">Alhaurín de la Torre, Málaga</span>
                </p>
              </div>

              <div className="group border-l border-white/10 pl-6 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Línea Directa</p>
                <p className="text-lg md:text-xl font-bold italic uppercase tracking-tight">+34 600 123 456</p>
              </div>
            </div>

            <a
              href="https://wa.me/XXXXXXXXXXX"
              className="relative inline-flex items-center justify-center px-8 py-5 bg-white text-black font-black uppercase italic tracking-tighter text-lg hover:bg-red-600 hover:text-white transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Reserva tu puesto</span>
              <svg className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Columna del Mapa - ARREGLO PARA MÓVIL */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2">
            <div className="relative group h-[350px] md:h-[500px] lg:h-full w-full">
              {/* Brillo decorativo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent opacity-10 blur group-hover:opacity-20 transition duration-1000"></div>
              
              {/* Contenedor del Mapa con altura explícita */}
              <div className="relative h-full w-full bg-zinc-900 border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.123456789!2d-4.5574!3d36.6669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQwJzAwLjgiTiA0wrAzMycyNi42Ilc!5e0!3m2!1ses!2ses!4v1234567890" 
                  width="100%"
                  height="100%"
                  className="border-0 grayscale contrast-125 invert-[0.9] hue-rotate-180 opacity-60"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                {/* Coordenadas - Solo visibles en Desktop para no estorbar en móvil */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-3 border border-white/10 hidden md:block select-none pointer-events-none">
                  <p className="font-mono text-[9px] text-red-600 tracking-tighter uppercase">GPS Data:</p>
                  <p className="font-mono text-[10px] text-white">36.6669° N, 4.5574° W</p>
                </div>

                {/* Overlay de clic para móvil (Evita que el usuario se quede atrapado en el mapa al hacer scroll) */}
                <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer final */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 italic">
          <p className="text-[9px] font-mono tracking-[0.3em] uppercase">© 2026 Elite Club — Forged in Strength</p>
          <div className="flex gap-6 text-[9px] font-mono tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-red-600 transition-colors">Legal</a>
            <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </section>
  );
}