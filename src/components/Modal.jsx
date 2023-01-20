import React from 'react'
import styles from './css_modules/Modal.module.css'
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai"

export default function Modal({ repoLink, webLink, desc, technologies, modalHandler }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content-background"]}>Modal Background</div>
      <div className={styles["modal-content"]}>
        <h2>Project Title</h2>
        <div onClick={onClickUrl('https://github.com/bchh325/trading-site')} className={styles["item-container"]}>
          <AiFillGithub className={styles.icon} size={40} />
          <span>Visit the Repository</span>
        </div>
        <div onClick={onClickUrl('https://bchh325.github.io/trading-site/#/')} className={styles["item-container"]}>
          <AiOutlineArrowRight className={styles.icon} size={40} />
          <span>Visit the Website</span>
        </div>
        <span>Description</span>
        <span>Technologies used</span>
      </div>
    </div>
  )
}
