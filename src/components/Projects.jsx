import React from 'react'
import styles from './css_modules/Projects.module.css'
import FadeIn from './FadeIn'
import Modal from './Modal'
import { useState } from 'react'
import ProjectDisplay from './ProjectDisplay'

export default function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState("")

  const modalHandler = (type) => {
    console.log(type)
  }

  return (
    <div className={styles["projects-flex-container"]}>
      <Modal />
      <FadeIn>
        <div className={`${styles.box} ${styles["first-project"]}`}>Placeholder Text. Modal comes later</div>
      </FadeIn>
      <FadeIn>
        <div className={`${styles.box} ${styles["second-project"]}`}>Placeholder Text. Modal comes later</div>
      </FadeIn>
      <ProjectDisplay modalHandler={modalHandler} />
      <FadeIn>
        <div className={styles.box}>Placeholder Text.</div>
      </FadeIn>
    </div>
  )
}
