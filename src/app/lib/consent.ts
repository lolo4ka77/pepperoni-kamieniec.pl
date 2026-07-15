/**
 * Zgoda na pliki cookies / usługi zewnętrzne.
 *
 * Strona Pepperoni nie ma formularzy, kont ani zamówień online, więc nie
 * ustawiamy żadnych własnych cookies marketingowych. Zgoda dotyczy wyłącznie
 * usług zewnętrznych, które mogą zapisywać cookies i przetwarzać adres IP:
 *   - mapa Google Maps (sekcja Kontakt),
 *   - Google Analytics 4 (obecnie NIE podłączone — patrz lib/analytics.ts).
 *
 * Decyzja jest zapamiętywana w localStorage, więc baner nie pojawia się ponownie.
 */

export type ConsentStatus = "accepted" | "rejected";

/** Wersja zgody — podbij, gdy zmieni się zakres przetwarzanych danych.
 *  Wtedy baner pojawi się ponownie i użytkownik podejmie decyzję na nowo. */
const CONSENT_VERSION = 1;
const STORAGE_KEY = "pepperoni_cookie_consent";

interface StoredConsent {
  status: ConsentStatus;
  version: number;
  /** ISO 8601 — dowód, kiedy zgoda została udzielona (wymóg RODO: rozliczalność) */
  timestamp: string;
}

/** Zwraca zapisaną decyzję lub null, jeśli użytkownik jeszcze nie zdecydował. */
export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    // Zgoda z nieaktualnej wersji = pytamy ponownie.
    if (parsed.version !== CONSENT_VERSION) return null;
    if (parsed.status !== "accepted" && parsed.status !== "rejected") return null;
    return parsed.status;
  } catch {
    // Prywatne okno / zablokowany storage — traktujemy jak brak zgody.
    return null;
  }
}

/** Zapisuje decyzję i powiadamia wszystkie nasłuchujące komponenty. */
export function setConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;
  try {
    const payload: StoredConsent = {
      status,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Jeśli storage jest niedostępny, i tak informujemy subskrybentów,
    // żeby zgoda działała przynajmniej w obrębie bieżącej sesji.
  }
  notify(status);
}

/**
 * Wycofuje zgodę — baner pojawi się ponownie, a mapa Google przestanie się
 * ładować. RODO wymaga, by wycofanie zgody było równie łatwe jak jej udzielenie.
 * Uwaga: skryptów już załadowanych w tej karcie nie da się „odładować",
 * dlatego po wycofaniu zgody odświeżamy stronę (patrz PrivacyPolicy).
 */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* storage niedostępny — ignorujemy */
  }
  notify(null);
}

/* ---------- prosty pub/sub, bez zależności zewnętrznych ---------- */

type Listener = (status: ConsentStatus | null) => void;
const listeners = new Set<Listener>();

function notify(status: ConsentStatus | null) {
  listeners.forEach((l) => l(status));
}

/** Subskrypcja zmian zgody. Zwraca funkcję czyszczącą. */
export function onConsentChange(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
