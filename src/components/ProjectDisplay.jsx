import React, { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './css_modules/ProjectDisplay.module.css'
import Modal from './Modal'

export default function ProjectDisplay({ info }) {
    const [showModal, setShowModal] = useState(false)

    const modalHandler = (value) => {
        setShowModal(value)
    }

    return (
        <>
            {showModal && <Modal modalHandler={modalHandler} info={info} />}
            <FadeIn>
                <div onClick={() => { modalHandler(true) }} className={`${styles.box} ${styles[info.img]}`}>
                    <span className={styles.title}>
                        {info.title}
                    </span>
                </div>
            </FadeIn>
        </>
    )
}
