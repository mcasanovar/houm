import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SInput = styled.input`
  display: flex;
  justify-content: center;
  width: 5rem;
  margin: 0px 20px;
  color: ${COLORS.secondary};
  font-family: 'Fredoka', sans-serif;
  font-size: medium;
  font-weight: bold;
  background-color: ${COLORS.white};
  border-style: none;
  outline: none;

  &:focus {
    width: 50rem;
    transition: width 0.6s;
  }

  &:not(focus) {
    width: 5rem;
    transition: width 0.6s;
  }
`
