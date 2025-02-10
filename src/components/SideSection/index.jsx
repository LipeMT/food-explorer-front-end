import { Container } from "./styles";

import { Link } from "react-router-dom";

export function SideSection({ title, onClick, url }) {

    return (
        <Container>
            <Link to={url}>
                <button
                    type="button"
                    onClick={onClick}
                >
                    {title}
                </button>
            </Link>
        </Container>
    )
}