import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 1.6rem;
  width: 100%;

  border: none;
  background: none;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border-radius: .4rem;

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};  
  }

  > .content {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    
    gap: .8rem;

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: 768px) {
    gap: 3.2rem;
    padding: 3.2rem;

    > svg {
      font-size: 3.2rem
    }

    > .content {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      
      gap: 1rem;

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

  }
`