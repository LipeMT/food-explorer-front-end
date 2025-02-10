import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    height: 29.2rem;

    padding: 2.4rem;

    min-height: 29.2rem;

    border-radius: .8rem;

    background: ${({ theme }) => theme.COLORS.DARK_200};

    transition: all .5s ease-in-out;

    a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
     
    > img {
        width: 8.8rem;
        height: fit-content;

        border-radius: 50%;
        object-fit: cover;
    }

    @media (min-width: 768px){

        gap: 1.5rem;

        > a{
            font-size: 2.4rem;
            font-weight: bold;
        }

        > img {
            width: 17.6rem;
            height: 17.6rem;
            margin-bottom: 2rem;
        }

        height: fit-content;
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
    @media (min-width: 768px){
        > svg {
        font-size: 3.2rem;
        }
    }
`

export const EditButton = styled.button`
    border: none;
    background: none;
    
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    > svg {
        font-size: 2.4rem;
        color: white;
    }

    @media (min-width: 768px){
        > svg {
        font-size: 3.2rem;
        }
    }
`

export const Price = styled.span`
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

    font-family: "Roboto", serif;
    font-size: 1.6rem;

    @media (min-width: 768px){
        font-size: 3.2rem;
    }
    
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

export const Description = styled.p`
    opacity: 0;
    transition: opacity .5s ease;
    height: 0;
    overflow: hidden;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    text-align: center;

    font-family: "Roboto", serif;
    @media (min-width: 768px){
        opacity: 1;
        width: auto;
        height: auto;
    }
`