import React from 'react'
import styles from './css_modules/Contact.module.css'
import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <FadeIn>
        <div className={styles.contact}>Contact Info</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.contact}>Contact Info</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.contact}>Contact Info</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.contact}>Contact Info</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.contact}>Contact Info</div>
      </FadeIn>
      <FadeIn>
        <div className={styles.contact}>Contact Info</div>
      </FadeIn>
    </div>
  )
}
