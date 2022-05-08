import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const SContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${COLORS.darkGray};

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
    cursor: pointer;
  }

  .next {
    border-bottom: 1px;
    border-top: 1px;
    border-right: 1px;
    border-left: 0px;
    border-color: ${COLORS.primary};
    border-style: solid;
    padding: 10px;
    cursor: pointer;
  }

  .page {
    border: 1px;
    border-color: ${COLORS.primary};
    border-style: solid;
    padding: 10px;
    cursor: pointer;
  }

  .active {
    background-color: ${COLORS.primary};
    color: ${COLORS.background};
  }
`
