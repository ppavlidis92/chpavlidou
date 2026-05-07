import Link from "next/link";
import { serviceCategories } from "../../../lib/services";
import styles from "../../site.module.css";

export default async function ServicesPage({ params }) {
  const { lng } = await params;

  const t = lng === "el" ? {
    kicker: "Υπηρεσίες",
    title: "Εξερευνήστε υπηρεσίες δερματολογίας και αισθητικής",
    description: "Επιλέξτε μια κατηγορία για να δείτε λεπτομέρειες θεραπειών, ενδεικτικές τιμές και παραδείγματα πριν-μετά.",
    detailsCta: "Λεπτομέρειες & τιμές",
  } : {
    kicker: "Services",
    title: "Explore dermatology and aesthetic services",
    description: "Choose a category to see treatment details, sample prices, visual sections, and before-after examples.",
    detailsCta: "Details & prices",
  };

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{t.kicker}</span>
          <h1 className={styles.pageTitle}>{t.title}</h1>
          <p className={styles.pageLead}>{t.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.serviceCategoryGrid}>
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/${lng}/services/${category.slug}`}
                className={styles.serviceCategoryCard}
              >
                <h2>{category.title}</h2>
                <p>{category.summary}</p>
                <span>{t.detailsCta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
