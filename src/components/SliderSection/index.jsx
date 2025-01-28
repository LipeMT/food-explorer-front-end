import { Container } from "./styles";

import { Slider } from "../Slider";


export function SliderSection({title, children}){
    return (
        <Container>
            <h3>{title}</h3>
            <Slider>
                {children}
            </Slider>
        </Container>
    )
}