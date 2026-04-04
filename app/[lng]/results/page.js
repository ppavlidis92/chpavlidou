import { PlaceholderVisual } from "../../../components/placeholder-visual";
import styles from "../../site.module.css";
import { getTranslator } from "../../../lib/i18n/server";

export default async function ResultsPage({ params }) {
  const { lng } = await params;
  const { t } = await getTranslator(lng);
  const examples = t("results.examples", { returnObjects: true });

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{t("results.hero.kicker")}</span>
          <h1 className={styles.pageTitle}>{t("results.hero.title")}</h1>
          <p className={styles.pageLead}>{t("results.hero.description")}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.resultGrid}>
            {examples.map((item) => (
              <article key={item.title} className={styles.resultCard}>
                <PlaceholderVisual
                  label={t("placeholders.results.label")}
                  detail={t("placeholders.results.detail")}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
