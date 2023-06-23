import styled from '@emotion/styled'
import React from 'react'

interface Props {
  value: string
  open: boolean
  actionable: boolean
  onClick: () => void
}

const PlayCardButton = styled.button`
  color: white;
  background-color: DodgerBlue;
`

export const PlayCard: React.FC<Props> = (props) =>
  props.open ? (
    <PlayCardButton disabled>{props.value}</PlayCardButton>
  ) : (
    <PlayCardButton disabled={!props.actionable} onClick={props.onClick}>
      X
    </PlayCardButton>
  )
