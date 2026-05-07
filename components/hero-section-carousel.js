"use client";

import styles from "../app/site.module.css";

export function HeroSectionCarousel({ children }) {
  return (
    <div className={styles.heroStage}>
      <div className={styles.heroStageViewport}>
        <article className={`${styles.heroStageSlide} ${styles.heroStageSlideActive}`}>
          <div className={styles.heroStageGrid}>
            <div className={styles.heroStagePhotoPane}>
              <div className={styles.heroStagePhotoFrame}>
                <video
                  className={styles.heroStageVideo}
                  src="/videos/hero/herovid.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="Derma Medicare hero video"
                />
              </div>
            </div>

            <div className={styles.heroStagePanelPane}>{children}</div>
          </div>
        </article>
      </div>
    </div>
  );
}
