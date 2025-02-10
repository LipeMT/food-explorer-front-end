import { Container, Logout, Search, Order, Menu } from "./styles";

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi";
import { PiNewspaperClippingBold } from "react-icons/pi";

import { Input } from "../Input";
import { Logo } from "../Logo";
import { Button } from "../Button";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function Header({ onOpenMenu, onChange }) {

    const { user: {role}, signOut } = useAuth()

    const navigate = useNavigate()

    async function handleSignOut(){
        await signOut()
        navigate('/')
    }

    function handleClickNew(){
        navigate('/new')
    }

    return (
        <Container>
            <Menu onClick={onOpenMenu}><FiMenu /></Menu>
            <Logo role={role}></Logo>
            <Search>
                <Input type="text" icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={onChange} />
            </Search>
            {
                role === "admin" &&
                <Button id="new-dish" title="Novo Prato" onClick={handleClickNew} />
            }
            {
                role === "admin"
                    ?
                    <div/>
                    :
                    <Order>
                        <PiNewspaperClippingBold />
                        <div className="badge">0</div>
                        <span>Pedidos (0)</span>
                    </Order>
            }
            <Logout onClick={handleSignOut} >
                <FiLogOut />
            </Logout>
        </Container>
    );
}
