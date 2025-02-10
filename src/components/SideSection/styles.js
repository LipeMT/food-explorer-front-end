import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    margin-bottom: 1rem;

    button {
        font-size: 2.4rem;
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        padding: 1rem;
    }
`