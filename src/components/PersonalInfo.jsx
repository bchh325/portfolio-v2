import React from 'react'
import styles from './css_modules/PersonalInfo.module.css'

export default function PersonalInfo() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }

  return (
    <div id="about-me" className={styles["personalinfo-container"]}>
      <span className={styles.name}>Bryan Chhorb</span>
      <div className={styles["about-me"]}>
        <p>
          Aspiring self-taught developer that is motivated by the desire to learn the latest technologies and by having fun thinking through programming problems as if it were a jigsaw puzzle.
        </p>
        <p>
          I have always loved the thought process that goes behind solving mathematical problems and I was delighted to find that developing applications requires the same line of reasoning to achieve a desired result.
        </p>
      </div>
      <div className={styles["tech-container"]}>
        <div>
          <span>Languages<br /></span>
          <span className={styles.languages}>
            React JSX -
            Node.js -
            HTML -
            CSS -
            Python -
            SQL
          </span>
        </div>
        <div>
          <span>Technologies Used<br /></span>
          <span className={styles.languages}>
            AWS: Lambda -
            API Gateway -
            DynamoDB -
            Cognito -
            Secrets Manager -
            IAM
          </span>
        </div>
        <button onClick={onClickUrl("https://drive.google.com/file/d/15vTDoehkJLn3aGRXdqbAUquCmLaNZSnL/view")} className={styles.resumeBtn}>
          Resume
        </button>
      </div>
    </div>
  )
}
