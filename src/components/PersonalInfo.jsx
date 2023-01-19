import React from 'react'
import styles from './css_modules/PersonalInfo.module.css'

export default function PersonalInfo() {
  return (
    <div className={styles["personalinfo-container"]}>
      <span>Profile Picture Placeholder</span>
      <span>About Me Placeholder</span>
      <span>Languages Placeholder</span>
    </div>
  )
}
