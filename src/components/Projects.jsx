import React from 'react'
import styles from './css_modules/Projects.module.css'
import FadeIn from './FadeIn'

export default function Projects() {
  return (
    <div className={styles["projects-flex-container"]}>
      <FadeIn>
        <div className={styles.box}>Box</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Box</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Box</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Box</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Box</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.box}>Box</div>
      </FadeIn>
    </div>
  )
}
