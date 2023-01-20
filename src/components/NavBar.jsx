import React from 'react'
import styles from './css_modules/NavBar.module.css'

export default function NavBar() {
  const scrollHandler = (id) => {
    console.log("click")
    const element = document.getElementById(id)
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles["nav-container"]}>
      <button onClick={() => { scrollHandler("about-me") }} className={styles["nav-button"]}>About Me</button>
      <button onClick={() => { scrollHandler("projects") }} className={styles["nav-button"]}>Projects</button>
      <button onClick={() => { scrollHandler("contact-me") }} className={styles["nav-button"]}>Contact Me</button>
    </div>
  )
}
