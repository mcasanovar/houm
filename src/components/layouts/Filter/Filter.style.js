import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 875px) {
    width: 360px;
  }
`

export const STitle = styled.h4`
  color: ${COLORS.darkGray};
  padding-left: 10px;
  margin-top: 0px;
  margin-bottom: 5px;
`

export const SExampleText = styled.span`
  color: ${COLORS.gray};
  padding-left: 10px;
  padding-top: 7px;
`
