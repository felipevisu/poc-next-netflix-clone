import YouTubePlayer from "@/components/YouTubePlayer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <YouTubePlayer videoId="T-U3c1nU3eM" />
      </main>
    </div>
  );
}
