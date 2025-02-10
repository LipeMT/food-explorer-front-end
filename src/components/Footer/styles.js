import styled from "styled-components";

export const Container = styled.footer`
    
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    padding-inline: 2.8rem;
    gap: 2rem;

    > p {
        text-align: center;
        overflow: hidden;
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