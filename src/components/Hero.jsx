import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/90 backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-400" />
          Nuovo sito in arrivo a breve
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Edilo Srl: edilizia e innovazione 3D per progetti che lasciano il segno
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Questa è una pagina di transizione: qui trovi i nostri servizi, le prossime novità e i contatti diretti per parlare con il nostro team.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#servizi"
            className="rounded-md bg-orange-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
          >
            Scopri i servizi
          </a>
          <a
            href="#innovazione"
            className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
          >
            Progetto 3D di Orio al Serio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
