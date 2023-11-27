import React from 'react';
import styles from './left-sidebar.module.css';


export default function LeftSidebar() {
  return (
    <div className={styles['main-container']}>
      <div className={styles['section']}>
        <span className={styles['text']}>Artist name</span>
        <div className={styles['pic']} />
        <div className={styles['box']}>
          <span className={styles['text-2']}>Friends</span>
          <span className={styles['text-3']}>Message</span>
          <span className={styles['text-4']}>My Tracks</span>
          <span className={styles['text-5']}>Money</span>
        </div>
        <div className={styles['pic-2']}>
          <div className={styles['wrapper']}>
            <div className={styles['pic-3']} />
            <span className={styles['text-6']}>Release a track</span>
          </div>
        </div>
        <div className={styles['wrapper-2']}>
          <div className={styles['pic-4']} />
          <span className={styles['text-7']}>Log out</span>
          <span className={styles['text-8']}>Settings</span>
        </div>
      </div>
    </div>
  );
}