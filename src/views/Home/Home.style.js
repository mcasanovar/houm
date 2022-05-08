import styled from 'styled-components'

export const SMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

export const SContainerCardList = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  width: 100%;
  padding: 3rem; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  padding: 20px;

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
