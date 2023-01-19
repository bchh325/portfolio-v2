import React from 'react'
import styles from './css_modules/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
        <span className={styles.info}>Created using React by Bryan Chhorb</span>
    </div>
  )
}
