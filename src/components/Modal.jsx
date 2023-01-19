import React from 'react'
import styles from './css_modules/Modal.module.css'

export default function Modal() {
  return (
    <div className={styles["modal-container"]}>
        <div className={styles["modal-content"]}>
            <span>Modal Content</span>
            <span>Modal Content</span>
            <span>Modal Content</span>
            <span>Modal Content</span>
            <span>Modal Content</span>
        </div>
    </div>
  )
}