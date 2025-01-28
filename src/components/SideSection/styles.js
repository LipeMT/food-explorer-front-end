import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

    h2 {
        font-size: 2.4rem;
        font-family: "Poppins", sans-serif;
        font-weight: 400;

        padding: 1rem;

    }
`