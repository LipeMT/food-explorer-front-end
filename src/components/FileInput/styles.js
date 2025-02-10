import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    position: relative;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    
    border-radius: .8rem;
    
    overflow: hidden;
    white-space: nowrap;
    
    > input{
        opacity: 0;
    }
    
    > label{
        font-family: "Roboto", serif;
        font-size: 1.6rem;
        position: absolute;

        display: flex;
        align-items: center;
        gap: 1rem;


        svg{
            font-size: 2rem;
        }
    }
`