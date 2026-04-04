import { createInstance } from "i18next";
import { resources } from "./translations";
import { defaultLanguage, languages } from "./settings";

export async function getTranslator(language) {
  const safeLanguage = languages.includes(language) ? language : defaultLanguage;
  const i18n = createInstance();

  await i18n.init({
    resources,
    lng: safeLanguage,
    fallbackLng: defaultLanguage,
    supportedLngs: languages,
    defaultNS: "translation",
    ns: ["translation"],
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

  return {
    t: i18n.getFixedT(safeLanguage, "translation"),
  };
}
