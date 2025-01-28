import { Container } from "./styles";

import { ButtonText } from "../ButtonText";

import { FiPlus, FiMinus } from "react-icons/fi";

export function Quantity() {
    return (
        <Container>
            <ButtonText title={<FiPlus />} />
            <span>01</span>
            <ButtonText title={<FiMinus />} />
        </Container>
    )
}