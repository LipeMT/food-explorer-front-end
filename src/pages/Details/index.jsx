import { Container, DishDetails, Ingredients, Ingredient, Main } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { PiNewspaperClippingBold } from "react-icons/pi";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Quantity } from "../../components/Quantity"
import { Button } from "../../components/Button"
import { SideMenu } from "../../components/SideMenu"

import { useState } from "react";

export function Details() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />

            <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
            <Main>
                <button><FiArrowLeft /> voltar</button>
                <DishDetails>
                    <img src="https://github.com/lipemt.png" alt="" />
                    <h2>Salada Ravanello</h2>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                </DishDetails>
                <Ingredients>
                    <Ingredient>alface</Ingredient>
                    <Ingredient>cebola</Ingredient>
                    <Ingredient>pão naan</Ingredient>
                    <Ingredient>pepino</Ingredient>
                    <Ingredient>rabanete</Ingredient>
                    <Ingredient>tomate</Ingredient>
                </Ingredients>
                <div className="order">
                    <Quantity />
                    <Button icon={PiNewspaperClippingBold} title="pedir . R$ 25,00" />
                </div>

            </Main>
            <Footer />
        </Container>
    )
}