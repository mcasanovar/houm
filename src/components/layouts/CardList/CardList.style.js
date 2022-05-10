import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainerImage = styled.div`
  width: 100%;
  height: 40%;
`

export const SContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 25px;
  width: auto;
  height: 4rem;
  box-shadow: 0px 0px 12px 1px #cbcbcb;
`

export const STitle = styled.h4`
  color: ${COLORS.black};
  font-weight: 600;
`

export const SContainerAdditionalInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 25px;
  gap: 2.4rem;
`

export const SContainerDescription = styled.div`
  display: -webkit-box;
  overflow: hidden;
  padding: 5px 25px 0px 25px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const SSpan = styled.span`
  color: ${COLORS.darkGray};
  font-weight: 400;
`

export const SContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px 0px 5px 0px;
`

export const SContainerCuisines = styled.div`
  padding: 25px;
`
