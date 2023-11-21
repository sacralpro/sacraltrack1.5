import type { NextPage } from "next";
import styles from "./sacral-track-menu.module.css";

const SacralTrackMenu: NextPage = () => {
  return (
    <header className={styles.menu}>
      <div className={styles.logogtype}>
        <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        <b className={styles.sacralTrack}>Sacral Track</b>
      </div>
      <div className={styles.items}>
        <div className={styles.btnGenre}>
          <img
            className={styles.iconComponentsvg}
            alt=""
            src="/icon-componentsvg1.svg"
          />
          <div className={styles.hipHop}>Hip-Hop</div>
        </div>
        <div className={styles.people}>People</div>
        <div className={styles.people}>News</div>
        <div className={styles.people}>Events</div>
      </div>
      <div className={styles.rightSide}>
        <img
          className={styles.buttonSearch}
          alt=""
          src="/button--search1.svg"
        />
        <div className={styles.buttonCart}>
          <img
            className={styles.buttonCartChild}
            alt=""
            src="/rectangle-3882.svg"
          />
          <div className={styles.div}>
            <span>$</span>
            <span className={styles.span}>10,8</span>
          </div>
          <img className={styles.buttonCart1} alt="" src="/button--cart1.svg" />
        </div>
      </div>
    </header>
  );
};

export default SacralTrackMenu;
