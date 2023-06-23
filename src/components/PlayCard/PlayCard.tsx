import styled from '@emotion/styled'
import React from 'react'

interface Props {
  displayText: string
  open: boolean
  actionable: boolean
  onClick: () => void
}

const PlayCardButton = styled.button<{ open: boolean; disabled: boolean }>`
  color: white;
  background-color: DodgerBlue;
  width: 10vw;
  height: 7vw;
  border-width: 5px;
  border-radius: 25%;
  font-size: 6vh;
  transition: all 0.5s ease;
  &:hover {
    transform: ${(props) => (props.disabled ? 'null' : 'scale(1.03)')};
  }

  div {
    transition: all 1s ease;
    opacity: ${(props) => (props.open ? '1' : '0')};
  }
`

export const PlayCard: React.FC<Props> = (props) => {
  return (
    <PlayCardButton
      open={props.open}
      disabled={props.open || !props.actionable}
      onClick={props.onClick}
    >
      <div>{props.displayText}</div>
    </PlayCardButton>
  )
}
