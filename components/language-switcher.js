"use client";

import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import styles from "../app/site.module.css";

function getLanguageLabel(language) {
  return language === "el" ? "ΕΛ" : "EN";
}

export function LanguageSwitcher({ currentLanguage, labels }) {
  const router = useRouter();
  const pathname = usePathname();
  const switcherRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    function handlePointerDown(event) {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function changeLanguage(nextLanguage) {
    if (nextLanguage === currentLanguage) {
      setIsOpen(false);
      return;
    }

    const segments = pathname.split("/");
    segments[1] = nextLanguage;
    const href = segments.join("/") || `/${nextLanguage}`;

    setIsOpen(false);
    startTransition(() => {
      router.push(href);
    });
  }

  return (
    <div className={styles.languageSwitcher} ref={switcherRef}>
      <button
        type="button"
        className={styles.languageDropdownButton}
        aria-label={labels.ariaLabel}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        disabled={isPending}
      >
        <span>{getLanguageLabel(currentLanguage)}</span>
        <ChevronDown className={styles.languageDropdownIcon} aria-hidden="true" />
      </button>
      {isOpen ? (
        <div className={styles.languageDropdownMenu} role="menu" aria-label={labels.ariaLabel}>
          {["el", "en"].map((language) => (
            <button
              key={language}
              type="button"
              className={`${styles.languageDropdownOption} ${
                currentLanguage === language ? styles.languageDropdownOptionActive : ""
              }`}
              role="menuitem"
              onClick={() => changeLanguage(language)}
            >
              {getLanguageLabel(language)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
