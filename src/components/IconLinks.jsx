import React from 'react'
import styles from './css_modules/IconLinks.module.css'
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"
import FadeIn from './FadeIn'

export default function IconLinks() {
  return (
    <FadeIn>
      <div className={styles["icons-container"]}>
        <a href="https://www.linkedin.com/in/bryanmtxd/" target="_blank">
          <AiOutlineLinkedin className={styles.icon} size={50} />
        </a>
        <a href="https://github.com/bchh325" target="_blank">
          <AiFillGithub className={styles.icon} size={50} />
        </a>
      </div>
    </FadeIn>
  )
}
