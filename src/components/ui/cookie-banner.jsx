"use client";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (!hasValidConsent()) setVisible(true);
  }, []);

  const handleAccept = () => {
    saveConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    saveConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[200] bg-[#0a0a0a] border-t border-[#2a2a2a]"
    >
      <div className="max-w-300 mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="flex-1 text-sm text-[#888888] leading-relaxed">
          We use cookies for analytics and performance.{" "}
          <a
            href="#"
            className="text-[#f0f0f0] underline underline-offset-2 hover:text-[#e63f00] transition-colors duration-200"
          >
            Manage preferences
          </a>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReject}
            className="px-5 py-2 text-xs font-semibold tracking-[0.08em] uppercase rounded-sm border border-[#2a2a2a] text-[#888888] hover:border-[#f0f0f0] hover:text-[#f0f0f0] transition-all duration-200 active:scale-[0.97]"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-semibold tracking-[0.08em] uppercase rounded-sm bg-[#e63f00] text-white hover:bg-[#ff4d00] transition-all duration-200 active:scale-[0.97]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
