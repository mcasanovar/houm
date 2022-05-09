import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  height: ${(props) => props.height || '3rem'};
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 25px;
  border-color: ${COLORS.gray};
`
