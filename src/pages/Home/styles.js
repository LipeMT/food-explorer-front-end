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

    padding-bottom: 3.4rem;
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

        transition: all .5s ease-in-out;
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

    @media (min-width: 768px){

        >img {
            margin-bottom: -.7rem;
            width: 40rem;
            height: auto;
            object-fit: cover;
        }

        > section {
            gap: .6rem;

            h2{
                font-size: 3.2rem;
                font-weight: 500;
            }
            p {
                font-size: 1.8rem;
            }
        }
    }

    @media (min-width: 1024px){
        margin: 16.4rem 12.4rem 6.2rem;
        height: 26rem;
        
        > img {
            margin-left: -9.4rem;
            margin-top: -9.4rem;
            width: 60rem;
        }
        > section {
            gap: .8rem;

            h2{
                font-size: 4rem;
                font-weight: 500;
            }
            p {
                font-size: 1.6rem;
            }
        }
    }

`