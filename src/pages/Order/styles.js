import styled from "styled-components";

export const Main = styled.main`
    overflow-y: auto;
    scrollbar-width: none;

    padding-bottom: 3.4rem;

    display: flex;
    justify-content: space-between;

    padding: 5.6rem 3.5rem;
    max-width: 100%;

  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .mobile-only {
      display: none;
    }
  }
`
export const OrderDetails = styled.div`
  font-family: 'Poppins' sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 100%;
  max-width: 450px;

  > h1 {
    margin-bottom: 3.2rem;
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.5rem;
  }

  > p {
    padding-block: 1.6rem;
    font-size: 2rem;
  }

  > button {
    margin-left: auto;
    width: 21rem;
  }

  .total-value {
    padding-block: 3rem;
  }
`
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Payment = styled.div`
  font-family: 'Poppins' sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  h1 {
    margin-bottom: 3.2rem;
    font-size: 3.2rem;
  }

  .method {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHt_600};
    width: 55rem;
    height: 45rem;

    border-radius: .8rem;

    div:nth-child(1){
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .payment-data{
      > img {
        width: 27rem;
        height: 27rem;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }
`