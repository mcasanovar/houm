import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SStandardButton = styled.button`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '30px'};
  border-radius: 15px;
  background: ${COLORS.background};
  border-style: none;
  font-weight: 600;
  color: ${COLORS.darkGray};
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 30px 2px #cbcbcb;
    transition: box-shadow .5s;
  }

  &:not(hover) {
    box-shadow: none;
    transition: box-shadow .5s;
  }
`

export const SPrimaryButton = styled(SStandardButton)`
  background: ${COLORS.primary};
  color: ${COLORS.background};
`
