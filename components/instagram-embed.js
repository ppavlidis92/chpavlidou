import styles from "../app/site.module.css";

export function InstagramEmbed({ postId, caption }) {
  return (
    <div className={styles.instagramEmbedWrap}>
      <iframe
        src={`https://www.instagram.com/p/${postId}/embed`}
        title={caption ?? "Instagram post"}
        loading="lazy"
        allowFullScreen
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}
