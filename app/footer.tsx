export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo y Eslogan */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-[1000] uppercase italic tracking-tighter mb-4">
              ELITE<span className="text-red-600">GYM</span>
            </h2>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed uppercase tracking-widest font-light">
              Forjando la élite física y mental desde 2026. <br />
              No es un club, es un estándar de vida.
            </p>
          </div>

          {/* Navegación Rápida */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-6">Navegación</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tighter italic">
              <li><a href="#clases" className="hover:text-red-600 transition-colors">Programas</a></li>
              <li><a href="#beneficios" className="hover:text-red-600 transition-colors">Metodología</a></li>
              <li><a href="#testimonios" className="hover:text-red-600 transition-colors">Resultados</a></li>
              <li><a href="#contacto" className="hover:text-red-600 transition-colors">Ubicación</a></li>
            </ul>
          </div>

          {/* Social / Conexión */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-6">Social Ops</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tighter italic">
              <li><a href="#" className="hover:text-red-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior Técnica */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          
          {/* Copyright y Créditos */}
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-red-600 animate-pulse"></span>
            <p className="font-mono text-[9px] text-stone-600 uppercase tracking-[0.3em]">
              © 2026 ELITE GYM // ALL SYSTEMS OPERATIONAL
            </p>
          </div>

          {/* Disclaimer de Lujo */}
          <div className="text-[9px] font-mono text-stone-700 uppercase tracking-widest text-center md:text-right">
            Diseñado para el 1% que decide no detenerse. <br />
            Alhaurín de la Torre, Málaga.
          </div>
          
        </div>
      </div>
    </footer>
  );
}