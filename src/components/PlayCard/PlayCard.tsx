import styled from '@emotion/styled'
import React from 'react'

const onSquareClick = () => {
  console.log('clicked')
}

interface Props { }

const PlayCardButton = styled.button`
  color: white;
  background-color: DodgerBlue;
`

export const PlayCard: React.FC<Props> = (props) => {
  return <PlayCardButton onClick={onSquareClick}>X</PlayCardButton>
}
