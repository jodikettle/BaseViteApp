import styled from '@emotion/styled'
import React from 'react'

const onSquareClick = () => {
  console.log('clicked')
}

interface Props { }

const PlayCardButton = styled.button`
  grid-column-start: 1;
  color: white;
  background-color: DodgerBlue;
  width: 40px;
  height: 40px;
`

export const PlayCard: React.FC<Props> = (props) => {
  return <PlayCardButton onClick={onSquareClick}>X</PlayCardButton>
}
