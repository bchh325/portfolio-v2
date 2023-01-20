import React from 'react'
import styles from './css_modules/Projects.module.css'
import FadeIn from './FadeIn'
import Modal from './Modal'
import { useState } from 'react'
import ProjectDisplay from './ProjectDisplay'

export default function Projects() {
  const [projects, setProjects] = useState({
    watchlist: {
      title: 'Stock Watchlist',
      repoLink: 'https://github.com/bchh325/trading-site',
      webLink: 'https://bchh325.github.io/trading-site/#/',
      desc: 'sample description',
      tech: 'sample tech',
      img: 'watchlist'
    },
    tictactoe: {
      title: 'Minimax Tic-Tac-Toe',
      repoLink: 'https://github.com/bchh325/tictactoe',
      webLink: 'https://bchh325.github.io/tictactoe/',
      desc: 'sample description',
      tech: 'sample tech',
      img: 'minimax'
    }
  })
  const modalHandler = (type) => {
    console.log(type)
  }

  return (
    <div className={styles["projects-flex-container"]}>
      <ProjectDisplay info={projects.watchlist} />
      <ProjectDisplay info={projects.tictactoe}/>
    </div>
  )
}
