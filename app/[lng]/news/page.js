import { Play, Calendar, ArrowRight } from "lucide-react";
import styles from "../../site.module.css";

const newsContent = {
  en: {
    hero: {
      kicker: "News & Media",
      title: "Clinic updates, videos, and skin care insights",
      description: "Stay informed with our latest articles, social media highlights, and seasonal offers.",
    },
    featured: {
      kicker: "Featured Video",
      title: "Meet Dr. Chrysa Pavlidou",
      description: "A short introduction to our clinic, our philosophy, and the team behind your care.",
      cta: "Watch on Instagram",
    },
    articles: [
      {
        date: "May 2026",
        tag: "Newsletter",
        title: "Spring skin reset: What your skin needs after winter",
        summary: "Seasonal transitions affect skin barrier function. Learn the key adjustments for spring hydration, sun protection, and treatment timing.",
      },
      {
        date: "April 2026",
        tag: "Offer",
        title: "Spring renewal package — 20% off selected treatments",
        summary: "For a limited time, enjoy discounts on chemical peels, hydrafacial, and LED phototherapy sessions. Book a consultation to learn more.",
      },
      {
        date: "March 2026",
        tag: "Article",
        title: "Understanding melasma: causes, triggers, and modern management",
        summary: "Melasma is one of the most common pigmentation concerns. A detailed look at what drives it and how we approach treatment.",
      },
      {
        date: "February 2026",
        tag: "Clinic Update",
        title: "New equipment: Fractional CO₂ laser now available",
        summary: "We've added a state-of-the-art fractional laser to our clinic for scar revision, skin resurfacing, and rejuvenation protocols.",
      },
    ],
    videos: {
      kicker: "From Social Media",
      title: "Recent clips & reels",
      items: [
        { title: "Hydrafacial procedure walkthrough", platform: "Instagram Reel" },
        { title: "Patient Q&A: Botox myths vs facts", platform: "Instagram Reel" },
        { title: "Clinic tour — our treatment rooms", platform: "Instagram Story" },
      ],
    },
  },
  el: {
    hero: {
      kicker: "Νέα & Μέσα",
      title: "Ενημερώσεις ιατρείου, βίντεο και συμβουλές φροντίδας δέρματος",
      description: "Μείνετε ενημερωμένοι με τα τελευταία άρθρα, βίντεο από social media και εποχιακές προσφορές.",
    },
    featured: {
      kicker: "Προτεινόμενο Βίντεο",
      title: "Γνωρίστε τη Dr. Χρύσα Παυλίδου",
      description: "Μια σύντομη παρουσίαση του ιατρείου, της φιλοσοφίας μας και της ομάδας πίσω από τη φροντίδα σας.",
      cta: "Δείτε στο Instagram",
    },
    articles: [
      {
        date: "Μάιος 2026",
        tag: "Newsletter",
        title: "Ανοιξιάτικη επαναφορά δέρματος: τι χρειάζεται μετά τον χειμώνα",
        summary: "Οι εποχιακές αλλαγές επηρεάζουν το δερματικό φραγμό. Μάθετε τις βασικές προσαρμογές για ενυδάτωση, αντηλιακή προστασία και θεραπείες.",
      },
      {
        date: "Απρίλιος 2026",
        tag: "Προσφορά",
        title: "Πακέτο ανοιξιάτικης ανανέωσης — 20% έκπτωση σε επιλεγμένες θεραπείες",
        summary: "Για περιορισμένο χρονικό διάστημα, απολαύστε εκπτώσεις σε chemical peels, hydrafacial και LED φωτοθεραπεία.",
      },
      {
        date: "Μάρτιος 2026",
        tag: "Άρθρο",
        title: "Κατανοώντας το μέλασμα: αιτίες, παράγοντες και σύγχρονη αντιμετώπιση",
        summary: "Το μέλασμα είναι από τις πιο συχνές διαταραχές χρωστικής. Μια λεπτομερής ματιά στο τι το προκαλεί και πώς το αντιμετωπίζουμε.",
      },
      {
        date: "Φεβρουάριος 2026",
        tag: "Ενημέρωση",
        title: "Νέος εξοπλισμός: Fractional CO₂ laser πλέον διαθέσιμο",
        summary: "Προσθέσαμε laser τελευταίας τεχνολογίας για αναδόμηση δέρματος, ουλές και πρωτόκολλα αναζωογόνησης.",
      },
    ],
    videos: {
      kicker: "Από τα Social Media",
      title: "Πρόσφατα clips & reels",
      items: [
        { title: "Hydrafacial — βήμα βήμα η διαδικασία", platform: "Instagram Reel" },
        { title: "Ερωτήσεις ασθενών: Μύθοι vs αλήθεια για το Botox", platform: "Instagram Reel" },
        { title: "Ξενάγηση στο ιατρείο — οι χώροι θεραπείας", platform: "Instagram Story" },
      ],
    },
  },
};

export default async function NewsPage({ params }) {
  const { lng } = await params;
  const content = newsContent[lng] ?? newsContent.en;

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{content.hero.kicker}</span>
          <h1 className={styles.pageTitle}>{content.hero.title}</h1>
          <p className={styles.pageLead}>{content.hero.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.newsFeaturedGrid}>
            <div className={styles.newsFeaturedVideo}>
              <div className={styles.newsVideoPlaceholder}>
                <Play className={styles.newsPlayIcon} />
              </div>
            </div>
            <div className={styles.newsFeaturedCopy}>
              <span className={styles.sectionKicker}>{content.featured.kicker}</span>
              <h2>{content.featured.title}</h2>
              <p>{content.featured.description}</p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryButton}
              >
                {content.featured.cta}
                <ArrowRight className={styles.buttonIcon} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{lng === "el" ? "Άρθρα & Ενημερώσεις" : "Articles & Updates"}</span>
            <h2>{lng === "el" ? "Τελευταία νέα από το ιατρείο" : "Latest from the clinic"}</h2>
          </div>
          <div className={styles.newsArticleGrid}>
            {content.articles.map((article) => (
              <article key={article.title} className={styles.newsArticleCard}>
                <div className={styles.newsArticleMeta}>
                  <span className={styles.newsArticleTag}>{article.tag}</span>
                  <span className={styles.newsArticleDate}>
                    <Calendar className={styles.newsDateIcon} />
                    {article.date}
                  </span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{content.videos.kicker}</span>
            <h2>{content.videos.title}</h2>
          </div>
          <div className={styles.newsVideoGrid}>
            {content.videos.items.map((video) => (
              <div key={video.title} className={styles.newsVideoCard}>
                <div className={styles.newsVideoThumb}>
                  <Play className={styles.newsPlayIconSmall} />
                </div>
                <div className={styles.newsVideoInfo}>
                  <h3>{video.title}</h3>
                  <span>{video.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
