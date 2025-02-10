import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: auto;  

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

    border-radius: 1rem;
    padding-right: 1.6rem;

    > button{
        border: none;
        background: none;
    }

    .button-add{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {    
        width: 10rem;
        max-width: fit-content;
        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        background: transparent;

        padding: .8rem 1.6rem;

        outline: none;

        border: none;
        font-size: 1.6rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`