import styled from "styled-components";

export const Container = styled.header`
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    padding-inline: 2.8rem;
    
    img{
        width: 2.5rem;
        height: 2.5rem;
    }

    > h2{
        font-family: "Roboto", serif;
        font-size: 2.4rem;
    }

    #new-dish{
        display: none;
    }

    @media (min-width: 768px) {
        gap: 3.2rem;

        #new-dish {
            display: block;
            max-width: fit-content;
        }
    }

    @media (min-width: 850px) {
        padding-inline: 10rem;
    }
`

export const Search = styled.div`

    width: 100%;
    display: none;
    
    @media(min-width: 768px){
        display: block;
    }
`

export const Menu = styled.button` 
    border: none;
    background: none;
    padding: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;

    @media (min-width: 768px){
        display: none;
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.4rem;
    }

    display: none;

    @media (min-width: 768px){
        display: block;
    }
`

export const Order = styled.button`
    border: none;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    white-space: nowrap;

    position: relative;

    >svg{
        font-size: 2.4rem;
    }

    font-family: "Poppins", sans-serif;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    
    padding: 1.2rem 3.2rem;
   
    .badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

        font-size: 12px;
        width: 2rem;
        height: 2rem;
        
        border-radius: 50%;
        font-weight: bold;
        display: none;
    }  
   
    @media (max-width: 850px){

        padding: 1rem;
        background: none;
        justify-content: center;
        width: fit-content;

        .badge{
            display: block;
        }

        span {
            display: none;
        }
    }
`

