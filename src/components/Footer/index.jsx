import { Container, Logo } from "./styles";

import logoGray from "../../assets/logo-gray.svg"

export function Footer(){
    return (
        <Container>
            <Logo>
                <img src={logoGray} alt="Logo cinza" />
                <h2>food explorer</h2>
            </Logo>
            <p>&copy; 2025 - Todos os direitos reservados</p>
        </Container>
    )
}