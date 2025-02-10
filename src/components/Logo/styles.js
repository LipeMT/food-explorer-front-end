import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;

    .text{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        span{
            width: 100%;
            text-align: right;
            
            color: ${({theme})=> theme.COLORS.TINTS_CAKE_200};
            font-size: 1.2rem;
            font-family: "Roboto", sans-serif;
        }
    }

    @media (min-width: 768px) {
        .text{
            flex-direction: column;
            gap: 0;
        }
    }
`