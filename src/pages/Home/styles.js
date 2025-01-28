import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    height: 100vh;
`

export const Main = styled.main`
    grid-area: content;
    overflow-y: auto;
    scrollbar-width: none;
    padding-bottom: 6rem;
`

export const Intro = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;

    min-height: 12rem;

    border-radius: .3rem;

    background: linear-gradient(90deg, #091E26 0%, #00131C 100%);

    > img{
        overflow-x: visible;
        overflow-y: visible;
        margin-left: -2rem;
        margin-top: -3rem;
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        gap: .3rem;

        h2{
            font-size: 1.8rem;
            font-family: "Poppins", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
        p {
            font-size: 1.2rem;
            font-family: "Poppins", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

`