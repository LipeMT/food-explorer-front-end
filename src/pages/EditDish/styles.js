import styled from "styled-components";

export const Main = styled.main`
    overflow-y: auto;
    scrollbar-width: none;
    padding: 1rem 3.2rem;

    > button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: "Poppins", serif;
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        gap: 1rem;
        width: fit-content;

        svg {
            font-size: 2.4rem;
        }
    }


`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    max-width: 45rem;
    gap: 2.4rem;
    padding-bottom: 3.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        text-align: left;
        width: 100%;

        grid-column: span 12;
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 3.2rem;
        row-gap: 1.6rem;
        width: 100%;

        #save {
            width: 100%;
        }
        #delete {
            width: 100%;
        }
    }
    
    .category {
        display: flex;
        gap: 1.6rem;

        overflow: hidden;
        > button{
            border: none;
            background: ${({ theme }) => theme.COLORS.DARK_800};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            border-radius: .8rem;

            padding: 1.2rem;
            display: flex;
            gap: .8rem;

            white-space: nowrap;

            > svg{
                font-size: 2.4rem;
            }
        }
    }


    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        grid-template-rows: auto, repeat;
        max-width: 100%;
        gap: 3.2rem;

        .actions {
            grid-column: span 12;
            justify-content: flex-end;
        }

        .col-3{grid-column: span 3;}
        .col-4{grid-column: span 4;}
        .col-5{grid-column: span 5;}
        .col-9{grid-column: span 9;}
        .col-12{grid-column: span 12;}

        #save{
            width: fit-content;
        }
        #delete{
            width: fit-content;
        }
    }

`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    width: 100%;
    padding: .4rem .8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
    border-radius: .8rem;

    @media (min-width: 768px) {
        grid-column: span 2;
    }
`;