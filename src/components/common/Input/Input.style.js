import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  height: 45px;
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 25px;
  border-color: ${COLORS.gray};
  background-color: ${COLORS.white};
`

export const SInput = styled.input`
  display: flex;
  justify-content: center;
  width: ${(props) => props.width || '100px'};
  margin: 0px 20px;
  color: ${COLORS.secondary};
  font-family: 'Fredoka', sans-serif;
  font-size: medium;
  font-weight: bold;
  background-color: ${COLORS.white};
  border-style: none;
  outline: none;

  &:focus {
    @media (min-width: 510px) {
      width: ${(props) => props.focusWidth || '600px'};
      transition: width 0.6s;
    }

    @media (max-width: 510px) {
      width: ${(props) => props.focusWidth || '100px'};
      transition: width 0.6s;
      /* width: fit-content; */
    }

  }

  &:not(focus) {
    width: ${(props) => props.width || '100px'};
    transition: width 0.6s;
  }
`
