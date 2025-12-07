import styled from "styled-components";

export const Container = styled.aside`
    display: grid;
    grid-template-rows: auto 1fr 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    
    &[data-menu-is-open="true"]{
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
    }
`

export const Header = styled.header`
    padding: 5.6rem 2.8rem 2.4rem;

    font-size: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    > button{
        background: none;
        border: none;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        svg {
            font-size: 2.4rem;
        }
    }

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.6rem; 

    width: 100%;
    height: 11.4rem; 
`

export const Main = styled.main`
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    padding: 3.6rem 2.8rem;

    width: 100%;

    div:nth-child(1){
        margin-bottom: 3.2rem;
    }

    @media (min-width: 768px){
        display: none;
    }

`