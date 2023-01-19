import React from 'react'
import styles from './css_modules/IconLinks.module.css'
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"
import FadeIn from './FadeIn'

export default function IconLinks() {

  const clickHandler = () => {
    console.log("click")
  }

  return (
    <FadeIn>
      <div className={styles["icons-container"]}>
        <AiOutlineLinkedin onClick={clickHandler("linkedin")} className={styles.icon} size={50} />
        <AiFillGithub onClick={clickHandler("github")} className={styles.icon} size={50} />
      </div>
    </FadeIn>
  )
}
