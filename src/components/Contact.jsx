import React from 'react'
import styles from './css_modules/Contact.module.css'
import FadeIn from './FadeIn'
import { AiOutlineCopy } from "react-icons/ai"
import { notification } from 'antd'

export default function Contact() {

  const copyHandler = () => {
    notification.destroy()
    navigator.clipboard.writeText("chhorb.bryan@gmail.com")
    notification.success({
      message: "Email address copied!",
      description: "Send me any information that you wish! I'm also open to internships! :)",
      placement: 'top',
      duration: 2
    })
  }

  return (
    <div className={styles["contact-container"]}>
      <FadeIn>
        <div className={styles.contact}>
          <span className={styles.email}>chhorb.bryan@gmail.com</span>
          <div onClick={copyHandler} className={`${styles["copy-container"]} ${styles.icon}`}>
            <AiOutlineCopy size={30} />
            <span>Copy me!</span>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
