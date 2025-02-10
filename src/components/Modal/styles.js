import styled from "styled-components";

export const Container = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;


    
    .modal-content {
        background: ${({ theme }) => theme.COLORS.DARK_500};
        padding: 20px;
        border-radius: 8px;
        position: relative;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        > h2{
            font-weight: 400;
            font-family: "Poppins";

        }
    }

    .modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: none;
        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        > svg{
            font-size: 2.4rem;

        }
    }
`