import React from 'react'
import styles from './css_modules/Modal.module.css'
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai"

export default function Modal({ info, modalHandler }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    console.log("url('" + info.img + "')")
    return () => openInNewTab(url)
  }

  const closeHandler = () => {
    modalHandler(false)
  }

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content-background"]} />
      <div className={`${styles["modal-content"]} ${styles[info.img]}`}>
        <button onClick={closeHandler} className={styles.close}>X</button>
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
