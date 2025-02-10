import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    gap: 8rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        padding: 7rem;

        max-width: 1500px;
        margin: auto;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 45rem;
    gap: 3.2rem;

    > h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        display: none
    }

    > .input-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .8rem;

        label{
            text-align: left;
        }
    } 

    > a{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        text-decoration: none;
        font-size: 1.6rem;    
        font-family: "Poppins", sans-serif;
    }

    @media (min-width: 768px) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        
        padding: 6.4rem;
        border-radius: 1.6rem;
        min-width: fit-content;

        > h1{
            display: block;
        }
    }

` 