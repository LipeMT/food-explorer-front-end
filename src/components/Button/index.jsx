import { Children } from "react";
import { Container } from "./styles";

export function Button({title, icon: Icon, children, ...rest}){
    return (
        <Container {...rest}>
            {Icon && <Icon size={20} />}
            {title}
            {children}
        </Container>
    )
}