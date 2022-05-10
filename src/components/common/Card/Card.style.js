import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  flex-direction: column;
  width: 360px;
  height: 550px;
  align-self: center;
  background-color: ${COLORS.background};
  box-shadow: 2px 2px 30px 2px #cbcbcb;
  border-radius: 15px;

  @media (min-width: 1200px) {
    width: 400px;
  }
`
