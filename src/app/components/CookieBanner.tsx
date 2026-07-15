import { motion, AnimatePresence } from "motion/react";
import { Cookie } from "lucide-react";
import { setConsent } from "../lib/consent";
import { useConsent } from "../lib/useConsent";
import { initAnalytics } from "../lib/analytics";

const PRIVACY_URL = "/polityka-prywatnosci/";

export function CookieBanner() {
  const consent = useConsent();

  // `undefined` = jeszcze nie odczytano z localStorage → nic nie renderujemy,
  // żeby baner nie mignął osobie, która już podjęła decyzję.
  const show = consent === null;

  const accept = () => {
    setConsent("accepted");
    // GA4 wystartuje tylko wtedy, gdy zostanie kiedyś podane Measurement ID.
    initAnalytics();
  };

  const reject = () => setConsent("rejected");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#2d2d2d]/10 bg-white/85 backdrop-blur-xl shadow-2xl p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              {/* Ikona */}
              <div
                className="hidden sm:flex w-12 h-12 shrink-0 rounded-2xl bg-[#ff6b35]/10 items-center justify-center"
                aria-hidden="true"
              >
                <Cookie className="w-6 h-6 text-[#ff6b35]" />
              </div>

              {/* Treść */}
              <div className="flex-1 min-w-0">
                <h2
                  id="cookie-title"
                  className="text-lg font-bold text-[#2d2d2d] mb-1.5"
                >
                  Szanujemy Twoją prywatność
                </h2>
                <p
                  id="cookie-desc"
                  className="text-[#6b6b6b] text-sm leading-relaxed"
                >
                  Ta strona nie zbiera Twoich danych i nie wymaga rejestracji.
                  Prosimy o zgodę wyłącznie na usługi Google (mapa dojazdu oraz
                  statystyki odwiedzin), które mogą zapisać pliki cookies. Bez
                  zgody strona działa normalnie — mapę pokażemy dopiero na Twoje
                  kliknięcie.
                </p>

                {/* Przyciski */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={accept}
                    className="px-6 py-3 rounded-full bg-[#ff6b35] text-white font-semibold text-sm hover:bg-[#e63946] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
                  >
                    Akceptuję
                  </button>

                  <button
                    type="button"
                    onClick={reject}
                    className="px-6 py-3 rounded-full border-2 border-[#2d2d2d]/15 text-[#2d2d2d] font-semibold text-sm hover:border-[#2d2d2d]/40 hover:bg-[#2d2d2d]/[0.03] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] focus-visible:ring-offset-2"
                  >
                    Odrzuć
                  </button>

                  <a
                    href={PRIVACY_URL}
                    className="sm:ml-auto text-sm font-semibold text-[#6b6b6b] hover:text-[#ff6b35] underline underline-offset-4 decoration-[#6b6b6b]/30 hover:decoration-[#ff6b35] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 text-center sm:text-left py-1"
                  >
                    Polityka prywatności
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
