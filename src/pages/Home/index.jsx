import { Container, Main, Intro } from "./styles";

import ingredients from "../../assets/ingredients.png"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { SliderSection } from "../../components/SliderSection";
import { DishCard } from '../../components/DishCard';

import dish1 from "../../assets/dish1.png"

import { useState } from "react";

export function Home() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
            <Main>
                <Intro>
                    <img src={ingredients} alt="Ingredientes" />
                    <section>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </Intro>
                <SliderSection title="Refeições">
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                </SliderSection>
                <SliderSection title="Pratos principais">
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                </SliderSection>
                <SliderSection title="Pratos principais">
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                    <DishCard image={dish1} title="Salada Ravanello >" price={49.50}></DishCard>
                </SliderSection>
            </Main>
            <Footer />
        </Container>
    )
}