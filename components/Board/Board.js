import styles from './Board.module.css'

function Board(props) {
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
                    <div className={styles.target} onMouseDown={() => { props.handleHit() }} />
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