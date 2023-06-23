import { FC, useEffect, useRef, useState } from 'react'
import { Typography } from '@mui/material'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { Colors } from '@/constants/styles'
import { MainPageWrapper, StartIcon, ResetIcon } from './HomePage.styles'
import { PlayCard } from '@/components/PlayCard/PlayCard'
import { PlayCardContainer } from '@/components/PlayCard/PlayCardContainer'
import { createGameCards } from '@/utils/cardGenerator'

export interface Card {
  key: string
  value: string
  emoji: string
}

export const HomePage: FC = () => {
  const [gameStarted, setGameStart] = useState(false)
  const [solvedValues, setSolvedValues] = useState<string[]>([])
  const [openValue1, setOpenValue1] = useState<Card | undefined>(undefined)
  const [openValue2, setOpenValue2] = useState<Card | undefined>(undefined)
  const [actionable, setActionable] = useState<boolean>(false)
  const [failureCount, setFailureCount] = useState<number>(0)
  const cards = useRef(createGameCards())

  const correctAudio = new Audio('/match-success.mp3')
  const failedAudio = new Audio('/match-failed.mp3')
  const gameStartAudio = new Audio('/game-start.mp3')
  const gameWonAudio = new Audio('/game-win.mp3')

  correctAudio.volume = 0.2
  failedAudio.volume = 0.2
  gameStartAudio.volume = 0.2
  gameWonAudio.volume = 0.2

  useEffect(() => {
    if (!!openValue1 && !!openValue2) {
      attemptSolve(openValue1.value, openValue2.value)
    }
  }, [openValue1, openValue2])

  const wait = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms))

  const attemptSolve = (value1: string, value2: string) => {
    setActionable(false)
    if (value1 === value2) {
      handleSolveSuccess(value1)
    } else {
      handleSolveFailure()
    }
    setActionable(true)
  }

  const waitForClearValues = async () => {
    await wait(2000)
    clearValues()
  }

  const handleSolveFailure = () => {
    setFailureCount(failureCount + 1)
    failedAudio.play()
    waitForClearValues()
  }

  const handleSolveSuccess = (val: string) => {
    if (!solvedValues.includes(val)) {
      setSolvedValues([...solvedValues, val])
    }
    correctAudio.play()
    waitForClearValues()
  }

  const clearValues = () => {
    setOpenValue1(undefined)
    setOpenValue2(undefined)
  }

  const handleCardClicked = (card: Card) => {
    console.log(card)
    if (!openValue1) {
      setOpenValue1(card)
    } else if (!openValue2) {
      setOpenValue2(card)
    }
  }

  const startTheGame = () => {
    gameStartAudio.play()
    setGameStart(true)
    setActionable(true)
  }

  const resetGame = () => {
    setActionable(false)
    setGameStart(false)
    setSolvedValues([])
    setOpenValue1(undefined)
    setOpenValue2(undefined)
    setActionable(true)
    setFailureCount(0)
  }

  const isOpen = (card: Card) =>
    openValue1?.key === card.key ||
    openValue2?.key === card.key ||
    solvedValues.includes(card.value)

  if (gameStarted) {
    return (
      <MainPageWrapper>
        <CenteredContent>
          <Typography
            paddingBottom={5}
            variant="h4"
            fontWeight={800}
            color={[Colors.RichBlack]}
          >
            Memory Game <ResetIcon onClick={resetGame} />
          </Typography>
          <PlayCardContainer>
            {cards.current.map((item) => (
              <PlayCard
                actionable={actionable}
                displayText={item.emoji}
                open={isOpen(item)}
                onClick={() => handleCardClicked(item)}
                key={item.key}
              />
            ))}
          </PlayCardContainer>
          <Typography
            paddingTop={3}
            variant="h6"
            fontWeight={500}
            color={[Colors.RichBlack]}
          >
            Failure Count: {failureCount}
          </Typography>
        </CenteredContent>
      </MainPageWrapper>
    )
  } else {
    return (
      <MainPageWrapper>
        <CenteredContent>
          <StartIcon onClick={startTheGame} />
        </CenteredContent>
      </MainPageWrapper>
    )
  }
}
