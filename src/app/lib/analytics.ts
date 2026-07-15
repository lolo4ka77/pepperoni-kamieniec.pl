/**
 * Google Analytics 4 — PRZYGOTOWANIE, ale NIE PODŁĄCZONE.
 *
 * =======================================================================
 *  JAK WŁĄCZYĆ GA4 W PRZYSZŁOŚCI — WYSTARCZY JEDNA ZMIANA:
 *  Wpisz Measurement ID poniżej, np. GA_MEASUREMENT_ID = "G-XXXXXXXXXX".
 *  To wszystko. Nic więcej nie trzeba zmieniać.
 * =======================================================================
 *
 * Dopóki ID jest pustym stringiem:
 *   - nie ładuje się ŻADEN skrypt analityczny,
 *   - nie leci żadne żądanie do Google,
 *   - nie powstaje żaden cookie.
 *
 * Gdy ID zostanie ustawione, skrypt uruchomi się WYŁĄCZNIE po tym, jak
 * użytkownik kliknie „Akceptuję" w banerze cookies (consent-first).
 * Odrzucenie zgody = analityka się nie uruchamia.
 */

export const GA_MEASUREMENT_ID = "";

let initialized = false;

/**
 * Ładuje GA4 — wywoływane tylko po udzieleniu zgody (patrz CookieBanner).
 * Bezpieczne do wielokrotnego wywołania: zainicjuje się co najwyżej raz.
 */
export function initAnalytics(): void {
  // Brak ID → GA4 nie jest jeszcze podłączone. Nic nie robimy.
  if (!GA_MEASUREMENT_ID) return;
  if (initialized || typeof window === "undefined") return;
  if (document.getElementById("ga4-script")) return;
  initialized = true;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer.push(args);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, {
    // Nie zapisujemy pełnego IP — mniej danych osobowych, zgodnie z RODO.
    anonymize_ip: true,
  });
}
