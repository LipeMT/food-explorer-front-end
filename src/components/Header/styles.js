import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.8rem 10%;
    gap: 3.2rem;
    height: 10.4rem;

    position: absolute;
    width: 100%;
    top: 0;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    
    > img{
        width: 3rem;
        height: 3rem;
    }

    > h2{
        font-family: "Roboto", serif;
        font-size: 2.4rem;
    }

    @media (max-width: 768px){
        padding: 5.6rem 2.8rem 2.4rem;
        height: 11.4rem;

        > div:nth-child(3){
            display: none;
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.4rem;
    }

    @media (max-width: 768px){
        display: none;
    }
`

export const Order = styled.button`
    border: none;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    position: relative;

    >svg{
        font-size: 2.4rem;
    }

    font-family: "Poppins", sans-serif;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

    width: 100%;
    
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