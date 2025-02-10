import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;

    text-decoration: none;
    width: 100%;

    text-align: center;

    font-family: "Poppins", sans-serif;

    > svg{
        font-size: 2.4rem;
    }
`