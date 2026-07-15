import { motion } from "motion/react";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useConsent } from "../lib/useConsent";

export function Location() {
  // Mapa Google zapisuje cookies i wysyła IP do Google, więc ładujemy ją
  // dopiero po zgodzie na cookies albo po świadomym kliknięciu użytkownika.
  const consent = useConsent();
  const [loadedOnDemand, setLoadedOnDemand] = useState(false);
  const showMap = consent === "accepted" || loadedOnDemand;

  return (
    <section id="kontakt" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#2d2d2d] mb-4 tracking-tight">
            Odwiedź <span className="text-[#ff6b35]">nas</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            Znajdź nas w sercu Kamieńca Wrocławskiego
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">Adres</h3>
                <address className="not-italic text-lg text-[#6b6b6b]">
                  Wrocławska 13
                  <br />
                  55-002 Kamieniec Wrocławski
                  <br />
                  Polska
                </address>
                <motion.a
                  href="https://maps.google.com/?q=Wrocławska+13,+55-002+Kamieniec+Wrocławski"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 mt-3 text-[#ff6b35] font-semibold hover:text-[#e63946] transition-colors"
                >
                  Zobacz na mapie
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2ecc71] flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">Telefon</h3>
                <motion.a
                  href="tel:504005398"
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-[#ff6b35] hover:text-[#e63946] transition-colors inline-block"
                >
                  504 005 398
                </motion.a>
                <p className="text-[#6b6b6b] mt-1">Zadzwoń i zamów!</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#e63946] flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">Godziny otwarcia</h3>
                <p className="text-lg text-[#6b6b6b]">Poniedziałek – Niedziela</p>
                <p className="text-3xl font-black text-[#ff6b35]">13:00 – 21:00</p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#ff6b35] to-[#e63946]"
          >
            {showMap ? (
              <>
                <iframe
                  src="https://www.google.com/maps?q=Wroc%C5%82awska%2013%2C%2055-002%20Kamieniec%20Wroc%C5%82awski&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa dojazdu — Pepperoni, Wrocławska 13, Kamieniec Wrocławski"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
              </>
            ) : (
              /* Zgoda niewyrażona → nie ładujemy Google Maps.
                 Kafelek ma dokładnie te same wymiary, więc layout się nie przesuwa. */
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-[#fffbf5] to-[#ffe8d6]">
                <div className="w-16 h-16 rounded-2xl bg-[#ff6b35]/10 flex items-center justify-center mb-5">
                  <MapPin className="w-8 h-8 text-[#ff6b35]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">
                  Mapa Google
                </h3>
                <p className="text-[#6b6b6b] max-w-sm mb-6">
                  Mapa ładuje się z serwerów Google, które mogą zapisać pliki
                  cookies. Pokażemy ją dopiero za Twoją zgodą.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setLoadedOnDemand(true)}
                    className="px-8 py-4 bg-[#ff6b35] text-white rounded-full font-semibold hover:bg-[#e63946] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
                  >
                    Pokaż mapę
                  </button>
                  <a
                    href="https://maps.google.com/?q=Wrocławska+13,+55-002+Kamieniec+Wrocławski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-[#2d2d2d] rounded-full font-semibold border-2 border-[#ff6b35] hover:bg-[#f5f5f5] transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
                  >
                    Wyznacz trasę
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#fffbf5] to-[#fff5e9] rounded-3xl p-8 shadow-lg">
            <p className="text-2xl font-bold text-[#2d2d2d] mb-4">
              Gotowy na najlepszą pizzę w okolicy?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:504005398"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#ff6b35] text-white rounded-full font-bold text-xl hover:bg-[#e63946] transition-colors shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                <span>Zadzwoń i zamów</span>
              </motion.a>
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#2d2d2d] rounded-full font-bold text-xl hover:bg-[#f5f5f5] transition-colors shadow-xl hover:shadow-2xl border-2 border-[#ff6b35]"
              >
                Zobacz menu
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
