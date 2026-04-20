"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";

const STORAGE_KEY = "dk_cookie_consent";
const EXPIRY_DAYS = 150;

function hasValidConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { expiry } = JSON.parse(raw);
    return Date.now() < expiry;
  } catch {
    return false;
  }
}

function saveConsent(value) {
  const expiry = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, expiry }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!hasValidConsent()) setVisible(true);
  }, []);

  const handleAccept = () => { saveConsent("accepted"); setVisible(false); };
  const handleReject = () => { saveConsent("rejected"); setVisible(false); };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-200 bg-surface border-t border-border"
    >
      <div className="max-w-300 mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="flex-1 text-sm text-muted leading-relaxed">
          {t("cookie_text")}{" "}
          <a
            href="#"
            className="text-foreground underline underline-offset-2 hover:text-accent transition-colors duration-200"
          >
            {t("cookie_manage")}
          </a>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReject}
            className="px-5 py-2 text-xs font-semibold tracking-[0.08em] uppercase rounded-sm border border-border text-muted hover:border-foreground hover:text-foreground transition-all duration-200 active:scale-[0.97]"
          >
            {t("cookie_reject")}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-semibold tracking-[0.08em] uppercase rounded-sm bg-accent text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.97]"
          >
            {t("cookie_accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
