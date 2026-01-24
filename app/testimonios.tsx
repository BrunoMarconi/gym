export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Atleta de Fuerza",
      text: "No es solo el entrenamiento, es el estándar que te exigen. Mi técnica y potencia han escalado a un nivel que no creía posible.",
      image: "/images/testimonial1.jpg", 
    },
    {
      name: "Laura R.",
      role: "MMA Fighter",
      text: "Buscaba intensidad y encontré una guerra diaria. Aquí no vienes a sudar, vienes a transformarte bajo presión.",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "Miguel P.",
      role: "Miembro del Clan",
      text: "La disciplina que forjé en el rack de sentadillas se trasladó a mi vida personal. Es el mejor club de la ciudad, sin duda.",
      image: "/images/testimonial3.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Estilo Magazine */}
        <div className="relative mb-24">
          <h2 className="text-7xl md:text-[140px] font-black uppercase italic leading-none opacity-10 absolute -top-10 left-0 select-none">
            VOICES
          </h2>
          <div className="relative z-10 pl-2 border-l-4 border-red-600">
            <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              EL VERDICTO <br /> DE LA <span className="text-red-600">ARENA</span>
            </h3>
          </div>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative">
              {/* Contenedor de Imagen con marco industrial */}
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                <div className="absolute inset-0 border-[1px] border-white/20 z-20 group-hover:border-red-600 transition-colors duration-500"></div>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Nombre sobre la foto */}
                <div className="absolute bottom-6 left-6 z-30">
                  <p className="text-2xl font-black uppercase italic tracking-tighter leading-none">
                    {t.name}
                  </p>
                  <p className="text-red-600 font-mono text-[10px] tracking-widest uppercase mt-1">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Texto del testimonio */}
              <div className="relative">
                <span className="text-5xl font-serif text-red-600 absolute -top-4 -left-2 opacity-50">“</span>
                <p className="text-stone-300 text-base font-light leading-relaxed italic relative z-10 pl-6">
                  {t.text}
                </p>
                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-[2px] bg-red-600"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decoración inferior técnica */}
        <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center font-mono text-[10px] text-stone-600 tracking-[0.3em]">
          <span>VERIFIED RESULTS // 2026</span>
          <span className="hidden md:block">ESTABLISHED IN DISCIPLINE</span>
          <span>BLOOD. SWEAT. HONOR.</span>
        </div>
      </div>
    </section>
  );
}