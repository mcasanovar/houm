import styled from 'styled-components'
// colors
import { COLORS } from '../../../styles'

export const SContainer = styled.div`
  width: 100%;
  height: 110px;
  background-color: ${COLORS.white};
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 8px 2px #CBCBCB;
  gap: 12px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 0px;
  padding-bottom: 0px;

  @media (max-width: 560px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 10px;
    display: none;
  }
`
