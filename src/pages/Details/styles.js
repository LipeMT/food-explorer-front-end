import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    > header {
        height: 114px;
        flex-shrink: 0;
    }

    > main {
        flex-grow: 1;
        overflow-y: auto;
    }

    > footer {
        height: 77px;
        flex-shrink: 0;
    }
`;

export const Main = styled.main`
    
    overflow-y: auto;
    scrollbar-width: none;
    padding: 1.6rem 5.6rem 5.4rem;
    display: flex;
    flex-direction: column;

    gap: 1.6rem;
    height: 100%;

    > button{
        display: flex;
        align-items: center;
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: "Poppins", serif;
        font-size: 1.8rem;

        margin-top: 2rem;

        gap: 1rem;

        width: fit-content;

        svg {
            font-size: 2.4rem;
        }
    }

    @media(min-width: 1024px) {
        gap: 4.2rem;
        align-items: center;
        padding-inline: 12.2rem;

        > button{
            align-self: baseline;
            font-size: 2.4rem;
            font-weight: bold;
        }
        
    }
`
export const Description = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    > img {
        width: 26.4rem;
        height: 26.4rem;
        border-radius: 50%;
        object-fit: cover;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4.8rem;

        > img {
            width: 39rem;
            height: 39rem;
        }
    }
`
export const DishDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: "Poppins", sans-serif;
    color: white;

    > section {

        width: 100%;

        h2{
            font-size: 2.8rem;
            font-weight: 500;
            text-align: center;
            margin-bottom: 2.4rem;
        }
    
        p{
            text-align: center;
            font-size: 1.6rem;
            margin-bottom: 2.4rem;
        }
    }

    @media (min-width: 1024px){

        align-items: baseline;

        >section {

            width: 100%;

            h2{
                font-size: 4rem;
                text-align: left;
            }

            p{
                text-align: left;
                font-size: 2.4rem;
            }
        }
    }

`

export const Order = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    margin-top: 4.8rem;


    @media (min-width: 1024px){
        justify-content: left;
        font-size: 2.4rem;
        gap: 3.2rem;

    }
`


export const Ingredients = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    @media (min-width: 1024px){
        justify-content: left;
    }
    
`
export const Ingredient = styled.span`
    padding: .4rem .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: white;
    font-family: "Poppins", sans-serif;
    border-radius: .5rem;
`

