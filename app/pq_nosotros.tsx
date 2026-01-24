export default function BenefitsSection() {
  const benefits = [
    { num: "01", title: "Fuerza Bruta", desc: "Sistemas de carga progresiva diseñados para romper tus límites físicos." },
    { num: "02", title: "Combate Elite", desc: "Metodología profesional en disciplinas de contacto. Técnica sin adornos." },
    { num: "03", title: "Mentalidad", desc: "Forjamos una disciplina inquebrantable. El dolor es temporal, el legado no." },
    { num: "04", title: "El Clan", desc: "No es un gimnasio, es una unidad de élite. Entrenas con los mejores." },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none tracking-tighter">
            THE <span className="text-red-600">ASSETS</span>
          </h2>
          <p className="text-stone-500 uppercase tracking-[0.3em] text-xs font-bold border-l-2 border-red-600 pl-4">
            Ingeniería humana <br /> aplicada al rendimiento
          </p>
        </div>

        {/* Grid de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="group relative p-10 border border-white/10 transition-all duration-500 hover:bg-zinc-900"
            >
              {/* Número de fondo */}
              <span className="absolute top-4 right-6 text-7xl font-black text-white/5 group-hover:text-red-600/10 transition-colors duration-500">
                {b.num}
              </span>

              {/* Contenido */}
              <div className="relative z-10">
                <div className="w-8 h-[2px] bg-red-600 mb-6 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light group-hover:text-white transition-colors">
                  {b.desc}
                </p>
              </div>

              {/* Efecto de Luces al Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer de sección técnico */}
        <div className="mt-12 flex justify-between items-center opacity-20">
          <div className="h-[1px] flex-1 bg-white"></div>
          <span className="mx-4 font-mono text-[10px] tracking-[0.5em] uppercase">Forging Elite Athletes 2026</span>
          <div className="h-[1px] flex-1 bg-white"></div>
        </div>
      </div>
    </section>
  );
}