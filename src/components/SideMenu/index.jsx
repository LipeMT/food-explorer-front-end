import { Container, Header, Main } from "./styles";

import { FiX, FiSearch } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Footer } from "../Footer";
import { SideSection } from "../SideSection";
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu, onChange }) {

    const { user: { role }, signOut } = useAuth()

    const navigate = useNavigate()

    async function handleSignOut(){
        await signOut()
        navigate('/')
    }
    
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
                    onChange={onChange}
                />
                {
                    role === "admin" &&
                    <SideSection title="Novo prato" url="/new" />
                }
                <SideSection title="Sair" onClick={handleSignOut} />
            </Main>
            <Footer />
        </Container>
    )
}