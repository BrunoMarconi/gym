export default function ContactSection() {
  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Columna de Información - Estética Industrial */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 self-start">
              Location / HQ
            </div>
            
            <h2 className="text-5xl md:text-7xl font-[900] uppercase italic tracking-tighter leading-none mb-10">
              ENCUENTRA <br /> 
              <span className="text-stone-500">LA FORJA</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="group border-l border-white/10 pl-6 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Dirección Central</p>
                <p className="text-xl font-bold italic uppercase tracking-tight">
                  Calle Ejemplo 123, <br />
                  <span className="text-red-600">Málaga, España</span>
                </p>
              </div>

              <div className="group border-l border-white/10 pl-6 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Línea Directa</p>
                <p className="text-xl font-bold italic uppercase tracking-tight">+34 600 123 456</p>
              </div>

              <div className="group border-l border-white/10 pl-6 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Comunicaciones</p>
                <p className="text-xl font-bold italic uppercase tracking-tight">contacto@elitegym.com</p>
              </div>
            </div>

            <a
              href="https://wa.me/XXXXXXXXXXX"
              className="relative inline-flex items-center justify-center px-8 py-5 bg-white text-black font-black uppercase italic tracking-tighter text-lg hover:bg-red-600 hover:text-white transition-all duration-300 group"
            >
              <span>Reserva tu puesto en la arena</span>
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Columna del Mapa - Dark Filter */}
          <div className="lg:w-3/5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-stone-800 opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative h-full min-h-[400px] w-full bg-zinc-900 border border-white/10 grayscale contrast-125 invert-[0.9] hue-rotate-180">
              {/* Nota: El filtro 'invert-[0.9] hue-rotate-180' hace que el mapa de Google se vea oscuro/premium */}
              <iframe
                src="https://www.google.com/maps/embed?pb=..." // Reemplaza con tu URL real
                width="100%"
                height="100%"
                className="border-0 opacity-80"
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              {/* Overlay decorativo táctico */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-4 border border-white/10 hidden md:block">
                <p className="font-mono text-[9px] text-red-600 tracking-tighter uppercase">GPS Coordinates:</p>
                <p className="font-mono text-[10px] text-white">36.6669° N, 4.5574° W</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer final ultra-minimal */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase">© 2026 Elite Club — All rights reserved</p>
          <div className="flex gap-8 text-[10px] font-mono tracking-[0.3em] uppercase">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
}