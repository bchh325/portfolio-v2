import React from 'react'
import styles from './css_modules/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles["nav-container"]}>
        <button className={styles["nav-button"]}>About Me</button>
        <button className={styles["nav-button"]}>Projects</button>
        <button className={styles["nav-button"]}>Contact Me</button>
    </div>
  )
}
