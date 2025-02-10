import { Container, FavoriteButton, Price, Description, EditButton } from "./styles";

import { FiHeart } from "react-icons/fi";
import { PiPencilSimpleDuotone } from "react-icons/pi";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Quantity } from "../Quantity";

import { useAuth } from "../../hooks/auth";

export function DishCard({ title, image, price, id, description, editButtonAction }) {

    const { user } = useAuth()

    return (
        <Container>
            {
                user.role === "admin" ?
                    <EditButton onClick={editButtonAction}><PiPencilSimpleDuotone /></EditButton>
                    :
                    <FavoriteButton><FiHeart /></FavoriteButton>
            }
            <img src={image} alt={title} />
            <ButtonText title={title} to={`/details/${id}`} />
            <Description>{description}</Description>
            <Price>R$ {price}</Price>
            {
                user.role !== "admin" &&
                <div className="actions">
                    <Quantity />
                    <Button title="incluir" />
                </div>
            }
        </Container>
    )

}