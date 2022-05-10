import styled from 'styled-components'
import { COLORS } from '../../styles'

export const SMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

export const SContainerCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  padding: 20px;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1290px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 875px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`

export const SContainerFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  grid-row-gap: 20px;
  /* padding: 0px 40px; */
  /* grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px; */

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1290px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 875px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`

export const SFiltersTitle = styled.h2`
  color: ${COLORS.darkGray};
  text-align: center;
`

export const SContainerPagination = styled.div`
  display: flex;
  justify-content: center;
`

export const SContainerNotFound = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const SContainerFilterButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 875px) {
    width: 350px;
  }
`

export const SContainerSearchBar = styled.div`
  width: auto;

  @media (min-width: 560px) {
    display: none;
  }
`
