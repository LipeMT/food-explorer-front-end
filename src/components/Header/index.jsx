import { Container, Logout, Order, Menu } from "./styles";

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi";
import { PiNewspaperClippingBold } from "react-icons/pi";

import { Input } from "../Input";
import { Logo } from "../Logo";

export function Header({ onOpenMenu}) {

    return (
        <Container>
            <Menu onClick={onOpenMenu}><FiMenu /></Menu>
            <Logo></Logo>
            <Input type="text" icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                <Order>
                    <PiNewspaperClippingBold /> 
                    <div className="badge">0</div> 
                    <span>Pedidos (0)</span>
                </Order>
            <Logout>
                <FiLogOut />
            </Logout>
        </Container>
    );
}
