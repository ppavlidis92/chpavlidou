import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { BeforeAfterSlider } from "../../../../components/before-after-slider";
import { getServiceCategory, serviceCategories } from "../../../../lib/services";
import styles from "../../../site.module.css";

export function generateStaticParams() {
  return serviceCategories.flatMap((category) => [
    { lng: "en", category: category.slug },
    { lng: "el", category: category.slug },
  ]);
}

export default async function ServiceCategoryPage({ params }) {
  const { lng, category: categorySlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const t = lng === "el" ? {
    servicesKicker: "Υπηρεσίες",
    detailsKicker: "Λεπτομέρειες Θεραπείας",
    detailsTitle: "Σχεδιασμένη γύρω από το δέρμα, τον χρόνο και τους στόχους σας",
    pricesKicker: "Θεραπείες",
    pricesTitle: "Οι θεραπείες μας",
    pricesDescription: "Επιλέξτε μια θεραπεία για να δείτε περισσότερες λεπτομέρειες.",
    beforeAfterKicker: "Πριν & Μετά",
    beforeAfterTitle: "Σύγκριση αποτελεσμάτων",
    beforeAfterDescription: "Σύρετε αριστερά ή δεξιά για να συγκρίνετε. Πραγματικές φωτογραφίες θεραπείας μπορούν να προστεθούν αργότερα.",
    beforeAfterLabel: `Σύγκριση ${category.title}`,
    beforeLabel: "Πριν",
    afterLabel: "Μετά",
  } : {
    servicesKicker: "Services",
    detailsKicker: "Treatment Details",
    detailsTitle: "Planned around your skin, timing, and goals",
    pricesKicker: "Treatments",
    pricesTitle: "Our treatments",
    pricesDescription: "Select a treatment to read more about what it involves.",
    beforeAfterKicker: "Before & After",
    beforeAfterTitle: "Result comparison",
    beforeAfterDescription: "Slide left or right to compare. Real treatment photography can be added here later for this category.",
    beforeAfterLabel: `Compare ${category.title}`,
    beforeLabel: "Before",
    afterLabel: "After",
  };

  const treatmentHalf = Math.ceil(category.treatments.length / 2);
  const treatmentColumns = [
    category.treatments.slice(0, treatmentHalf),
    category.treatments.slice(treatmentHalf),
  ];

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{t.servicesKicker}</span>
          <h1 className={styles.pageTitle}>{category.title}</h1>
          <p className={styles.pageLead}>{category.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.serviceDetailGrid}>
            <div className={styles.serviceDetailCopy}>
              <span className={styles.sectionKicker}>{t.detailsKicker}</span>
              <h2>{t.detailsTitle}</h2>
              {category.sections.map((section) => (
                <p key={section}>{section}</p>
              ))}
            </div>

            <div className={styles.servicePhotoStack} aria-label={`${category.title} photo placeholders`}>
              <div className={styles.servicePhotoPlaceholder}>Photo 01</div>
              <div className={styles.servicePhotoPlaceholder}>Photo 02</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{t.pricesKicker}</span>
            <h2>{t.pricesTitle}</h2>
            <p>{t.pricesDescription}</p>
          </div>

          <div className={styles.treatmentAccordion}>
            {treatmentColumns.map((column, columnIndex) => (
              <div key={columnIndex} className={styles.treatmentAccordionColumn}>
                {column.map((item) => (
                  <details
                    key={item.name}
                    name={`treatments-${category.slug}`}
                    className={styles.treatmentAccordionItem}
                  >
                    <summary className={styles.treatmentAccordionSummary}>
                      <span>{item.name}</span>
                      <ChevronDown className={styles.treatmentAccordionIcon} />
                    </summary>
                    <p className={styles.treatmentAccordionBody}>{item.description}</p>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.serviceDetailGrid}>
            <div className={styles.serviceDetailCopy}>
              <span className={styles.sectionKicker}>{t.beforeAfterKicker}</span>
              <h2>{t.beforeAfterTitle}</h2>
              <p>{t.beforeAfterDescription}</p>
            </div>

            <BeforeAfterSlider
              label={t.beforeAfterLabel}
              beforeLabel={t.beforeLabel}
              afterLabel={t.afterLabel}
            />
          </div>
        </div>
      </section>
    </>
  );
}
