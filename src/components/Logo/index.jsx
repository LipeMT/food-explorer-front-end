import { Container } from "./styles";
import logo from "../../assets/logo.svg";

export function Logo({ type }) {
    return (
        <Container>
            <img src={logo} alt="Logo explorer" />
            {
                type === "h1" ? <h1>food explorer</h1> : <h2>food explorer</h2>
            }
        </Container>
    )
}