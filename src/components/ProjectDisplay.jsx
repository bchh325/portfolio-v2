import React from 'react'
import FadeIn from './FadeIn'
import styles from './css_modules/ProjectDisplay.module.css'

export default function ProjectDisplay({ modalHandler }) {
    const clickHandler = () => {
        modalHandler("Project 1")
    }

    return (
        <FadeIn>
            <div onClick={clickHandler} className={styles.box}>Modal Project</div>
        </FadeIn>
    )
}
