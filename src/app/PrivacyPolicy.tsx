import { motion } from "motion/react";
import { ArrowLeft, Phone, ShieldCheck, RotateCcw } from "lucide-react";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { clearConsent } from "./lib/consent";
import { useConsent } from "./lib/useConsent";
import logo from "../assets/logo-header.png";

/* ─────────────────────────────────────────────────────────────
   UWAGA — DO UZUPEŁNIENIA PRZEZ WŁAŚCICIELA

   Poniższe pola są celowo puste. Nie wymyślono żadnych danych.
   Wystarczy wpisać je tutaj — pojawią się w treści polityki.
   ───────────────────────────────────────────────────────────── */
const ADMIN = {
  /** np. "Pepperoni Jan Kowalski" albo "Pepperoni Sp. z o.o." */
  nazwa: "[NAZWA FIRMY — DO UZUPEŁNIENIA]",
  /** np. "899-123-45-67" */
  nip: "[NIP — DO UZUPEŁNIENIA]",
  /** Adres siedziby, jeśli inny niż adres lokalu */
  adresSiedziby: "[ADRES SIEDZIBY — DO UZUPEŁNIENIA]",
  /** np. "kontakt@pepperoni-kamieniec.pl" */
  email: "[E-MAIL — DO UZUPEŁNIENIA]",
} as const;

const LOKAL = {
  adres: "Wrocławska 13, 55-002 Kamieniec Wrocławski",
  telefon: "504 005 398",
  telefonHref: "tel:504005398",
} as const;

const AKTUALIZACJA = "12 lipca 2026";

/* Prosty, powtarzalny blok sekcji — spójna typografia z resztą serwisu */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-2xl sm:text-3xl font-black text-[#2d2d2d] mb-4 tracking-tight">
        {title}
      </h2>
      <div className="space-y-4 text-[#6b6b6b] leading-relaxed">{children}</div>
    </motion.section>
  );
}

export default function PrivacyPolicy() {
  const consent = useConsent();

  const withdraw = () => {
    clearConsent();
    // Skryptów/ramek już wczytanych w tej karcie nie da się cofnąć —
    // przeładowanie gwarantuje czysty stan bez usług Google.
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#fffbf5] flex flex-col">
      {/* Nagłówek */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            <a
              href="/"
              className="flex items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
              aria-label="Pepperoni — strona główna"
            >
              <img
                src={logo}
                alt="Pepperoni — pizzeria w Kamieńcu Wrocławskim"
                width={500}
                height={144}
                className="h-9 md:h-11 w-auto"
              />
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ff6b35] text-white font-semibold text-sm hover:bg-[#e63946] transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Powrót na stronę główną</span>
              <span className="sm:hidden">Powrót</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          {/* Tytuł */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white rounded-full text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Twoja prywatność
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2d2d2d] tracking-tight leading-[0.95] mb-5">
              Polityka <span className="text-[#ff6b35]">prywatności</span>
            </h1>
            <p className="text-lg text-[#6b6b6b] max-w-2xl">
              Krótko i bez prawniczego żargonu: nasza strona to zwykła wizytówka
              pizzerii. Nie zakładasz konta, nie wypełniasz formularzy i nie
              płacisz online — więc praktycznie nie zbieramy o Tobie żadnych
              danych.
            </p>
            <p className="text-sm text-[#6b6b6b]/70 mt-5">
              Ostatnia aktualizacja: {AKTUALIZACJA}
            </p>
          </motion.div>

          {/* Treść */}
          <Section title="1. Kto odpowiada za Twoje dane">
            <p>
              Administratorem danych osobowych jest {ADMIN.nazwa}, NIP{" "}
              {ADMIN.nip}, {ADMIN.adresSiedziby}, prowadząca pizzerię Pepperoni
              pod adresem {LOKAL.adres}.
            </p>
            <p>
              W sprawach dotyczących danych osobowych możesz skontaktować się z
              nami telefonicznie pod numerem{" "}
              <a
                href={LOKAL.telefonHref}
                className="text-[#ff6b35] font-semibold hover:text-[#e63946] transition-colors underline underline-offset-4"
              >
                {LOKAL.telefon}
              </a>{" "}
              lub e-mailem: {ADMIN.email}.
            </p>
          </Section>

          <Section title="2. Jakich danych NIE zbieramy">
            <p>
              Chcemy, żeby to było jasne. Na tej stronie:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#ff6b35]">
              <li>nie ma formularza kontaktowego,</li>
              <li>nie ma rejestracji ani kont użytkowników,</li>
              <li>nie ma zamówień online ani płatności,</li>
              <li>nie ma newslettera,</li>
              <li>nie profilujemy Cię i nie sprzedajemy nikomu Twoich danych.</li>
            </ul>
            <p>
              Strona służy wyłącznie do pokazania menu, zdjęć, godzin otwarcia
              i numeru telefonu.
            </p>
          </Section>

          <Section title="3. Kontakt telefoniczny">
            <p>
              Jedyny sposób kontaktu z nami to telefon. Kiedy do nas dzwonisz,
              siłą rzeczy poznajemy Twój numer telefonu, a przy zamówieniu na
              wynos — imię, a czasem adres dostawy.
            </p>
            <p>
              Używamy tych informacji <strong>tylko po to, żeby zrealizować
              Twoje zamówienie</strong> (podstawa prawna: art. 6 ust. 1 lit. b
              RODO — wykonanie umowy). Nie zapisujemy ich w żadnej bazie na tej
              stronie i nie wykorzystujemy do marketingu.
            </p>
          </Section>

          <Section title="4. Pliki cookies i podobne technologie">
            <p>
              <strong className="text-[#2d2d2d]">Nasze własne:</strong> zapisujemy
              w pamięci Twojej przeglądarki (localStorage) jedną informację —
              Twoją decyzję z banera cookies. Dzięki temu nie pytamy Cię o to
              przy każdej wizycie. Nie jest to nawet plik cookie i nie jest
              nikomu wysyłane.
            </p>
            <p>
              <strong className="text-[#2d2d2d]">Zewnętrzne:</strong> pliki
              cookies mogą zapisać usługi Google opisane w punkcie 5 — ale
              dopiero po Twojej zgodzie.
            </p>
          </Section>

          <Section title="5. Usługi zewnętrzne (Google)">
            <p>
              Korzystamy z dwóch usług Google. Uczciwie mówimy, co robią:
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-[#ff6b35]">
              <li>
                <strong className="text-[#2d2d2d]">Mapa Google (Google Maps)</strong>{" "}
                — pokazuje, jak do nas trafić. Ładuje się z serwerów Google, więc
                Google poznaje Twój adres IP i może zapisać cookies.{" "}
                <strong>
                  Dlatego mapy nie wczytujemy automatycznie
                </strong>{" "}
                — pojawia się dopiero, gdy zaakceptujesz cookies albo klikniesz
                „Pokaż mapę" w sekcji Kontakt.
              </li>
              <li>
                <strong className="text-[#2d2d2d]">Google Fonts</strong> — kroje
                pisma, którymi wyświetlana jest strona. Wczytują się z serwerów
                Google, przez co Google może poznać Twój adres IP. Są niezbędne
                do prawidłowego wyświetlenia strony (podstawa prawna: art. 6 ust.
                1 lit. f RODO — nasz uzasadniony interes, czyli poprawne działanie
                witryny).
              </li>
            </ul>
            <p>
              Google może przetwarzać te dane także poza Europejskim Obszarem
              Gospodarczym. Szczegóły znajdziesz w{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6b35] font-semibold hover:text-[#e63946] transition-colors underline underline-offset-4"
              >
                polityce prywatności Google
              </a>
              .
            </p>
            <p className="text-sm bg-[#fff5e9] border-l-4 border-[#ff6b35] rounded-r-xl p-4">
              <strong className="text-[#2d2d2d]">Statystyki odwiedzin:</strong>{" "}
              obecnie <strong>nie korzystamy</strong> z Google Analytics ani
              żadnego innego narzędzia analitycznego. Jeśli kiedyś je włączymy,
              uruchomi się ono wyłącznie po Twojej wyraźnej zgodzie, a ten
              dokument zaktualizujemy.
            </p>
          </Section>

          <Section title="6. Twoje prawa">
            <p>Zgodnie z RODO masz prawo do:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#ff6b35]">
              <li>dostępu do swoich danych i otrzymania ich kopii,</li>
              <li>sprostowania danych, jeśli są nieprawidłowe,</li>
              <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>sprzeciwu wobec przetwarzania,</li>
              <li>wycofania zgody w dowolnym momencie,</li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (ul. Stawki 2, 00-193 Warszawa), jeśli uznasz, że przetwarzamy
                Twoje dane niezgodnie z prawem.
              </li>
            </ul>
            <p>
              Żeby skorzystać z tych praw, zadzwoń do nas pod numer{" "}
              <a
                href={LOKAL.telefonHref}
                className="text-[#ff6b35] font-semibold hover:text-[#e63946] transition-colors underline underline-offset-4"
              >
                {LOKAL.telefon}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Zmiana lub wycofanie zgody">
            <p>
              Wycofanie zgody jest tak samo łatwe jak jej udzielenie. Kliknij
              przycisk poniżej — usuniemy zapisaną decyzję, a baner pojawi się
              ponownie. Mapa Google przestanie się wczytywać automatycznie.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={withdraw}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2d2d2d] text-white font-semibold hover:bg-[#1a1a1a] transition-colors shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d] focus-visible:ring-offset-2"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                Zmień decyzję o plikach cookies
              </button>

              <p className="text-sm text-[#6b6b6b]/80 mt-3">
                Twoja obecna decyzja:{" "}
                <strong className="text-[#2d2d2d]">
                  {consent === "accepted"
                    ? "zgoda udzielona"
                    : consent === "rejected"
                      ? "zgoda odrzucona"
                      : "jeszcze nie podjęto decyzji"}
                </strong>
              </p>
            </div>
          </Section>

          <Section title="8. Bezpieczeństwo i zmiany polityki">
            <p>
              Strona działa przez szyfrowane połączenie HTTPS. Nie prowadzimy
              żadnej bazy danych użytkowników, więc nie ma tu czego wykraść.
            </p>
            <p>
              Jeśli zmienimy sposób działania strony (np. dodamy zamówienia
              online albo statystyki), zaktualizujemy ten dokument i — jeśli
              będzie trzeba — poprosimy Cię o zgodę na nowo.
            </p>
          </Section>

          {/* Kontakt CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#fffbf5] to-[#fff5e9] rounded-3xl p-8 shadow-lg text-center"
          >
            <p className="text-xl font-bold text-[#2d2d2d] mb-2">
              Masz pytanie o swoje dane?
            </p>
            <p className="text-[#6b6b6b] mb-6">
              Zadzwoń — odpowiemy po ludzku, bez formularzy.
            </p>
            <a
              href={LOKAL.telefonHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b35] text-white rounded-full font-bold text-lg hover:bg-[#e63946] transition-colors shadow-xl hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {LOKAL.telefon}
            </a>
          </motion.div>
        </div>
      </main>

      {/* Kotwice muszą wrócić na stronę główną */}
      <Footer linkBase="/" />
      <CookieBanner />
    </div>
  );
}
