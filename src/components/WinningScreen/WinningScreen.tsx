import styled from '@emotion/styled'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import Typography from '@mui/material/Typography'
import { ResetIcon } from '@/pages/HomePage/HomePage.styles'

interface Props {
  failureCount: number
  resetGame: () => void
}

const WinningScreenContainer = styled.div`
  height: 600px;
  width: 800px;
  margin: 0 auto;
  background-color: red;
  animation-name: stretch;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
  background-image: url('/winning.png');
  @keyframes stretch {
    0% {
      transform: scale(0.3);
      background-color: red;
      border-radius: 100%;
    }
    50% {
      background-color: orange;
    }
    100% {
      transform: scale(1.5);
      background-color: yellow;
    }
  }
`

export const WinningScreen: React.FC<Props> = (props: Props) => {
  return (
    <WinningScreenContainer>
      <CenteredContent>
        <Typography variant="h4" fontWeight={800} color="white">
          You win! <ResetIcon onClick={props.resetGame} />
          <p>You failed {props.failureCount} times!</p>
        </Typography>
      </CenteredContent>
    </WinningScreenContainer>
  )
}
