import { notFound } from "next/navigation";
import { SiteShell } from "../../components/site-shell";
import { getTranslator } from "../../lib/i18n/server";
import { languages } from "../../lib/i18n/settings";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function LocaleLayout({ children, params }) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getTranslator(lng);
  const labels = {
    nav: {
      ariaLabel: t("nav.ariaLabel"),
      home: t("nav.home"),
      about: t("nav.about"),
      services: t("nav.services"),
      news: t("nav.news"),
      knowledgeHub: t("nav.knowledgeHub"),
      contact: t("nav.contact"),
      book: t("nav.book"),
    },
    language: {
      ariaLabel: t("language.ariaLabel"),
      el: t("language.el"),
      en: t("language.en"),
    },
    footer: {
      description: t("footer.description"),
      quickLinks: t("footer.quickLinks"),
      contact: t("footer.contact"),
      copyright: t("footer.copyright"),
      privacy: t("footer.privacy"),
      terms: t("footer.terms"),
    },
  };

  return (
    <SiteShell language={lng} labels={labels}>
      {children}
    </SiteShell>
  );
}
