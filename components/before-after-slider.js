"use client";

import { useCallback, useRef, useState } from "react";
import styles from "../app/site.module.css";

export function BeforeAfterSlider({ label, beforeLabel = "Before", afterLabel = "After" }) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  function handlePointerDown(event) {
    dragging.current = true;
    frameRef.current.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  }

  function handlePointerMove(event) {
    if (!dragging.current) return;
    updatePosition(event.clientX);
  }

  function handlePointerUp(event) {
    dragging.current = false;
    frameRef.current.releasePointerCapture(event.pointerId);
  }

  return (
    <div className={styles.beforeAfterSlider} aria-label={label}>
      <div
        className={styles.beforeAfterFrame}
        ref={frameRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className={`${styles.beforeAfterLayer} ${styles.beforeAfterBefore}`}>
          <span>{beforeLabel}</span>
        </div>
        <div
          className={`${styles.beforeAfterLayer} ${styles.beforeAfterAfter}`}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <span>{afterLabel}</span>
        </div>
        <div className={styles.beforeAfterHandle} style={{ left: `${position}%` }} />
      </div>
    </div>
  );
}
