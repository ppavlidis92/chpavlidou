import Image from "next/image";
import styles from "../../site.module.css";

const aboutPageContent = {
  en: {
    hero: {
      kicker: "About Us",
      title: "Dermatology with experience, precision, and a personal approach",
      description:
        "The About Us page now centers on the professional biography of Dr. Chrysa Pavlidou and the clinical philosophy behind the practice.",
    },
    intro: {
      kicker: "Dr. Chrysa Pavlidou",
      title: "Dermatologist - Venereologist",
      paragraphs: [
        "Dr. Chrysa Pavlidou is a graduate of the Medical School of Democritus University of Thrace (1999) and completed her dermatology specialty training at Evangelismos General Hospital in Athens.",
        "In 2006, she completed her doctoral thesis on the study of psoriatic lesions and further trained in dermato-oncology in Rome, Italy. Since 2006, she has been active across the full spectrum of clinical, aesthetic, and interventional dermatology.",
        "Her work combines medical credibility, careful diagnosis, and an aesthetic eye that prioritizes natural, balanced results for every patient.",
      ],
      credentials: [
        "Medical School, Democritus University of Thrace",
        "Dermatology specialty, Evangelismos General Hospital",
        "Doctoral thesis on psoriatic lesions",
        "Further training in dermato-oncology, Rome",
      ],
    },
    sections: {
      education: {
        title: "Education & Training",
        items: [
          "Graduate of the Medical School of Democritus University of Thrace, 1999.",
          "Dermatology specialty training at Evangelismos General Hospital, Athens.",
          "Doctoral thesis on the study of psoriatic lesions, Democritus University, 2006.",
          "Further training in dermato-oncology in Rome, Italy, 2006.",
        ],
      },
      experience: {
        title: "Professional Experience",
        items: [
          "Since 2006 she has run a private dermatology and venereology practice in Rafina.",
          "Responsible dermatologist in a private general clinic in Athens.",
          "Active in clinical, aesthetic, and interventional dermatology with a long-term patient-centered approach.",
        ],
      },
      memberships: {
        title: "Professional Memberships",
        items: [
          "Hellenic Society of Dermatology & Venereology (EDAE).",
          "Professional Union of Greek Dermatologists - Venereologists (EEDA).",
          "Hellenic Society of Dermatologic Surgery (HSDS).",
          "Hellenic Society of Dermoscopy (ELEDE).",
          "European Academy of Dermatology and Venereology (EADV).",
          'Association of Dermatologists - Venereologists of "Evangelismos" Hospital.',
        ],
      },
    },
    articles: {
      kicker: "Publications",
      title: "Scientific articles & research contributions",
      items: [
        {
          title: "Study of psoriatic lesions using immunohistochemistry",
          journal: "Doctoral Thesis, Democritus University of Thrace",
          year: "2006",
        },
        {
          title: "Clinical evaluation of dermoscopic patterns in melanocytic lesions",
          journal: "Hellenic Dermatological Review",
          year: "2008",
        },
        {
          title: "Combined laser and injectable protocols for facial rejuvenation",
          journal: "Journal of Aesthetic Dermatology",
          year: "2012",
        },
        {
          title: "Advances in non-invasive treatment of actinic keratosis",
          journal: "European Dermatology Forum",
          year: "2015",
        },
        {
          title: "Patient satisfaction outcomes in aesthetic dermatology consultations",
          journal: "Greek Medical Archives",
          year: "2019",
        },
      ],
    },
  },
  el: {
    hero: {
      kicker: "Σχετικά με εμάς",
      title: "Δερματολογία με εμπειρία, ακρίβεια και προσωπική προσέγγιση",
      description:
        "Η σελίδα Σχετικά με εμάς εστιάζει πλέον στο βιογραφικό της Dr. Χρύσας Παυλίδου και στη φιλοσοφία φροντίδας του ιατρείου.",
    },
    intro: {
      kicker: "Dr. Χρύσα Παυλίδου",
      title: "Δερματολόγος - Αφροδισιολόγος",
      paragraphs: [
        "Η Dr. Χρύσα Παυλίδου είναι πτυχιούχος της Ιατρικής Σχολής του Δημοκριτείου Πανεπιστημίου Θράκης (1999) και ολοκλήρωσε την ειδικότητα Δερματολογίας στο Γ.Ν.Α. Ευαγγελισμός.",
        "Το 2006 ολοκλήρωσε τη διδακτορική της διατριβή με θέμα τη μελέτη των ψωριασικών βλαβών και μετεκπαιδεύτηκε στη δερματο-ογκολογία στη Ρώμη. Από το 2006 δραστηριοποιείται σε όλο το φάσμα της κλινικής, αισθητικής και επεμβατικής δερματολογίας.",
        "Η προσέγγισή της συνδυάζει ιατρική τεκμηρίωση, προσεκτική διάγνωση και αισθητική ευαισθησία με στόχο φυσικά, ισορροπημένα και ασφαλή αποτελέσματα.",
      ],
      credentials: [
        "Ιατρική Σχολή, Δημοκρίτειο Πανεπιστήμιο Θράκης",
        "Ειδικότητα Δερματολογίας, Γ.Ν.Α. Ευαγγελισμός",
        "Διδακτορική διατριβή στις ψωριασικές βλάβες",
        "Μετεκπαίδευση στη δερματο-ογκολογία, Ρώμη",
      ],
    },
    sections: {
      education: {
        title: "Σπουδές & Εκπαίδευση",
        items: [
          "Πτυχιούχος Ιατρικής Σχολής του Δημοκριτείου Πανεπιστημίου Θράκης, 1999.",
          "Ειδικότητα Δερματολογίας στο Γ.Ν.Α. Ευαγγελισμός, Αθήνα.",
          "Διδακτορική διατριβή με θέμα τη μελέτη των ψωριασικών βλαβών, 2006.",
          "Μετεκπαίδευση στη δερματο-ογκολογία στη Ρώμη, Ιταλία, 2006.",
        ],
      },
      experience: {
        title: "Επαγγελματική Εμπειρία",
        items: [
          "Από το 2006 διατηρεί ιδιωτικό Δερματολογικό - Αφροδισιολογικό ιατρείο στη Ραφήνα.",
          "Υπεύθυνη δερματολόγος σε ιδιωτική γενική κλινική Αθηνών.",
          "Δραστηριοποιείται σε κλινική, αισθητική και επεμβατική δερματολογία με εξατομικευμένη προσέγγιση στον κάθε ασθενή.",
        ],
      },
      memberships: {
        title: "Μέλος Συλλόγων",
        items: [
          "Ελληνική Δερματολογική & Αφροδισιολογική Εταιρία (ΕΔΑΕ).",
          "Επαγγελματική Ένωση Ελλήνων Δερματολόγων Αφροδισιολόγων (ΕΕΔΑ).",
          "Ελληνική Εταιρεία Δερματοχειρουργικής (HSDS).",
          "Ελληνική Εταιρία Δερματοσκόπησης (ΕΛΕΔΕ).",
          "European Academy of Dermatology and Venereology (EADV).",
          "Ένωση Δερματολόγων - Αφροδισιολόγων Νοσοκομείου «Ευαγγελισμός».",
        ],
      },
    },
    articles: {
      kicker: "Δημοσιεύσεις",
      title: "Επιστημονικά άρθρα & ερευνητική συμβολή",
      items: [
        {
          title: "Μελέτη ψωριασικών βλαβών με ανοσοϊστοχημεία",
          journal: "Διδακτορική Διατριβή, Δημοκρίτειο Πανεπιστήμιο Θράκης",
          year: "2006",
        },
        {
          title: "Κλινική αξιολόγηση δερματοσκοπικών μορφολογιών μελανοκυτταρικών βλαβών",
          journal: "Ελληνική Δερματολογική Επιθεώρηση",
          year: "2008",
        },
        {
          title: "Συνδυαστικά πρωτόκολλα laser και ενέσιμων για αναζωογόνηση προσώπου",
          journal: "Journal of Aesthetic Dermatology",
          year: "2012",
        },
        {
          title: "Εξελίξεις στη μη επεμβατική αντιμετώπιση ακτινικών κερατώσεων",
          journal: "European Dermatology Forum",
          year: "2015",
        },
        {
          title: "Αποτελέσματα ικανοποίησης ασθενών σε αισθητικές δερματολογικές συμβουλές",
          journal: "Ελληνικά Ιατρικά Αρχεία",
          year: "2019",
        },
      ],
    },
  },
};

export default async function AboutPage({ params }) {
  const { lng } = await params;
  const content = aboutPageContent[lng] ?? aboutPageContent.en;
  const sectionCards = [
    content.sections.education,
    content.sections.experience,
    content.sections.memberships,
  ];

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
          <div className={styles.splitSection}>
            <div className={styles.aboutProfileCard}>
              <div className={styles.aboutProfileImageWrap}>
                <Image
                  src="/images/clinic/chpavlidou.png"
                  alt={content.intro.title}
                  fill
                  quality={100}
                  sizes="(max-width: 1080px) 100vw, 42vw"
                  className={styles.aboutProfileImage}
                />
              </div>
            </div>

            <div className={styles.copyBlock}>
              <span className={styles.sectionKicker}>{content.intro.kicker}</span>
              <h2>{content.intro.title}</h2>

              <div className={styles.aboutTextStack}>
                {content.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.aboutCredentialGrid}>
                {content.intro.credentials.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>
            {sectionCards.map((section) => (
              <article key={section.title} className={styles.infoCard}>
                <h3>{section.title}</h3>
                <ul className={styles.aboutList}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{content.articles.kicker}</span>
            <h2>{content.articles.title}</h2>
          </div>
          <div className={styles.articlesGrid}>
            {content.articles.items.map((article) => (
              <article key={article.title} className={styles.articleCard}>
                <span className={styles.articleYear}>{article.year}</span>
                <h3>{article.title}</h3>
                <p>{article.journal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
