"use client";

import React, { useState, useEffect } from "react";
import { Euro, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type TattooStyle = "lineal" | "blackwork" | "realista" | "color";

export default function TattooEstimator() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("10");

  const [style, setStyle] = useState<TattooStyle>("lineal");
  const [animate, setAnimate] = useState(false);

  const basePrice = 2;
  const minimumPrice = 60;

  const multipliers: Record<TattooStyle, number> = {
    lineal: 1,
    blackwork: 1.3,
    realista: 1.8,
    color: 2,
  };

  const numWidth = parseFloat(width) || 0;
  const numHeight = parseFloat(height) || 0;

  const area = numWidth * numHeight;
  const price = Math.max(minimumPrice, Math.round(area * basePrice * multipliers[style]));
  const hours = Math.max(1, Math.round(area / 20 * multipliers[style]));

  // Animación al cambiar precio
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [price]);

  // Limites del preview
  const maxPreviewWidth = 350;
  const maxPreviewHeight = 400;
  const previewWidth = Math.min(numWidth * 5, maxPreviewWidth);
  const previewHeight = Math.min(numHeight * 5, maxPreviewHeight);

  // Función abrir WhatsApp
  function openWhatsApp() {
    if (!name || !phone) {
      alert("Introduce nombre y WhatsApp");
      return;
    }
    const message = `Hola, quiero reservar un tattoo:

Nombre: ${name}
Teléfono: ${phone}

Tamaño: ${width}x${height} cm
Estilo: ${style}

Precio estimado: ${price}€
Tiempo estimado: ${hours}h
`;
    const url = `https://wa.me/34679702207?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-[#0b0b0c] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

        {/* IZQUIERDA: Preview */}
        <div className="p-10 bg-gradient-to-br from-indigo-600/10 to-transparent">
          <div className="flex gap-2 mb-6">
            <Sparkles className="text-indigo-400"/>
            <span className="text-indigo-400 text-sm">Premium Tattoo</span>
          </div>

          <h1 className="text-4xl font-bold mb-6 pl-24">Diseña tu tattoo</h1>

          {/* PREVIEW ESPALDA */}
          <div className="relative h-96 w-full flex items-start justify-center">
            <img
              src="https://images.unsplash.com/photo-1657800187914-682b18440d50?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 object-cover opacity-40 rounded-lg"
              style={{top: "-20%"}}
            />
            <div
              className="absolute bg-indigo-500/40 border border-indigo-400 rounded-lg shadow-lg transition-all duration-500"
              style={{
                width: previewWidth,
                height: previewHeight,
                top: "45%",          // Parte alta de la espalda
                left: "50%",
                transform: "translateX(-50%)", // Solo centramos horizontalmente
              }}
            />
          </div>

          <p className="text-gray-500 mt-40">Preview proporcional real</p>
        </div>

        {/* DERECHA: Inputs y calculadora */}
        <div className="p-10">
          <Input label="Nombre" value={name} set={setName} />
          <Input label="WhatsApp" value={phone} set={setPhone} />

          <div className="grid grid-cols-2 gap-4">
            <Input label="Ancho (cm)" value={width} set={setWidth} />
            <Input label="Alto (cm)" value={height} set={setHeight} />
          </div>

          {/* ESTILOS */}
          <div className="grid grid-cols-2 gap-4 my-6">
            {Object.keys(multipliers).map((s) => (
              <div
                key={s}
                onClick={() => setStyle(s as TattooStyle)}
                className={`cursor-pointer p-4 rounded-xl border transition-all
                  ${style === s ? "border-indigo-500 bg-indigo-500/20 scale-105" : "border-white/10 hover:border-white/30"}`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* PRECIO */}
          <motion.div
            animate={{ scale: animate ? 1.1 : 1 }}
            className="text-5xl font-bold flex gap-2 mb-2"
          >
            {price}
            <Euro />
          </motion.div>

          <p className="text-gray-400 mb-6">Tiempo estimado: {hours}h</p>

          <button
            onClick={openWhatsApp}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-all p-4 rounded-xl font-bold flex justify-center gap-2"
          >
            <Send /> Reservar por WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}

function Input({ label, value, set }: any) {
  return (
    <div className="mb-4">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <input
        value={value}
        onChange={(e) => set(e.target.value)}
        className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-indigo-500 outline-none"
      />
    </div>
  );
}