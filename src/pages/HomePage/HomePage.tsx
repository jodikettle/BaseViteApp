import { FC, useState } from 'react'
import { Typography } from '@mui/material'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { Colors } from '@/constants/styles'
import { MainPageWrapper, RocketIcon } from './HomePage.styles'
import { PlayCard } from '@/components/PlayCard/PlayCard'

export const HomePage: FC = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [gameStarted, setGameStart] = useState(false)

  const startTheGame = () => {
    setGameStart(true)
  }

  if (gameStarted) {
    return (
      <MainPageWrapper>
        <CenteredContent>
          <Typography variant="h4" fontWeight={800} color={[Colors.RichBlack]}>
            Memory Game
          </Typography>
          {items.map((item) => (
            <PlayCard key={item} />
          ))}
        </CenteredContent>
      </MainPageWrapper>
    )
  } else {
    return <RocketIcon onClick={startTheGame} />
  }
}
