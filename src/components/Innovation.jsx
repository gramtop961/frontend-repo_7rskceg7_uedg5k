import React from 'react';
import { Printer, MapPin } from 'lucide-react';

const Innovation = () => {
  return (
    <section id="innovazione" className="relative w-full bg-gradient-to-b from-neutral-950 to-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Printer className="h-4 w-4 text-orange-400" />
            Progetto innovativo
          </span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Stampa 3D in edilizia: si parte a novembre</h2>
          <p className="mt-3 text-white/75">
            Stiamo lanciando un progetto pilota di stampa 3D per applicazioni edilizie. L’avvio è previsto a novembre presso l’area aeroportuale di Orio al Serio.
            L’obiettivo è ridurre tempi e costi, innalzando al contempo qualità e sostenibilità dei manufatti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Tecnologia</h3>
            <p className="mt-2 text-sm text-white/70">Implementazione di sistemi di stampa 3D per elementi architettonici e infrastrutturali, con mix design ottimizzati.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Benefici</h3>
            <p className="mt-2 text-sm text-white/70">Rapidità di esecuzione, riduzione degli sprechi, possibilità di forme complesse e integrazione con processi tradizionali.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Tempistiche</h3>
            <p className="mt-2 text-sm text-white/70">Kick-off a novembre con dimostrazioni on-site e prime applicazioni pratiche in ambito aeroportuale.</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-white/80">
          <MapPin className="h-5 w-5 text-orange-400" />
          <span>Località: Aeroporto di Orio al Serio (BG)</span>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
