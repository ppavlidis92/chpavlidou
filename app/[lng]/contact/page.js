import {
  Clock3,
  Mail,
  MapPinned,
  PhoneCall,
} from "lucide-react";
import styles from "../../site.module.css";

const contentByLanguage = {
  en: {
    hero: {
      kicker: "Clinic Location",
      title: "Visit Dr. Pavlidou Chrysa",
      description:
        "Dermatology and venereology care in Rafina, with easy access, a clear contact route, and welcoming appointment hours.",
    },
    details: {
      kicker: "Clinic Location",
      title: "Visit Dr. Pavlidou Chrysa",
      description:
        "Dermatology and venereology care in Rafina, with easy access, a clear contact route, and welcoming appointment hours.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      hoursLabel: "Opening Hours",
      phone: "22940-22580",
      email: "chpavlidu@gmail.com",
      address: "Davaki Pindou 11 & Kyprion Agoniston, Rafina 190 09, Greece",
      hours: [
        "Monday: 9am-2pm & 4pm-9pm",
        "Tuesday: 9am-2pm & 4pm-9pm",
        "Wednesday: 4pm-9pm",
        "Thursday: 9am-2pm",
        "Friday: 9am-2pm & 4pm-9pm",
      ],
      mapTitle: "Clinic map",
      mapAria: "Map showing the clinic location in Rafina",
    },
  },
  el: {
    hero: {
      kicker: "Τοποθεσία Ιατρείου",
      title: "Επισκεφθείτε τη Δρ. Παυλίδου Χρύσα",
      description:
        "Δερματολογική και αφροδισιολογική φροντίδα στη Ραφήνα, με εύκολη πρόσβαση, ξεκάθαρη επικοινωνία και φιλικό ωράριο επισκέψεων.",
    },
    details: {
      kicker: "Τοποθεσία Ιατρείου",
      title: "Επισκεφθείτε τη Δρ. Παυλίδου Χρύσα",
      description:
        "Δερματολογική και αφροδισιολογική φροντίδα στη Ραφήνα, με εύκολη πρόσβαση, ξεκάθαρη επικοινωνία και φιλικό ωράριο επισκέψεων.",
      phoneLabel: "Τηλέφωνο",
      emailLabel: "Email",
      addressLabel: "Διεύθυνση",
      hoursLabel: "Ωράριο",
      phone: "22940-22580",
      email: "chpavlidu@gmail.com",
      address: "Κυπρίων Αγωνιστών & Δαβάκη Πίνδου 11, Ραφήνα 190 09, Ελλάδα",
      hours: [
        "Δευτέρα: 9πμ-2μμ & 4μμ-9μμ",
        "Τρίτη: 9πμ-2μμ & 4μμ-9μμ",
        "Τετάρτη: 4μμ-9μμ",
        "Πέμπτη: 9πμ-2μμ",
        "Παρασκευή: 9πμ-2μμ & 4μμ-9μμ",
      ],
      mapTitle: "Χάρτης ιατρείου",
      mapAria: "Χάρτης με την τοποθεσία του ιατρείου στη Ραφήνα",
    },
  },
};

const mapSrc =
  "https://www.google.com/maps?cid=16686273157739745046&hl=en-GB&z=16&output=embed";

export default async function ContactPage({ params }) {
  const { lng } = await params;
  const content = contentByLanguage[lng] ?? contentByLanguage.el;

  return (
    <>
      <section className={`${styles.section} ${styles.pageHero}`}>
        <div className={`${styles.container} ${styles.contactHeroContainer}`}>
          <span className={styles.eyebrow}>{content.hero.kicker}</span>
          <h1 className={styles.pageTitle}>{content.hero.title}</h1>
          <p className={styles.pageLead}>{content.hero.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactShowcase}>
            <div className={styles.mapCard}>
              <iframe
                title={content.details.mapTitle}
                aria-label={content.details.mapAria}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
              />
            </div>

            <aside className={styles.contactInfoPanel}>
              <div className={styles.contactInfoRow}>
                <div>
                  <strong>{content.details.phoneLabel}</strong>
                  <a href="tel:+302294022580">{content.details.phone}</a>
                </div>
                <PhoneCall className={styles.contactInfoIcon} />
              </div>

              <div className={styles.contactInfoRow}>
                <div>
                  <strong>{content.details.emailLabel}</strong>
                  <a href="mailto:chpavlidu@gmail.com">{content.details.email}</a>
                </div>
                <Mail className={styles.contactInfoIcon} />
              </div>

              <div className={styles.contactInfoRow}>
                <div>
                  <strong>{content.details.addressLabel}</strong>
                  <p>{content.details.address}</p>
                </div>
                <MapPinned className={styles.contactInfoIcon} />
              </div>

              <div className={styles.contactInfoRow}>
                <div>
                  <strong>{content.details.hoursLabel}</strong>
                  <div className={styles.contactHoursList}>
                    {content.details.hours.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <Clock3 className={styles.contactInfoIcon} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
