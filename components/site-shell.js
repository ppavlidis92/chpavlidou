"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoFull from "../app/logo_full.png";
import styles from "../app/site.module.css";
import { LanguageSwitcher } from "./language-switcher";

export function SiteShell({ children, language, labels }) {
  const pathname = usePathname();
  const navItems = [
    { href: `/${language}`, label: labels.nav.home },
    { href: `/${language}/about`, label: labels.nav.about },
    { href: `/${language}/treatments`, label: labels.nav.treatments },
    { href: `/${language}/knowledge-hub`, label: labels.nav.knowledgeHub },
    { href: `/${language}/results`, label: labels.nav.results },
    { href: `/${language}/contact`, label: labels.nav.contact },
  ];
  const footerContact =
    language === "en"
      ? {
          phone: "+30 22940 22580",
          email: "chpavlidu@gmail.com",
          address: "Kyprion Agoniston & Davaki Pindou 11, Rafina 190 09, Greece",
        }
      : {
          phone: "+30 22940 22580",
          email: "chpavlidu@gmail.com",
          address: "Κυπρίων Αγωνιστών & Δαβάκη Πίνδου 11, Ραφήνα 190 09, Ελλάδα",
        };

  return (
    <div className={styles.pageShell}>
      <header className={styles.siteHeader}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href={`/${language}`} aria-label="Derma Medicare home">
              <Image
                src={logoFull}
                alt="Derma Medicare logo"
                priority
                className={styles.brandLogo}
              />
            </Link>

            <nav className={styles.siteNav} aria-label={labels.nav.ariaLabel}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? styles.siteNavActive : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className={styles.headerActions}>
              <LanguageSwitcher
                currentLanguage={language}
                labels={{
                  ariaLabel: labels.language.ariaLabel,
                  el: labels.language.el,
                  en: labels.language.en,
                }}
              />

              <Link className={styles.headerCta} href={`/${language}/contact`}>
                {labels.nav.book}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.siteFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <Image src={logoFull} alt="Derma Medicare logo" className={styles.footerLogo} />
              <p>{labels.footer.description}</p>
            </div>

            <div>
              <h3>{labels.footer.quickLinks}</h3>
              <div className={styles.footerLinks}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3>{labels.footer.contact}</h3>
              <div className={styles.footerLinks}>
                <a href="tel:+302294022580">{footerContact.phone}</a>
                <a href="mailto:chpavlidu@gmail.com">{footerContact.email}</a>
                <span>{footerContact.address}</span>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>{labels.footer.copyright}</span>
            <div className={styles.footerMeta}>
              <Link href={`/${language}/contact`}>{labels.footer.privacy}</Link>
              <Link href={`/${language}/contact`}>{labels.footer.terms}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
