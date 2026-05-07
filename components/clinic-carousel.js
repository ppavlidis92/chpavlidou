"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../app/site.module.css";

export function ClinicCarousel({ images, labels }) {
  const slides = useMemo(() => {
    const groups = [];
    for (let i = 0; i < images.length; i += 3) {
      groups.push(images.slice(i, i + 3));
    }
    return groups;
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <div className={styles.clinicCarousel}>
      <div className={styles.clinicCarouselViewport}>
        {slides.map((group, index) => (
          <div
            key={index}
            className={`${styles.clinicCarouselSlide} ${
              index === activeIndex ? styles.clinicCarouselSlideActive : ""
            }`}
            aria-hidden={index !== activeIndex}
          >
            <div className={styles.clinicCarouselTriplet}>
              {group.map((image) => (
                <div key={image.src} className={styles.clinicCarouselTripletItem}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, 380px"
                    className={styles.clinicCarouselImage}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.clinicCarouselControls}>
        <button type="button" onClick={showPrevious} aria-label={labels.previous}>
          <ChevronLeft className={styles.teamCarouselIcon} />
        </button>
        <button type="button" onClick={showNext} aria-label={labels.next}>
          <ChevronRight className={styles.teamCarouselIcon} />
        </button>
      </div>

      <div className={styles.clinicCarouselDots} aria-hidden="true">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === activeIndex ? styles.clinicCarouselDotActive : undefined}
            onClick={() => setActiveIndex(index)}
            tabIndex={-1}
          />
        ))}
      </div>
    </div>
  );
}
