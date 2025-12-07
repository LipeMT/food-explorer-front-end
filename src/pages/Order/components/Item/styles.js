import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
  padding: 1.6rem;

  border-radius: 0.4rem;

  img {
    width: 7.2rem;
  }
`

export const ItemDetails = styled.div`
  font-family: 'Poppins' sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  flex-direction: column;
  align-items: baseline;

  > span {
    font-size: 2rem;
    line-height: 3.2rem;
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }
`