import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '3rem'};
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 25px;
  border-color: ${COLORS.gray};
`

export const SInput = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0px 20px;
  color: ${COLORS.secondary};
  font-family: 'Fredoka', sans-serif;
  font-size: medium;
  font-weight: bold;
  background-color: ${COLORS.background};
  border-style: none;
  outline: none;
`
