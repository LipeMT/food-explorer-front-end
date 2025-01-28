import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
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
    padding: 1.6rem 5.6rem 10rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: 100%;

    > button{
        display: flex;
        align-items: center;
        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: "Poppins", serif;
        font-size: 1.8rem;

        margin-top: 2rem;

        gap: 1rem;

        width: fit-content;

        svg {
            font-size: 2.4rem;
        }
    }

    > .order{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        margin-top: 4.8rem;
    }
`
export const DishDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: "Poppins", sans-serif;
    color: white;

    > img {
        max-width: 100%;
        width: 26.4rem;
        height: auto;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1.6rem;
    }

    > h2{
        font-size: 2.8rem;
        font-weight: 500;
        text-align: center;
        margin-bottom: 2.4rem;
    }

    > p{
        text-align: center;
        font-size: 1.6rem;
        margin-bottom: 2.4rem;
    }
`
export const Ingredients = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
`
export const Ingredient = styled.span`
    padding: .4rem .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: white;
    font-family: "Poppins", sans-serif;
    border-radius: .5rem;
`

