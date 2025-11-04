import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Richiesta informazioni dal sito');
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\nTelefono: ${form.phone}\n\nMessaggio:\n${form.message}`);
    window.location.href = `mailto:info@edilosrl.eu?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contatti" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Contatti</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Siamo a disposizione per preventivi, sopralluoghi e partnership sul progetto di stampa 3D. Scrivici e ti ricontattiamo a breve.
            </p>

            <div className="mt-6 space-y-3 text-white/80">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-orange-400" /><a href="mailto:info@edilosrl.eu" className="hover:underline">info@edilosrl.eu</a></div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-orange-400" /><a href="tel:+39000000000" className="hover:underline">+39 000 000 000</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-orange-400" /><span>Bergamo e provincia</span></div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Nome e cognome</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-orange-500/0 placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-orange-500/30"
                  placeholder="Mario Rossi"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-orange-500/0 placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-orange-500/30"
                  placeholder="nome@dominio.it"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-orange-500/0 placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-orange-500/30"
                  placeholder="(+39) ..."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Messaggio</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-orange-500/0 placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-orange-500/30"
                  placeholder="Raccontaci cosa ti serve..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
            >
              <Send className="h-4 w-4" /> Invia richiesta
            </button>
            <p className="mt-3 text-xs text-white/50">Compilando il form invierai una mail precompilata al nostro team.</p>
          </form>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Edilo Srl • Tutti i diritti riservati
        </div>
      </div>
    </section>
  );
};

export default Contact;
