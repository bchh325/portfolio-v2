import React from 'react'
import styles from './css_modules/Projects.module.css'
import FadeIn from './FadeIn'

export default function Projects() {
  return (
    <div className={styles["projects-flex-container"]}>
      <FadeIn>
        <div className={`${styles.box} ${styles["first-project"]}`}>Project</div>
      </FadeIn>
      <FadeIn>
        <div className={`${styles.box} ${styles["second-project"]}`}>Project</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Project</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Project</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Project</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Project</div>
      </FadeIn>
    </div>
  )
}
