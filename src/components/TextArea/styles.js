import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;

    border-radius: .8rem;
    padding: 1.4rem;

    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    outline: none;
    resize: none;

    height: 17.2rem;
     
`