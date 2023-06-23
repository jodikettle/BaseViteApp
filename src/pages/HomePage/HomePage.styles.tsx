import { Colors } from '@/constants/styles'
import styled from '@emotion/styled'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import RestartAlt from '@mui/icons-material/RestartAlt'

export const MainPageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const RocketIcon = styled(RocketLaunchIcon)`
  font-size: 10em;
  margin-top: 10px;
  padding: 20px;
  border: 4px solid ${Colors.MidnightGreen};
  border-radius: 50%;
  fill: ${Colors.MidnightGreen};
  overflow: initial;
  cursor: pointer;
  transition: 400ms;
  opacity: 0.9;
  background: ${Colors.White};

  &:hover {
    transform: scale(2.5);
    opacity: 1;
  }
`

export const ResetIcon = styled(RestartAlt)`
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`
