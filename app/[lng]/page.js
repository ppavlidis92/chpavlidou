import Link from "next/link";
import Image from "next/image";
import { Mail, Quote, Send, Star } from "lucide-react";
import { ClinicCarousel } from "../../components/clinic-carousel";
import { HeroSectionCarousel } from "../../components/hero-section-carousel";
import { serviceCategories } from "../../lib/services";
import styles from "../site.module.css";

const pageContent = {
  en: {
    hero: {
      eyebrow: "Advanced Dermatology & Aesthetic Care",
      title: (
        <>
          <span>Healthy Skin</span>
          <span>Natural Confidence</span>
        </>
      ),
      description:
        "Medical dermatology and aesthetic treatments planned with precision, calm guidance, and respect for your skin.",
      cta: "Book Appointment",
      imageAlt: "Portrait of Dr. Pavlidou Chrysa",
      panelTitle: "Dermatology with a clear plan",
      panelText:
        "From diagnosis to treatment maintenance, every visit is built around safety, realistic expectations, and refined results.",
    },
    services: {
      kicker: "Our Services",
      title: "Five clear categories for the treatments patients ask about most",
      description:
        "A simple structure for the full treatment range, grouped by the way patients usually think about their needs.",
      items: [
        {
          title: "Face",
          summary: "Expression lines, hydration, renewal, and refined facial balance.",
          services: ["Botox / neuromodulators", "Hyaluronic fillers", "Skin boosters", "Mesotherapy", "Chemical peels"],
        },
        {
          title: "Body",
          summary: "Body skin quality, firmness, texture, and contour-support treatments.",
          services: ["Cellulite protocols", "Firming treatments", "Stretch marks", "Localized contour support", "Body hydration"],
        },
        {
          title: "Laser",
          summary: "Technology-led care for hair removal, tone, texture, and visible marks.",
          services: ["Laser hair removal", "Pigmentation", "Vascular lesions", "Acne scars", "Skin rejuvenation"],
        },
        {
          title: "Dermatology",
          summary: "Diagnosis and treatment for everyday and chronic skin conditions.",
          services: ["Acne", "Rosacea", "Eczema", "Psoriasis", "Mole checks"],
        },
        {
          title: "Hair",
          summary: "Scalp and hair-loss evaluation with targeted maintenance plans.",
          services: ["Hair loss evaluation", "Scalp care", "Alopecia support", "Seborrheic dermatitis", "Long-term follow-up"],
        },
      ],
    },
    team: {
      kicker: "Our Team",
      title: "A calm clinical team around every visit",
      blocks: [
        {
          title: "Medical direction with personal attention",
          text: "The first step is always a careful assessment: what is happening, what matters to you, and which options are appropriate.",
          imageLabel: "Doctor portrait",
        },
        {
          title: "Treatment planning that feels organized",
          text: "Each plan is structured in stages, so you understand what happens now, what needs follow-up, and how results are maintained.",
          imageLabel: "Treatment room",
        },
        {
          title: "Support before and after treatment",
          text: "Clear instructions, calm communication, and consistent review help the experience feel safe from the first appointment onward.",
          imageLabel: "Clinic team",
        },
      ],
    },
  },
  el: {
    hero: {
      eyebrow: "Προηγμένη Δερματολογία & Αισθητική Φροντίδα",
      title: (
        <>
          <span>Υγιές Δέρμα</span>
          <span>Φυσική Αυτοπεποίθηση</span>
        </>
      ),
      description:
        "Ιατρική δερματολογία και αισθητικές θεραπείες με ακρίβεια, ήρεμη καθοδήγηση και σεβασμό στις ανάγκες του δέρματός σας.",
      cta: "Κλείστε Ραντεβού",
      imageAlt: "Πορτρέτο της Δρ. Παυλίδου Χρύσας",
      panelTitle: "Δερματολογία με ξεκάθαρο πλάνο",
      panelText:
        "Από τη διάγνωση μέχρι τη συντήρηση του αποτελέσματος, κάθε επίσκεψη οργανώνεται με ασφάλεια, ρεαλιστικές προσδοκίες και διακριτική αισθητική.",
    },
    services: {
      kicker: "Οι Υπηρεσίες Μας",
      title: "Πέντε βασικές κατηγορίες για τις θεραπείες που αναζητούν οι ασθενείς",
      description:
        "Μια καθαρή δομή για όλο το εύρος των θεραπειών, οργανωμένη με βάση τον τρόπο που συνήθως σκέφτονται οι ασθενείς τις ανάγκες τους.",
      items: [
        {
          title: "Πρόσωπο",
          summary: "Γραμμές έκφρασης, ενυδάτωση, ανανέωση και φυσική ισορροπία.",
          services: ["Botox / νευροτροποποιητές", "Υαλουρονικό", "Skin boosters", "Μεσοθεραπεία", "Χημικά peeling"],
        },
        {
          title: "Σώμα",
          summary: "Ποιότητα δέρματος, σύσφιξη, υφή και υποστήριξη περιγράμματος.",
          services: ["Κυτταρίτιδα", "Σύσφιξη", "Ραγάδες", "Τοπική υποστήριξη περιγράμματος", "Ενυδάτωση σώματος"],
        },
        {
          title: "Laser",
          summary: "Τεχνολογία για αποτρίχωση, τόνο, υφή και ορατά σημάδια.",
          services: ["Laser αποτρίχωση", "Δυσχρωμίες", "Αγγειακές βλάβες", "Ουλές ακμής", "Ανανέωση δέρματος"],
        },
        {
          title: "Δερματολογία",
          summary: "Διάγνωση και θεραπεία για συχνές και χρόνιες δερματικές παθήσεις.",
          services: ["Ακμή", "Ροδόχρους νόσος", "Έκζεμα", "Ψωρίαση", "Έλεγχος σπίλων"],
        },
        {
          title: "Μαλλιά",
          summary: "Αξιολόγηση τριχόπτωσης και φροντίδα τριχωτού με πλάνο συντήρησης.",
          services: ["Τριχόπτωση", "Φροντίδα τριχωτού", "Αλωπεκία", "Σμηγματορροϊκή δερματίτιδα", "Παρακολούθηση"],
        },
      ],
    },
    team: {
      kicker: "Η Ομάδα Μας",
      title: "Μια ήρεμη κλινική ομάδα γύρω από κάθε επίσκεψη",
      blocks: [
        {
          title: "Ιατρική καθοδήγηση με προσωπική προσοχή",
          text: "Το πρώτο βήμα είναι πάντα η προσεκτική αξιολόγηση: τι συμβαίνει, τι σας απασχολεί και ποιες επιλογές είναι κατάλληλες.",
          imageLabel: "Πορτρέτο ιατρού",
        },
        {
          title: "Πλάνο θεραπείας που μένει οργανωμένο",
          text: "Κάθε θεραπεία δομείται σε στάδια, ώστε να γνωρίζετε τι γίνεται τώρα, τι χρειάζεται παρακολούθηση και πώς συντηρείται το αποτέλεσμα.",
          imageLabel: "Χώρος θεραπείας",
        },
        {
          title: "Υποστήριξη πριν και μετά τη θεραπεία",
          text: "Σαφείς οδηγίες, ήρεμη επικοινωνία και σταθερή επανεκτίμηση κάνουν την εμπειρία πιο ασφαλή από το πρώτο ραντεβού.",
          imageLabel: "Ομάδα κλινικής",
        },
      ],
    },
  },
};

const serviceDetails = {
  en: [
    {
      detail: "Botox, fillers, boosters, peels, and tailored face protocols.",
      linkLabel: "Details & prices",
    },
    {
      detail: "Firming, cellulite, stretch-mark, hydration, and contour-support plans.",
      linkLabel: "Details & prices",
    },
    {
      detail: "Hair removal, pigmentation, vascular marks, scars, and rejuvenation.",
      linkLabel: "Details & prices",
    },
    {
      detail: "Medical assessment, dermoscopy when needed, treatment plans, and review.",
      linkLabel: "Details & prices",
    },
    {
      detail: "Hair-loss evaluation, scalp care, alopecia support, and follow-up.",
      linkLabel: "Details & prices",
    },
  ],
  el: [
    {
      detail: "Botox, υαλουρονικό, boosters, peeling και εξατομικευμένα πρωτόκολλα προσώπου.",
      linkLabel: "Λεπτομέρειες & τιμές",
    },
    {
      detail: "Πλάνα για σύσφιξη, κυτταρίτιδα, ραγάδες, ενυδάτωση και υποστήριξη περιγράμματος.",
      linkLabel: "Λεπτομέρειες & τιμές",
    },
    {
      detail: "Αποτρίχωση, δυσχρωμίες, αγγειακές βλάβες, ουλές και ανανέωση δέρματος.",
      linkLabel: "Λεπτομέρειες & τιμές",
    },
    {
      detail: "Ιατρική αξιολόγηση, δερματοσκόπηση όπου χρειάζεται, πλάνο θεραπείας και επανέλεγχος.",
      linkLabel: "Λεπτομέρειες & τιμές",
    },
    {
      detail: "Αξιολόγηση τριχόπτωσης, φροντίδα τριχωτού, υποστήριξη αλωπεκίας και παρακολούθηση.",
      linkLabel: "Λεπτομέρειες & τιμές",
    },
  ],
};

const serviceVideoSources = [
  "/videos/services/face.mp4",
  "/videos/services/body.mp4",
  "/videos/services/lazer.mp4",
  "/videos/services/dermatology.mp4",
  "/videos/services/hair.mp4",
];

const teamMembers = {
  en: [
    {
      name: "Chrysa Pavlidou",
      role: "Dermatologist",
      color: "#f7d9bc",
      image: "/images/team/chrysa.jfif",
    },
    {
      name: "Aesthetic Care",
      role: "Aesthetician",
      color: "#cdb39c",
      image: "/images/team/esthetician.jfif",
    },
    {
      name: "Patient Care",
      role: "Reception",
      color: "#ab9682",
      image: "/images/team/secretary.jfif",
    },
  ],
  el: [
    {
      name: "Χρύσα Παυλίδου",
      role: "Δερματολόγος",
      color: "#f7d9bc",
      image: "/images/team/chrysa.jfif",
    },
    {
      name: "Αισθητική Φροντίδα",
      role: "Αισθητικός",
      color: "#cdb39c",
      image: "/images/team/esthetician.jfif",
    },
    {
      name: "Φροντίδα Ασθενών",
      role: "Υποδοχή",
      color: "#ab9682",
      image: "/images/team/secretary.jfif",
    },
  ],
};

const clinicGallery = {
  en: {
    kicker: "Our Clinic",
    title: "A calm, organized space for medical and aesthetic care",
    description:
      "The clinic environment is designed to support clear consultations, precise treatments, and a comfortable patient experience.",
    items: [
      {
        title: "Consultation",
        text: "A quiet setting for assessment, diagnosis, and treatment planning.",
        image: "/images/clinic/1chp.png",
      },
      {
        title: "Treatment Rooms",
        text: "Functional rooms arranged for focused dermatology and aesthetic protocols.",
        image: "/images/clinic/pexel1.jpg",
      },
      {
        title: "Patient Experience",
        text: "Simple flow, calm communication, and attention to detail at every visit.",
        image: "/images/clinic/ch2.png",
      },
    ],
  },
  el: {
    kicker: "Το Ιατρείο Μας",
    title: "Ένας οργανωμένος χώρος για ιατρική και αισθητική φροντίδα",
    description:
      "Το περιβάλλον του ιατρείου έχει σχεδιαστεί για καθαρές συμβουλές, ακριβείς θεραπείες και μια άνετη εμπειρία για κάθε ασθενή.",
    items: [
      {
        title: "Συμβουλευτική",
        text: "Ένας ήρεμος χώρος για αξιολόγηση, διάγνωση και πλάνο θεραπείας.",
        image: "/images/clinic/1chp.png",
      },
      {
        title: "Χώροι Θεραπείας",
        text: "Λειτουργικοί χώροι για δερματολογικά και αισθητικά πρωτόκολλα με συγκέντρωση στη λεπτομέρεια.",
        image: "/images/clinic/pexel1.jpg",
      },
      {
        title: "Εμπειρία Ασθενή",
        text: "Απλή ροή, ήρεμη επικοινωνία και φροντίδα σε κάθε στάδιο της επίσκεψης.",
        image: "/images/clinic/ch2.png",
      },
    ],
  },
};

const reviewPlaceholders = [
  "A placeholder review for the clinic experience, ready to be replaced by a live Google Business feed.",
  "A placeholder review for medical guidance, calm communication, and follow-up care.",
  "A placeholder review for treatment planning and a professional visit from start to finish.",
];

export default async function HomePage({ params }) {
  const { lng } = await params;
  const content = pageContent[lng] ?? pageContent.en;
  const localizedServiceDetails = serviceDetails[lng] ?? serviceDetails.en;
  const localizedTeamMembers = teamMembers[lng] ?? teamMembers.en;
  const localizedClinicGallery = clinicGallery[lng] ?? clinicGallery.en;
  const localeClass = lng === "el" ? styles.langGreek : "";
  const reviewsContent = {
    kicker: "Google Reviews",
    title: "Comments from patients",
    description:
      "Live Google comments can be connected once the Google Business access is ready. For now, these cards reserve the section layout.",
    googleLink: "View on Google",
  };
  const newsletterContent = {
    kicker: "Newsletter",
    title: "Skin care notes, clinic news, and seasonal reminders",
    description: "A polished subscription area is ready for the mailing platform you choose later.",
    placeholder: "Email address",
    button: "Subscribe",
  };

  return (
    <div className={`${styles.homeEditorial} ${localeClass}`}>
      <section className={`${styles.section} ${styles.heroSection} ${styles.homeHeroCompact}`}>
        <HeroSectionCarousel
          eyebrow={content.hero.eyebrow}
          title={<span className={styles.heroTitleGreek}>{content.hero.title}</span>}
          description={content.hero.description}
          buttonLabel={content.hero.cta}
          buttonHref={`/${lng}/contact`}
          imageAlt={content.hero.imageAlt}
        >
          <div className={styles.homeHeroPanel}>
            <h2>{content.hero.panelTitle}</h2>
            <p>{content.hero.panelText}</p>
          </div>
        </HeroSectionCarousel>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionIntro} ${styles.servicesSectionIntro}`}>
            <h2>{content.services.kicker}</h2>
          </div>

          <div className={styles.serviceFlipGrid}>
            {content.services.items.map((item, index) => {
              const meta = localizedServiceDetails[index];

              return (
                <article key={item.title} className={styles.serviceFlipCard}>
                  <div className={styles.serviceFlipInner}>
                    <div className={`${styles.serviceFlipFace} ${styles.serviceFlipFront}`}>
                      <video
                        className={styles.serviceCardVideo}
                        src={serviceVideoSources[index]}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                      />
                      <span className={styles.serviceCardScrim} aria-hidden="true" />
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                    </div>

                    <div className={`${styles.serviceFlipFace} ${styles.serviceFlipBack}`}>
                      <h3>{item.title}</h3>
                      <p>{meta.detail}</p>
                      <ul>
                        {item.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                      <Link href={`/${lng}/services/${serviceCategories[index].slug}`}>{meta.linkLabel}</Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{content.team.kicker}</span>
            <h2>{content.team.title}</h2>
          </div>

          <div className={styles.teamShowcaseGrid}>
            {localizedTeamMembers.map((member, index) => (
              <article
                key={member.name}
                className={`${styles.teamShowcaseCard} ${
                  index === 0 ? styles.teamShowcaseCardFeatured : ""
                }`}
              >
                <div className={styles.teamShowcaseImageWrap}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 560px"
                    className={styles.teamShowcaseImage}
                  />
                </div>
                <div className={styles.teamShowcaseText}>
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.clinicSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionKicker}>{localizedClinicGallery.kicker}</span>
            <h2>{localizedClinicGallery.title}</h2>
            <p>{localizedClinicGallery.description}</p>
          </div>

          <ClinicCarousel
            images={[
              { src: "/images/clinic/iatreio/iatrio1.jfif", alt: "Clinic interior 1" },
              { src: "/images/clinic/iatreio/iatrio2.jfif", alt: "Clinic interior 2" },
              { src: "/images/clinic/iatreio/iatrio3.jfif", alt: "Clinic interior 3" },
              { src: "/images/clinic/iatreio/iatrio4.jfif", alt: "Clinic interior 4" },
              { src: "/images/clinic/iatreio/iatrio5.jfif", alt: "Clinic interior 5" },
              { src: "/images/clinic/iatreio/iatrio6.jfif", alt: "Clinic interior 6" },
            ]}
            labels={{ previous: "Previous", next: "Next" }}
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionKicker}>{reviewsContent.kicker}</span>
              <h2>{reviewsContent.title}</h2>
              <p>{reviewsContent.description}</p>
            </div>
            <Link
              className={styles.secondaryButton}
              href="https://www.google.com/maps?cid=16686273157739745046"
              target="_blank"
              rel="noreferrer"
            >
              {reviewsContent.googleLink}
            </Link>
          </div>

          <div className={styles.reviewGrid}>
            {reviewPlaceholders.map((review, index) => (
              <article key={review} className={styles.reviewCard}>
                <Quote className={styles.reviewQuoteIcon} />
                <div className={styles.reviewStars} aria-label="5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className={styles.reviewStarIcon} />
                  ))}
                </div>
                <p>{review}</p>
                <strong>Google Patient {String(index + 1).padStart(2, "0")}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.newsletterPanel}>
            <div>
              <span className={styles.sectionKicker}>{newsletterContent.kicker}</span>
              <h2>{newsletterContent.title}</h2>
              <p>{newsletterContent.description}</p>
            </div>

            <form className={styles.newsletterForm}>
              <label className={styles.newsletterInputWrap}>
                <Mail className={styles.newsletterInputIcon} />
                <span>{newsletterContent.placeholder}</span>
                <input type="email" name="email" placeholder={newsletterContent.placeholder} />
              </label>
              <button type="submit" className={styles.primaryButton}>
                <Send className={styles.newsletterButtonIcon} />
                {newsletterContent.button}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
