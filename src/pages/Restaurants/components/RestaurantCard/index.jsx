import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./styles";

export function RestaurantCard({ name, cnpj, ...rest }) {
    return (
        <Container {...rest}>
            <FiShoppingCart />
            <div className="content">
                <p><span>Nome: </span>{name}</p>
                <p><span>CNPJ: </span>{cnpj}</p>
            </div>
        </Container>
    )
}