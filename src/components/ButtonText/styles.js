import styled from "styled-components";

export const Container = styled.button`
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;

    width: 100%;

    text-align: center;

    font-family: "Poppins", sans-serif;

    > svg{
        font-size: 2.4rem;
    }
`