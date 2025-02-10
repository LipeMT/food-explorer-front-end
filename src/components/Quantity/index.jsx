import { Container } from "./styles";

import { ButtonText } from "../ButtonText";

import { FiPlus, FiMinus } from "react-icons/fi";

import { useState } from "react";

export function Quantity() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <Container>
            <ButtonText
                title={<FiMinus />}
                onClick={decrement}
            />
            <span>{count}</span>
            <ButtonText
                title={<FiPlus />}
                onClick={increment}
            />

        </Container>
    )
}