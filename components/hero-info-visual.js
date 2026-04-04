import { ShieldCheck, Sparkles, Syringe } from "lucide-react";
import styles from "../app/site.module.css";

const iconMap = {
  precision: Sparkles,
  technology: ShieldCheck,
  hygiene: Syringe,
};

export function HeroInfoVisual({ content }) {
  return (
    <div className={`${styles.heroInfoVisual} ${styles.placeholderTall}`}>
      <div className={styles.heroInfoRail} aria-hidden="true" />

      <div className={styles.heroInfoInner}>
        <h2 className={styles.heroInfoTitle}>
          <span>{content.titleLineOne}</span>
          <span className={styles.heroInfoHighlight}>{content.highlight}</span>
          <span>{content.titleLineTwo}</span>
        </h2>

        <p className={styles.heroInfoIntro}>{content.intro}</p>

        <div className={styles.heroInfoList}>
          {content.points.map((point) => {
            const Icon = iconMap[point.icon] ?? ShieldCheck;

            return (
              <article key={point.title} className={styles.heroInfoItem}>
                <span className={styles.heroInfoIconWrap}>
                  <Icon className={styles.heroInfoIcon} />
                </span>
                <p>
                  <strong>{point.title}</strong> {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
