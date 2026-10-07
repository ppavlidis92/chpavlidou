"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../app/site.module.css";
import { InstagramVideoCard } from "./instagram-video-card";

export function NewsVideoCarousel({ postIds, labels }) {
  const slides = useMemo(() => {
    const groups = [];
    for (let i = 0; i < postIds.length; i += 3) {
      groups.push(postIds.slice(i, i + 3));
    }
    return groups;
  }, [postIds]);

  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={styles.newsVideoCarousel}>
      <div className={styles.newsVideoCarouselViewport}>
        <div
          className={styles.newsVideoCarouselTrack}
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((group, index) => (
            <div
              key={index}
              className={styles.newsVideoCarouselSlide}
              style={{
                width: `${100 / slides.length}%`,
                visibility: index === activeIndex ? "visible" : "hidden",
              }}
              aria-hidden={index !== activeIndex}
            >
              <div className={styles.newsVideoGrid}>
                {group.map((postId) => (
                  <div key={postId} className={styles.newsVideoCard}>
                    <InstagramVideoCard postId={postId} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 ? (
        <>
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
        </>
      ) : null}
    </div>
  );
}
