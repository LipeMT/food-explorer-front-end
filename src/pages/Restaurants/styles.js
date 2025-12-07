import styled from "styled-components";

export const Main = styled.main`
  padding: 1.6rem 2.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  scrollbar-width: none;

  width: 100%;

  @media (min-width: 768px) {
    padding: 1.6rem 6.4rem;
    gap: 3.2rem;
  }
`
export const RestaurantsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.6rem;
`