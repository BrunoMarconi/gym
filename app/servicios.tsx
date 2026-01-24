export default function ClassesSection() {
  const classes = [
    {
      name: "Striking Boxeo",
      time: "MON / WED / FRI — 18:00",
      description: "Dominio de la distancia y potencia de impacto. Técnica pura.",
      tag: "Combat",
      bg: "bg-[url('/boxeo-bg.jpg')]" // Añade tus rutas de imagen
    },
    {
      name: "Hybrid MMA",
      time: "TUE / THU — 19:00",
      description: "Transiciones fluidas y control total. El arte de la guerra moderna.",
      tag: "Grappling",
      bg: "bg-[url('/mma-bg.jpg')]"
    },
    {
      name: "Elite Strength",
      time: "MON — FRI — 07:00",
      description: "Acondicionamiento de alto rendimiento. Forja tu armadura física.",
      tag: "Power",
      bg: "bg-[url('/strength-bg.jpg')]"
    },
    {
      name: "Private Ops",
      time: "BY APPOINTMENT",
      description: "Instrucción personalizada 1-a-1 bajo demanda específica.",
      tag: "Elite",
      bg: "bg-[url('/private-bg.jpg')]"
    },
  ];

  return (
    <section id="clases" className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Estilo Reporte */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
              PROGRAMAS <span className="text-red-600">DISPONIBLES</span>
            </h2>
            <p className="text-stone-500 font-mono text-[10px] tracking-[0.4em] uppercase mt-2">
              Select your discipline // No excuses allowed
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-4xl font-black italic opacity-10">2026_EDITION</span>
          </div>
        </div>

        {/* Listado de Clases */}
        <div className="flex flex-col gap-4">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="group relative w-full overflow-hidden border border-white/5 bg-zinc-950 p-8 md:p-12 transition-all duration-500 hover:border-red-600/50"
            >
              {/* Imagen de fondo con reveal al hover */}
              <div className={`absolute inset-0 ${cls.bg} bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 grayscale`}></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Info Principal */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-red-600 font-mono text-xs tracking-widest uppercase">[{cls.tag}]</span>
                    <div className="h-[1px] w-8 bg-white/20"></div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {cls.name}
                  </h3>
                </div>

                {/* Horario y Desc */}
                <div className="md:text-right max-w-md">
                  <p className="text-lg font-bold text-white mb-2 tracking-tight">
                    {cls.time}
                  </p>
                  <p className="text-stone-400 text-sm font-light leading-snug">
                    {cls.description}
                  </p>
                </div>

                {/* Botón Acción sutil */}
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Barra de progreso decorativa inferior */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}