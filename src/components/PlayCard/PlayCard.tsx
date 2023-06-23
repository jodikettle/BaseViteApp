import React from 'react'

const onSquareClick = () => {
  console.log('clicked')
}

export const PlayCard: React.FC<Props> = (props) => {
  const mystyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    width: '40px',
    height: '40px',
  }
  return (
    <button style={{ mystyle }} className="square" onClick={onSquareClick}>
      X
    </button>
  )
}
