import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
    
    padding: 2.8rem 3rem;

    width: 100%;
    height: 7.7rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    position: absolute;
    bottom: 0;

    z-index: 10;

    > div{
        width: fit-content;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        svg{
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    @media (min-width: 768px){
        padding: 2.4rem 12rem;
    }
`

export const Logo = styled.div`
    
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;

    > svg {
        font-size: 2.4rem;
    }

    h2{
        width: fit-content;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        white-space: nowrap;

    }
`