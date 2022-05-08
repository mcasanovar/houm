import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const SContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.darkGray};
  
  ul {
    padding-inline-start: 0px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    width: 400px;
  }

  .pagination {
    color: ${COLORS.primary};
    list-style: none;
    display: flex;
  }

  .break-me {
    border-style: solid;
    border-color: ${COLORS.primary};
    border: 1px;
    padding: 10px;
    cursor: pointer;
  }

  .previous {
    border-bottom: 1px;
    border-top: 1px;
    border-right: 0px;
    border-left: 1px;
    border-style: solid;
    border-color: ${COLORS.primary};
    padding: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    cursor: pointer;

    @media (max-width: 560px) {
      border-right: 1px;
      border-style: solid;
    }
  }

  .next {
    border-bottom: 1px;
    border-top: 1px;
    border-right: 1px;
    border-left: 0px;
    border-color: ${COLORS.primary};
    border-style: solid;
    padding: 10px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;

    @media (max-width: 560px) {
      border-left: 1px;
      border-style: solid;
    }
  }

  .page {
    border: 1px;
    border-color: ${COLORS.primary};
    border-style: solid;
    padding: 10px;
    cursor: pointer;

    @media (max-width: 560px) {
      display: none;
    }
  }

  .active {
    background-color: ${COLORS.primary};
    color: ${COLORS.background};
  }
`
