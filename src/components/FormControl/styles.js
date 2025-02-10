import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;

    label{
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`