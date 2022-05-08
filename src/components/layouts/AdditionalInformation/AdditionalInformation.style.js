import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.3rem;
`

export const SQuantity = styled.span`
  color: ${COLORS.primary};
  font-weight: 600;
`

export const SText = styled.span`
  color: ${COLORS.darkGray};
  font-weight: 500;
`
