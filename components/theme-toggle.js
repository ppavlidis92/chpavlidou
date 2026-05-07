"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import styles from "../app/site.module.css";

const STORAGE_KEY = "site-theme";
const THEME_CHANGE_EVENT = "site-theme-change";

function getThemeSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

function getServerThemeSnapshot() {
  return "dark";
}

function subscribeTheme(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

export function ThemeToggle({ language }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  const label =
    language === "el"
      ? theme === "dark"
        ? "Εναλλαγή σε φωτεινό θέμα"
        : "Εναλλαγή σε σκούρο θέμα"
      : theme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme";

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={handleToggle}
      aria-label={label}
      title={label}
    >
      <span
        className={`${styles.themeToggleIcon} ${theme === "light" ? styles.themeToggleIconActive : ""}`}
        aria-hidden="true"
      >
        <SunMedium className={styles.themeToggleGlyph} />
      </span>
      <span
        className={`${styles.themeToggleIcon} ${theme === "dark" ? styles.themeToggleIconActive : ""}`}
        aria-hidden="true"
      >
        <Moon className={styles.themeToggleGlyph} />
      </span>
    </button>
  );
}
