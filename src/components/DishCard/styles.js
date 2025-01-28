import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    padding: 2.4rem;

    min-height: 29.2rem;
    min-width: fit-content;

    border-radius: .8rem;

    background: ${({ theme }) => theme.COLORS.DARK_200};
     
    > img {
        width: 8.8rem;
        height: 8.8rem;
    }
`

export const FavoriteButton = styled.button`
    border: none;
    background: none;
    
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    > svg {
        font-size: 2.4rem;
        color: white;
    }
`

export const Price = styled.span`
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

    font-family: "Roboto", serif;
    font-size: 1.6rem;
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    color: white;
    margin-bottom: .2rem;
    
    > button {
        svg {
            font-size: 2.4rem;
            color: white;
        }
    }
`