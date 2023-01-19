import React from 'react'
import styles from './css_modules/IconLinks.module.css'
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"

export default function IconLinks() {

  const clickHandler = () => {
    console.log("click")
  }

  return (
    <div className={styles["icons-container"]}>
      <AiOutlineLinkedin onClick={clickHandler} className={styles.icon} size={50}/>
      <AiFillGithub onClick={clickHandler} className={styles.icon} size={50}/>
    </div>
  )
}
