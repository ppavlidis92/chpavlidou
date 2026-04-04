import { PlaceholderVisual } from "../../../components/placeholder-visual";
import styles from "../../site.module.css";
import { getTranslator } from "../../../lib/i18n/server";

export default async function AboutPage({ params }) {
  const { lng } = await params;
  const { t } = await getTranslator(lng);
  const values = t("about.values.items", { returnObjects: true });

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{t("about.hero.kicker")}</span>
          <h1 className={styles.pageTitle}>{t("about.hero.title")}</h1>
          <p className={styles.pageLead}>{t("about.hero.description")}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <PlaceholderVisual
              label={t("placeholders.specialist.label")}
              detail={t("placeholders.specialist.detail")}
            />

            <div className={styles.copyBlock}>
              <span className={styles.sectionKicker}>{t("about.story.kicker")}</span>
              <h2>{t("about.story.title")}</h2>
              <p>{t("about.story.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{t("about.values.kicker")}</span>
            <h2>{t("about.values.title")}</h2>
            <p>{t("about.values.description")}</p>
          </div>

          <div className={styles.cardGrid}>
            {values.map((item) => (
              <article key={item.title} className={styles.infoCard}>
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
