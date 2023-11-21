import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.componentMusicPanel}>
      <div className={styles.componentMusicPanelChild} />
      <img className={styles.buttonMore} alt="" src="/button--more.svg" />
      <div className={styles.buttonPlayPause}>
        <img
          className={styles.buttonPlayPauseChild}
          alt=""
          src="/rectangle-3961.svg"
        />
        <div className={styles.iconPause}>
          <div className={styles.iconPauseChild} />
          <div className={styles.iconPauseItem} />
        </div>
      </div>
      <b className={styles.artist}>Artist</b>
      <div className={styles.youAreAmaizingContainer}>
        <span className={styles.youAreAmaizingContainer1}>
          <p className={styles.youAreAmaizing}>{`You are amaizing! `}</p>
          <p className={styles.remixByArtist}>(Remix by Artist)</p>
        </span>
      </div>
      <img className={styles.coverIcon} alt="" src="/cover2@2x.png" />
    </footer>
  );
};

export default Footer;
