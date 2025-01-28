import { Container, Header, Main } from "./styles";

import { FiX, FiSearch } from "react-icons/fi";

import { Input } from "../Input";
import { Footer } from "../Footer";
import { SideSection } from "../SideSection";
import { ButtonText } from "../ButtonText";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <button onClick={onCloseMenu}><FiX /></button>
                <span>Menu</span>
            </Header>
            <Main>
                <Input
                    placeholder="Busque por pratos ou ingredientes"
                    icon={FiSearch}
                />
                <SideSection title="Sair" />
            </Main>
            <Footer />

        </Container>
    )
}