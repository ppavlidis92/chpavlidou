"use client";

import Image from "next/image";
import { useDeferredValue, useMemo, useState } from "react";
import {
  BadgeAlert,
  Baby,
  Droplets,
  Flower2,
  HeartPulse,
  Microscope,
  ScanSearch,
  Scissors,
  Search,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  SunMedium,
} from "lucide-react";
import styles from "../app/site.module.css";

const iconMap = {
  acne: Sparkles,
  rosacea: Flower2,
  eczema: Droplets,
  psoriasis: ShieldPlus,
  hair: HeartPulse,
  moles: ScanSearch,
  pediatric: Baby,
  venereology: Stethoscope,
  skinTypes: SunMedium,
  conditions: Microscope,
  surgery: Scissors,
  aesthetics: Sparkles,
  urgent: BadgeAlert,
};

export function KnowledgeHubExplorer({ content }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSlug, setActiveSlug] = useState("");
  const deferredQuery = useDeferredValue(query);

  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredEntries = useMemo(() => {
    return content.entries.filter((entry) => {
      const matchesCategory =
        selectedCategory === "all" || entry.categoryKey === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        entry.title,
        entry.category,
        entry.overview,
        ...entry.symptoms,
        ...entry.triggers,
        ...entry.related,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [content.entries, normalizedQuery, selectedCategory]);

  const hasSearch = normalizedQuery.length > 0;

  const bookmarkEntries =
    hasSearch || selectedCategory !== "all" ? filteredEntries : content.entries;

  const visibleEntries = activeSlug
    ? filteredEntries.filter((entry) => entry.slug === activeSlug)
    : hasSearch
      ? filteredEntries
      : [];

  const activeEntry =
    content.entries.find((entry) => entry.slug === activeSlug) ??
    visibleEntries[0] ??
    null;

  const quickTopics = Array.from(
    new Set([...content.searchSuggestions, ...(activeEntry?.related ?? [])]),
  );
  const heroPreviewEntries = [
    { slug: "acne", image: "/images/knowledge-hub/acne.png" },
    { slug: "rosacea", image: "/images/knowledge-hub/rosacea.png" },
    { slug: "eczema", image: "/images/knowledge-hub/eczema.png" },
    { slug: "psoriasis", image: "/images/knowledge-hub/psoriasis.png" },
    { slug: "moles-skin-checks", image: "/images/knowledge-hub/moles-skin-checks.png" },
    { slug: "warts-molluscum", image: "/images/knowledge-hub/warts-molluscum.png" },
  ]
    .map((item) => {
      const entry = content.entries.find((candidate) => candidate.slug === item.slug);

      return entry ? { ...entry, image: item.image } : null;
    })
    .filter(Boolean);

  function openEntry(slug) {
    setActiveSlug(slug);
    requestAnimationFrame(() => {
      const element = document.getElementById(`condition-${slug}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  return (
    <>
      <section className={`${styles.section} ${styles.knowledgeHeroSection}`}>
        <div className={styles.container}>
          <div className={styles.knowledgeHeroGrid}>
            <div className={styles.knowledgeHeroCopy}>
              <span className={styles.eyebrow}>{content.eyebrow}</span>
              <h1 className={styles.pageTitle}>{content.title}</h1>
              <p className={styles.pageLead}>{content.description}</p>
            </div>

            <div className={styles.knowledgeHeroVisual}>
              <div className={styles.knowledgeHeroBadge}>
                <span>{content.heroBadge ?? content.eyebrow}</span>
              </div>
              <div className={styles.knowledgeHeroShowcase}>
                {heroPreviewEntries.map((entry) => {
                  return (
                    <div key={entry.slug} className={styles.knowledgeHeroShowcaseCard}>
                      <span className={styles.knowledgeHeroThumb}>
                        <Image
                          src={entry.image}
                          alt={entry.title}
                          fill
                          sizes="74px"
                          className={styles.knowledgeHeroThumbImage}
                        />
                      </span>
                      <div className={styles.knowledgeHeroCardText}>
                        <strong>{entry.title}</strong>
                        <span>{entry.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.knowledgeUnifiedPanel}>
            <div className={styles.knowledgeSearchPanel}>
              <div className={styles.searchFieldWrap}>
                <Search className={styles.searchFieldIcon} />
                <input
                  className={styles.searchField}
                  type="search"
                  placeholder={content.searchPlaceholder}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveSlug("");
                  }}
                />
              </div>

              <div className={styles.knowledgeFilterRow}>
                {content.categoryFilters.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={`${styles.filterChip} ${
                      selectedCategory === item.key ? styles.filterChipActive : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(item.key);
                      setActiveSlug("");
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className={styles.knowledgeQuickRow}>
                <div className={styles.topicChips}>
                  {quickTopics.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={styles.topicChipButton}
                      onClick={() => {
                        setQuery(item);
                        setActiveSlug("");
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.bookmarkGrid}>
              {bookmarkEntries.map((entry) => {
                const Icon = iconMap[entry.iconKey] ?? Microscope;
                const isActive = activeEntry?.slug === entry.slug;

                return (
                  <button
                    key={entry.slug}
                    type="button"
                    className={`${styles.bookmarkCard} ${isActive ? styles.bookmarkCardActive : ""}`}
                    onClick={() => openEntry(entry.slug)}
                  >
                    <span className={styles.bookmarkIconWrap}>
                      <Icon className={styles.bookmarkIcon} />
                    </span>
                    <div>
                      <strong>{entry.title}</strong>
                      <span>{entry.category}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className={styles.guideContent}>
              {visibleEntries.length === 0 && hasSearch ? (
                <div className={styles.emptyStateCard}>
                  <h3>{content.emptyTitle}</h3>
                  <p>{content.emptyDescription}</p>
                </div>
              ) : visibleEntries.length === 0 ? (
                <div className={styles.emptyStateCard}>
                  <h3>{content.startTitle}</h3>
                  <p>{content.startDescription}</p>
                </div>
              ) : (
                visibleEntries.map((entry) => {
                  const Icon = iconMap[entry.iconKey] ?? Microscope;
                  const isActive = activeEntry?.slug === entry.slug;

                  return (
                    <article
                      id={`condition-${entry.slug}`}
                      key={entry.slug}
                      className={`${styles.conditionGuideCard} ${
                        isActive ? styles.conditionGuideCardActive : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={styles.conditionGuideHeader}
                        onClick={() => setActiveSlug(entry.slug)}
                      >
                        <span className={styles.conditionGuideIconWrap}>
                          <Icon className={styles.conditionGuideIcon} />
                        </span>
                        <div className={styles.conditionGuideTitleWrap}>
                          <strong>{entry.title}</strong>
                          <span>{entry.category}</span>
                        </div>
                      </button>

                      <div className={styles.conditionGuideBody}>
                        <p className={styles.conditionGuideOverview}>{entry.overview}</p>

                        <div className={styles.conditionGuideGrid}>
                          <section className={styles.conditionGuideSection}>
                            <h3>{content.sections.symptoms}</h3>
                            <ul>
                              {entry.symptoms.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </section>

                          <section className={styles.conditionGuideSection}>
                            <h3>{content.sections.triggers}</h3>
                            <ul>
                              {entry.triggers.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </section>

                          <section className={styles.conditionGuideSection}>
                            <h3>{content.sections.approach}</h3>
                            <p>{entry.approach}</p>
                          </section>

                          <section className={styles.conditionGuideSection}>
                            <h3>{content.sections.booking}</h3>
                            <p>{entry.bookingAdvice}</p>
                          </section>
                        </div>

                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
