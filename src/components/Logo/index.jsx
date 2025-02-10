import { Container } from "./styles";
import logo from "../../assets/logo.svg";

export function Logo({ type, role }) {
    return (
        <Container>
            <img src={logo} alt="Logo explorer" />
            <div className="text">
                {
                    type === "h1" ? <h1>food explorer</h1> : <h2>food explorer</h2>
                }
                {
                    role === "admin" && <span>admin</span>
                }
            </div>
        </Container>
    )
}