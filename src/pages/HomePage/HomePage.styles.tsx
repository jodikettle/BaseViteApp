import styled from '@emotion/styled'
import RestartAlt from '@mui/icons-material/RestartAlt'
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline'

export const MainPageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: lightblue;
`

export const StartIcon = styled(PlayCircleOutline)`
  font-size: 30vh;
  color: DodgerBlue;
  opacity: 0.7;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`

export const ResetIcon = styled(RestartAlt)`
  &:hover {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    /* transform: rotate(3deg); */
    /* transform: rotate(0.3rad);/ */
    /* transform: rotate(3grad); */
    /* transform: rotate(.03turn); */

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
