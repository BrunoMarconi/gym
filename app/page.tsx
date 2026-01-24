"use client";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center bg-black text-white overflow-hidden font-sans">
      
      {/* Background con Textura y Grano */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image1.jpg" 
          alt="Elite Training"
          className="h-full w-full object-cover opacity-70 grayscale contrast-125"
        />
        {/* Overlay: Degradado Radial para focalizar el centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
        
        {/* Textura de ruido/grano opcional para toque urbano */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        
        {/* Badge superior */}
        <div className="mb-6 px-3 py-1 border border-white/20 bg-white/5 backdrop-blur-md uppercase tracking-[0.3em] text-[10px] font-black italic">
          High Performance Division
        </div>

        {/* Título: Impacto Urbano */}
        <div className="relative mb-8 text-center">
          <h1 className="text-7xl md:text-[120px] font-[900] uppercase leading-[0.85] tracking-tighter italic">
            SIN <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">LÍMITES</span>
            <br />
            <span className="outline-text text-transparent">SOLO RESULTADOS</span>
          </h1>
          {/* Reflejo sutil detrás */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-white/5 text-9xl font-black italic -z-10 select-none">
            LIMITS
          </span>
        </div>
        
        <p className="text-sm md:text-lg font-medium text-stone-300 mb-12 max-w-lg mx-auto leading-tight tracking-[0.1em] uppercase italic">
          Entrenamiento de élite. Disciplina inquebrantable. <br />
          Tu nueva era comienza en la sombra.
        </p>

        {/* CTAs con garra */}
        <div className="flex flex-col sm:flex-row gap-0 border border-white/10 p-1 bg-black/20 backdrop-blur-sm">
          <a
            href="https://wa.me/XXXXXXXXXXX"
            className="px-12 py-5 bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300 font-black uppercase tracking-tighter italic text-xl"
          >
            Únete al Clan
          </a>
          <a
            href="#clases"
            className="px-12 py-5 bg-transparent text-white hover:bg-white/10 transition-all duration-300 font-black uppercase tracking-tighter italic text-xl border-l border-white/10"
          >
            Disciplinas
          </a>
        </div>
      </div>

      {/* Decoración lateral - Estética Técnica */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-2 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
          <span>001 / Strength</span>
          <span>002 / Endurance</span>
          <span>003 / Mindset</span>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </main>
  );
}