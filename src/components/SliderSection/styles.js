import styled from "styled-components";

export const Container = styled.section`
    margin-top: 2.4rem;
    margin-left: 2.4rem;

    header {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        margin-bottom: 2.4rem;

        h3 {
            font-size: 1.8rem;
            font-weight: 500;
            font-family: "Poppins", sans-serif;
        }
        a{
            width: fit-content;
            height: fit-content;

            margin-bottom: -.8rem;

            svg{
                font-size: 2.4rem;
            }
        }
    }

    @media (min-width: 1024px) {
        padding-inline: 12.3rem;
        margin-bottom: 2.4rem;

        > header{
            h3{
                font-size: 3.2rem;
                font-weight: 500;
                font-family: "Poppins", sans-serif;
            }
            a{
                width: fit-content;
                svg{
                    font-size: 3.2rem;
                }
            }
        }

    }
`