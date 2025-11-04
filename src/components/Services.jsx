import React from 'react';
import { Building2, Wrench, Factory, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Edilizia civile e commerciale',
    desc: 'Dalle nuove costruzioni alle ristrutturazioni complete di appartamenti, uffici e retail, con gestione integrata di cantiere.',
  },
  {
    icon: Factory,
    title: 'Edilizia industriale',
    desc: 'Opere strutturali, ampliamenti e adeguamenti per capannoni e siti produttivi con standard di sicurezza avanzati.',
  },
  {
    icon: Wrench,
    title: 'Manutenzioni e riqualificazioni',
    desc: 'Interventi programmati e straordinari su immobili, adeguamenti energetici e miglioramento sismico.',
  },
  {
    icon: Paintbrush,
    title: 'Finiture e interior',
    desc: 'Cartongesso, tinteggiature, pavimentazioni e finiture di pregio per spazi moderni e funzionali.',
  },
];

const Services = () => {
  return (
    <section id="servizi" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Servizi</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Tutte le soluzioni per l’edilizia, ispirate alla qualità del lavoro e alla puntualità. Le attività rispecchiano l’offerta presente sul nostro sito gemello.
            </p>
          </div>
          <a href="#contatti" className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            Richiedi informazioni
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-orange-500/15 p-3 text-orange-400 ring-1 ring-orange-500/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
