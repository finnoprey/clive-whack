/* eslint-disable @next/next/no-img-element */
import styles from './Board.module.css'

function Board(props) {
  const FILE_NAMES = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png']

  function getRandomImageName() {
    return FILE_NAMES[Math.floor(Math.random() * FILE_NAMES.length)]
  }

  function getRandomImagePath() {
    return 'https://whack.shutupc.live/images/' + getRandomImageName()
  }

  return (
    <div className={styles.board}>
      {
        props.board.map(row => {
          return (
            row.map((cell, key) => {
              if (cell == 0) {
                return (
                  <div className={styles.cell} key={key} onMouseDown={() => { props.handleMiss() }} >
                      
                  </div>
                )
              } else {
                return (
                  <div className={styles.cell} key={key} >
                    <div className={styles.target} onMouseDown={() => { props.handleHit() }}>
                      <img src={getRandomImagePath()} alt="Clive image" /> 
                    </div>
                  </div>
                )
              }
            })
          )
        })
      }
    </div>
  )
}

export default Board;