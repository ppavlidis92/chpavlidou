"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoFull from "../app/logo_full.png";
import { serviceCategories } from "../lib/services";
import styles from "../app/site.module.css";
import { LanguageSwitcher } from "./language-switcher";

function InstagramLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 12 14.65 2.65 2.65 0 0 0 12 9.35Zm4.9-2.85a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
      />
    </svg>
  );
}

function FacebookLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.78-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z"
      />
    </svg>
  );
}

export function SiteShell({ children, language, labels }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: `/${language}`, label: labels.nav.home },
    { href: `/${language}/about`, label: labels.nav.about },
    { href: `/${language}/services`, label: labels.nav.services, dropdown: serviceCategories },
    { href: `/${language}/news`, label: labels.nav.news },
    { href: `/${language}/knowledge-hub`, label: labels.nav.knowledgeHub },
    { href: `/${language}/contact`, label: labels.nav.contact },
  ];
  const footerContact =
    language === "en"
      ? {
          phone: "+30 22940 22580",
          email: "chpavlidu@gmail.com",
          address: "Davaki Pindou 11 & Kyprion Agoniston, Rafina 190 09, Greece",
          mapLabel: "Open location in Google Maps",
        }
      : {
          phone: "+30 22940 22580",
          email: "chpavlidu@gmail.com",
          address: "Κυπρίων Αγωνιστών & Δαβάκη Πίνδου 11, Ραφήνα 190 09, Ελλάδα",
          mapLabel: "Άνοιγμα τοποθεσίας στο Google Maps",
        };
  const googleMapsHref =
    "https://www.google.com/maps?cid=16686273157739745046";

  return (
    <div className={styles.pageShell}>
      {/* Sticky Main Menu as header */}
      <header
        className={`${styles.siteHeader} ${isScrolled ? styles.siteHeaderScrolled : ""} ${
          isMobileMenuOpen ? styles.siteHeaderMobileOpen : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link
              className={styles.brand}
              href={`/${language}`}
              aria-label="Derma Medicare home"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src={logoFull}
                alt="Derma Medicare logo"
                priority
                className={`${styles.brandLogo} ${isScrolled ? styles.brandLogoScrolled : ""}`}
              />
            </Link>
            <button
              type="button"
              className={styles.mobileMenuButton}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={styles.siteNav} aria-label={labels.nav.ariaLabel} onClick={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.href} className={styles.navDropdown}>
                    <Link
                      href={item.href}
                      className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? styles.siteNavActive : undefined}
                    >
                      {item.label}
                    </Link>
                    <div className={styles.navDropdownMenu}>
                      {item.dropdown.map((category) => (
                        <Link key={category.slug} href={`/${language}/services/${category.slug}`}>
                          {category.menuLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={pathname === item.href ? styles.siteNavActive : undefined}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className={styles.headerActions}>
              <Link className={styles.headerCta} href={`/${language}/news`} onClick={() => setIsMobileMenuOpen(false)}>
                {labels.nav.news}
              </Link>
              <div className={styles.headerSocialLinks} aria-label="Social media">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramLogo className={styles.headerSocialIcon} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookLogo className={styles.headerSocialIcon} />
                </a>
              </div>
              <LanguageSwitcher
                currentLanguage={language}
                labels={{
                  ariaLabel: labels.language.ariaLabel,
                  el: labels.language.el,
                  en: labels.language.en,
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.siteMain}>{children}</main>
      <footer className={styles.siteFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerLogoCol}>
              <Image src={logoFull} alt="Derma Medicare logo" className={styles.footerLogo} />
            </div>
            <div>
              <h3>{labels.footer.contact}</h3>
              <div className={styles.footerLinks}>
                <a href="tel:+302294022580">{footerContact.phone}</a>
                <a href="mailto:chpavlidu@gmail.com">{footerContact.email}</a>
                <a href={googleMapsHref} target="_blank" rel="noreferrer">
                  {footerContact.address}
                </a>
              </div>
            </div>
            <div className={styles.footerMapCol}>
              <iframe
                title={footerContact.mapLabel}
                src="https://www.google.com/maps?cid=16686273157739745046&hl=en-GB&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.footerMapFrame}
              />
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
