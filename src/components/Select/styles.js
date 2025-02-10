import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_900};

    border-radius: .8rem;

    position: relative;

    > select {
        appearance: none;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;

        font-size: 1.6rem;

        color: ${({theme}) => theme.COLORS.LIGHT_400};

        padding: 1.4rem;
    }

    > select option{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background-color: ${({theme}) => theme.COLORS.DARK_900};
    }

    > svg {
        position: absolute;;
        right: 1.6rem;
    }
`