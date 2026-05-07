"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../app/site.module.css";

export function TeamTripletCarousel({ members, labels }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const groups = useMemo(() => {
    const triplets = [];

    for (let index = 0; index < members.length; index += 3) {
      triplets.push(members.slice(index, index + 3));
    }

    return triplets;
  }, [members]);

  useEffect(() => {
    if (groups.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveGroup((current) => (current + 1) % groups.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [groups.length]);

  const showPrevious = () => {
    setActiveGroup((current) => (current - 1 + groups.length) % groups.length);
  };

  const showNext = () => {
    setActiveGroup((current) => (current + 1) % groups.length);
  };

  return (
    <div className={styles.teamCarousel}>
      <div className={styles.teamCarouselTop}>
        <p>{labels.description}</p>
        {groups.length > 1 ? (
          <div className={styles.teamCarouselControls}>
            <button type="button" onClick={showPrevious} aria-label={labels.previous}>
              <ChevronLeft className={styles.teamCarouselIcon} />
            </button>
            <button type="button" onClick={showNext} aria-label={labels.next}>
              <ChevronRight className={styles.teamCarouselIcon} />
            </button>
          </div>
        ) : null}
      </div>

      <div className={styles.teamTripletViewport}>
        {groups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`${styles.teamTripletSlide} ${
              groupIndex === activeGroup ? styles.teamTripletSlideActive : ""
            }`}
            aria-hidden={groupIndex !== activeGroup}
          >
            {group.map((member) => (
              <article
                key={member.name}
                className={styles.teamMemberCard}
                style={{ "--team-tone": member.color }}
              >
                <div className={styles.teamMemberPhoto}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1080px) 33vw, 360px"
                      className={styles.teamMemberImage}
                    />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <div className={styles.teamMemberInfo}>
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>

      {groups.length > 1 ? (
        <div className={styles.teamCarouselDots} aria-hidden="true">
          {groups.map((_, index) => (
            <span
              key={index}
              className={index === activeGroup ? styles.teamCarouselDotActive : undefined}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
