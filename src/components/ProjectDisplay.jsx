import React, { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './css_modules/ProjectDisplay.module.css'
import Modal from './Modal'

export default function ProjectDisplay({ info }) {
    const [showModal, setShowModal] = useState(false)
    const clickHandler = () => {
        setShowModal(true)
    }

    return (
        <>
            {showModal && <Modal info={info}/>}
            <FadeIn>
                <div onClick={clickHandler} className={`${styles.box} ${styles[info.img]}`}>{info.title}</div>
            </FadeIn>
        </>
    )
}
