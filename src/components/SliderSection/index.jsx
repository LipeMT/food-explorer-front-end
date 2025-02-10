
import { Container } from "./styles";

import { Slider } from "../Slider";
import { ButtonText } from "../ButtonText";

import { PiPencilSimpleDuotone } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";

export function SliderSection({ title, children, onClick }) {

    const { user: { role } } = useAuth()

    return (
        <Container>
            <header>
                <h3>{title}</h3>
                {
                    role === "admin" &&
                    <ButtonText icon={<PiPencilSimpleDuotone />} onClick={onClick} />
                }
            </header>
            <Slider key={title}>{children}</Slider>
        </Container>
    )
}