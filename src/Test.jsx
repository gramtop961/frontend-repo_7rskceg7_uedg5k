import React from 'react';

export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Pagina di test</h1>
        <p className="mt-2 text-white/70">Questa è una pagina di verifica del routing.</p>
        <a href="/" className="mt-6 inline-block rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">Torna alla home</a>
      </div>
    </div>
  );
}
