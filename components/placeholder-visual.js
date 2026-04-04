import styles from "../app/site.module.css";

export function PlaceholderVisual({ label, detail, tall = false }) {
  return (
    <div className={`${styles.placeholderVisual} ${tall ? styles.placeholderTall : ""}`}>
      <span className={styles.placeholderLabel}>{label}</span>
      <p>{detail}</p>
    </div>
  );
}
