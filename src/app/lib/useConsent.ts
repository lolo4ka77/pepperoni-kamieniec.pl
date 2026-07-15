import { useEffect, useState } from "react";
import { getConsent, onConsentChange, type ConsentStatus } from "./consent";

/**
 * Hook zwracający aktualny stan zgody.
 *
 * `undefined` = jeszcze nie odczytano (pierwszy render, przed hydracją) —
 * dzięki temu baner nie „mignie” użytkownikowi, który już podjął decyzję.
 * `null`      = użytkownik jeszcze nie zdecydował → pokazujemy baner.
 */
export function useConsent(): ConsentStatus | null | undefined {
  const [status, setStatus] = useState<ConsentStatus | null | undefined>(undefined);

  useEffect(() => {
    setStatus(getConsent());
    return onConsentChange(setStatus);
  }, []);

  return status;
}
