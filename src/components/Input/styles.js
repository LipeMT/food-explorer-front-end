import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: .8rem;

    > input{
        width: 100%;


        padding: 1.2rem 1.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;
        
        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
        outline: none;
    }
    
    > svg{
        margin-left: 1.6rem;
    }

`
