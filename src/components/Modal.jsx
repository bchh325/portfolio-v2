import React from 'react'
import styles from './css_modules/Modal.module.css'
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai"

export default function Modal({ info }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    console.log("url('" + info.img + "')")
    return () => openInNewTab(url)
  }

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content-background"]} />
      <div className={`${styles["modal-content"]} ${styles[info.img]}`}>
        <h2>{info.title}</h2>
        <div onClick={onClickUrl(info.repoLink)} className={styles["item-container"]}>
          <AiFillGithub className={styles.icon} size={40} />
          <span>Visit the Repository</span>
        </div>
        <div onClick={onClickUrl(info.webLink)} className={styles["item-container"]}>
          <AiOutlineArrowRight className={styles.icon} size={40} />
          <span>Visit the Website</span>
        </div>
        <span>{info.desc}</span>
        <span>{info.tech}</span>
      </div>
    </div>
  )
}
