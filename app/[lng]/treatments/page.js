import { PlaceholderVisual } from "../../../components/placeholder-visual";
import styles from "../../site.module.css";
import { getTranslator } from "../../../lib/i18n/server";

export default async function TreatmentsPage({ params }) {
  const { lng } = await params;
  const { t } = await getTranslator(lng);
  const categories = t("treatments.categories", { returnObjects: true });

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{t("treatments.hero.kicker")}</span>
          <h1 className={styles.pageTitle}>{t("treatments.hero.title")}</h1>
          <p className={styles.pageLead}>{t("treatments.hero.description")}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>
            {categories.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <div className={styles.cardIcon} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <div className={styles.copyBlock}>
              <span className={styles.sectionKicker}>{t("treatments.process.kicker")}</span>
              <h2>{t("treatments.process.title")}</h2>
              <p>{t("treatments.process.description")}</p>

              <div className={styles.highlightGrid}>
                <span>{t("treatments.process.steps.one")}</span>
                <span>{t("treatments.process.steps.two")}</span>
                <span>{t("treatments.process.steps.three")}</span>
                <span>{t("treatments.process.steps.four")}</span>
              </div>
            </div>

            <PlaceholderVisual
              label={t("placeholders.treatment.label")}
              detail={t("placeholders.treatment.detail")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
