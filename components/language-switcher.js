"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import styles from "../app/site.module.css";

export function LanguageSwitcher({ currentLanguage, labels }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const nextLanguage = event.target.value;
    const segments = pathname.split("/");
    segments[1] = nextLanguage;
    const href = segments.join("/") || `/${nextLanguage}`;

    startTransition(() => {
      router.push(href);
    });
  }

  return (
    <div className={styles.languageSwitcher}>
      <select
        id="language-switcher"
        className={styles.languageSelect}
        aria-label={labels.ariaLabel}
        value={currentLanguage}
        onChange={handleChange}
        disabled={isPending}
      >
        <option value="el">{labels.el}</option>
        <option value="en">{labels.en}</option>
      </select>
    </div>
  );
}
