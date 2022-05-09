import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const SContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const STitle = styled.span`
  color: ${COLORS.darkGray};
  font-weight: 600;
  margin-bottom: 10px;
`
