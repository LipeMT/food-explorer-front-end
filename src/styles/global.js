import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body, input, button, textarea {
        font-family: "Roboto", serif; 
        font-size: 1.4rem;
    }

    button, a{
        cursor: pointer;
    }

    @media (min-width: 768px) {
        body, input, button, textarea {
            font-size: 1.6rem;
        }
    }
`