import { Container, FavoriteButton, Price } from "./styles";

import { FiHeart } from "react-icons/fi";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Quantity } from "../Quantity";

export function DishCard({ title, image, price }) {
    return (
        <Container>
            <FavoriteButton><FiHeart /></FavoriteButton>
            <img src={image} alt={title} />
            <ButtonText title={title} />
            <Price>R$ {price.toFixed(2)}</Price>
            <Quantity />
            <Button title="incluir" />
        </Container>
    )

}