import Link from "next/link";
import { HeroInfoVisual } from "../../components/hero-info-visual";
import { PlaceholderVisual } from "../../components/placeholder-visual";
import styles from "../site.module.css";
import { getTranslator } from "../../lib/i18n/server";

export default async function HomePage({ params }) {
  const { lng } = await params;
  const { t } = await getTranslator(lng);
  const treatmentHighlights = t("home.treatments.items", { returnObjects: true });
  const guideHighlights = t("home.guide.highlights", { returnObjects: true });
  const heroVisualContent =
    lng === "en"
      ? {
          titleLineOne: "Treat the",
          highlight: "Signs of Time",
          titleLineTwo: "with the Safest Methods",
          intro:
            "Using modern equipment and carefully selected methods, we aim for visible, refined results with safety and consistency from the very first steps.",
          points: [
            {
              icon: "precision",
              title: "Attention to detail:",
              description:
                "In aesthetic dermatology, precision matters. Every plan is shaped with care, balance, and respect for the smallest details.",
            },
            {
              icon: "technology",
              title: "Technology and safety:",
              description:
                "With up-to-date techniques and thoughtful medical practice, treatments are designed to feel dependable, modern, and reassuring.",
            },
            {
              icon: "hygiene",
              title: "Cleanliness and hygiene:",
              description:
                "A clean environment and careful equipment standards remain essential parts of every treatment experience in the clinic.",
            },
          ],
        }
      : {
          titleLineOne: "Αντιμετωπίστε τα",
          highlight: "Σημάδια του Χρόνου",
          titleLineTwo: "με τις Πιο Ασφαλείς Μεθόδους",
          intro:
            "Χρησιμοποιώντας σύγχρονα μηχανήματα και προσεκτικά επιλεγμένες μεθόδους, στοχεύουμε σε ορατά και εκλεπτυσμένα αποτελέσματα με ασφάλεια και συνέπεια από τα πρώτα κιόλας βήματα.",
          points: [
            {
              icon: "precision",
              title: "Προσοχή στη λεπτομέρεια:",
              description:
                "Στην αισθητική δερματολογία η ακρίβεια έχει σημασία. Κάθε πλάνο διαμορφώνεται με φροντίδα, ισορροπία και σεβασμό ακόμη και στη μικρότερη λεπτομέρεια.",
            },
            {
              icon: "technology",
              title: "Τεχνολογία και ασφάλεια:",
              description:
                "Με σύγχρονες τεχνικές και προσεγμένη ιατρική πρακτική, οι θεραπείες σχεδιάζονται ώστε να εμπνέουν σιγουριά, ασφάλεια και εμπιστοσύνη.",
            },
            {
              icon: "hygiene",
              title: "Καθαριότητα και υγιεινή:",
              description:
                "Το καθαρό περιβάλλον και τα υψηλά πρότυπα υγιεινής του εξοπλισμού αποτελούν βασικό μέρος κάθε εμπειρίας φροντίδας στο ιατρείο.",
            },
          ],
        };

  return (
    <div className={styles.homeEditorial}>
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>{t("home.hero.eyebrow")}</span>
              <h1>{t("home.hero.title")}</h1>
              <p className={styles.lead}>{t("home.hero.description")}</p>

              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href={`/${lng}/contact`}>
                  {t("nav.book")}
                </Link>
              </div>
            </div>

            <div className={styles.heroVisualWrap}>
              <div className={styles.heroGlow} />
              <div className={styles.heroLines} />
              <HeroInfoVisual content={heroVisualContent} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <PlaceholderVisual
              label={t("placeholders.clinic.label")}
              detail={t("placeholders.clinic.detail")}
            />

            <div className={styles.copyBlock}>
              <span className={styles.sectionKicker}>{t("home.about.kicker")}</span>
              <h2>{t("home.about.title")}</h2>
              <p>{t("home.about.description")}</p>

              <div className={styles.highlightGrid}>
                <span>{t("home.about.highlights.one")}</span>
                <span>{t("home.about.highlights.two")}</span>
                <span>{t("home.about.highlights.three")}</span>
                <span>{t("home.about.highlights.four")}</span>
              </div>

              <Link className={styles.textLink} href={`/${lng}/about`}>
                {t("home.about.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{t("home.treatments.kicker")}</span>
            <h2>{t("home.treatments.title")}</h2>
            <p>{t("home.treatments.description")}</p>
          </div>

          <div className={styles.cardGrid}>
            {treatmentHighlights.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <div className={styles.cardIcon} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{t("home.guide.kicker")}</span>
            <h2>{t("home.guide.title")}</h2>
            <p>{t("home.guide.description")}</p>
          </div>

          <div className={styles.concernGrid}>
            {guideHighlights.map((item) => (
              <span key={item} className={styles.concernPill}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.centerAction}>
            <Link className={styles.secondaryButton} href={`/${lng}/knowledge-hub`}>
              {t("home.guide.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <PlaceholderVisual
              label={t("placeholders.results.label")}
              detail={t("placeholders.results.detail")}
            />

            <div className={styles.copyBlock}>
              <span className={styles.sectionKicker}>{t("home.results.kicker")}</span>
              <h2>{t("home.results.title")}</h2>
              <p>{t("home.results.description")}</p>
              <Link className={styles.textLink} href={`/${lng}/results`}>
                {t("home.results.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
