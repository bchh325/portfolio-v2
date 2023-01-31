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
      desc: 'Stock Watchlist application where users are able to register/sign in to access unique ticker data from Finnhub\'s Stock Market API',
      tech: 'AWS (Cognito - Lambda (Node.js 18) - API Gateway - DynamoDB - Secrets Manager - IAM) - React',
      img: 'watchlist'
    },
    tictactoe: {
      title: 'Minimax Tic-Tac-Toe',
      repoLink: 'https://github.com/bchh325/tictactoe/tree/master',
      webLink: 'https://bchh325.github.io/tictactoe/',
      desc: 'Tic-Tac-Toe using Minimax algorithm to determine opponent\'s next move. Global wins/losses/ties are stored on Firestore Database.',
      tech: 'Firestore Database - React',
      img: 'minimax'
    },
    portfolio: {
      title: 'My Portfolio Website',
      repoLink: 'https://github.com/bchh325/portfolio-v2',
      webLink: 'https://bchh325.github.io/portfolio-v2/',
      desc: 'My personal portfolio website that I built from scratch where peop... wait, you\'re on the site! Anyway, check out the repo for more information',
      tech: 'React',
      img: 'portfolio'
    },
    mechportfolio: {
      title: 'Client\'s Portfolio Website (WIP)',
      repoLink: 'https://github.com/bchh325/mech-portfolio',
      webLink: 'https://bchh325.github.io/mech-portfolio/',
      desc: 'Portfolio website that I am making for my friend in Aerospace Engineering to display his projects!',
      tech: 'React',
      img: 'mechportfolio'
    }
  })
  const modalHandler = (type) => {
    console.log(type)
  }

  return (
    <div id="projects" className={styles["projects-flex-container"]}>
      <ProjectDisplay info={projects.watchlist} />
      <ProjectDisplay info={projects.mechportfolio} />
      <ProjectDisplay info={projects.portfolio}/>
      <ProjectDisplay info={projects.tictactoe}/>
    </div>
  )
}
