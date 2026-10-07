"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import styles from "../app/site.module.css";
import { InstagramEmbed } from "./instagram-embed";

// Instagram's /embed template: a fixed-height header bar followed by a
// media frame whose height scales proportionally with the embed width.
const HEADER_HEIGHT = 54;
const MEDIA_RATIO = 1111 / 889;

export function InstagramVideoCard({ postId, caption }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) {
      return undefined;
    }

    const updateSize = () => {
      setIframeHeight(Math.ceil(HEADER_HEIGHT + MEDIA_RATIO * el.clientWidth));
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.instagramThumbButton}
        onClick={() => setIsOpen(true)}
        aria-label={caption ? `Play video: ${caption}` : "Play video"}
      >
        <div className={styles.instagramThumbWrap} ref={wrapRef}>
          {/* shifted up by the fixed header height so only the media frame shows */}
          <iframe
            src={`https://www.instagram.com/p/${postId}/embed`}
            title={caption ?? "Instagram post"}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            scrolling="no"
            style={iframeHeight ? { height: `${iframeHeight}px` } : undefined}
          />
        </div>
        <span className={styles.instagramPlayOverlay}>
          <Play />
        </span>
      </button>

      {isOpen ? (
        <div className={styles.instagramModalBackdrop} onClick={() => setIsOpen(false)}>
          <div className={styles.instagramModalContent} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.instagramModalClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X />
            </button>
            <InstagramEmbed postId={postId} caption={caption} />
          </div>
        </div>
      ) : null}
    </>
  );
}
