import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '40px'};
  border-radius: 20px;
  background-color: ${props => props.background || COLORS.primary};
  border-style: none;
  padding: 10px;
`

export const SText = styled.span`
  color: ${props => props.textColor || COLORS.black};
`
