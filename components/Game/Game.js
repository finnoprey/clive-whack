import styles from './Game.module.css'
import Board from '../Board/Board.js'
import { useState } from 'react'

function Game() {
  const blankBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  let [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ])

  function moveTarget() {
    setBoard(blankBoard)
    let newBoard = blankBoard
    newBoard[getRandomInt(4)][getRandomInt(4)] = 1
  }

  function handleMiss() {
    console.log('Missed')
  }
  
  function handleHit() {
    console.log('Hit')
    moveTarget()
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.gameContainer}>
          <Board board={board} handleHit={handleHit} handleMiss={handleMiss} />
        </div>
      </div>
    </>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export default Game;