import React from 'react'
import styles from './css_modules/Projects.module.css'

export default function Projects() {
  return (
    <div className={styles["projects-flex-container"]}>
        <div className={styles["project-container"]}><span>Project A</span></div>
        <div className={styles["project-container"]}><span>Project B</span></div>
        <div className={styles["project-container"]}><span>Project C</span></div>
    </div>
  )
}
