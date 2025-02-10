import styled from "styled-components";

export const Container = styled.button`
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    > svg{
        margin-right: 1rem;
    }

    font-family: "Poppins", sans-serif;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.TINTS_TOMATO_100};
    
    padding: 1.2rem 3.2rem;

    &.tomato-400{
        background-color: ${({theme}) => theme.COLORS.TINTS_TOMATO_400};
    }

    &.gray{
        background-color: ${({theme}) => theme.COLORS.DARK_900};
    }
`