export default function FinalCTASection() {
  return (
    <section className="relative bg-white text-black py-32 px-6 overflow-hidden">
      
      {/* Marca de agua tipográfica de fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="text-[20vw] font-black italic uppercase leading-none">
          NO EXCUSES
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Badge de Urgencia */}
        <div className="inline-block px-4 py-1 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">
          Acceso Limitado / 2026
        </div>

        {/* Título: Impacto máximo con Kerning ajustado */}
        <h2 className="text-6xl md:text-9xl font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-10">
          ES HORA DE <br />
          <span className="text-red-600">DAR LA CARA.</span>
        </h2>

        <p className="text-sm md:text-xl font-medium uppercase tracking-widest text-zinc-500 max-w-2xl mx-auto mb-12">
          La primera sesión corre por nuestra cuenta. <br />
          <span className="text-black font-bold">Tú pones el sudor, nosotros la disciplina.</span>
        </p>

        {/* Botón Brutalista */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/XXXXXXXXXXX"
            className="group relative px-12 py-6 bg-black text-white overflow-hidden transition-all duration-300 hover:pr-16"
          >
            <span className="relative z-10 text-xl font-black uppercase italic tracking-tighter">
              Asegurar mi Pase de Élite
            </span>
            {/* Flecha animada que aparece al hover */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Nota al pie técnica */}
        <p className="mt-12 font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-400">
          Protocolo de iniciación disponible por tiempo limitado.
        </p>
      </div>
    </section>
  );
}